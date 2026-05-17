"use client";

import { useRef } from "react";
import { RotatingParticleOrbit } from "@/components/visuals/RotatingParticleOrbit";
import { OrbitScene, useScrollOrbitAnimation } from "@/hooks/useScrollOrbitAnimation";

type ScrollOrbitControllerProps = {
  scenes?: OrbitScene[];
};

const defaultScenes: OrbitScene[] = [
  {
    id: "hero",
    trigger: "#hero",
    x: "0vw",
    y: "0vh",
    scale: 1.02,
    rotate: 0,
    opacity: 0.45,
    blur: 0,
  },
  {
    id: "shift",
    trigger: "#shift",
    x: "30vw",
    y: "8vh",
    scale: 0.8,
    rotate: 36,
    opacity: 0.25,
    blur: 0.6,
  },
  {
    id: "coordination",
    trigger: "#coordination",
    x: "8vw",
    y: "42vh",
    scale: 1.1,
    rotate: 72,
    opacity: 0.18,
    blur: 1.3,
  },
  {
    id: "infrastructure",
    trigger: "#infrastructure",
    x: "-30vw",
    y: "40vh",
    scale: 1.4,
    rotate: 110,
    opacity: 0.22,
    blur: 1.8,
  },
];

export function ScrollOrbitController({ scenes = defaultScenes }: ScrollOrbitControllerProps) {
  const orbitWrapperRef = useRef<HTMLDivElement>(null);
  useScrollOrbitAnimation({ targetRef: orbitWrapperRef, scenes });

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      <div
        ref={orbitWrapperRef}
        className="absolute left-1/2 top-1/2 will-change-transform"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <RotatingParticleOrbit
          className="mix-blend-screen"
          size={560}
          particleCount={340}
          rotationSpeed={150}
          glow
          opacity={1}
          color="#EEF2FF"
          accentColor="#8EA9FF"
          enableAutoRotate
        />
      </div>
      <style jsx global>{`
        @keyframes orbit-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbit-twinkle {
          0%,
          100% {
            opacity: 0.26;
          }
          50% {
            opacity: 0.96;
          }
        }
      `}</style>
    </div>
  );
}
