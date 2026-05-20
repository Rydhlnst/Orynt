"use client";

import { useRef } from "react";
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
  isFirst: boolean;
};

function StackedPanel({ children, index, total, progress, backgroundClassName, isFirst }: StackedPanelProps) {
  const start = index * 0.16;
  const end = Math.min(1, start + 0.38);
  const targetScale = 1 - (total - index - 1) * 0.018;
  const scale = useTransform(progress, [start, end], [1, targetScale]);

  return (
    <div className={`sticky z-10 min-h-screen ${isFirst ? "top-24 md:top-28" : "top-20 md:top-24"}`}>
      <motion.div
        style={{ scale, top: `calc(${index * 22}px)` }}
        className={`relative w-screen origin-top overflow-hidden ${backgroundClassName}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
