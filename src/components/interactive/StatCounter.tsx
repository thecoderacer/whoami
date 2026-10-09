"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { Stat } from "@/data/site";

const DURATION_MS = 1300;

/**
 * Counts up to its target once scrolled into view.
 *
 * `animated === null` means "not counting" — in that state the final value is
 * rendered directly. That matters for two cases: the server-rendered HTML, and
 * visitors with JavaScript disabled. Both must show the real number, never 0.
 */
export function StatCounter({ stat }: { stat: Stat }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  const reduced = usePrefersReducedMotion();
  const [animated, setAnimated] = useState<number | null>(null);

  const display = reduced || animated === null ? stat.value : animated;

  useEffect(() => {
    if (!inView || reduced) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      // easeOutCubic — fast start, settles gently on the real number.
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimated(Math.round(stat.value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    // Started from a rAF callback, not synchronously in the effect body.
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduced, stat.value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-mono text-3xl font-semibold tabular-nums text-neon-ice-500 sm:text-4xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="mt-1 text-xs leading-snug text-dusk-blue-700 sm:text-sm">
        {stat.label}
      </div>
    </div>
  );
}
