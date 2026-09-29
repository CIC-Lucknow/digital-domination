"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { split } from "@/lib/fx";
export default function SmoothScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .forEach((e) =>
          gsap.fromTo(
            e,
            { opacity: 0, y: 50, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "expo.out",
              clearProps: "filter,transform",
              scrollTrigger: { trigger: e, start: "top 92%", once: true },
            },
          ),
        );
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((e) => {
        const c = split(e);
        if (c.length)
          gsap.fromTo(
            c,
            { yPercent: 110, rotateX: -80, opacity: 0 },
            {
              yPercent: 0,
              rotateX: 0,
              opacity: 1,
              stagger: 0.025,
              duration: 1,
              ease: "expo.out",
              transformOrigin: "0 100%",
              scrollTrigger: { trigger: e, start: "top 90%", once: true },
            },
          );
      });
    });
    const l = new Lenis();
    l.on("scroll", ScrollTrigger.update);
    const t = (s: number) => l.raf(s * 1000);
    gsap.ticker.add(t);
    gsap.ticker.lagSmoothing(0);
    const r = () => ScrollTrigger.refresh();
    addEventListener("load", r);
    document.fonts?.ready.then(r);
    const to = setTimeout(r, 600);
    return () => {
      clearTimeout(to);
      removeEventListener("load", r);
      gsap.ticker.remove(t);
      l.destroy();
      ctx.revert();
    };
  }, []);
  return null;
}
