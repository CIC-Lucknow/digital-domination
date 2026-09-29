"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, Menu, X } from "lucide-react";
import { useGsap } from "@/lib/useGsap";
import { A } from "@/lib/assets";
import { NAV } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function Header() {
  const r = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useGsap(r, () => {
    // entrance only; the navbar stays fixed and visible while scrolling
    gsap.set(r.current, { yPercent: -100, opacity: 0 });
    const go = () => {
      gsap.to(r.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.1,
        ease: "expo.out",
      });
    };
    if ((window as any).__ddReady) go();
    else addEventListener("dd:ready", go, { once: true });
    return () => removeEventListener("dd:ready", go);
  });

  return (
    <header
      ref={r}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/40 backdrop-blur-2xl"
      style={{ fontSize: "2rem" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="#top">
          <img
            src={A.logo}
            alt="Cyber Intelligence Community"
            className="h-20"
          />
        </a>
        <nav aria-label="Primary" className="hidden gap-6 text-sm lg:flex" style={{ fontSize: "1.2rem", fontWeight: "500" }}>
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
        <div className="flex items-center gap-4">
          <a
            href={SITE.register}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-red text-white hidden md:inline-flex"
          >
            Register Now <ArrowRight size={16} />
          </a>
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-full transition-all duration-300 ease-in-out ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          } bg-white/90 backdrop-blur-xl border-b border-white/50 flex flex-col p-5 gap-4 lg:hidden`}
      >
        {NAV.map(([l, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
            className="text-sm font-medium py-2 border-b border-black/5"
          >
            {l}
          </a>
        ))}
        <a
          href={SITE.register}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="btn bg-red text-white text-center mt-2"
        >
          Register Now <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
