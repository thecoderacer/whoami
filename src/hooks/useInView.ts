"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Fraction of the element that must be visible. */
  threshold?: number;
  /** Stop observing after the first intersection. Default true. */
  once?: boolean;
};

/**
 * Reports whether an element has entered the viewport.
 *
 * Uses IntersectionObserver rather than a scroll listener — scroll handlers
 * fire dozens of times per second, this fires twice.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  once = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver: show the content rather than hide it forever.
    // Deferred to the next frame so we aren't setting state synchronously
    // inside the effect, which would cascade a second render on mount.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
