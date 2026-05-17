import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type ThesisCardProps = {
  children: ReactNode;
  className?: string;
};

export function ThesisCard({ children, className }: ThesisCardProps) {
  return (
    <Card className={className ?? "border-border bg-card/70 shadow-none"}>
      <CardContent className="p-6 text-base leading-7 text-muted-foreground">{children}</CardContent>
    </Card>
  );
}
