import Link from "next/link";
import { Compass } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { documentSections } from "@/data/orynt-thesis";

export function OryntRightSidebar() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-6">
      <Card className="border-border bg-card/70 shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Compass className="h-4 w-4" />
            On This Page
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav aria-label="Table of contents" className="space-y-1">
            {documentSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}
