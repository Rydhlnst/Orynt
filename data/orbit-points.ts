export type OrbitPoint = {
  id: number;
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
};

type BuildOrbitPointsInput = {
  count: number;
  size: number;
  seed?: number;
};

function seededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

export function buildOrbitPoints({ count, size, seed = 17 }: BuildOrbitPointsInput): OrbitPoint[] {
  const random = seededRandom(seed + count + size);
  const center = size / 2;
  const baseRadius = size * 0.33;
  const points: OrbitPoint[] = [];

  for (let i = 0; i < count; i += 1) {
    const t = i / count;
    const angle = t * Math.PI * 2.0 + random() * 0.12;
    const wobbleA = Math.sin(angle * 2.3) * size * 0.028;
    const wobbleB = Math.cos(angle * 5.4) * size * 0.016;
    const radialNoise = (random() - 0.5) * size * 0.03;
    const radius = baseRadius + wobbleA + wobbleB + radialNoise;
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * (radius * 0.84 + Math.cos(angle * 1.6) * size * 0.015);
    const thicknessBias = 0.65 + random() * 0.85;
    const r = Math.max(0.55, Math.min(1.8, (size / 360) * thicknessBias));
    const opacity = 0.32 + random() * 0.58;
    points.push({
      id: i,
      x,
      y,
      r,
      opacity,
      twinkleDelay: random() * 5,
      twinkleDuration: 2.8 + random() * 3.4,
    });
  }

  return points;
}
