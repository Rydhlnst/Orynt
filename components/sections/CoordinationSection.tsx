"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ScrollAnimation } from "@/components/uilayouts/scroll-animation";
import { oryntContent } from "@/data/orynt-content";

const ITEMS = [
  {
    id: "item-01",
    label: "01 / ADAPTIVE LIQUIDITY",
    statement: oryntContent.adaptiveLiquidity.intro,
    description: oryntContent.coordinationLayers.cards[0].description,
    coreCapabilities: oryntContent.adaptiveLiquidity.coreCapabilities,
    secondaryTitle: oryntContent.adaptiveLiquidity.secondaryTitle,
    secondaryItems: oryntContent.adaptiveLiquidity.secondaryItems,
    tagline: oryntContent.adaptiveLiquidity.tagline,
  },
  {
    id: "item-02",
    label: "02 / MACHINE-NATIVE EXECUTION",
    statement: oryntContent.machineNativeExecution.intro,
    description: oryntContent.coordinationLayers.cards[1].description,
    coreCapabilities: oryntContent.machineNativeExecution.coreCapabilities,
    secondaryTitle: oryntContent.machineNativeExecution.secondaryTitle,
    secondaryItems: oryntContent.machineNativeExecution.secondaryItems,
    tagline: oryntContent.machineNativeExecution.tagline,
  },
  {
    id: "item-03",
    label: "03 / AUTONOMOUS COORDINATION",
    statement: oryntContent.autonomousCoordination.intro,
    description: oryntContent.autonomousCoordination.description,
    coreCapabilities: oryntContent.autonomousCoordination.coreCapabilities,
    secondaryTitle: oryntContent.autonomousCoordination.secondaryTitle,
    secondaryItems: oryntContent.autonomousCoordination.secondaryItems,
    tagline: oryntContent.autonomousCoordination.tagline,
    coordinationNetwork: oryntContent.autonomousCoordination.coordinationNetwork,
    coordinationCenter: oryntContent.autonomousCoordination.coordinationCenter,
  },
];

export function CoordinationSection() {
  const [openId, setOpenId] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncDefaultOpen = () => setOpenId(mediaQuery.matches ? ITEMS[0].id : "");

    syncDefaultOpen();
    mediaQuery.addEventListener("change", syncDefaultOpen);

    return () => mediaQuery.removeEventListener("change", syncDefaultOpen);
  }, []);

  return (
    <section
      id="coordination"
      className="relative min-h-fit overflow-visible bg-transparent py-20 md:min-h-screen md:overflow-hidden md:py-24 lg:py-28"
    >
      <div className="layout-shell grid gap-12 lg:grid-cols-[40%_60%] lg:gap-12">
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
              {oryntContent.coordinationLayers.label}
            </SectionLabel>
          </ScrollAnimation>

          <h2 className="mt-8 text-4xl font-bold uppercase leading-[0.95] text-foreground md:text-5xl lg:text-6xl">
            <ScrollAnimation as="span" className="block">{oryntContent.coordinationLayers.title}</ScrollAnimation>
          </h2>

          <ScrollAnimation
            as="p"
            delay={0.2}
            className="mt-7 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            {oryntContent.coordinationLayers.description}
          </ScrollAnimation>
        </div>

        <div className="self-start lg:justify-self-end lg:w-[60vw] lg:max-w-none">
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
                      <h3 className="mt-3 text-base font-semibold leading-relaxed text-foreground md:text-lg">
                        {item.statement}
                      </h3>
                    </div>
                    <Plus
                      className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 lg:order-1 ${isOpen ? "rotate-45" : "rotate-0"}`}
                    />
                  </button>
                  <div
                    id={`${item.id}-content`}
                    className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="min-h-0 max-h-none overflow-visible pb-4 pr-1 md:max-h-[60vh] md:overflow-y-auto md:overflow-x-hidden">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <div className="mt-4 grid gap-2 md:grid-cols-2">
                        {item.coreCapabilities.map((capability, capabilityIndex) => (
                          <ScrollAnimation
                            as="article"
                            key={capability.title}
                            delay={0.03 + capabilityIndex * 0.03}
                            className="rounded-md border border-border/60 bg-card/25 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                          >
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/95">
                              {capability.title}
                            </h4>
                            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{capability.body}</p>
                          </ScrollAnimation>
                        ))}
                      </div>
                      <ScrollAnimation as="div" delay={0.08} className="mt-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{item.secondaryTitle}</p>
                        <div className="mt-2 grid gap-2 md:grid-cols-2">
                          {item.secondaryItems.map((benefit, benefitIndex) => (
                            <ScrollAnimation
                              as="article"
                              key={benefit.title}
                              delay={0.03 + benefitIndex * 0.03}
                              className="rounded-md border border-border/60 bg-card/20 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]"
                            >
                              <h5 className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground/90">{benefit.title}</h5>
                              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{benefit.body}</p>
                            </ScrollAnimation>
                          ))}
                        </div>
                      </ScrollAnimation>
                      {item.coordinationNetwork ? (
                        <ScrollAnimation as="div" delay={0.12} className="mt-4 rounded-md border border-border/60 bg-card/20 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Coordination Network</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.coordinationNetwork.map((networkItem) => (
                              <span
                                key={networkItem}
                                className="rounded border border-border/60 bg-card/25 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-foreground/90"
                              >
                                {networkItem}
                              </span>
                            ))}
                          </div>
                          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/95">
                            At the center: {item.coordinationCenter}
                          </p>
                        </ScrollAnimation>
                      ) : null}
                      <ScrollAnimation
                        as="div"
                        delay={0.14}
                        className="mt-4 border-t border-border/60 pt-3 text-sm font-semibold leading-relaxed text-foreground/95"
                      >
                        <p>{item.tagline[0]}</p>
                        <p>{item.tagline[1]}</p>
                      </ScrollAnimation>
                    </div>
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
