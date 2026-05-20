import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function ForcesSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="layout-shell">
        <SectionLabel className="uppercase tracking-[0.3em]">{oryntContent.infrastructureIsCoordination.label}</SectionLabel>
        <ScrollAnimation as="p" className="mt-7 max-w-4xl text-xl font-semibold leading-relaxed text-foreground/95 md:text-3xl">
          {oryntContent.infrastructureIsCoordination.statement}
        </ScrollAnimation>

        <div className="mt-10 rounded-lg border border-border/70 bg-card/15 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Coordination Forces</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {oryntContent.infrastructureIsCoordination.forces.map((force) => (
              <span key={force} className="rounded-md border border-border/70 bg-card/30 px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground/90">
                {force}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
