import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PrincipleCardProps = {
  title: string;
  body: string;
};

export function PrincipleCard({ title, body }: PrincipleCardProps) {
  return (
    <Card className="h-full border-border bg-card/70 shadow-none">
      <CardHeader>
        <CardTitle className="text-base text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-muted-foreground">{body}</p>
      </CardContent>
    </Card>
  );
}
