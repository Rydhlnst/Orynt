"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { MinimalButton } from "@/components/shared/MinimalButton";
import { oryntContent } from "@/data/orynt-content";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const SHOW_SOCIAL_LINKS = false;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative h-screen overflow-hidden bg-transparent"
    >
      {/* Main layout */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[92%] flex-col pb-8 pt-20 md:max-w-[85%] md:pt-24">

        {/* Upper content */}
        <div className="relative flex flex-1 items-center">

          {/* Left headline */}
          <div className="pt-8">
            <p
              data-hero-title
              className="max-w-3xl text-foreground/95"
            >
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
          <div className="absolute right-0 top-0 hidden max-w-sm lg:block">
            <p
              data-hero-subtext
              className="text-base font-medium leading-relaxed text-foreground/85"
            >
              {oryntContent.hero.subtext}
            </p>
          </div>
        </div>

        {/* Vertical brand text — right side, ~2/3 visible */}
        <div
          data-hero-brand-bg
          className="pointer-events-none absolute top-0 -z-0 hidden select-none md:block"
          style={{
            right: "-8vw",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "clamp(8rem, 18vw, 18rem)",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.07em",
            color: "color-mix(in srgb, currentColor 8%, transparent)",
            height: "100%",
          }}
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
