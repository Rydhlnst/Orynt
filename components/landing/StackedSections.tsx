"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StackedSections({ children }: PropsWithChildren) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-stack-panel]");
      if (panels.length < 2) return;

      panels.forEach((panel, index) => {
        gsap.set(panel, {
          position: "relative",
          zIndex: index + 1,
          transformOrigin: "50% 0%",
          willChange: "transform",
        });
      });

      panels.slice(1).forEach((panel, index) => {
        const previousPanel = panels[index];

        gsap.set(panel, {
          yPercent: 16,
          scale: 0.985,
          clipPath: "inset(12% 0% 0% 0% round 20px 20px 0px 0px)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: "top 92%",
            end: "top 42%",
            scrub: 1,
          },
        });

        tl.to(panel, {
          yPercent: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 0px 0px 0px 0px)",
          ease: "none",
        }).to(
          previousPanel,
          {
            scale: 0.988,
            yPercent: -3,
            filter: "brightness(0.84)",
            ease: "none",
          },
          0
        );
      });
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
