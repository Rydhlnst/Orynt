import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function FoundationBeliefSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="layout-shell grid gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel className="uppercase tracking-[0.3em]">{oryntContent.ourFoundation.label}</SectionLabel>
          <ScrollAnimation as="h2" className="mt-7 text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-5xl">
            {oryntContent.ourFoundation.title}
          </ScrollAnimation>
          <div className="mt-7 grid gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {oryntContent.ourFoundation.paragraphs.map((paragraph, index) => (
              <ScrollAnimation as="p" delay={index * 0.06} key={paragraph}>{paragraph}</ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation as="div" delay={0.2} className="mt-8 rounded-lg border border-border/70 bg-card/20 p-5 text-base font-semibold leading-relaxed text-foreground/95 md:text-xl">
            {oryntContent.ourFoundation.quote[0]}
            <br />
            {oryntContent.ourFoundation.quote[1]}
          </ScrollAnimation>
        </div>

        <div>
          <SectionLabel className="uppercase tracking-[0.3em]">{oryntContent.ourBelief.label}</SectionLabel>
          <div className="mt-7 grid gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            {oryntContent.ourBelief.paragraphs.map((paragraph, index) => (
              <ScrollAnimation as="p" delay={index * 0.06} key={paragraph}>{paragraph}</ScrollAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
