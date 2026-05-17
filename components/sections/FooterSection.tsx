"use client";

import Link from "next/link";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { AbstractOrbit } from "@/components/shared/AbstractOrbit";
import { oryntContent } from "@/data/orynt-content";

export function FooterSection() {
  return (
    <footer id="footer" className="relative scroll-mt-20 overflow-hidden bg-background text-foreground md:scroll-mt-24">
      <div className="layout-shell relative z-10 flex min-h-[calc(100svh-5rem)] flex-col pb-10 pt-24 md:min-h-[calc(100svh-6rem)] md:pb-12 md:pt-28">
        <div className="grid flex-1 gap-12 lg:grid-cols-[1fr_300px]">
          <div className="relative">
            <ScrollAnimation
              as="h2"
              className="max-w-4xl text-[clamp(2.2rem,4.8vw,5.2rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.05em] text-foreground/95"
            >
              One operating system
              <br />
              for AI agent labor.
            </ScrollAnimation>

            <div className="pointer-events-none mt-16 flex justify-center lg:mt-24">
              <div className="relative h-72 w-72 md:h-80 md:w-80">
                <AbstractOrbit className="inset-0 opacity-45" />
              </div>
            </div>
          </div>

          <aside className="flex flex-col items-end justify-start gap-14 pt-2 text-right">
            <ScrollAnimation as="div" className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {"/"}
                {"//"} Community
              </p>
              <div className="space-y-3 text-lg font-bold uppercase tracking-[0.1em] text-foreground/95 md:text-xl">
                <Link
                  href="https://x.com/Oryntcore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-foreground"
                >
                  X / Official
                </Link>
                <Link href="#" className="block transition-colors hover:text-foreground">
                  Telegram
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation as="div" className="space-y-4" delay={0.08}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {"/"}
                {"//"} Question
              </p>
              <a
                href="mailto:support@orynt.ai"
                className="text-lg font-bold uppercase tracking-[0.1em] text-foreground/95 transition-colors hover:text-foreground md:text-xl"
              >
                support@orynt.ai
              </a>
            </ScrollAnimation>
          </aside>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center gap-3 pb-10 text-center">
          <div className="rounded-full border border-border/60 bg-card/40 px-6 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            CA: GYSHDDoVtFNdZR72SSkmJcKWFVh9ndhMdYoDKdg8pump
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (C) ORYNT 2026 * ADAPTIVE INFRASTRUCTURE FOR AUTONOMOUS FINANCE
          </p>
        </div>
      </div>

      <div
        data-hero-brand-bg
        className="pointer-events-none absolute bottom-[-7vw] left-1/2 -z-0 hidden -translate-x-1/2 select-none text-[24vw] font-semibold leading-none tracking-[-0.07em] text-foreground/[0.08] md:block"
      >
        {oryntContent.hero.title}
      </div>
    </footer>
  );
}

