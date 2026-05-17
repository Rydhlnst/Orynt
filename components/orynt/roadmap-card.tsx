import { CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RoadmapCardProps = {
  title: string;
  items: string[];
};

export function RoadmapCard({ title, items }: RoadmapCardProps) {
  return (
    <Card className="border-border bg-card/70 shadow-none">
      <CardHeader>
        <CardTitle className="text-base text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
              <span className="leading-6">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
