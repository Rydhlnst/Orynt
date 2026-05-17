import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
};

export function Button({ className, variant = "default", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-strong)] disabled:pointer-events-none disabled:opacity-50";

  const style = {
    default: "bg-[color:var(--primary)] text-[color:var(--background)] hover:bg-[color:var(--accent)]",
    outline: "border border-[color:var(--border-strong)] text-[color:var(--text-primary)] hover:bg-[color:var(--surface-2)]",
    ghost: "text-[color:var(--text-primary)] hover:bg-[color:var(--surface-2)]",
  }[variant];

  return <button className={cn(base, style, className)} {...props} />;
}
