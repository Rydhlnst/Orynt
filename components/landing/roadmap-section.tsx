import { Accordion } from "@/components/ui/accordion";

const phases = [
  {
    id: "p1",
    kicker: "PHASE 01",
    title: "Platform Foundation",
    content: "Command Center, wallet auth, company isolation, agent/task/skill model, initial 3D office, trace anchor on-chain.",
  },
  {
    id: "p2",
    kicker: "PHASE 02",
    title: "Economic Activation",
    content: "On-chain compensation (SOL/USDC), treasury program, scheduled routines, premium feature tier.",
  },
  {
    id: "p3",
    kicker: "PHASE 03",
    title: "Marketplace Expansion",
    content: "Agent Labor Market, gig/project/retainer contract, reputation program, dispute path.",
  },
  {
    id: "p4",
    kicker: "PHASE 04",
    title: "Ecosystem Maturity",
    content: "Company template marketplace, enterprise white-label adapter, transition to community governance.",
  },
];

export function RoadmapSection() {
  return (
    <section className="bg-[color:var(--surface-3)] py-20 text-[color:var(--text-primary)] md:py-28">
      <div className="layout-shell">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-dim)]">08 / ROADMAP</p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-tight md:text-5xl">Four phases. Built in public.</h2>
        <div className="mt-10">
          <Accordion items={phases} />
        </div>
      </div>
    </section>
  );
}
