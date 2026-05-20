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
          {oryntContent.infrastructurePhilosophy.label}
        </SectionLabel>
        <div className="grid gap-10 md:grid-cols-[1fr_2.2fr]">
          <div className="hidden md:block">
          </div>
          <div>
            <ScrollAnimation as="h2" className="max-w-3xl text-3xl leading-tight md:text-5xl">
              {oryntContent.infrastructurePhilosophy.title}
            </ScrollAnimation>
            <div className="mt-8 grid max-w-3xl gap-5 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {oryntContent.infrastructurePhilosophy.paragraphs.map((paragraph, index) => (
                <ScrollAnimation as="p" delay={index * 0.08} key={paragraph}>
                  {paragraph}
                </ScrollAnimation>
              ))}
            </div>
            <div className="mt-10 grid gap-1 text-base tracking-[0.08em] text-[color:var(--text-primary)] md:text-lg">
              {oryntContent.infrastructurePhilosophy.tagline.map((line, index) => (
                <ScrollAnimation as="p" delay={index * 0.08} key={line}>{line}</ScrollAnimation>
              ))}
            </div>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {oryntContent.infrastructurePhilosophy.beliefs.map((belief, index) => (
                <ScrollAnimation
                  as="article"
                  key={belief.title}
                  delay={0.1 + index * 0.06}
                  className="rounded-lg border border-border/70 bg-card/20 p-4"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground/95">{belief.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{belief.body}</p>
                </ScrollAnimation>
              ))}
            </div>
            <div className="mt-12 space-y-8 border-t border-border/60 pt-8">
              <ScrollAnimation as="div" delay={0.08}>
                <SectionLabel className="uppercase tracking-[0.3em]">
                  {oryntContent.ourFoundation.label}
                </SectionLabel>
                <h3 className="mt-4 text-2xl font-bold uppercase leading-tight text-foreground md:text-3xl">
                  {oryntContent.ourFoundation.title}
                </h3>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {oryntContent.ourFoundation.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <blockquote className="mt-4 rounded-md border border-border/70 bg-card/20 p-4 text-sm font-semibold leading-relaxed text-foreground/95 md:text-lg">
                  {oryntContent.ourFoundation.quote[0]}
                  <br />
                  {oryntContent.ourFoundation.quote[1]}
                </blockquote>
              </ScrollAnimation>

              <ScrollAnimation as="div" delay={0.1}>
                <SectionLabel className="uppercase tracking-[0.3em]">{oryntContent.ourBelief.label}</SectionLabel>
                <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {oryntContent.ourBelief.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation as="div" delay={0.12}>
                <SectionLabel className="uppercase tracking-[0.3em]">
                  {oryntContent.infrastructureIsCoordination.label}
                </SectionLabel>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {oryntContent.infrastructureIsCoordination.statement}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Coordination Forces</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {oryntContent.infrastructureIsCoordination.forces.map((force) => (
                    <span
                      key={force}
                      className="rounded-md border border-border/70 bg-card/20 px-3 py-2 text-xs uppercase tracking-[0.14em] text-foreground/90"
                    >
                      {force}
                    </span>
                  ))}
                </div>
              </ScrollAnimation>

              <ScrollAnimation as="div" delay={0.14}>
                <SectionLabel className="uppercase tracking-[0.3em]">
                  {oryntContent.nextFinancialCycle.label}
                </SectionLabel>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {oryntContent.nextFinancialCycle.pillars.map((pillar, index) => (
                    <ScrollAnimation
                      as="article"
                      key={pillar.title}
                      delay={0.03 + index * 0.03}
                      className="rounded-md border border-border/70 bg-card/20 p-4"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-[0.1em] text-foreground/95">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                    </ScrollAnimation>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
