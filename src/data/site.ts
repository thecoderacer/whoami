/**
 * Identity, contact details and the headline numbers.
 * This is the single place to edit who you are.
 */

export type Stat = {
  /** Numeric target for the count-up animation. */
  value: number;
  /** Rendered after the number, e.g. "+" or "M". */
  suffix?: string;
  /** Rendered before the number, e.g. "~". */
  prefix?: string;
  label: string;
};

export const site = {
  name: "Anggara Pratama",
  title: "Senior Software Engineer | Team Lead",
  company: "MileApp",

  location: "Bandung, West Java, Indonesia",
  timezone: "UTC+7",
  availability: "Remote-friendly",

  email: "thecoderacer@gmail.com",
  instagram: "https://www.instagram.com/thecoderacer/",
  instagramLabel: "@thecoderacer",
  linkedin: "https://www.linkedin.com/in/thecoderacer/",
  linkedinLabel: "linkedin.com/in/thecoderacer",
  github: "https://github.com/thecoderacer",
  githubLabel: "github.com/thecoderacer",

  /** Short bio for the terminal's `whoami`. Wraps naturally — do not hard-wrap. */
  bio:
    "Full-stack engineer, 12 years in production software. Backend by origin — APIs, service architecture, data modelling — now delivering across the stack. Leading 9 developers at MileApp.",

  /** One-line pitch used in the hero. */
  pitch:
    "12 years building production software — from enterprise platforms for Indonesia's largest state-owned companies to the SaaS products I ship today. Backend by origin, full-stack by practice, leading 9 developers at MileApp.",

  /** Section anchors, used by the nav and command palette. */
  sections: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ],
} as const;

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years building software" },
  { value: 9, label: "Developers led at MileApp" },
  { value: 2, prefix: "~", suffix: "M", label: "Records exported in <10 min" },
  { value: 7, label: "Enterprise platforms shipped" },
];
