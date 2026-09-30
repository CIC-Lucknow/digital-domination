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
// Desktop spans (cols = rows) on a 12-col grid; first tile is full-width on mobile.
const SP = [
  "col-span-2 md:col-span-8 md:row-span-8",
  "md:col-span-4 md:row-span-4",
  "md:col-span-4 md:row-span-4",
  "md:col-span-3 md:row-span-3",
  "md:col-span-3 md:row-span-3",
  "md:col-span-3 md:row-span-3",
  "md:col-span-3 md:row-span-3",
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
        <div className="mt-10 [container-type:inline-size]">
          {/* 4:3 cells: a tile spanning n columns and n rows stays exactly 4:3 */}
          <div className="grid grid-cols-2 md:auto-rows-[6.25cqw] md:grid-cols-12">
            {SHOTS.map((s, i) => (
              <div key={s.src} className={`p-1.5 ${SP[i]}`}>
                <button
                  onClick={() => setO(i)}
                  aria-label={`Open photo: ${i}`}
                  className="sh group relative block aspect-[4/3] w-full overflow-hidden border-4 border-white/70 bg-white/40 text-left backdrop-blur md:aspect-auto md:h-full"
                >
                  <img
                    src={src(i)}
                    onError={() => fail(i)}
                    alt={String(i)}
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>
            ))}
          </div>
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
