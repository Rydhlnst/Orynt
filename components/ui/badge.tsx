import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border-strong)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-primary)]",
        className,
      )}
      {...props}
    />
  );
}
