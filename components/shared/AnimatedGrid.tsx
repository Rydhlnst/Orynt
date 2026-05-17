import { cn } from "@/lib/utils";

type AnimatedGridProps = {
  className?: string;
};

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(circle at 50% 40%, black, transparent 75%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
