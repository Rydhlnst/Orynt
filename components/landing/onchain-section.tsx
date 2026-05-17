import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    title: "Adaptive Liquidity",
    body: "Dynamic infrastructure layers designed to evolve alongside changing market conditions and distributed capital flow.",
    motif: "Thin orbit mesh",
  },
  {
    title: "Machine-Native Execution",
    body: "Infrastructure direction focused on scalable interaction between autonomous systems and decentralized financial environments.",
    motif: "Directional signal lines",
  },
  {
    title: "Autonomous Coordination",
    body: "Coordinated systems designed to support adaptive participation, intelligent execution, and evolving network behavior.",
    motif: "Distributed node lattice",
  },
];

export function OnChainSection() {
  return (
    <section id="coordination" className="bg-[color:var(--surface-1)] py-20 text-[color:var(--text-primary)] md:py-28">
      <div className="layout-shell">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-faint)]">03 / COORDINATION LAYERS</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.title} className="bg-[color:var(--surface-2)]">
              <CardContent>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--text-faint)]">{card.motif}</p>
                <h3 className="mt-4 text-2xl font-bold leading-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--text-dim)]">{card.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
