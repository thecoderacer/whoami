"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

// Cache the MediaQueryList — `getSnapshot` runs on every render and must not
// allocate a new object each time.
let cached: MediaQueryList | null = null;

function getMediaQueryList(): MediaQueryList {
  if (!cached) cached = window.matchMedia(QUERY);
  return cached;
}

function subscribe(onChange: () => void): () => void {
  const list = getMediaQueryList();
  list.addEventListener("change", onChange);
  return () => list.removeEventListener("change", onChange);
}

const getSnapshot = (): boolean => getMediaQueryList().matches;

/** Server render assumes motion is allowed; the client corrects on hydration. */
const getServerSnapshot = (): boolean => false;

/**
 * Tracks the `prefers-reduced-motion` setting.
 *
 * Uses `useSyncExternalStore` because this is exactly that: subscribing to an
 * external store. It also avoids a setState-in-effect, which would cause a
 * cascading render on mount.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
