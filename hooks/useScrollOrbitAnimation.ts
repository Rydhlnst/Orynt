"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type OrbitScene = {
  id: string;
  trigger: string;
  x: number | string;
  y: number | string;
  scale: number;
  rotate: number;
  opacity: number;
  blur?: number;
};

type UseScrollOrbitAnimationInput = {
  targetRef: RefObject<HTMLElement | null>;
  scenes: OrbitScene[];
  scrub?: boolean | number;
};

export function useScrollOrbitAnimation({ targetRef, scenes, scrub = 0.9 }: UseScrollOrbitAnimationInput) {
  useEffect(() => {
    if (!targetRef.current || scenes.length === 0) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const target = targetRef.current;
      if (!target) {
        return;
      }

      const firstScene = scenes[0];
      gsap.set(target, {
        x: firstScene.x,
        y: firstScene.y,
        scale: firstScene.scale,
        rotate: firstScene.rotate,
        opacity: firstScene.opacity,
        filter: `blur(${firstScene.blur ?? 0}px)`,
      });

      scenes.forEach((scene, index) => {
        if (index === 0) {
          return;
        }

        ScrollTrigger.create({
          id: `orbit-${scene.id}`,
          trigger: scene.trigger,
          start: "top 78%",
          end: "bottom 32%",
          scrub,
          animation: gsap.to(target, {
            x: scene.x,
            y: scene.y,
            scale: scene.scale,
            rotate: scene.rotate,
            opacity: scene.opacity,
            filter: `blur(${scene.blur ?? 0}px)`,
            ease: "power2.out",
          }),
        });
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.id?.toString().startsWith("orbit-")) {
          trigger.kill();
        }
      });
    };
  }, [scenes, scrub, targetRef]);
}
