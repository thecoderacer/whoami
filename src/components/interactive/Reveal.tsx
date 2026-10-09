"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
};

/**
 * Fades and lifts content as it scrolls into view.
 *
 * Animates only `opacity` and `transform` — both GPU-composited, so no layout
 * is recalculated per frame. Disabled entirely under `prefers-reduced-motion`.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();
  const shown = reduced || inView;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translate3d(0, 16px, 0)",
        transition: reduced
          ? undefined
          : `opacity 450ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 450ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
