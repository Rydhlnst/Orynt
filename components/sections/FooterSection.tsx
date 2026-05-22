import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { BookOpen, House, Shield } from "lucide-react";
import { oryntContent } from "@/data/orynt-content";

export function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative z-30 scroll-mt-20 isolate overflow-hidden bg-[#121212] text-foreground md:scroll-mt-24"
    >
      <div className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--text-primary)_10%,transparent)_0%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--text-primary)_10%,transparent)_0%,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent_0%,color-mix(in_srgb,var(--text-primary)_7%,transparent)_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9vw] top-1/2 z-0 hidden -translate-y-1/2 select-none md:block"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontSize: "clamp(8rem, 18vw, 18rem)",
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.07em",
          color: "color-mix(in srgb, currentColor 8%, transparent)",
          height: "100%",
        }}
      >
        {oryntContent.footer.brand}
      </div>

      <div className="layout-shell relative z-10 flex min-h-[560px] flex-col justify-between py-16 md:min-h-[640px] md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/Oryntcore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[color:var(--surface-2)]/78 text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--surface-3)]"
                aria-label="X Official"
              >
                <FaXTwitter className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/documentation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[color:var(--surface-2)]/78 text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--surface-3)]"
                aria-label="Documentation"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#top"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[color:var(--surface-2)]/78 text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--surface-3)]"
                aria-label="Go to top"
              >
                <House className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <h2 className="mt-10 max-w-xl text-[clamp(2rem,4.8vw,4.4rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] text-foreground/95">
              One operating system
              <br />
              for AI agent labor.
            </h2>
          </div>

          <div className="grid gap-8 text-sm text-[color:var(--text-dim)] sm:grid-cols-3 md:text-base">
            <div>
              <p className="mb-3 font-semibold text-[color:var(--text-primary)]">Company</p>
              <div className="space-y-2">
                <p>{oryntContent.footer.brand}</p>
                <p>{oryntContent.footer.subtitle}</p>
                <Link href="#top" className="transition-colors hover:text-[color:var(--text-primary)]">
                  Opening Statement
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-3 font-semibold text-[color:var(--text-primary)]">Legal</p>
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  All rights reserved
                </p>
                <p>{oryntContent.footer.bottomText}</p>
              </div>
            </div>

            <div>
              <p className="mb-3 font-semibold text-[color:var(--text-primary)]">Resources</p>
              <div className="space-y-2">
                <Link href="/documentation" className="transition-colors hover:text-[color:var(--text-primary)]">
                  Documentation
                </Link>
                <Link
                  href="https://x.com/Oryntcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-[color:var(--text-primary)]"
                >
                  X {"<::>"} Official
                </Link>
                <p>{oryntContent.closingStatement.lines[0]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[color:var(--border-subtle)]/70 pt-6 text-sm text-[color:var(--text-secondary)] md:flex-row md:items-center">
          <p className="font-medium">{oryntContent.footer.brand}</p>
          <p>
            (C) {year} {oryntContent.footer.brand}. {oryntContent.footer.subtitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
