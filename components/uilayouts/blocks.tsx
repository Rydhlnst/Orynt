'use client';
import { cn } from '@/lib/utils';
import type React from 'react';
import { type JSX, useEffect, useState } from 'react';

function Blocks({
  activeDivs,
  divClass,
  classname,
  activeDivsClass,
  containerRef,
}: {
  activeDivsClass?: string;
  activeDivs?: Record<number, Set<number>>;
  divClass?: string;
  classname?: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [blocks, setBlocks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const updateBlocks = () => {
      const container = containerRef.current;
      if (container) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const blockSize = Math.max(56, containerWidth * 0.06);

        const columns = Math.max(1, Math.ceil(containerWidth / blockSize));
        const rows = Math.max(1, Math.ceil(containerHeight / blockSize));

        const newBlocks = Array.from({ length: columns }, (_, columnIndex) => (
          <div key={columnIndex} style={{ width: `${blockSize}px`, height: '100%' }}>
            {Array.from({ length: rows }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className={cn(
                  `w-full border border-[color:var(--grid-stroke)] ${
                    activeDivs?.[columnIndex]?.has(rowIndex) ? `${activeDivsClass}` : ''
                  }`,
                  divClass
                )}
                style={{ height: `${blockSize}px` }}
              ></div>
            ))}
          </div>
        ));

        setBlocks(newBlocks);
      }
    };

    updateBlocks();
    window.addEventListener('resize', updateBlocks);

    return () => window.removeEventListener('resize', updateBlocks);
  }, [activeDivs, activeDivsClass, divClass, containerRef]);

  return (
    <div className={cn('flex h-full overflow-hidden top-0 -inset-0 left-0 absolute', classname)}>
      {blocks}
    </div>
  );
}

export default Blocks;
