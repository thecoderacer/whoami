"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  CLIENT_COMMANDS,
  QUICK_COMMANDS,
  normalise,
  resolve,
  type Line,
} from "@/data/terminal";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const PROMPT = "visitor@portfolio:~$";

const WELCOME: Line[] = [
  { tone: "accent", content: "Anggara Pratama — portfolio terminal" },
  { tone: "muted", content: "Type `help` for available commands, or tap one below." },
  { tone: "muted", content: "" },
];

const TONE_CLASS: Record<Line["tone"], string> = {
  text: "text-dusk-blue-900",
  muted: "text-dusk-blue-700",
  accent: "text-tropical-teal-500",
  highlight: "text-neon-ice-500",
  // The one colour outside the palette, used semantically for errors.
  error: "text-red-300",
};

/**
 * A working command terminal. Real input handling, real output — no fake
 * typing animation.
 *
 * The input is a genuine text field, so it is keyboard-accessible by default.
 * Clickable chips run the same commands for visitors on mobile.
 */
export function Terminal() {
  const [output, setOutput] = useState<Line[]>(WELCOME);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  // Keep the newest output in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: reduced ? "auto" : "smooth" });
  }, [output, reduced]);

  const submit = useCallback((raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setHistory((prev) => [trimmed, ...prev].slice(0, 50));
    setHistoryIndex(-1);
    setInput("");

    if ((CLIENT_COMMANDS as readonly string[]).includes(normalise(trimmed))) {
      setOutput([]);
      return;
    }

    const command = resolve(trimmed);
    const body: Line[] = command
      ? command.run()
      : [
          { tone: "error", content: `command not found: ${trimmed}` },
          { tone: "muted", content: "Type `help` to see available commands." },
        ];

    setOutput((prev) => [
      ...prev,
      { tone: "muted", content: `${PROMPT} ${trimmed}` },
      ...body,
      { tone: "muted", content: "" },
    ]);
  }, []);

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = historyIndex - 1;
      if (next < 0) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }
      setHistoryIndex(next);
      setInput(history[next]);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-dusk-blue-500/50 bg-prussian-blue-400/85 shadow-2xl shadow-prussian-blue-100/30 backdrop-blur-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-dusk-blue-500/40 bg-space-indigo-500/50 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-tropical-teal-500/70" />
        <span className="size-2.5 rounded-full bg-dusk-blue-500/70" />
        <span className="size-2.5 rounded-full bg-dusk-blue-500/40" />
        <span className="ml-2 font-mono text-[11px] text-dusk-blue-700">
          portfolio — bash
        </span>
      </div>

      {/* Output */}
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="h-60 overflow-y-auto px-4 py-3 font-mono text-[12.5px] leading-relaxed sm:h-80"
      >
        {output.map((entry, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap break-words ${TONE_CLASS[entry.tone]}`}
          >
            {entry.content || " "}
          </div>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit(input);
        }}
        className="flex items-center gap-2 border-t border-dusk-blue-500/40 bg-space-indigo-500/30 px-4 py-3"
      >
        <label htmlFor="terminal-input" className="sr-only">
          Terminal command input
        </label>
        <span aria-hidden="true" className="font-mono text-[12.5px] text-tropical-teal-500">
          {PROMPT}
        </span>
        <input
          id="terminal-input"
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="type a command…"
          className="min-w-0 flex-1 bg-transparent font-mono text-[12.5px] text-neon-ice-500 caret-neon-ice-500 outline-none placeholder:text-dusk-blue-600"
        />
      </form>

      {/* Chips — typing is awkward on a phone */}
      <div className="flex flex-wrap gap-2 border-t border-dusk-blue-500/40 px-4 py-3">
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => submit(cmd)}
            className="rounded-md border border-dusk-blue-500/50 bg-space-indigo-500/40 px-2.5 py-1 font-mono text-[11px] text-dusk-blue-800 transition-colors hover:border-tropical-teal-500/60 hover:text-neon-ice-500"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
