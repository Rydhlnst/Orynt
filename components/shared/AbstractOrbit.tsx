import { cn } from "@/lib/utils";

type AbstractOrbitProps = {
  className?: string;
};

export function AbstractOrbit({ className }: AbstractOrbitProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-60",
        className
      )}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="500"
          cy="500"
          rx="430"
          ry="210"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />
        <ellipse
          cx="500"
          cy="500"
          rx="280"
          ry="420"
          stroke="var(--border-subtle)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
