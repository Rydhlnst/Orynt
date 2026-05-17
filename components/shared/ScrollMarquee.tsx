"use client";

import { cn } from "@/lib/utils";

type ScrollMarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  itemClassName?: string;
};

export function ScrollMarquee({
  items,
  className,
  speed = 24,
  direction = "left",
  itemClassName,
}: ScrollMarqueeProps) {
  const repeatedItems = [...items, ...items];
  const duration = Math.max(8, 40 - speed);
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border/50 bg-background py-4",
        className,
      )}
    >
      <div
        className="marquee-track flex w-max items-center gap-8 whitespace-nowrap pl-2 pr-2 motion-reduce:animate-none"
        style={{
          animationName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {repeatedItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span
              className={cn(
                "text-lg font-medium uppercase tracking-[0.24em] text-muted-foreground/70",
                itemClassName,
              )}
            >
              {item}
            </span>
            <span aria-hidden="true" className="text-base font-medium text-muted-foreground/60">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
