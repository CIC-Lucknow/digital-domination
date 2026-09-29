"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { X } from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { Sec, Head } from "@/components/ui";
import { DD1, SHOTS } from "@/lib/legacy";
/* eslint-disable @next/next/no-img-element */
const EXT = ["png", "webp", "jpg", "jpeg", "avif"];
const SP = [
  "md:col-span-2 md:row-span-2",
  "",
  "",
  "md:col-span-2",
  "md:col-span-2",
  "",
  "",
];
export default function Legacy() {
  const r = useRef<HTMLDivElement>(null);
  const [o, setO] = useState<number | null>(null);
  const [ei, setEi] = useState<number[]>(() => SHOTS.map(() => 0));
  const src = (i: number) =>
    SHOTS[i].src.replace(/\.png$/, "." + EXT[Math.min(ei[i], EXT.length - 1)]);
  const fail = (i: number) =>
    setEi((a) => a.map((v, j) => (j === i && v < EXT.length - 1 ? v + 1 : v)));
  useGsap(r, () => {
    gsap.utils.toArray<HTMLElement>(".sh").forEach((e) => {
      gsap.fromTo(
        e,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: { trigger: e, start: "top 92%", once: true },
        },
      );
      gsap.fromTo(
        e.querySelector("img"),
        { yPercent: -8, scale: 1.2 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: e, scrub: true },
        },
      );
    });
    gsap.from(".ds", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".ds", start: "top 92%", once: true },
    });
  });
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setO(null);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, []);
  return (
    <Sec id="legacy" bg={A.bgLegacy}>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <Head n="10" e="Last edition">
          {DD1.title}
        </Head>
        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <p className="text-lg text-black/70" data-reveal>
            {DD1.blurb}
          </p>
          <ul className="space-y-2" data-reveal>
            {DD1.points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="h-2 w-2 rotate-45 bg-red" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {DD1.stats.map(([v, l]) => (
            <div key={l} className="ds hud p-6">
              <b className="block font-head text-4xl text-red">{v}</b>
              <span className="text-sm text-black/60">{l}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid auto-rows-[13rem] grid-cols-2 gap-4 md:grid-cols-4">
          {SHOTS.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setO(i)}
              aria-label={`Open photo: ${s.cap}`}
              className={`sh group relative overflow-hidden border-4 border-white/70 bg-white/40 text-left backdrop-blur ${SP[i]}`}
            >
              <img
                src={src(i)}
                onError={() => fail(i)}
                alt={s.cap}
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-white/60 p-3 font-head text-lg backdrop-blur-xl transition group-hover:translate-y-0">
                {s.cap}
              </span>
            </button>
          ))}
        </div>
      </div>
      {o !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setO(null)}
          className="fixed inset-0 z-[120] grid place-items-center bg-ink/60 p-6 backdrop-blur-xl"
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center bg-white/70"
          >
            <X />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl border-4 border-white/80 bg-white/60 backdrop-blur"
          >
            <img
              src={src(o)}
              onError={() => fail(o)}
              alt={SHOTS[o].cap}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="p-3 font-head text-xl">
              {SHOTS[o].cap} · {DD1.title}
            </figcaption>
          </figure>
        </div>
      )}
    </Sec>
  );
}
