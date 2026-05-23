"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const jumpTo = (target: string) => {
    window.location.hash = target;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex h-20 w-full max-w-[92%] items-center justify-between md:h-24 md:max-w-[85%]">
        {/* Logo */}
        <Link
          href="#top"
          aria-label="Go to top"
          className="group inline-flex items-center gap-3"
        >
          <span className="relative flex h-16 w-16 items-center justify-center">
            <Image
              src="/orynt-mark.png"
              alt="Orynt mark"
              width={48}
              height={48}
              className="w-16 h-16 object-contain"
              priority
            />
          </span>

          <span className="hidden text-sm font-medium tracking-[0.32em] text-[color:var(--text-primary)] md:inline">
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
              className="hidden h-10 rounded-full border border-[color:var(--glass-button-border)] bg-[color:var(--glass-button-bg)] px-5 text-xs font-medium text-[color:var(--text-primary)] shadow-[var(--glass-button-shadow)] backdrop-blur-md transition-colors hover:bg-[color:var(--surface-2)] hover:text-[color:var(--text-primary)] sm:inline-flex md:text-sm"
            >
              Documentation
            </Button>
          </Link>
          <Link
            href="https://pump.fun/coin/8qwLsrWU9VhWXEpFhK5jH9EWxeMNnaGYNzr5CjFcpump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              // size="sm"
              className="h-9 whitespace-nowrap rounded-full border border-[color:var(--glass-button-border)] bg-[color:var(--glass-button-bg)] px-3 text-[11px] font-medium text-[color:var(--text-primary)] shadow-[var(--glass-button-shadow)] backdrop-blur-md transition-colors hover:bg-[color:var(--surface-2)] hover:text-[color:var(--text-primary)] sm:h-10 sm:px-5 sm:text-xs md:text-sm"
            >
              <Image
                src="/pump-fun.svg"
                alt="Pump.fun logo"
                width={16}
                height={16}
                className="mr-2 inline-block h-4 w-4 object-contain"
                priority
              />
              Pump Fun
            </Button>
          </Link>

        </div>
      </nav>
    </header>
  );
}
