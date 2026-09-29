"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null),
    bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const st = gsap.to(bar.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
    if (!matchMedia("(pointer:fine)").matches) return;
    const x = gsap.quickTo(ring.current, "x", {
        duration: 0.35,
        ease: "power3",
      }),
      y = gsap.quickTo(ring.current, "y", { duration: 0.35, ease: "power3" });
    let last: HTMLElement | null = null;
    const mv = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
      const t = e.target as HTMLElement;
      gsap.to(ring.current, {
        scale: t.closest("a,button") ? 2 : 1,
        opacity: 1,
        duration: 0.25,
      });
      const h = t.closest(".hud") as HTMLElement | null;
      if (last && last !== h)
        gsap.to(last, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: "power3",
        });
      last = h;
      if (h) {
        const b = h.getBoundingClientRect(),
          px = (e.clientX - b.left) / b.width,
          py = (e.clientY - b.top) / b.height;
        h.style.setProperty("--mx", px * 100 + "%");
        h.style.setProperty("--my", py * 100 + "%");
        gsap.to(h, {
          rotateY: (px - 0.5) * 9,
          rotateX: (0.5 - py) * 9,
          transformPerspective: 900,
          duration: 0.4,
          overwrite: "auto",
        });
      }
    };
    addEventListener("pointermove", mv);
    return () => {
      removeEventListener("pointermove", mv);
      st.kill();
    };
  }, []);
  return (
    <>
      <div
        ref={bar}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left scale-x-0 bg-red"
      />
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] -ml-4 -mt-4 hidden h-8 w-8 rounded-full border border-red opacity-0 md:block"
      />
    </>
  );
}
