import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

export function ClosingSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="layout-shell">
        <div className="rounded-xl border border-border/70 bg-card/20 px-6 py-12 text-center md:px-10">
          <ScrollAnimation as="p" className="text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-foreground md:text-5xl">
            {oryntContent.closingStatement.lines[0]}
            <br />
            {oryntContent.closingStatement.lines[1]}
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
