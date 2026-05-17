"use client";

import { useMemo } from "react";
import { buildOrbitPoints } from "@/data/orbit-points";

export type RotatingParticleOrbitProps = {
  className?: string;
  size?: number;
  particleCount?: number;
  rotationSpeed?: number;
  glow?: boolean;
  opacity?: number;
  color?: string;
  accentColor?: string;
  enableAutoRotate?: boolean;
};

export function RotatingParticleOrbit({
  className,
  size = 540,
  particleCount = 280,
  rotationSpeed = 120,
  glow = true,
  opacity = 0.45,
  color = "#F2F5FF",
  accentColor = "#7EA4FF",
  enableAutoRotate = true,
}: RotatingParticleOrbitProps) {
  const points = useMemo(
    () => buildOrbitPoints({ count: particleCount, size, seed: 29 }),
    [particleCount, size],
  );

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        opacity,
        animation: enableAutoRotate ? `orbit-spin ${rotationSpeed}s linear infinite` : undefined,
        transformOrigin: "50% 50%",
      }}
      aria-hidden="true"
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        <defs>
          {glow ? (
            <filter id="orbit-soft-glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.8" result="blurred" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ) : null}
          <radialGradient id="orbit-center-fade" cx="50%" cy="50%" r="50%">
            <stop offset="58%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="0.92" />
          </radialGradient>
        </defs>

        <g filter={glow ? "url(#orbit-soft-glow)" : undefined}>
          {points.map((point) => (
            <circle
              key={point.id}
              cx={point.x}
              cy={point.y}
              r={point.r}
              fill={point.id % 7 === 0 ? accentColor : color}
              opacity={point.opacity}
              style={{
                animation: `orbit-twinkle ${point.twinkleDuration}s ease-in-out ${point.twinkleDelay}s infinite`,
              }}
            />
          ))}
        </g>

        <circle cx={size / 2} cy={size / 2} r={size * 0.49} fill="url(#orbit-center-fade)" opacity={0.18} />
      </svg>
    </div>
  );
}
