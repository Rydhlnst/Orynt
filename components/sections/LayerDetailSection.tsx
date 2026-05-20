import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";

type LayerItem = {
  title: string;
  body: string;
};

type LayerDetailSectionProps = {
  id: string;
  label: string;
  intro: string;
  description?: string;
  coreCapabilities: readonly LayerItem[];
  secondaryTitle: string;
  secondaryItems: readonly LayerItem[];
  tagline: readonly [string, string];
  coordinationNetwork?: readonly string[];
  coordinationCenter?: string;
};

export function LayerDetailSection({
  id,
  label,
  intro,
  description,
  coreCapabilities,
  secondaryTitle,
  secondaryItems,
  tagline,
  coordinationNetwork,
  coordinationCenter,
}: LayerDetailSectionProps) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <div className="layout-shell space-y-10">
        <div>
          <SectionLabel className="uppercase tracking-[0.3em]">{label}</SectionLabel>
          <ScrollAnimation as="p" className="mt-6 max-w-4xl text-xl font-semibold leading-relaxed text-foreground/95 md:text-3xl">
            {intro}
          </ScrollAnimation>
          {description ? (
            <ScrollAnimation as="p" delay={0.08} className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {description}
            </ScrollAnimation>
          ) : null}
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {coreCapabilities.map((item, index) => (
            <ScrollAnimation
              as="article"
              key={item.title}
              delay={0.05 + index * 0.05}
              className="rounded-lg border border-border/70 bg-card/20 p-5 md:p-6"
            >
              <h3 className="text-lg font-semibold uppercase tracking-[0.05em] text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{item.body}</p>
            </ScrollAnimation>
          ))}
        </div>

        {coordinationNetwork ? (
          <div className="rounded-lg border border-border/70 bg-card/15 p-5 md:p-6">
            <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Coordination Network</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {coordinationNetwork.map((item) => (
                <span key={item} className="rounded-md border border-border/70 bg-card/30 px-3 py-2 text-xs uppercase tracking-[0.16em] text-foreground/90">
                  {item}
                </span>
              ))}
            </div>
            {coordinationCenter ? (
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/95">
                At the center: {coordinationCenter}
              </p>
            ) : null}
          </div>
        ) : null}

        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">{secondaryTitle}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {secondaryItems.map((item, index) => (
              <ScrollAnimation
                as="article"
                key={item.title}
                delay={0.05 + index * 0.05}
                className="rounded-lg border border-border/70 bg-card/20 p-5"
              >
                <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground/95">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 text-lg font-semibold leading-relaxed text-foreground md:text-2xl">
          <p>{tagline[0]}</p>
          <p>{tagline[1]}</p>
        </div>
      </div>
    </section>
  );
}
