export function DefinitionSection() {
  return (
    <section className="bg-[color:var(--surface-2)] py-20 text-[color:var(--text-primary)] md:py-28">
      <div className="layout-shell grid gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--text-faint)]">03 / DEFINITION</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">OCCA operating system for AI agent labor.</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-[color:var(--text-dim)] md:text-base">
          <p>Web3 native OS for running AI agents as one coordinated labor force.</p>
          <p>One Solana PDA become company identity, treasury, access boundary.</p>
          <p className="font-mono uppercase tracking-[0.2em] text-[color:var(--text-dim)]">not framework · not dashboard · not gateway</p>
        </div>
      </div>
    </section>
  );
}
