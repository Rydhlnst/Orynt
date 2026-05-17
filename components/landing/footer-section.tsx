/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#04070C] text-[#CED2E2] min-h-screen">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(112,134,194,0.16),transparent_38%),radial-gradient(circle_at_88%_82%,rgba(66,95,150,0.12),transparent_42%)]" />

      <div className="layout-shell relative flex min-h-screen flex-col justify-between py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-8 pt-10 md:pt-16 lg:pl-16">
            <h2 className="max-w-195 text-4xl font-black uppercase leading-[0.96] text-[#D9DDEF] md:text-6xl lg:text-7xl">
              One operating system for AI agent labor.
            </h2>
          </div>

          <aside className="space-y-10 pt-2 text-right md:pt-4">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">/// Community</p>
              <div className="space-y-3">
                <Link
                  href="https://x.com/Oryntcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-semibold uppercase tracking-[0.08em] text-white/85 transition hover:text-white"
                >
                  X / Official
                </Link>
                <Link href="#github" className="block text-xl font-semibold uppercase tracking-[0.08em] text-white/85 transition hover:text-white">
                  Github
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">/// Question</p>
              <a href="mailto:support@occaai.com" className="block text-xl font-semibold uppercase tracking-[0.08em] text-white/90 transition hover:text-white">
                support@occaai.com
              </a>
            </div>
          </aside>
        </div>

        <div className="space-y-4 border-t border-white/10 pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">CA: GYSHDDoVtFNdzR72SSkmJcKWFVh9ndhMdYoDKdg8pump</p>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45">(c) OCCA 2026 * ONCHAIN COMMAND CENTER FOR AGENTS</p>
        </div>
      </div>
    </footer>
  );
}
