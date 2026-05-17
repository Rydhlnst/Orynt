"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; title: string; content: string; kicker?: string };

export function Accordion({ items, className }: { items: Item[]; className?: string }) {
  const [open, setOpen] = React.useState(items[0]?.id ?? "");

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <article key={item.id} className="border-t border-[color:var(--border-subtle)] pt-6">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? "" : item.id)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={isOpen}
            >
              <div>
                {item.kicker ? <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-faint)]">{item.kicker}</p> : null}
                <h3 className="mt-3 text-xl font-bold leading-tight">{item.title}</h3>
              </div>
              <span className={cn("text-2xl text-[color:var(--text-dim)] transition-transform", isOpen && "rotate-45")}>+</span>
            </button>
            {isOpen ? <p className="mt-5 text-sm leading-7 text-[color:var(--text-dim)]">{item.content}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
