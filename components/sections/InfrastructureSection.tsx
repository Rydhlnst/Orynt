"use client";

import { AbstractOrbit } from "@/components/shared/AbstractOrbit";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function InfrastructureSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 opacity-30">
        <AbstractOrbit />
      </div>
      <div className="layout-shell relative z-10">
        <SectionLabel className="mb-8">
          {oryntContent.infrastructure.label}
        </SectionLabel>
        <div className="grid gap-10 md:grid-cols-[1fr_2.2fr]">
          <div className="hidden md:block">
          </div>
          <div>
            <ScrollAnimation as="h2" className="max-w-3xl text-3xl leading-tight md:text-5xl">
              {oryntContent.infrastructure.statement}
            </ScrollAnimation>
            <div className="mt-8 grid max-w-3xl gap-5 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {oryntContent.infrastructure.paragraphs.map((paragraph, index) => (
                <ScrollAnimation as="p" delay={index * 0.08} key={paragraph}>
                  {paragraph}
                </ScrollAnimation>
              ))}
            </div>
            <div className="mt-10 grid gap-1 text-base tracking-[0.08em] text-[color:var(--text-primary)] md:text-lg">
              {oryntContent.infrastructure.closing.map((line, index) => (
                <ScrollAnimation as="p" delay={index * 0.08} key={line}>
                  {line}
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
