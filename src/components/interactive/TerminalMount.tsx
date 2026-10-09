"use client";

import dynamic from "next/dynamic";

/**
 * Loads the terminal on the client, after first paint.
 *
 * The terminal is an enhancement: the hero's name, pitch and contact links are
 * server-rendered and fully readable without it. Deferring its JavaScript keeps
 * it off the critical path.
 */
const Terminal = dynamic(() => import("./Terminal").then((m) => m.Terminal), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-[23.5rem] rounded-xl border border-dusk-blue-500/40 bg-prussian-blue-400/60 sm:h-[28rem]"
    />
  ),
});

export function TerminalMount() {
  return <Terminal />;
}
