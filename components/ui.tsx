"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGsap } from "@/lib/useGsap";
/* eslint-disable @next/next/no-img-element */
export const Arch = () => (
  <svg
    aria-hidden
    className="pointer-events-none absolute inset-x-0 top-0 z-0 h-6 w-full text-red/25"
  >
    <defs>
      <pattern id="arch" width="48" height="24" patternUnits="userSpaceOnUse">
        <path
          d="M4 24V16Q4 4 24 0Q44 4 44 16V24"
          fill="none"
          stroke="currentColor"
        />
      </pattern>
    </defs>
    <rect width="100%" height="24" fill="url(#arch)" />
  </svg>
);
export function Sec({
  id,
  bg,
  dark,
  children,
  className = "",
}: {
  id?: string;
  bg?: string;
  dark?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  const r = useRef<HTMLElement>(null);
  useGsap(r, () => {
    if (bg)
      gsap.fromTo(
        r.current!.querySelector(".bgi"),
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: r.current, scrub: true },
        },
      );
  });
  return (
    <section
      id={id}
      ref={r}
      className={`relative isolate overflow-clip ${className}`}
    >
      {bg && (
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <img
            className={`bgi h-[114%] w-full object-cover ${dark ? "opacity-50" : "opacity-30 saturate-[.6]"}`}
            src={bg}
            alt=""
            loading="lazy"
          />
          <div
            className={`absolute inset-0 ${dark ? "bg-ink/70" : "bg-gradient-to-b from-mist/90 via-mist/40 to-mist/90"}`}
          />
        </div>
      )}
      <Arch />
      {children}
    </section>
  );
}
export const Head = ({
  n,
  e,
  children,
  dark,
}: {
  n: string;
  e: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <div className={dark ? "text-white" : ""}>
    <p className="eyebrow" data-reveal>
      {n} / {e}
    </p>
    <h2 data-split className="mt-3 max-w-4xl text-4xl uppercase md:text-6xl">
      {children}
    </h2>
  </div>
);
