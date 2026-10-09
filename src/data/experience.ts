/** Work history, most recent first. */

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Job = {
  company: string;
  location: string;
  period: string;
  /** One line on what the company does. */
  context?: string;
  roles: Role[];
};

export const experience: Job[] = [
  {
    company: "MileApp",
    location: "Jakarta, Indonesia (Remote)",
    period: "Apr 2022 – Present",
    context: "Field-force automation and retail execution SaaS platform.",
    roles: [
      {
        title: "Team Leader",
        period: "Nov 2025 – Present",
        bullets: [
          "Lead a team of 9 developers across technical direction, task coordination and end-to-end delivery.",
          "Serve as a servant leader, aligning cross-functional stakeholders and senior leadership.",
          "Support developers through mentoring, problem solving and day-to-day engineering guidance.",
        ],
      },
      {
        title: "Senior Software Engineer (Backend → Full Stack) / Product Engineer",
        period: "Apr 2022 – Present",
        bullets: [
          "Build backend services and RESTful APIs in PHP/Laravel and Go for the core platform.",
          "Work across the stack — JavaScript and Vue.js on the front end, PostgreSQL, MySQL and MongoDB underneath.",
          "Containerized with Docker, deployed via Kubernetes, Google Cloud Platform and CI/CD.",
          "Evolved from Software Engineer to Product Engineer, owning problems end to end rather than isolated tickets.",
          "Adopted agentic AI workflows in 2025, retaining full ownership and understanding of what ships.",
        ],
      },
      {
        title: "Scrum Master",
        period: "Aug 2022 – Nov 2025",
        bullets: [
          "Ran Agile ceremonies and removed delivery blockers while staying hands-on in development.",
          "Acted as the bridge between product, engineering and stakeholders on scope and priorities.",
        ],
      },
    ],
  },
  {
    company: "PT Pragma Informatika",
    location: "Cileunyi, West Java, Indonesia",
    period: "Jun 2019 – Feb 2022",
    context: "Software house delivering enterprise platforms for Indonesian state-owned enterprises.",
    roles: [
      {
        title: "Lead Programmer",
        period: "Jun 2021 – Feb 2022",
        bullets: [
          "Led the programming team, overseeing projects from implementation through completion.",
          "Presented project work and technical outcomes directly to clients.",
        ],
      },
      {
        title: "Senior Programmer",
        period: "Jun 2019 – Jun 2021",
        bullets: [
          "Built enterprise web and mobile platforms — Laravel backends, Vue.js front ends, Flutter apps.",
          "Delivered APIs and backend functionality supporting both web and mobile clients.",
        ],
      },
    ],
  },
  {
    company: "PT AFA Kanudata Indonesia",
    location: "Bandung, West Java, Indonesia",
    period: "Dec 2018 – Jun 2019",
    context: "Event technology — registration and audience systems for public events.",
    roles: [
      {
        title: "Senior Programmer",
        period: "Dec 2018 – Jun 2019",
        bullets: [
          "Built end-to-end registration systems for public events, working directly with organisers to scope requirements.",
          "Architected the platform as composable plugins rather than one-off builds.",
          "Shipped reusable components: QR/barcode/RFID attendance verification, doorprize, live polling, reporting and automated e-certificate generation.",
        ],
      },
    ],
  },
  {
    company: "Deliman Integra Technology",
    location: "Bandung, West Java, Indonesia",
    period: "Apr 2014 – Nov 2018",
    context: "Where the career started — four and a half years, three levels.",
    roles: [
      {
        title: "Senior Programmer → Programmer → Junior Programmer",
        period: "Apr 2014 – Nov 2018",
        bullets: [
          "Progressed from Junior Programmer to Senior Programmer, taking increasing responsibility at each step.",
          "Built and maintained software across multiple projects while growing into technical ownership.",
        ],
      },
    ],
  },
];
