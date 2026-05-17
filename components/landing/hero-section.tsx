export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#04070C] text-[#CED2E2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_58%,rgba(67,162,255,0.28),transparent_38%),radial-gradient(circle_at_78%_6%,rgba(128,163,255,0.16),transparent_34%)]" />
      <div className="absolute inset-0 opacity-35 [background-size:58px_58px] [background-image:linear-gradient(to_right,#8b9bb316_1px,transparent_1px),linear-gradient(to_bottom,#8b9bb316_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,12,0.2)_0%,rgba(2,5,12,0.78)_100%)]" />

      <div className="layout-shell relative flex min-h-screen flex-col pb-10 pt-7 md:pb-12">

        <div className="mt-16 flex flex-1 flex-col justify-between gap-10 md:mt-20">
          <div className="flex flex-col gap-10 md:flex-row md:justify-between">
            <div className="max-w-xl">
              <h1 className="mt-1 text-5xl font-medium leading-[0.96] text-[#DBE1F4] md:text-8xl">ORYNT</h1>
              <p className="mt-5 text-xl leading-8 text-white/85 md:text-3xl md:leading-11">
                Adaptive Liquidity Infrastructure
                <br />
                for Autonomous Finance
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#initialize"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-[#0A0F18]/80 px-5 text-sm font-medium text-white/90 transition hover:bg-[#162133]"
                >
                  Initialize
                </a>
                <a
                  href="https://x.com/Oryntcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-[#0A0F18]/80 px-5 text-sm font-medium text-white/90 transition hover:bg-[#162133]"
                >
                  X / Telegram
                </a>
              </div>
            </div>

            <div className="max-w-md md:pt-10">
              <p className="text-lg leading-9 text-white/78">
                Infrastructure designed for machine-native capital coordination and evolving decentralized financial systems.
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="flex items-end gap-5">
              <div className="relative hidden h-72 w-6 md:block">
                <span className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-white/85 to-white/10" />
                <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-white/75 bg-[#04070C]" />
              </div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/62">
                Autonomous Coordination
                <br />
                Adaptive Systems
                <br />
                Machine-Native Execution
              </p>
            </div>
            <a href="#follow" className="font-mono text-xs uppercase tracking-[0.18em] text-white/65 transition hover:text-white">
              ORYNT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
