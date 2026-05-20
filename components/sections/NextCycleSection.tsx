import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function NextCycleSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="layout-shell">
        <SectionLabel className="uppercase tracking-[0.3em]">{oryntContent.nextFinancialCycle.label}</SectionLabel>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {oryntContent.nextFinancialCycle.pillars.map((pillar, index) => (
            <ScrollAnimation
              as="article"
              key={pillar.title}
              delay={0.06 + index * 0.05}
              className="rounded-lg border border-border/70 bg-card/20 p-5 md:p-6"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.05em] text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{pillar.body}</p>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
