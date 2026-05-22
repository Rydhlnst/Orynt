"use client";

import { useEffect, useState } from "react";

export function GlobalScrollTracker() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      setProgress(Math.min(1, Math.max(0, scrollTop / maxScroll)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-4 top-1/2 z-80 hidden h-[33vh] w-px -translate-y-1/2 md:block"
    >
      <div className="absolute inset-0 bg-[color:var(--text-faint)]" />
      <div className="absolute left-0 right-0 top-0 bg-[color:var(--text-primary)]" style={{ height: `${progress * 100}%` }} />
    </div>
  );
}
