"use client";

import Link from "next/link";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

const tinyTextPool = [
  "SYSTEMS COORDINATE",
  "VALUE FLOWS",
  "EXECUTION LAYER ACTIVE",
  "ROUTING SIGNAL STABLE",
  "CAPITAL GRAPH SYNCHRONIZED",
  "AGENT CHANNEL VERIFIED",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05060A] text-[#CED2E2]">
      <div className="absolute inset-0">
        <ShaderGradientCanvas
          style={{ width: "100%", height: "100%" }}
          lazyLoad={undefined}
          fov={100}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="waterPlane"
            wireframe={false}
            shader="defaults"
            uTime={8}
            uSpeed={0.3}
            uStrength={1.5}
            uDensity={1.5}
            uFrequency={0}
            uAmplitude={0}
            positionX={0}
            positionY={0}
            positionZ={0}
            rotationX={50}
            rotationY={0}
            rotationZ={-60}
            color1="#02030A"
            color2="#0B1024"
            color3="#AFC8FF"
            reflection={0.1}
            cAzimuthAngle={180}
            cPolarAngle={80}
            cDistance={2.8}
            cameraZoom={9.1}
            lightType="3d"
            brightness={1}
            envPreset="city"
            grain="on"
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </div>

      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {tinyTextPool.map((line, idx) => (
          <span
            key={line}
            className="absolute font-mono text-[10px] uppercase tracking-[0.22em] text-white/35"
            style={{
              left: `${8 + (idx % 3) * 30}%`,
              top: `${12 + Math.floor(idx / 3) * 66}%`,
            }}
          >
            {line}
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/55">EXECUTION LAYER</p>
        <p className="mt-8 text-xl font-semibold tracking-[0.4em] md:text-2xl">ORYNT</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] md:text-7xl">
          Adaptive Liquidity Infrastructure
          <br />
          for Autonomous Finance
        </h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/78 md:text-lg">
          Intelligence designed for machine-native capital coordination.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200" href="#initialize">Initialize</Link>
          <Link className="inline-flex items-center justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white hover:bg-white/10" href="#x"></Link>
          <Link className="inline-flex items-center justify-center rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white hover:bg-white/10" href="#telegram">Telegram</Link>
        </div>
      </div>
    </section>
  );
}
