"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Send, X } from "lucide-react";
import Blocks from "@/components/uilayouts/blocks";

import { MinimalButton } from "@/components/shared/MinimalButton";
import { oryntContent } from "@/data/orynt-content";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const HERO_ACTIVE_DIVS = {
  0: new Set([2, 4, 6]),
  1: new Set([0, 8]),
  2: new Set([1, 3, 5]),
  4: new Set([0, 5, 8]),
  5: new Set([2, 4]),
  7: new Set([2, 6, 9]),
  8: new Set([0, 4]),
  9: new Set([5]),
  10: new Set([3, 6]),
  11: new Set([1, 5]),
  12: new Set([7]),
  13: new Set([2, 4]),
  14: new Set([5]),
  15: new Set([1, 6]),
};

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-title]",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        "[data-hero-subtext]",
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        "[data-hero-line]",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 1.2,
          delay: 0.25,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        "[data-hero-bottom]",
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          delay: 0.45,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        "[data-hero-brand-bg]",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.4,
          delay: 0.35,
          ease: "power3.out",
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-[calc(100svh-5rem)] overflow-hidden bg-background md:h-[calc(100svh-6rem)]"
    >
      <div className="absolute inset-0 z-0 bg-background" />

      <div
        ref={blocksRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] h-full opacity-100 [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]"
      >
        <Blocks
          activeDivsClass="bg-foreground/[0.035]"
          divClass="border-border/30"
          classname="w-full"
          containerRef={blocksRef}
          activeDivs={HERO_ACTIVE_DIVS}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,hsl(var(--background)/0.08)_0%,hsl(var(--background)/0.2)_70%,hsl(var(--background)/0.42)_100%)]" />

      {/* Main layout */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[92%] flex-col md:max-w-[85%]">

        {/* Upper content */}
        <div className="relative flex flex-1">
          {/* Left vertical line */}
          

          {/* Left headline */}
          <div className="pt-8">
            <p
              data-hero-title
              className="max-w-3xl text-foreground/95"
            >
              {/* <span className="block text-[clamp(12rem,24vw,22.5rem)] font-extrabold leading-[0.88]"> */}
              <span className="block text-[clamp(3.8rem,8.6vw,7.4rem)] font-extrabold leading-[0.92]">
                {oryntContent.hero.title}
              </span>
              <br />
              <span className="text-[clamp(1.9rem,4.6vw,3.35rem)] font-bold leading-[1] text-foreground/85">
                {oryntContent.hero.tagline[0]}
              </span>
              <br />
              <span className="text-[clamp(1.9rem,4.6vw,3.35rem)] font-bold leading-[1] text-foreground/85">
                {oryntContent.hero.tagline[1]}
              </span>
            </p>
          </div>

          {/* Right description */}
          <div className="absolute right-0 top-10 hidden max-w-sm lg:block">
            <p
              data-hero-subtext
              className="text-base font-medium leading-relaxed text-foreground/85"
            >
              {oryntContent.hero.subtext}
            </p>
          </div>
        </div>

        {/* Giant background brand */}
        <div
          data-hero-brand-bg
          className="pointer-events-none absolute bottom-[-7vw] left-1/2 -z-0 hidden -translate-x-1/2 select-none text-[24vw] font-semibold leading-none tracking-[-0.07em] text-foreground/[0.08] md:block"
        >
          {oryntContent.hero.title}
        </div>

        {/* Bottom content */}
        <div className="relative z-10 grid gap-6 pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div data-hero-bottom className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <MinimalButton
                label={oryntContent.hero.buttons.primary}
                variant="default"
              />

              <MinimalButton
                label={oryntContent.hero.buttons.x}
                icon={<FaXTwitter className="h-4 w-4" />}
              />

              <MinimalButton
                label={oryntContent.hero.buttons.telegram}
                icon={<FaTelegram className="h-4 w-4" />}
              />
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {oryntContent.hero.floatingTexts.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div
            data-hero-bottom
            className="hidden items-center gap-4 text-xs text-muted-foreground md:flex"
          >
            <span className="h-px w-28 bg-border" />
            <span className="whitespace-nowrap">ADAPTIVE LIQUIDITY INFRASTRUCTURE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
