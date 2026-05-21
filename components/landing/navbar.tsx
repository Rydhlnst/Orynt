"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const jumpTo = (target: string) => {
    window.location.hash = target;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex h-20 w-full max-w-[92%] items-center justify-between md:h-24 md:max-w-[85%]">
        {/* Logo */}
        <Link
          href="#top"
          aria-label="Go to top"
          className="group inline-flex items-center gap-3"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[rgba(255,255,255,0.08)] p-1 shadow-[0_8px_24px_rgba(0,0,0,0.3)] backdrop-blur-md transition-colors group-hover:border-white/35">
            <Image
              src="/orynt-mark.png"
              alt="Orynt mark"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
          </span>

          <span className="hidden text-sm font-medium tracking-[0.32em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] md:inline">
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
              className="h-10 rounded-full border border-white/20 bg-[rgba(255,255,255,0.08)] px-5 text-xs font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_28px_rgba(0,0,0,0.32)] backdrop-blur-md transition-colors hover:bg-[rgba(255,255,255,0.14)] hover:text-white md:text-sm"
            >
              Documentation
            </Button>
          </Link>

        </div>
      </nav>
    </header>
  );
}
