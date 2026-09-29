"use client";
import { useRef } from "react";
import gsap from "gsap";
import { Calendar, MapPin, ArrowRight, Play } from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { scramble } from "@/lib/fx";
import { A } from "@/lib/assets";
const EY = "CYBER INTELLIGENCE COMMUNITY LUCKNOW PRESENTS";
export default function Hero() {
  const r = useRef<HTMLElement>(null);
  useGsap(r, () => {
    const q = (s: string) => r.current!.querySelector(s) as HTMLElement;
    const P = q(".pts");
    for (let i = 0; i < 28; i++) {
      const d = document.createElement("i");
      d.className = "absolute h-1 w-1 rounded-full bg-red";
      d.style.left = Math.random() * 100 + "%";
      d.style.top = Math.random() * 100 + "%";
      P.appendChild(d);
      gsap.to(d, {
        x: gsap.utils.random(-60, 60),
        y: gsap.utils.random(-80, 80),
        opacity: gsap.utils.random(0.1, 0.7),
        duration: gsap.utils.random(3, 7),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    gsap.to(".ring", {
      rotate: (i) => (i % 2 ? -360 : 360),
      duration: (i) => 60 - i * 15,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
    const intro = gsap.timeline({
      paused: true,
      defaults: { ease: "expo.out" },
    });
    intro
      .from(".lw-sky", { opacity: 0, duration: 1.4 }, 0)
      .from(".lw-far", { scale: 1.4, y: 100, opacity: 0, duration: 2.4 }, 0.1)
      .from(".lw-near", { scale: 1.8, opacity: 0, duration: 2.4 }, 0)
      .from(".rw", { scale: 0.4, opacity: 0, duration: 2 }, 0.3)
      .from(".br", { scale: 0, opacity: 0, stagger: 0.08, duration: 0.8 }, 0.6)
      .fromTo(
        ".scan",
        { y: 0, opacity: 1 },
        {
          y: () => innerHeight,
          opacity: 0,
          duration: 1.8,
          ease: "power2.inOut",
        },
        0.4,
      )
      .add(() => {
        scramble(q(".scr"), EY, 1.4);
      }, 0.6)
      .from(
        ".h-line",
        { yPercent: 120, rotate: 4, stagger: 0.16, duration: 1.3 },
        0.8,
      )
      .from(".h-fade", { opacity: 0, y: 30, duration: 1 }, 1.3)
      .from(
        ".pop",
        {
          scale: 0.5,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(2)",
          duration: 0.7,
        },
        1.5,
      )
      .from(".sc", { opacity: 0, duration: 1 }, 2);
    const go = () => {
      intro.play();
    };

    // Immediately trigger intro on mount
    go();

    if ((window as any).__ddReady) go();
    else addEventListener("dd:ready", go, { once: true });
    const F = (
      [
        [".l-sky", 4],
        [".l-far", 14],
        [".l-near", 30],
      ] as [string, number][]
    ).map(([s, k]) => ({
      k,
      x: gsap.quickTo(q(s), "x", { duration: 1 }),
      y: gsap.quickTo(q(s), "y", { duration: 1 }),
    }));
    const mv = (e: MouseEvent) => {
      const px = e.clientX / innerWidth - 0.5,
        py = e.clientY / innerHeight - 0.5;
      F.forEach((f) => {
        f.x(-px * f.k);
        f.y(-py * f.k * 0.6);
      });
    };
    addEventListener("mousemove", mv);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: r.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 1,
        },
      })
      .to(".l-sky", { scale: 1.12 }, 0)
      .to(".l-far", { scale: 1.7 }, 0)
      .to(".l-near", { scale: 2.6, opacity: 0, ease: "power2.in" }, 0)
      .to(".rw", { scale: 1.8, opacity: 0 }, 0)
      .to(".h-title", { scale: 0.86, y: 10 }, 0.3)
      .to(
        ".h-dates",
        { scale: 1.45, y: 30, duration: 0.6, ease: "power1.inOut" },
        0,
      )
      .to(".h-sub", { opacity: 0, y: -40, filter: "blur(10px)" }, 0.6)
      .fromTo(
        ".h-push",
        { opacity: 0, y: 50, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)" },
        0.9,
      );
    return () => {
      removeEventListener("mousemove", mv);
      removeEventListener("dd:ready", go);
    };
  });
  const D: [typeof Calendar, string, string][] = [
    [Calendar, "5 Oct 2026", "Online CTF · Day 1"],
    [Calendar, "10 Oct 2026", "Offline Summit · Day 2"],
    [MapPin, "Lucknow", "Uttar Pradesh"],
  ];
  return (
    <section
      id="top"
      ref={r}
      className="relative h-screen overflow-hidden bg-mist"
    >
      {/* eslint-disable @next/next/no-img-element */}
      <div className="lw-sky absolute inset-0">
        <img className="l-sky h-full w-full object-cover" src={A.sky} alt="" />
      </div>
      <div className="lw-far absolute inset-0">
        <img
          className="l-far h-full w-full object-cover"
          src={A.far}
          alt="Bara Imambara and Lucknow skyline"
        />
      </div>
      <div
        className="rw absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      >
        <svg
          viewBox="-100 -100 200 200"
          className="h-[min(120vw,900px)] w-[min(120vw,900px)] fill-none stroke-red/40"
        >
          <g className="ring">
            <circle r="96" strokeDasharray="2 5" />
            <circle r="84" strokeWidth=".4" />
          </g>
          <g className="ring">
            <circle r="70" strokeDasharray="14 6" strokeWidth=".6" />
          </g>
          <g className="ring">
            <circle r="56" strokeDasharray="1 3" />
            <path
              d="M0-100V-90M100 0H90M0 100V90M-100 0H-90"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
      <div className="pts pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="scan absolute left-0 top-0 h-0.5 w-full bg-red shadow-[0_0_20px_#d81f27]"
        aria-hidden
      />
      {[
        "left-6 top-24 border-l border-t",
        "right-6 top-24 border-r border-t",
        "bottom-6 left-6 border-b border-l",
        "bottom-6 right-6 border-b border-r",
      ].map((c) => (
        <i
          key={c}
          aria-hidden
          className={`br absolute h-12 w-12 border-red ${c}`}
        />
      ))}
      <div className="lw-near absolute inset-0">
        <picture>
          <source media="(max-width: 1023px)" srcSet={A.herotab} />
          <img
            className="l-near h-full w-full object-cover"
            src={A.near}
            alt=""
          />
        </picture>
      </div>
      <div className="h-copy absolute inset-x-0 top-48 md:top-64 mx-auto max-w-4xl px-5 text-center">
        <p className="scr eyebrow !text-ink" aria-label={EY}>
          {EY}
        </p>
        <h1 className="h-title mt-3 text-[clamp(3rem,10vw,7.5rem)] uppercase tracking-tight">
          <span className="mask">
            <span className="h-line block">Digital</span>
          </span>
          <span className="mask">
            <span className="h-line block text-red">Domination 2.0</span>
          </span>
        </h1>
        <div className="relative">
          <div className="h-sub">
            <p className="h-fade mt-4 text-xs font-semibold tracking-[.2em]">
              A TWO-DAY CYBERSECURITY EXPERIENCE BUILT AROUND{" "}
              <span className="text-red">
                LEARNING, COMPETITION &amp; CONNECTION.
              </span>
            </p>
            <div className="h-dates mt-6 flex origin-top flex-wrap justify-center gap-3 text-left text-xs">
              {D.map(([I, a, b]) => (
                <div
                  key={b}
                  className="pop hud flex items-center gap-3 px-4 py-2"
                >
                  <I size={20} className="text-red" />
                  <div>
                    <b className="block font-head text-sm">{a}</b>
                    {b}
                  </div>
                </div>
              ))}
            </div>
            {/* TEMPORARILY HIDDEN: Register Now + Know More buttons
            <div className="mt-6 flex justify-center gap-3">
              <a id="register" href="#" className="pop btn bg-red text-white">
                Register Now <ArrowRight size={16} />
              </a>
              <a
                href="#about"
                className="pop btn border border-black/20 bg-white/70"
              >
                <Play size={14} /> Know More
              </a>
            </div>
            */}
          </div>
          <div className="h-push absolute inset-x-0 top-6 opacity-0">
            <h2 className="text-4xl uppercase md:text-6xl">
              Step inside <span className="text-red">the arch.</span>
            </h2>
            <p className="mt-3">Scroll to explore the experience.</p>
          </div>
        </div>
      </div>
      <p className="sc absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] tracking-[.4em]">
        SCROLL
        <span className="mx-auto mt-2 block h-8 w-px animate-pulse bg-red" />
      </p>
    </section>
  );
}
