import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  id: string;
  title: string;
  kicker?: string;
};

export function SectionHeading({ id, title, kicker }: SectionHeadingProps) {
  return (
    <header id={id} className="scroll-mt-24 space-y-3">
      {kicker ? (
        <Badge className="w-fit border-border text-xs tracking-[0.18em] uppercase">
          {kicker}
        </Badge>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
    </header>
  );
}
