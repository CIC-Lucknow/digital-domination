"use client";
import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function useGsap(
  ref: RefObject<HTMLElement>,
  fn: () => void | (() => void),
) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia(ref.current!);
    mm.add("(prefers-reduced-motion: no-preference)", fn);
    return () => mm.revert();
  }, []);
}
