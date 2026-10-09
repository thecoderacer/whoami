/**
 * All 10 projects. `category` drives the filter tabs;
 * `featured` gives a project the larger card treatment.
 */

export type ProjectCategory = "mileapp" | "enterprise";

export type Project = {
  slug: string;
  title: string;
  /** Employer or client the work was delivered for. */
  client: string;
  period: string;
  category: ProjectCategory;
  summary: string;
  /** Concrete, verifiable details — numbers wherever possible. */
  highlights: string[];
  stack: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  // ---------------------------------------------------------------- MileApp
  {
    slug: "export-import-service",
    title: "Export & Import Service",
    client: "MileApp",
    period: "2025",
    category: "mileapp",
    featured: true,
    summary:
      "A Go service for bulk data export and import, built through an AI-assisted agentic workflow with Claude Code.",
    highlights: [
      "Exports approximately 2 million records in under 10 minutes",
      "Delivered end to end via an agentic workflow — planning through production",
      "Written in Go, adding a second backend language to the platform",
    ],
    stack: ["Go", "Claude Code", "Agentic AI"],
  },
  {
    slug: "route-optimization",
    title: "Route Optimization Enhancement",
    client: "MileApp",
    period: "2023 – 2024",
    category: "mileapp",
    featured: true,
    summary:
      "Enhanced the existing route optimization feature so field workers could plan and sequence their daily routes.",
    highlights: [
      "Enabled field workers to plan and sequence their own routes",
      "Improved an existing production feature rather than replacing it",
    ],
    stack: ["PHP", "Laravel", "Routing"],
  },
  {
    slug: "billing-service",
    title: "Billing Service",
    client: "MileApp",
    period: "2022",
    category: "mileapp",
    featured: true,
    summary:
      "A billing service integrated with Stripe for payment and subscription processing, with full request logging.",
    highlights: [
      "Integrated Stripe for payment and subscription handling",
      "Request logging and log storage on Elasticsearch for auditability and troubleshooting",
    ],
    stack: ["Laravel", "Stripe", "Elasticsearch"],
  },

  // ------------------------------------------------------------ Enterprise
  {
    slug: "digital-workplace",
    title: "Digital Workplace",
    client: "Nindya Karya",
    period: "Jan 2020 – Oct 2021",
    category: "enterprise",
    summary:
      "An enterprise e-office platform spanning 11 modules, from document management through to internal video.",
    highlights: [
      "11 modules: DMS, E-Learning, Webinars, Mailing Disposition, KPI, Surveys & Polls, Minutes of Meeting, Social & Chat, Coverage, Video Directory, Dashboard",
      "Built for one of Indonesia's largest state-owned construction firms",
    ],
    stack: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management",
    client: "Waskita Karya",
    period: "Apr 2020 – Aug 2020",
    category: "enterprise",
    summary:
      "A platform for capturing, organising and transferring institutional knowledge across the organisation.",
    highlights: [
      "Modules include Knowledge Base, Ask The Expert, Search Engine and a Taxonomy Engine",
      "Designed to preserve institutional knowledge as staff moved between projects",
    ],
    stack: ["Laravel", "Vue.js", "Search"],
  },
  {
    slug: "digital-library-mrt",
    title: "Digital Library",
    client: "MRT Jakarta",
    period: "Oct 2019 – Dec 2019",
    category: "enterprise",
    summary:
      "A full-stack mobile web application for borrowing ebooks by scanning QR codes at on-site kiosks.",
    highlights: [
      "QR-code scanning flow for kiosk-based ebook lending",
      "Full-stack delivery, front end through to data layer",
    ],
    stack: ["Laravel", "Vue.js", "QR Code"],
  },
  {
    slug: "power-monitoring",
    title: "Power Monitoring",
    client: "PLN Kalselteng",
    period: "Sep 2019 – Oct 2019",
    category: "enterprise",
    summary:
      "A Flutter mobile app for Android and iOS monitoring substation power metrics in the field.",
    highlights: [
      "Tracked voltage and kWh fluctuations across substations",
      "Cross-platform mobile delivery for Android and iOS",
    ],
    stack: ["Flutter", "Dart", "REST API"],
  },
  {
    slug: "api-project-management-pgn",
    title: "API Project Management",
    client: "PGN (Perusahaan Gas Negara)",
    period: "Jun 2019 – Sep 2019",
    category: "enterprise",
    summary:
      "Extended an existing PGN system by building the API layer consumed by their Android and iOS apps.",
    highlights: [
      "API layer serving both Android and iOS mobile clients",
      "Extended a live system without disrupting existing operations",
    ],
    stack: ["Laravel", "REST API", "MySQL"],
  },
  {
    slug: "whistleblowing-system",
    title: "Whistleblowing System & Gratification",
    client: "Waskita Karya",
    period: "Jun 2019 – Aug 2019",
    category: "enterprise",
    summary:
      "A violation reporting system for receiving, reviewing and following up on complaints.",
    highlights: [
      "Handled confidential reports from employees and third parties",
      "Built to a formal review and follow-up process",
    ],
    stack: ["Laravel", "MySQL"],
  },
  {
    slug: "digital-marketing-welcome",
    title: "Digital Marketing WELCOME",
    client: "Waskita Karya",
    period: "Dec 2021 – Feb 2022",
    category: "enterprise",
    summary:
      "A data processing application covering the full project lifecycle, from auction through to completion.",
    highlights: [
      "Covers the whole lifecycle: auction process through project completion",
      "Delivered while leading the programming team at Pragma Informatika",
    ],
    stack: ["Laravel", "Vue.js", "MySQL"],
  },
];

export const projectFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "mileapp", label: "MileApp" },
  { id: "enterprise", label: "Enterprise" },
];
