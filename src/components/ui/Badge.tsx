import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  /** `accent` for emphasis (featured stacks), `default` for the long tail. */
  variant?: "default" | "accent";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-tropical-teal-500/40 bg-tropical-teal-500/10 text-tropical-teal-700"
      : "border-dusk-blue-500/50 bg-space-indigo-500/50 text-dusk-blue-800";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none ${styles}`}
    >
      {children}
    </span>
  );
}
