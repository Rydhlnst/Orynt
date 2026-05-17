import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type SectionLabelProps = HTMLAttributes<HTMLParagraphElement> & {
  children: string;
};

export function SectionLabel({
  children,
  className,
  ...props
}: SectionLabelProps) {
  return (
    <p
      {...props}
      className={cn(
        "tracking-[0.22em] text-xs font-medium text-[color:var(--text-faint)]",
        className
      )}
    >
      {children}
    </p>
  );
}
