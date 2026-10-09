import type { ReactNode } from "react";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  /** Adds target/rel for off-site links. */
  external?: boolean;
  className?: string;
};

const VARIANTS = {
  primary:
    "bg-tropical-teal-500 text-prussian-blue-500 hover:bg-neon-ice-500 font-semibold",
  outline:
    "border border-dusk-blue-500 text-dusk-blue-900 hover:border-tropical-teal-500 hover:text-tropical-teal-700",
  ghost: "text-dusk-blue-800 hover:text-neon-ice-500",
} as const;

/** A link styled as a button. Renders an `<a>`, not a `<button>` — it navigates. */
export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: LinkButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      {...externalProps}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
