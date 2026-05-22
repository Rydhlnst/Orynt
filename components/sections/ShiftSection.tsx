"use client";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollMarquee } from "@/components/shared/ScrollMarquee";
import { NoiseTexture } from "@/components/ui/noise-texture";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

const SHIFT_MARQUEE_ITEMS = [
  "AUTONOMOUS COORDINATION",
  "ADAPTIVE LIQUIDITY",
  "MACHINE-NATIVE EXECUTION",
  "DISTRIBUTED CAPITAL FLOW",
  "COORDINATION OVER STATIC LIQUIDITY",
  "INFRASTRUCTURE EVOLVES",
  "CAPITAL ADAPTS",
];

export function ShiftSection() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-visible py-24 md:py-32">
      <NoiseTexture
        className="opacity-[0.08] dark:opacity-[0.12] [mask-image:radial-gradient(85%_65%_at_50%_38%,black_45%,transparent_100%)]"
        frequency={0.34}
        octaves={5}
        slope={0.13}
        noiseOpacity={0.38}
      />
      <div className="relative z-10 mx-auto w-full max-w-[92%] md:max-w-[85%]">
        <SectionLabel className="mb-10 text-sm font-semibold uppercase tracking-[0.3em]">
          {oryntContent.theShift.label}
        </SectionLabel>
        <ScrollAnimation as="h2" className="max-w-5xl text-4xl font-extrabold leading-[0.95] text-[color:var(--text-primary)] md:text-6xl">
          {oryntContent.theShift.title[0]}
          <br />
          {oryntContent.theShift.title[1]}
        </ScrollAnimation>
        <div className="mt-10 grid max-w-4xl gap-6 text-base font-medium leading-relaxed text-[color:var(--text-secondary)] md:text-lg">
          {oryntContent.theShift.paragraphs.map((paragraph, index) => (
            <ScrollAnimation as="p" delay={index * 0.08} key={paragraph}>
              {paragraph}
            </ScrollAnimation>
          ))}
        </div>
        <ScrollAnimation as="div" delay={0.3} className="mt-10 text-lg font-semibold leading-relaxed text-[color:var(--text-primary)] md:text-2xl">
          <p>{oryntContent.theShift.tagline[0]}</p>
          <p>{oryntContent.theShift.tagline[1]}</p>
        </ScrollAnimation>
      </div>

      <ScrollAnimation as="div" className="relative z-10 mt-14 space-y-3 md:mt-16" direction="up">
        <ScrollMarquee
          items={[...SHIFT_MARQUEE_ITEMS].reverse()}
          speed={22}
          direction="right"
          className="border-y-0 bg-transparent py-5"
        />
      </ScrollAnimation>
    </section>
  );
}
