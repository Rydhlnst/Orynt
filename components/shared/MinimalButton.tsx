import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MinimalButtonProps = {
  label: string;
  icon?: ReactNode;
  variant?: "default" | "outline";
  className?: string;
};

export function MinimalButton({
  label,
  icon,
  variant = "outline",
  className,
}: MinimalButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn(
        "h-10 rounded-full border-[color:var(--border-subtle)] px-5 text-xs tracking-[0.08em]",
        className
      )}
    >
      {icon ? <span className="mr-2 inline-flex">{icon}</span> : null}
      <span>{label}</span>
    </Button>
  );
}
