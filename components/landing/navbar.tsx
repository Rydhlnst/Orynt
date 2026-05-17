"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const jumpTo = (target: string) => {
    window.location.hash = target;
  };

  return (
    <header className="sticky top-0 z-50 w-full  bg-background/60 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-[92%] items-center justify-between md:h-24 md:max-w-[85%]">
        {/* Logo */}
        <Link
          href="#top"
          aria-label="Go to top"
          className="group inline-flex items-center gap-3"
        >
          <span className="relative flex h-12 w-12 items-center justify-center  bg-card/40 p-1 transition-colors group-hover:border-foreground/40">
            <Image
              src="/orynt-mark.png"
              alt="Orynt mark"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
          </span>

          <span className="hidden text-sm font-medium tracking-[0.32em] text-foreground/80 md:inline">
            ORYNT
          </span>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href={"/documentation"}>
            <Button
              variant="outline"
              // size="sm"
              onClick={() => jumpTo("documentation")}
              className="h-10 rounded-full border-border bg-card/30 px-5 text-xs font-medium text-foreground/80 shadow-none backdrop-blur-xl transition-colors hover:bg-accent hover:text-accent-foreground md:text-sm"
            >
              Documentation
            </Button>
          </Link>

          <Button
            variant="default"
            // size="sm"
            onClick={() => jumpTo("open-app")}
            className="h-10 rounded-full px-5 text-xs font-medium shadow-none md:text-sm"
          >
            Open OS
          </Button>
        </div>
      </nav>
    </header>
  );
}
