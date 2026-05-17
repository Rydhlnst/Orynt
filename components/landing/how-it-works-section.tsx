const nodes = Array.from({ length: 20 }, (_, i) => i);

export function HowItWorksSection() {
  return (
    <section
      id="infrastructure"
      className="relative overflow-hidden bg-[color:var(--background)] py-20 text-[color:var(--text-primary)] md:py-28"
    >
      <div className="absolute inset-0 opacity-25 [background-size:44px_44px] [background-image:linear-gradient(to_right,var(--border-subtle)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-subtle)_1px,transparent_1px)]" />

      <div className="layout-shell relative grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-faint)]">04 / INFRASTRUCTURE PHILOSOPHY</p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Liquidity was never the core problem.
            <br />
            Coordination was.
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[color:var(--text-dim)] md:text-lg">
            ORYNT approaches infrastructure as an evolving coordination layer rather than a fixed financial system.
            <br />
            <br />
            The objective is not excessive complexity.
            <br />
            <br />
            The objective is adaptive infrastructure capable of supporting the next generation of autonomous financial interaction.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[color:var(--text-primary)] md:text-xl">
            Infrastructure evolves.
            <br />
            Autonomous systems coordinate.
            <br />
            Capital adapts.
          </p>
        </div>

        <div className="relative rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-2)] p-6">
          <div className="grid grid-cols-5 gap-5">
            {nodes.map((node) => (
              <span key={node} className="h-2 w-2 rounded-full bg-[color:var(--text-dim)] shadow-[0_0_10px_var(--dot-glow)]" />
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[color:var(--accent)] to-transparent" />
            <div className="h-px w-4/5 bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent" />
            <div className="h-px w-3/5 bg-gradient-to-r from-transparent via-[color:var(--text-dim)] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
