"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGsap } from "@/lib/useGsap";
import { type } from "@/lib/fx";
import { A } from "@/lib/assets";
import { Sec, Head } from "@/components/ui";

export function Marquee() {
  const r = useRef<HTMLElement>(null);

  const W = ["Analyze", "Research", "Exploit", "Defend", "Grow"];

  useGsap(r, () => {
    const elements = Array.from(
      r.current!.querySelectorAll<HTMLElement>(".mq"),
    );

    const tw = elements.map((e, i) =>
      gsap.fromTo(
        e,
        {
          xPercent: i ? -50 : 0,
        },
        {
          xPercent: i ? 0 : -50,
          repeat: -1,
          duration: 36,
          ease: "none",
        },
      ),
    );

    gsap.from(r.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: r.current, start: "top 95%", once: true },
    });

    let k: gsap.core.Timeline | undefined;

    const trigger = ScrollTrigger.create({
      onUpdate: (s) => {
        const v = Math.min(Math.abs(s.getVelocity()) / 200, 10);

        k?.kill();

        k = gsap
          .timeline()
          .to(tw, {
            timeScale: 1 + v,
            duration: 0.15,
          })
          .to(tw, {
            timeScale: 1,
            duration: 1.2,
          });
      },
    });

    return () => {
      k?.kill();
      trigger.kill();
      tw.forEach((t) => t.kill());
    };
  });

  const row = (o: boolean) => (
    <div
      className={`mq flex w-max items-center whitespace-nowrap font-head text-6xl uppercase md:text-8xl ${
        o
          ? "text-transparent [-webkit-text-stroke:1px_#111315]"
          : ""
      }`}
    >
      {Array.from({ length: 4 })
        .flatMap(() => W)
        .map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10"
          >
            {w}

            <span className="text-4xl text-red">✦</span>
          </span>
        ))}
    </div>
  );

  return (
    <section
      ref={r}
      aria-hidden
      className="overflow-hidden border-y border-white/60 bg-white/50 py-5 backdrop-blur-xl"
    >
      {row(false)}
      {row(true)}
    </section>
  );
}

const EV: [string, string, number][] = [
  [
    "Online CTF",
    "5 Oct · 12:00 PM IST",
    new Date("2026-10-05T12:00:00+05:30").getTime(),
  ],
  [
    "Offline Summit",
    "10 Oct · 10:00 AM IST",
    new Date("2026-10-10T10:00:00+05:30").getTime(),
  ],
];

function Clock({ t }: { t: number }) {
  const [n, s] = useState<number | null>(null);

  useEffect(() => {
    const f = () => {
      s(Math.max(0, t - Date.now()));
    };

    f();

    const i = setInterval(f, 1000);

    return () => clearInterval(i);
  }, [t]);

  const q = Math.floor((n ?? 0) / 1000);

  const U: [string, number][] = [
    ["Days", Math.floor(q / 86400)],
    ["Hours", Math.floor((q % 86400) / 3600)],
    ["Min", Math.floor((q % 3600) / 60)],
    ["Sec", q % 60],
  ];

  return (
    <div className="mt-6 grid grid-cols-4 gap-2 md:gap-3">
      {U.map(([l, v]) => (
        <div
          key={l}
          className="rounded-sm bg-white/10 py-4 text-center backdrop-blur"
        >
          <span
            key={v}
            className="flip block font-head text-4xl md:text-6xl"
          >
            {String(v).padStart(2, "0")}
          </span>

          <span className="text-[10px] tracking-[.3em] text-white/60">
            {l.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Countdown() {
  const r = useRef<HTMLDivElement>(null);
  useGsap(r, () => {
    gsap.from(".cd", {
      y: 50,
      opacity: 0,
      scale: 0.96,
      force3D: true,
      stagger: 0.12,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: r.current, start: "top 75%", toggleActions: "play none none reverse" },
    });
  });
  return (
    <Sec id="countdown" bg={A.bgCount} dark>
      <div ref={r} className="mx-auto max-w-6xl px-5 py-14 text-white md:py-16">
        <Head dark n="03" e="Countdown">
          Two dates. One mission.
        </Head>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {EV.map(([a, b, t]) => (
            <div key={a} className="cd">
            <div className="hud glass-dark h-full p-8">
              <p className="eyebrow">{a}</p>

              <h3 className="mt-2 text-3xl text-white">
                {b}
              </h3>

              <Clock t={t} />
            </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>
  );
}

const TL = [
  "$ nmap -sV ctf.lucknow.in",
  "443/tcp open  https  flag hidden",
  "$ cat /heritage/flag.txt",
  "flag{tradition_inspires_intelligence}",
  "> FLAG ACCEPTED  +500 pts",
];

export function Terminal() {
  const r = useRef<HTMLDivElement>(null);

  useGsap(r, () => {
    const elements = Array.from(
      r.current!.querySelectorAll<HTMLElement>("p"),
    );

    elements.forEach((p) => {
      p.textContent = "";
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: r.current,
        start: "top 88%",
        once: true,
      },
    });

    TL.forEach((t, i) => {
      tl.add(
        type(elements[i], t, t.length * 0.03),
        i ? ">.25" : 0,
      );
    });

    return () => {
      tl.kill();
    };
  });

  return (
    <div
      ref={r}
      aria-label="Sample CTF terminal"
      className="mt-4 bg-ink/95 p-4 font-mono text-[11px] leading-6 text-emerald-300 shadow-xl backdrop-blur"
    >
      <div className="mb-2 flex gap-1.5">
        <i className="h-2 w-2 rounded-full bg-red" />
        <i className="h-2 w-2 rounded-full bg-white/30" />
        <i className="h-2 w-2 rounded-full bg-white/30" />
      </div>

      {TL.map((t) => (
        <p
          key={t}
          className="min-h-6 break-all"
        >
          {t}
        </p>
      ))}
    </div>
  );
}