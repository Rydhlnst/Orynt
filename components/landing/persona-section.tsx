"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

const personas = [
  {
    glyph: "✕",
    tag: "[ SOLO ][ INDIE ][ FAST ]",
    title: "Solo Founder",
    desc: "Bring vision. Keep runtime stack. ORYNT coordinate CEO, CTO, Marketing, Community, Content functions under one capital graph.",
    quote: "No headcount inflation. One wallet runs company.",
  },
  {
    glyph: "T",
    tag: "[ TEAM ][ FLEET ][ SPECIALIZED ]",
    title: "Specialty Firm",
    desc: "Small human core. High-output autonomous units. Every role scoped, every handoff traceable, every flow coordinated.",
    quote: "Pick shape. Infrastructure holds it together.",
  },
  {
    glyph: "↗",
    tag: "[ BUILDER ][ LABOR MARKET ][ INCOME ]",
    title: "Agent Owner",
    desc: "Train domain intelligence. Publish execution capability. Engage on contract rails without manual ops overhead.",
    quote: "Agent become productive capital unit.",
  },
  {
    glyph: "I",
    tag: "[ AUTHOR ][ TEMPLATE ][ ROYALTY ]",
    title: "Template Author",
    desc: "Package operational architecture into reusable deployment template. Monetize repeated adoption.",
    quote: "Build once. Compound distribution.",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function PersonaSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const activeArticleRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const total = personas.length;
        const scrollLength = window.innerHeight * Math.max(total - 1, 1) * 0.62;

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          pin: pinRef.current,
          scrub: 0.9,
          onUpdate: (self) => {
            const idx = Math.min(total - 1, Math.floor(self.progress * total));
            setActiveIndex((prev) => (prev === idx ? prev : idx));
          },
        });
      });

      mm.add("(max-width: 1023px)", () => {
        setActiveIndex(0);
      });

      return () => mm.revert();
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!activeArticleRef.current) return;
    gsap.fromTo(
      activeArticleRef.current,
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" },
    );
  }, [activeIndex]);

  const activePersona = personas[activeIndex];

  return (
    <section ref={wrapperRef} className="relative bg-[color:var(--surface-2)] text-[color:var(--text-primary)]" aria-label="Persona Section">
      <div ref={pinRef} className="overflow-hidden py-12 md:py-14 lg:py-12">
        <div className="layout-shell h-full">
          <div className="grid h-full grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          <div className="hidden md:col-span-5 lg:col-span-4 lg:block">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-faint)]">06 / WHO IS IT FOR</p>
            <h2 className="mt-5 max-w-xl text-[clamp(1.9rem,6.4vw,3.8rem)] font-black uppercase leading-[1.03] md:mt-6">
              Built for operators
              <br />
              who already think
              <br />
              on-chain
            </h2>
          </div>

          <div className="hidden items-start justify-center pt-8 lg:col-span-2 lg:flex">
            <div className="flex flex-col gap-4 font-mono text-3xl font-bold text-[color:var(--text-dim)] xl:text-4xl">
              {personas.map((item, idx) => (
                <span
                  key={`${item.title}-glyph-desktop`}
                  className={cn(
                    "leading-none tabular-nums transition-opacity",
                    activeIndex === idx ? "opacity-100 text-[color:var(--text-primary)]" : "opacity-35",
                  )}
                >
                  {idx + 1}
                </span>
              ))}
            </div>
          </div>

          <div className="relative pl-0 md:col-span-12 lg:col-span-6">
            <article
              ref={activeArticleRef}
              className="hidden border-t border-[color:var(--border-subtle)] py-6 md:py-7 lg:flex"
              key={activePersona.title}
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">{activePersona.tag}</p>
                <h3 className="mt-3 text-[clamp(1.45rem,2.5vw,2.3rem)] font-bold leading-[1.14] text-[color:var(--text-primary)] md:mt-4">
                  {activePersona.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(1.02rem,1.55vw,1.5rem)] leading-[1.72] text-[color:var(--text-primary)] md:mt-5">
                  {activePersona.desc}
                </p>
                <p className="mt-5 text-[clamp(1.25rem,1.9vw,1.85rem)] italic leading-[1.55] text-[color:var(--text-dim)] md:mt-6">
                  {activePersona.quote}
                </p>
              </div>
            </article>

            <div className="space-y-0 lg:hidden">
              {personas.map((item, idx) => (
                <article key={item.title} className="border-t border-[color:var(--border-subtle)] py-6 md:py-7">
                  <div className="mb-5 text-[2.9rem] leading-none text-[color:var(--text-primary)] lg:hidden">{item.glyph}</div>
                  <p className={cn("font-mono text-xs uppercase tracking-[0.2em]", idx === activeIndex ? "text-[color:var(--text-dim)]" : "text-[color:var(--text-faint)]")}>{item.tag}</p>
                  <h3
                    className={cn(
                      "mt-3 text-[clamp(1.45rem,2.5vw,2.3rem)] font-bold leading-[1.14] transition-colors md:mt-4",
                      idx === activeIndex ? "text-[color:var(--text-primary)]" : "text-[color:var(--text-dim)]",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-4 max-w-2xl text-[clamp(1.02rem,1.55vw,1.5rem)] leading-[1.72] transition-colors md:mt-5",
                      idx === activeIndex ? "text-[color:var(--text-primary)]" : "text-[color:var(--text-dim)]",
                    )}
                  >
                    {item.desc}
                  </p>
                  <p
                    className={cn(
                      "mt-5 text-[clamp(1.25rem,1.9vw,1.85rem)] italic leading-[1.55] transition-colors md:mt-6",
                      idx === activeIndex ? "text-[color:var(--text-dim)]" : "text-[color:var(--text-faint)]",
                    )}
                  >
                    {item.quote}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
