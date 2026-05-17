"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown, Menu, Moon, PanelLeft, Sun } from "lucide-react";

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
import { tableOfContents } from "@/data/documentation-content";
import { BookOpen, FileText } from "lucide-react";

type SidebarContentProps = {
  mobile?: boolean;
};

const quickLinks = [
  { title: "Main Website", href: "/" },
  { title: "Documentation Start", href: "#opening-statement" },
];

const documentationNav = [
  {
    label: "Thesis",
    icon: BookOpen,
    items: tableOfContents.map((item) => ({
      title: item.title,
      href: `#${item.id}`,
    })),
  },
  {
    label: "Reference",
    icon: FileText,
    items: [{ title: "Closing Statement", href: "#closing-statement" }],
  },
];

function SidebarContent({ mobile = false }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-4 px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="#what-is-orynt" className="group inline-flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center bg-card/40 p-1 shadow-sm transition-colors group-hover:border-foreground/40">
              <Image
                src="/orynt-mark.png"
                alt="Orynt mark"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="text-sm font-semibold tracking-[0.14em] text-foreground">
              ORYNT
            </span>
          </Link>
          {!mobile ? (
            <Button
              variant="ghost"
              className="h-10 w-10 px-0 text-muted-foreground"
              aria-label="Collapse sidebar"
            >
              <PanelLeft className="size-10" />
            </Button>
          ) : null}
        </div>

        <Input
          type="search"
          placeholder="Search section..."
          className="h-10 border-border bg-background text-sm"
          aria-label="Search section"
        />

        <div className="space-y-2">
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href} className="block">
              <Button
                variant="outline"
                className="h-10 w-full justify-between border-border bg-background text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {link.title}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          ))}
        </div>
      </div>

      <Separator />

      <ScrollArea className="min-h-0 flex-1 px-3 py-4">
        <nav aria-label="Documentation navigation" className="space-y-6">
          {documentationNav.map((group, groupIndex) => (
            <div key={group.label} className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <group.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    {group.label}
                  </span>
                </div>
                {groupIndex === 0 ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : null}
              </div>
              <div className="space-y-1 border-l border-border pl-3">
                {group.items.map((item, itemIndex) => (
                  <Link key={`${item.title}-${itemIndex}`} href={item.href} className="block">
                    <Button
                      variant="ghost"
                      className="h-auto w-full justify-start px-2 py-1.5 text-left text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>

      <Separator />

      <div className="px-4 py-4">
        <div className="flex items-center justify-between rounded-md border border-border bg-muted/40 p-1">
          <Button
            type="button"
            variant="ghost"
            className="h-9 flex-1 justify-center px-0 text-muted-foreground"
            aria-label="Light mode"
          >
            <Sun className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-9 flex-1 justify-center px-0 text-foreground"
            aria-label="Dark mode"
          >
            <Moon className="h-5 w-5" />
          </Button>
        </div>
        <Badge className="mt-3 w-full justify-center border-border text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Documentation
        </Badge>
      </div>
    </div>
  );
}

export function DocumentationSidebar() {
  return (
    <>
      <aside className="hidden h-screen border-r border-border md:block">
        <SidebarContent />
      </aside>

      <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background px-4 md:hidden">
        <Link href="#what-is-orynt" className="group inline-flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center bg-card/40 p-1 shadow-sm transition-colors group-hover:border-foreground/40">
            <Image
              src="/orynt-mark.png"
              alt="Orynt mark"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-foreground">ORYNT</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 border-border px-3 text-xs">
            Search
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="h-10 w-10 border-border px-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SheetHeader className="sr-only">
                <SheetTitle>Documentation menu</SheetTitle>
              </SheetHeader>
              <SidebarContent mobile />
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
