'use client';

import { cn } from '@/lib/utils';
import { motion, type Variants } from 'motion/react';
import type React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';
type AsTag =
  | 'div'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'a'
  | 'p'
  | 'section'
  | 'figure'
  | 'button'
  | 'article';

const generateVariants = (direction: Direction): Variants => {
  const value = direction === 'right' || direction === 'down' ? 20 : -20;
  const transition = {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  };

  if (direction === 'left' || direction === 'right') {
    return {
      hidden: { filter: 'blur(10px)', opacity: 0, x: value },
      visible: {
        filter: 'blur(0px)',
        opacity: 1,
        x: 0,
        transition,
      },
    };
  }

  return {
    hidden: { filter: 'blur(10px)', opacity: 0, y: value },
    visible: {
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition,
    },
  };
};

const defaultViewport = {
  once: false,
  amount: 0.3,
  margin: '0px 0px -200px 0px',
};

type ScrollVariants = Variants;

interface ScrollElementProps {
  children: React.ReactNode;
  className?: string;
  variants?: ScrollVariants;
  viewport?: {
    amount?: number;
    margin?: string;
    once?: boolean;
  };
  delay?: number;
  direction?: Direction;
  as?: AsTag;
  [key: string]: unknown;
}

export function ScrollAnimation({
  children,
  className,
  variants,
  viewport = defaultViewport,
  delay = 0,
  direction = 'down',
  as: Component = 'div',
  ...props
}: ScrollElementProps) {
  const baseVariants = variants || generateVariants(direction);
  const baseVisible = baseVariants.visible as Record<string, unknown>;
  const modifiedVariants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVisible,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay,
      },
    },
  };

  const MotionComponent = motion[Component] as typeof motion.div;

  return (
    <MotionComponent
      whileInView='visible'
      initial='hidden'
      variants={modifiedVariants}
      viewport={viewport}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
