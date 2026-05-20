"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { MinimalButton } from "@/components/shared/MinimalButton";
import Blocks from "@/components/uilayouts/blocks";
import { oryntContent } from "@/data/orynt-content";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const SHOW_SOCIAL_LINKS = false;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blocksContainerRef = useRef<HTMLDivElement>(null);

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
      className="relative h-[calc(100svh-5rem)] overflow-hidden bg-transparent md:h-[calc(100svh-6rem)]"
    >
      <div ref={blocksContainerRef} className="absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--surface-2)]/18 via-transparent to-[color:var(--surface-1)]/30" />
        <Blocks
          containerRef={blocksContainerRef}
          divClass="!border-[color:var(--border-subtle)]/35 bg-[color:var(--surface-2)]/8"
          classname="opacity-70 [mask-image:radial-gradient(72%_58%_at_50%_46%,black_52%,transparent_100%)]"
        />
      </div>

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
                {oryntContent.hero.opening[0]}
              </span>
              <br />
              <span className="text-[clamp(1.9rem,4.6vw,3.35rem)] font-bold leading-[1] text-foreground/85">
                {oryntContent.hero.opening[1]}
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

              {SHOW_SOCIAL_LINKS ? (
                <>
                  <MinimalButton
                    label={oryntContent.hero.buttons.x}
                    icon={<FaXTwitter className="h-4 w-4" />}
                  />

                  <MinimalButton
                    label={oryntContent.hero.buttons.telegram}
                    icon={<FaTelegram className="h-4 w-4" />}
                  />
                </>
              ) : null}
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
            <span className="whitespace-nowrap">{oryntContent.hero.tagline[0]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
