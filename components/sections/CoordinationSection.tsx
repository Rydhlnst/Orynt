"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";

const ITEMS = [
  {
    id: "item-01",
    label: "01 / ADAPTIVE LIQUIDITY",
    statement: "Liquidity must evolve with distributed capital flow.",
    description:
      "Dynamic infrastructure layers designed to evolve alongside changing market conditions and distributed capital flow.",
  },
  {
    id: "item-02",
    label: "02 / MACHINE-NATIVE EXECUTION",
    statement: "Autonomous systems need execution-native infrastructure.",
    description:
      "Infrastructure direction focused on scalable interaction between autonomous systems and decentralized financial environments.",
  },
  {
    id: "item-03",
    label: "03 / AUTONOMOUS COORDINATION",
    statement: "The next layer is coordination, not isolated participation.",
    description:
      "Coordinated systems designed to support adaptive participation, intelligent execution, and evolving network behavior.",
  },
  {
    id: "item-04",
    label: "04 / INFRASTRUCTURE PHILOSOPHY",
    statement: "Liquidity was never the core problem. Coordination was.",
    description:
      "ORYNT approaches infrastructure as an evolving coordination layer rather than a fixed financial system.",
  },
];

export function CoordinationSection() {
  const [openId, setOpenId] = useState(ITEMS[0].id);

  return (
    <section
      id="coordination"
      className="relative min-h-screen overflow-hidden bg-background py-20 md:py-24 lg:py-28"
    >
      <div className="layout-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <div className="relative flex flex-col items-start">
          <ScrollAnimation
            as="div"
            direction="up"
            delay={0.06}
            aria-hidden="true"
            className="absolute -left-5 top-1 hidden h-[58vh] w-px lg:block"
          >
            <div className="absolute inset-0 bg-border/70" />
            <div className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-border bg-background" />
          </ScrollAnimation>

          <ScrollAnimation as="div">
            <SectionLabel className="uppercase tracking-[0.3em] text-muted-foreground">
              Coordination Layers
            </SectionLabel>
          </ScrollAnimation>

          <h2 className="mt-8 text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-5xl lg:text-6xl">
            <ScrollAnimation as="span" className="block">
              The next financial layer
            </ScrollAnimation>
            <ScrollAnimation as="span" className="block" delay={0.08}>
              will coordinate
            </ScrollAnimation>
            <ScrollAnimation as="span" className="block" delay={0.16}>
              autonomous capital.
            </ScrollAnimation>
          </h2>

          <ScrollAnimation
            as="p"
            delay={0.2}
            className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Static liquidity systems were built for reactive markets. ORYNT explores adaptive coordination layers for machine-native execution, distributed capital flow, and evolving decentralized financial systems.
          </ScrollAnimation>
        </div>

        <div className="self-start lg:justify-self-end lg:w-[min(100%,640px)]">
          <div className="space-y-2 lg:flex lg:flex-col lg:items-end">
            {ITEMS.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <ScrollAnimation
                  as="article"
                  key={item.id}
                  delay={0.08 + index * 0.08}
                  className="relative w-full pb-2 lg:text-right"
                >
                  <div aria-hidden="true" className="h-px w-full bg-border/60" />
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-6 py-5 text-left lg:text-right"
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-content`}
                  >
                    <div className="lg:order-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{item.label}</p>
                      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground md:text-xl">
                        {item.statement}
                      </h3>
                    </div>
                    <Plus
                      className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 lg:order-1 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    />
                  </button>
                  <div
                    id={`${item.id}-content`}
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="overflow-hidden pb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
