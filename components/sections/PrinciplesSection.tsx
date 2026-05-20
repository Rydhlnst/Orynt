import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function PrinciplesSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28">
      <div className="layout-shell relative z-10 grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)] lg:items-start">
        <div>
          <ScrollAnimation as="div">
            <SectionLabel className="uppercase tracking-[0.32em]">
              {oryntContent.ourPrinciples.label}
            </SectionLabel>
          </ScrollAnimation>

          <ScrollAnimation
            as="h2"
            delay={0.08}
            className="mt-7 text-[clamp(2.1rem,4.8vw,4.9rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-[color:var(--text-primary)]"
          >
            Our Principles
          </ScrollAnimation>

          <ScrollAnimation
            as="p"
            delay={0.16}
            className="mt-7 max-w-xl text-base leading-relaxed text-[color:var(--text-secondary)] md:text-lg"
          >
            Sustainable systems begin at the foundation, not the interface.
          </ScrollAnimation>

          <ScrollAnimation
            as="div"
            delay={0.2}
            className="mt-10 border-y border-border/60 py-6"
          >
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
              Closing Statement
            </p>
            <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {oryntContent.closingStatement.lines[0]} {oryntContent.closingStatement.lines[1]}
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid gap-3">
          {oryntContent.ourPrinciples.principles.map((principle, index) => (
            <ScrollAnimation
              as="article"
              key={principle.title}
              delay={0.08 + index * 0.06}
              className="group rounded-lg border border-border/70 bg-card/20 p-5 transition-colors duration-300 hover:border-border md:p-6"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border/70 text-[10px] font-semibold tracking-[0.24em] text-muted-foreground transition-colors duration-300 group-hover:text-[color:var(--text-primary)]"
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold uppercase leading-tight tracking-[0.02em] text-[color:var(--text-primary)] md:text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
                    {principle.body}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
