"use client";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { NAV } from "@/lib/content";
export default function Header() {
  const r = useRef<HTMLElement>(null);
  useGsap(r, () => {
    ScrollTrigger.create({
      start: 80,
      onUpdate: (s) => {
        gsap.to(r.current, {
          yPercent: s.direction === 1 ? -110 : 0,
          duration: 0.4,
        });
      },
    });
  });
  return (
    <header
      ref={r}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/40 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="#top">
          <img
            src={A.logo}
            alt="Cyber Intelligence Community"
            className="h-10"
          />
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm lg:flex">
          {NAV.map(([l, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative py-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-red after:transition hover:after:scale-x-100"
            >
              {l}
            </a>
          ))}
        </nav>
        <a href="#register" className="btn bg-red text-white">
          Register Now <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
