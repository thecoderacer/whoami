import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  /** Adds hover lift + glow. Use for cards that link somewhere or invite attention. */
  interactive?: boolean;
  className?: string;
};

/**
 * Raised surface. The hover treatment animates only `transform` and
 * `border-color`, both cheap — no layout-triggering properties.
 */
export function Card({ children, interactive = false, className = "" }: CardProps) {
  const base =
    "relative rounded-xl border border-dusk-blue-500/40 bg-space-indigo-500/40 p-5 sm:p-6";
  const hover = interactive
    ? "transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-1 hover:border-tropical-teal-500/60 hover:bg-space-indigo-500/70"
    : "";

  return <div className={`${base} ${hover} ${className}`}>{children}</div>;
}
