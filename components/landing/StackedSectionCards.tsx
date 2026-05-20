"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

type StackedSectionCardsProps = {
  sections: Array<{
    content: ReactNode;
    backgroundClassName: string;
  }>;
  className?: string;
};

export function StackedSectionCards({ sections, className }: StackedSectionCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const syncDesktopState = () => setIsDesktop(mediaQuery.matches);

    syncDesktopState();
    mediaQuery.addEventListener("change", syncDesktopState);

    return () => mediaQuery.removeEventListener("change", syncDesktopState);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className={`relative ${className ?? ""}`}>
      {sections.map((section, index) => {
        return (
          <StackedPanel
            key={`stack-section-${index}`}
            index={index}
            total={sections.length}
            progress={scrollYProgress}
            backgroundClassName={section.backgroundClassName}
            enableScale={isDesktop}
            isFirst={index === 0}
          >
            {section.content}
          </StackedPanel>
        );
      })}
    </div>
  );
}

type StackedPanelProps = {
  children: ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  backgroundClassName: string;
  enableScale: boolean;
  isFirst: boolean;
};

function StackedPanel({ children, index, total, progress, backgroundClassName, enableScale, isFirst }: StackedPanelProps) {
  const start = index * 0.16;
  const end = Math.min(1, start + 0.38);
  const targetScale = 1 - (total - index - 1) * 0.018;
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <div className={`relative min-h-fit md:sticky md:z-10 md:min-h-screen ${isFirst ? "md:top-28" : "md:top-24"}`}>
      <motion.div
        style={enableScale ? { scale, top: `calc(${index * 22}px)` } : { top: 0 }}
        className={`relative w-full origin-top overflow-hidden ${backgroundClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
