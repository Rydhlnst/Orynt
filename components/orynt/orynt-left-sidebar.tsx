"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Search, Sun } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { documentSections } from "@/data/orynt-thesis";
import { cn } from "@/lib/utils";
import Image from "next/image";

type NavProps = {
  compact?: boolean;
};

function NavContent({ compact = false }: NavProps) {
  const [activeSection, setActiveSection] = useState("#opening-statement");
  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = window.localStorage.getItem("orynt-theme-mode");
    const nextTheme = savedTheme === "light" ? "light" : "dark";
    setThemeMode(nextTheme);

    if (nextTheme === "light") {
      root.style.setProperty("color-scheme", "light");
      root.style.setProperty("--background", "#f3f5f8");
      root.style.setProperty("--foreground", "#1b1f2a");
      root.style.setProperty("--primary", "#1b1f2a");
      root.style.setProperty("--secondary", "#4b5565");
      root.style.setProperty("--accent", "#1f2937");
      root.style.setProperty("--link", "#1f2937");
      root.style.setProperty("--text-primary", "#1b1f2a");
      root.style.setProperty("--text-secondary", "#4b5565");
      root.style.setProperty("--surface-1", "color-mix(in srgb, var(--background) 96%, black)");
      root.style.setProperty("--surface-2", "color-mix(in srgb, var(--background) 90%, black)");
      root.style.setProperty("--surface-3", "color-mix(in srgb, var(--background) 84%, black)");
      root.style.setProperty("--border-subtle", "color-mix(in srgb, var(--text-primary) 14%, transparent)");
      root.style.setProperty("--border-strong", "color-mix(in srgb, var(--text-primary) 20%, transparent)");
      root.style.setProperty("--accent-hover", "color-mix(in srgb, var(--background) 84%, black)");
      root.style.setProperty("--accent-hover-foreground", "var(--text-primary)");
      return;
    }

    root.style.removeProperty("color-scheme");
    root.style.removeProperty("--background");
    root.style.removeProperty("--foreground");
    root.style.removeProperty("--primary");
    root.style.removeProperty("--secondary");
    root.style.removeProperty("--accent");
    root.style.removeProperty("--link");
    root.style.removeProperty("--text-primary");
    root.style.removeProperty("--text-secondary");
    root.style.removeProperty("--surface-1");
    root.style.removeProperty("--surface-2");
    root.style.removeProperty("--surface-3");
    root.style.removeProperty("--border-subtle");
    root.style.removeProperty("--border-strong");
    root.style.removeProperty("--accent-hover");
    root.style.removeProperty("--accent-hover-foreground");
  }, [themeMode]);

  const toggleThemeMode = () => {
    const nextTheme = themeMode === "dark" ? "light" : "dark";
    setThemeMode(nextTheme);
    window.localStorage.setItem("orynt-theme-mode", nextTheme);
  };

  useEffect(() => {
    const validHrefs = new Set(documentSections.map((section) => section.href));

    const syncFromHash = () => {
      const hash = window.location.hash;
      if (validHrefs.has(hash)) {
        setActiveSection(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const id = visible[0].target.getAttribute("id");
        if (!id) return;

        const href = `#${id}`;
        if (validHrefs.has(href)) {
          setActiveSection(href);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    documentSections.forEach((section) => {
      const id = section.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
      observer.disconnect();
    };
  }, []);

  const filteredSections = documentSections.filter((section) =>
    section.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <div className="flex h-full flex-col">
      <div className="space-y-3 px-4 py-5">
        <Link href="/" aria-label="Back to landing page" className="group inline-flex w-fit items-center gap-2">
          <Image
            src="/orynt-mark.png"
            alt="Orynt mark"
            width={20}
            height={20}
            className="h-8 w-8 object-contain opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="text-sm font-semibold tracking-[0.14em] text-foreground">ORYNT</span>
        </Link>
        <p className="text-xs leading-5 text-muted-foreground">Adaptive Liquidity Infrastructure</p>
        <Badge className="w-fit border-border text-[10px] uppercase tracking-[0.2em]">
          Research Thesis
        </Badge>
        <div className="relative pt-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search section..."
            className="h-9 pl-9"
            aria-label="Search section"
          />
        </div>
      </div>
      <Separator />
      <ScrollArea className="min-h-0 flex-1 px-3 py-4">
        <nav aria-label="ORYNT document navigation" className="space-y-1">
          {filteredSections.map((section) => (
            <Link key={section.href} href={section.href} className="block">
              <Button
                variant="ghost"
                onClick={() => setActiveSection(section.href)}
                className={cn(
                  "h-auto w-full justify-start px-3 py-2 text-left text-sm text-muted-foreground hover:bg-accent hover:text-foreground",
                  activeSection === section.href &&
                    "bg-foreground/12 text-foreground ring-1 ring-foreground/15",
                )}
              >
                {section.title}
              </Button>
            </Link>
          ))}
          {filteredSections.length === 0 ? (
            <p className="px-3 py-2 text-sm text-muted-foreground">No section found.</p>
          ) : null}
        </nav>
      </ScrollArea>
      {!compact ? (
        <>
          <Separator />
          <div className="px-4 py-4">
            <Button
              type="button"
              variant="outline"
              onClick={toggleThemeMode}
              className="w-full justify-between"
              aria-label={`Switch to ${themeMode === "dark" ? "light" : "dark"} mode`}
            >
              <span>{themeMode === "dark" ? "Dark Mode" : "Light Mode"}</span>
              {themeMode === "dark" ? (
                <Moon className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Sun className="h-4 w-4" aria-hidden="true" />
              )}
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
}

export function OryntLeftSidebar() {
  return (
    <>
      <aside className="hidden h-screen border-r border-border bg-background lg:block lg:sticky lg:top-0">
        <NavContent />
      </aside>

      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background px-4 lg:hidden">
        <Link
          href="/"
          aria-label="Go to LP"
          className="group inline-flex items-center gap-3"
        >
          <span className="relative flex h-12 w-12 items-center justify-center  bg-card/40 p-1 shadow-sm transition-colors group-hover:border-foreground/40">
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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              aria-label="Open document navigation"
              className="h-9 w-9 px-0"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[86vw] p-0 sm:max-w-sm">
            <SheetHeader className="sr-only">
              <SheetTitle>ORYNT Navigation</SheetTitle>
            </SheetHeader>
            <NavContent compact />
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
