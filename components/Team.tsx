"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Instagram, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { Sec, Head, Arch } from "@/components/ui";
import { ORGANISERS, VOLUNTEERS, type Person } from "@/lib/team";
/* eslint-disable @next/next/no-img-element */
const ini = (n: string) =>
  n
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
const pad = (i: number) => String(i + 1).padStart(2, "0");
const CORNERS = [
  "left-2 top-2 border-l border-t",
  "right-2 top-2 border-r border-t",
  "bottom-2 left-2 border-b border-l",
  "bottom-2 right-2 border-b border-r",
];
function Social({ p }: { p: Person }) {
  const S = [
    [Linkedin, p.linkedin, "LinkedIn"],
    [Instagram, p.instagram, "Instagram"],
    [Globe, p.web, "Website"],
  ] as const;
  return (
    <div className="flex gap-2">
      {S.map(
        ([I, h, l]) =>
          h && (
            <a
              key={l}
              href={h}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} on ${l}`}
              className="grid h-9 w-9 place-items-center border border-black/15 bg-white/60 transition hover:border-red hover:bg-red hover:text-white"
            >
              <I size={16} />
            </a>
          ),
      )}
    </div>
  );
}
function Avatar({ p }: { p: Pick<Person, "name" | "img"> }) {
  return p.img ? (
    <img
      src={p.img}
      alt={p.name}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink to-[#2a0b0d] font-head text-white">
      {ini(p.name)}
    </div>
  );
}
// repeat a list until one set is wider than any viewport
const fill = (l: Person[], min = 10) =>
  l.length
    ? Array.from({ length: Math.ceil(min / l.length) }, () => l).flat()
    : l;
function Card({
  p,
  i,
  kind,
  hidden,
}: {
  p: Person;
  i: number;
  kind: string;
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="ct-item absolute left-1/2 top-9 w-52 will-change-transform sm:w-60"
    >
      <article className="hud group flex h-full flex-col">
        <div className="ct-ph relative aspect-[4/5] overflow-hidden bg-mist">
          <div className="h-full w-full text-7xl transition duration-700 group-hover:scale-105">
            <Avatar p={p} />
          </div>
          {CORNERS.map((c) => (
            <i
              key={c}
              aria-hidden
              className={`absolute h-4 w-4 border-red/80 transition-all duration-300 group-hover:h-6 group-hover:w-6 group-hover:border-red ${c}`}
            />
          ))}
          <span className="absolute left-4 top-4 bg-ink/80 px-2 py-0.5 font-mono text-[10px] tracking-[.2em] text-white backdrop-blur">
            ID—{pad(i)}
          </span>
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-red px-2 py-0.5 font-head text-[11px] uppercase tracking-[.2em] text-white">
            <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
            {kind}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="text-2xl">{p.name}</h3>
          </div>
          <Social p={p} />
        </div>
        <i
          aria-hidden
          className="h-1 origin-left scale-x-0 bg-red transition-transform duration-500 group-hover:scale-x-100"
        />
      </article>
    </div>
  );
}
function Carousel({
  items,
  kind,
  head,
}: {
  items: Person[];
  kind: string;
  head: React.ReactNode;
}) {
  const w = useRef<HTMLDivElement>(null);
  const set = fill(items, 8);
  useGsap(w, () => {
    const el = w.current!;
    const view = el.querySelector<HTMLElement>(".ct-view")!;
    const cards = Array.from(el.querySelectorAll<HTMLElement>(".ct-item"));
    const N = cards.length;
    const step = 360 / N; // degrees between neighbouring cards
    const s = { r: 0 }; // ring rotation in degrees
    const m = { v: 1 }; // speed multiplier: eases to 0 while a card is hovered
    let busy = false;
    let R = 400;
    const measure = () => {
      const cw = cards[0].offsetWidth;
      R = (cw * 1.3) / (2 * Math.tan(Math.PI / N));
      view.style.height = cards[0].offsetHeight + 72 + "px";
      render();
    };
    // every card sits on a circle; front card is largest, back ones fade out
    const render = () => {
      for (let k = 0; k < N; k++) {
        const a = (((k * step + s.r) % 360) + 540) % 360 - 180; // -180..180, 0 = front
        const rad = (a * Math.PI) / 180;
        const c = Math.cos(rad);
        const x = Math.sin(rad) * R;
        const z = (c - 1) * R; // front = 0, back = -2R
        const sc = c >= 0 ? 0.74 + 0.4 * c * c * c : 0.74;
        const op = c >= 0 ? 0.3 + 0.7 * c * c : Math.max(0.08, 0.3 + 0.22 * c);
        const e = cards[k].style;
        e.transform = `translate3d(${x.toFixed(1)}px,0,${z.toFixed(1)}px) translate(-50%,0) rotateY(${(a * 0.7).toFixed(1)}deg) scale(${sc.toFixed(3)})`;
        e.opacity = op.toFixed(3);
        e.zIndex = String(Math.round((c + 1) * 100));
        e.pointerEvents = c > 0.2 ? "auto" : "none";
      }
    };
    measure();
    addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    // scrolling down spins the ring faster; it eases back to normal speed
    let boost = 0,
      want = 0;
    const sc = ScrollTrigger.create({
      onUpdate: (self) => {
        want = Math.min(Math.max(self.getVelocity(), 0) / 250, 10);
      },
    });
    const tick = (_t: number, dt: number) => {
      want *= 0.92;
      boost += (want - boost) * 0.12;
      if (!busy) s.r -= (step / 2200) * dt * m.v * (1 + boost); // one card every ~2.2s
      render();
    };
    gsap.ticker.add(tick);
    const go = (dir: 1 | -1) => {
      busy = true;
      gsap.to(s, {
        // land exactly on a card position: always a whole-card shift
        r: Math.round((s.r - dir * step) / step) * step,
        duration: 0.9,
        ease: "expo.out",
        overwrite: true,
        onComplete: () => {
          busy = false;
        },
      });
    };
    const nx = () => go(1),
      pv = () => go(-1);
    const stop = () => gsap.to(m, { v: 0, duration: 0.4 });
    const run = () => gsap.to(m, { v: 1, duration: 0.4 });
    const next = el.querySelector(".ct-next")!,
      prev = el.querySelector(".ct-prev")!;
    next.addEventListener("click", nx);
    prev.addEventListener("click", pv);
    cards.forEach((c) => {
      c.addEventListener("pointerenter", stop);
      c.addEventListener("pointerleave", run);
    });
    const trig = { trigger: el, start: "top 88%", once: true };
    gsap.from(view, { opacity: 0, y: 60, duration: 1, ease: "expo.out", scrollTrigger: trig });
    gsap.from(el.querySelectorAll(".ct-ph"), {
      clipPath: "inset(0 0 100% 0)",
      filter: "blur(10px)",
      stagger: 0.06,
      duration: 1.1,
      ease: "expo.out",
      delay: 0.15,
      clearProps: "clipPath,filter",
      scrollTrigger: trig,
    });
    return () => {
      sc.kill();
      gsap.ticker.remove(tick);
      removeEventListener("resize", measure);
      next.removeEventListener("click", nx);
      prev.removeEventListener("click", pv);
      cards.forEach((c) => {
        c.removeEventListener("pointerenter", stop);
        c.removeEventListener("pointerleave", run);
      });
    };
  });
  const B =
    "grid h-10 w-10 place-items-center border border-red/40 bg-white/60 text-ink backdrop-blur transition [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] hover:border-red hover:bg-red hover:text-white md:h-12 md:w-12";
  return (
    <div ref={w}>
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-4 px-5">
        <div className="min-w-0 flex-1">{head}</div>
        <div className="flex shrink-0 gap-2 pb-1">
          <button className={`ct-prev ${B}`} aria-label={`Previous ${kind.toLowerCase()}`}>
            <ChevronLeft size={22} />
          </button>
          <button className={`ct-next ${B}`} aria-label={`Next ${kind.toLowerCase()}`}>
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
      <div
        className="ct-view relative mx-auto mt-6 max-w-6xl overflow-hidden"
        style={{ perspective: "1100px", height: 440 }}
      >
        {set.map((p, i) => (
          <Card
            key={i}
            p={p}
            i={i % items.length}
            kind={kind}
            hidden={i >= items.length}
          />
        ))}
      </div>
    </div>
  );
}
export function Team() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    const q = (s: string) => r.current!.querySelectorAll<HTMLElement>(s);
    gsap.from(".vol-h > *", {
      opacity: 0,
      y: 30,
      stagger: 0.12,
      duration: 0.9,
      ease: "expo.out",
      scrollTrigger: { trigger: ".vol-h", start: "top 88%", once: true },
    });
    const n = q(".vol-n")[0];
    const c = { v: 0 };
    gsap.to(c, {
      v: VOLUNTEERS.length,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        n.textContent = String(Math.round(c.v)).padStart(2, "0");
      },
      scrollTrigger: { trigger: ".vol-h", start: "top 88%", once: true },
    });
  });
  return (
    <Sec id="team" bg={A.about}>
      <div ref={r}>
        <div className="pt-14 md:pt-16">
          <Carousel
            items={ORGANISERS}
            kind="Organiser"
            head={
              <Head n="11" e="The team">
                The people behind the domination
              </Head>
            }
          />
        </div>
        <div className="relative isolate mt-8 border-t border-red/20 pt-14 md:mt-12 md:pt-20">
          <Arch />
          <div className="pb-14 md:pb-16">
            <Carousel
              items={VOLUNTEERS}
              kind="Volunteer"
              head={
                <div className="vol-h">
                  <p className="eyebrow">Adaab · Our volunteers</p>
                  <h3 className="mt-3 text-3xl uppercase md:text-6xl">
                    The faces behind{" "}
                    <span className="text-red">the experience</span>
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-black/65 md:text-base">
                    With true Lucknowi hospitality, our volunteers welcome,
                    guide and look after everyone who walks through the arch.
                  </p>
                  <div className="mt-4 flex items-center">
                    <i className="h-px w-8 bg-red/50 md:w-12" />
                    <b className="vol-n font-head text-4xl leading-none text-red md:text-5xl">
                      00
                    </b>
                    <span className="text-xs font-semibold uppercase tracking-[.3em]">
                      Volunteers
                    </span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </Sec>
  );
}
