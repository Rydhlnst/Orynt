"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export function GlobalShaderBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        lazyLoad={undefined}
        fov={undefined}
        pixelDensity={1}
        pointerEvents="auto"
      >
        <ShaderGradient
          animate="on"
          type="plane"
          wireframe={false}
          shader="positionMix"
          uTime={10}
          uSpeed={0.4}
          uStrength={2}
          uDensity={2}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={2}
          rotationY={21}
          rotationZ={0}
          color1="#050505"
          color2="#111111"
          color3="#212121"
          reflection={0.3}
          cAzimuthAngle={180}
          cPolarAngle={90}
          cDistance={3.5}
          cameraZoom={7}
          lightType="env"
          brightness={1.1}
          envPreset="lobby"
          grain="on"
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.38)_100%)]" />
    </div>
  );
}
