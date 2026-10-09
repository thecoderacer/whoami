"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Sticky navigation.
 *
 * Deliberately no scroll listener — the bar is always translucent, so there is
 * no "scrolled" state to track and nothing firing on every frame.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-dusk-blue-500/30 bg-prussian-blue-500/80 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-sm text-neon-ice-500 transition-colors hover:text-tropical-teal-500"
        >
          ~/thecoderacer
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 sm:flex">
          {site.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-dusk-blue-800 transition-colors hover:text-neon-ice-500"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 rounded-md p-2 text-dusk-blue-800 transition-colors hover:text-neon-ice-500 sm:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            aria-hidden="true"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          >
            {open ? (
              <>
                <path d="M5 5l10 10" />
                <path d="M15 5L5 15" />
              </>
            ) : (
              <>
                <path d="M3 6h14" />
                <path d="M3 10h14" />
                <path d="M3 14h14" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <ul
          id="mobile-menu"
          className="border-t border-dusk-blue-500/30 bg-prussian-blue-500/95 px-5 py-2 sm:hidden"
        >
          {site.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm text-dusk-blue-800 transition-colors hover:text-neon-ice-500"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
