"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { A } from "@/lib/assets";
const L = [
  "adaab, lucknow",
  "initialising signal",
  "handshake · lucknow.node",
  "decrypting heritage.pack",
  "access granted",
];
export default function Preloader() {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const done = () => {
      (window as any).__ddReady = true;
      window.dispatchEvent(new Event("dd:ready"));
    };
    const c = r.current!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      c.remove();
      done();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const o = { v: 0 },
      n = c.querySelector(".pl-n") as HTMLElement;
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        c.style.display = "none";
      },
    });
    tl.from(".pl-logo", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(2)",
    })
      .to(
        o,
        {
          v: 100,
          duration: 2.6,
          ease: "power2.inOut",
          onUpdate: () => {
            n.textContent = String(Math.round(o.v)).padStart(3, "0");
          },
        },
        0,
      )
      .fromTo(
        ".pl-bar",
        { scaleX: 0 },
        { scaleX: 1, duration: 2.6, ease: "power2.inOut" },
        0,
      )
      .fromTo(
        ".pl-l",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, stagger: 0.6, duration: 0.3 },
        0.2,
      )
      .to(".pl-in", { opacity: 0, y: -30, duration: 0.4 }, "+=.15")
      .add(done, "<.15")
      .fromTo(
        ".pl-flash",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.3, ease: "power3.out" },
        "<",
      )
      .to(
        ".pl-top",
        { yPercent: -100, duration: 1, ease: "expo.inOut" },
        ">-.05",
      )
      .to(".pl-bot", { yPercent: 100, duration: 1, ease: "expo.inOut" }, "<")
      .to(".pl-flash", { opacity: 0, duration: 0.3 }, "<");
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div
      ref={r}
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[200] text-white"
    >
      <div className="pl-top absolute inset-x-0 top-0 h-1/2 bg-ink" />
      <div className="pl-bot absolute inset-x-0 bottom-0 h-1/2 bg-ink" />
      <div className="pl-flash absolute inset-x-0 top-1/2 z-20 h-0.5 bg-red shadow-[0_0_24px_#d81f27]" />
      <div className="pl-in absolute inset-0 z-10 flex flex-col items-center justify-center gap-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={A.logo2} alt="" className="pl-logo h-20" />
        <div className="font-head text-[clamp(5rem,20vw,11rem)] leading-none">
          <span className="pl-n">000</span>
          <span className="text-red">%</span>
        </div>
        <div className="h-px w-64 bg-white/15">
          <div className="pl-bar h-full origin-left bg-red" />
        </div>
        <ul className="w-64 font-mono text-[11px] text-white/60">
          {L.map((l) => (
            <li key={l} className="pl-l">
              &gt; {l}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
