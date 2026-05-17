"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type UseGsapRevealOptions = {
  rootRef: RefObject<HTMLElement | null>;
  selector: string;
  y?: number;
  stagger?: number;
  delay?: number;
};

export function useGsapReveal({
  rootRef,
  selector,
  y = 16,
  stagger = 0.08,
  delay = 0,
}: UseGsapRevealOptions) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          stagger,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [delay, rootRef, selector, stagger, y]);
}
