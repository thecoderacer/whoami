/**
 * Terminal command registry.
 *
 * Every command reads from the same data modules the rest of the page renders,
 * so the terminal and the sections can never disagree with each other.
 */

import { site, stats } from "./site";
import { projects } from "./projects";
import { skills } from "./skills";
import { experience } from "./experience";
import { certifications } from "./certifications";
import { about } from "./about";

export type LineTone = "text" | "muted" | "accent" | "highlight" | "error";

export type Line = {
  tone: LineTone;
  content: string;
};

const line = (content: string, tone: LineTone = "text"): Line => ({ tone, content });
const blank = (): Line => line("", "muted");

/** "Jan 2020 – Oct 2021" → "2020–21". Keeps `ls` output inside the pane width. */
function compactPeriod(period: string): string {
  const years = period.match(/\d{4}/g) ?? [];
  if (years.length === 0) return period;
  if (years.length === 1) return years[0];
  const first = years[0];
  const last = years[years.length - 1];
  return first === last ? first : `${first}–${last.slice(2)}`;
}

/** "PGN (Perusahaan Gas Negara)" → "PGN". */
const shortClient = (client: string): string => client.split(" (")[0];

export type TerminalCommand = {
  /** Canonical invocation — may contain a space, e.g. "ls projects". */
  name: string;
  /** Alternative invocations that map to the same command. */
  aliases?: string[];
  description: string;
  run: () => Line[];
};

export const commands: TerminalCommand[] = [
  {
    name: "help",
    aliases: ["?", "commands"],
    description: "List available commands",
    run: () => [
      line("Available commands:", "accent"),
      blank(),
      ...commands.map((c) =>
        line(`  ${c.name.padEnd(16)}${c.description}`, "text"),
      ),
      blank(),
      line("Tip: ↑ / ↓ cycles through your command history.", "muted"),
    ],
  },

  {
    name: "whoami",
    aliases: ["me", "profile"],
    description: "Who is this",
    run: () => [
      line(`${site.name} — ${site.title}`, "highlight"),
      blank(),
      line(`  Location   ${site.location} (${site.timezone})`),
      line(`  Company    ${site.company}`),
      line(`  Status     ${site.availability}`),
      blank(),
      line(site.bio),
      blank(),
      line("Try `ls projects`, `stack` or `stats`.", "muted"),
    ],
  },

  {
    name: "ls projects",
    aliases: ["projects", "ls", "work"],
    description: "List all 10 projects",
    run: () => {
      const width = Math.max(...projects.map((p) => p.slug.length)) + 3;
      return [
        line(`${projects.length} projects`, "accent"),
        blank(),
        ...projects.map((p) =>
          line(
            ` ${(p.slug + "/").padEnd(width)}${shortClient(p.client).padEnd(17)}${compactPeriod(p.period)}`,
            p.featured ? "highlight" : "text",
          ),
        ),
        blank(),
        line("Highlighted = most recent work. Scroll to Projects for detail.", "muted"),
      ];
    },
  },

  {
    name: "cat about.md",
    aliases: ["about", "cat about", "bio"],
    description: "Print the About text",
    // No manual wrapping — the output pane wraps via CSS, so hard-wrapping here
    // just fights it and produces ragged mid-sentence breaks.
    run: () => [
      line("# about.md", "accent"),
      blank(),
      ...about.flatMap((paragraph) => [line(paragraph), blank()]),
    ],
  },

  {
    name: "stack",
    aliases: ["skills", "tech"],
    description: "Show the tech stack",
    run: () => [
      line("Technical stack", "accent"),
      blank(),
      ...skills.flatMap((group) => [
        line(`  ${group.label}`, "highlight"),
        line(`    ${group.skills.join(" · ")}`),
        blank(),
      ]),
    ],
  },

  {
    name: "stats",
    aliases: ["numbers", "metrics"],
    description: "Headline numbers",
    run: () => [
      line("By the numbers", "accent"),
      blank(),
      ...stats.map((s) =>
        line(
          `  ${`${s.prefix ?? ""}${s.value}${s.suffix ?? ""}`.padEnd(6)}${s.label}`,
          "highlight",
        ),
      ),
    ],
  },

  {
    name: "experience",
    aliases: ["work history", "cv", "resume"],
    description: "Show work history",
    run: () =>
      experience.flatMap((job) => [
        line(`${job.company} — ${job.period}`, "highlight"),
        line(`  ${job.location}`, "muted"),
        ...job.roles.map((r) => line(`    ${r.title}  (${r.period})`)),
        blank(),
      ]),
  },

  {
    name: "certs",
    aliases: ["certifications", "certificates"],
    description: "Show certifications",
    run: () => [
      line("Certifications", "accent"),
      blank(),
      ...certifications.flatMap((c) => [
        line(`  ${c.name} — ${c.issuer}, ${c.date}`, "highlight"),
        line(`    Credential ID: ${c.credentialId}`, "muted"),
      ]),
    ],
  },

  {
    name: "contact",
    aliases: ["email", "reach", "hire"],
    description: "How to get in touch",
    run: () => [
      line("Get in touch", "accent"),
      blank(),
      line(`  email      ${site.email}`, "highlight"),
      line(`  linkedin   ${site.linkedinLabel}`),
      line(`  instagram  ${site.instagramLabel}`),
      line(`  github     ${site.githubLabel}`),
      blank(),
      line("Open to senior full-stack and backend roles.", "muted"),
    ],
  },
];

/** Commands handled directly by the component rather than the registry. */
export const CLIENT_COMMANDS = ["clear", "cls"] as const;

const ALIAS_MAP = new Map<string, TerminalCommand>();
for (const cmd of commands) {
  ALIAS_MAP.set(cmd.name, cmd);
  for (const alias of cmd.aliases ?? []) ALIAS_MAP.set(alias, cmd);
}

/** Normalises raw input: lowercase, trimmed, collapsed whitespace. */
export function normalise(input: string): string {
  return input.toLowerCase().trim().replace(/\s+/g, " ");
}

export function resolve(input: string): TerminalCommand | undefined {
  return ALIAS_MAP.get(normalise(input));
}

/** Suggestions shown as clickable chips — typing is awkward on mobile. */
export const QUICK_COMMANDS = [
  "whoami",
  "ls projects",
  "stats",
  "cat about.md",
  "stack",
  "contact",
] as const;
