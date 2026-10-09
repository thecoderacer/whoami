/**
 * The About narrative. Shared by the About section and the terminal's
 * `cat about.md` command, so the two can never drift apart.
 */

export const about: string[] = [
  "I'm a full-stack engineer with 12 years in production software. I started on the backend and stayed there long enough to be useful — APIs, service architecture, data modelling — then grew outward into full-stack delivery when the work called for it.",
  "Today I lead 9 developers at MileApp, a field-force automation platform used by enterprise retail and FMCG teams across Indonesia. Before that I spent three years as Scrum Master, which taught me more about why projects fail than any technical post-mortem has.",
  "Earlier in my career I delivered seven enterprise platforms for Indonesian state-owned companies — Waskita Karya, Nindya Karya, MRT Jakarta, PLN and PGN. Document management, e-office suites, field mobile apps, power monitoring. That work taught me what \"it has to keep working\" actually means.",
  "Since 2025 I've worked with agentic AI across the full delivery cycle — a practice I call Compound Engineering: Planning, Execution, Review, Compound, where each cycle's learnings feed the next. The AI accelerates implementation and debugging. I keep ownership and understanding of the architecture, the decisions, the review and what ships. I'd rather explain a decision than defend a black box.",
];

/** Set apart in the About section as the standout proof point. */
export const headlineMetric = {
  value: "~2M",
  unit: "records",
  qualifier: "exported in under 10 minutes",
  detail:
    "An export service in Go, capable of moving approximately 2 million records in under 10 minutes — built through an AI-assisted agentic workflow.",
};
