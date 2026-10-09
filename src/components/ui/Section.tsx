import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  /** Small label above the heading. */
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Standard section shell: consistent width, spacing, and heading hierarchy.
 * Each section renders its own `h2`, keeping the document outline valid.
 */
export function Section({ id, title, eyebrow, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 py-16 sm:py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <header className="mb-8 sm:mb-10">
          {eyebrow ? (
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-tropical-teal-500">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
