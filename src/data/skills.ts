/** Grouped skills, rendered as badge clusters. */

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    skills: ["PHP", "Laravel", "Go (Golang)", "JavaScript", "Vue.js", "Flutter"],
  },
  {
    label: "Backend & APIs",
    skills: [
      "REST API Design",
      "API Development",
      "Service Architecture",
      "Microservices",
      "Database Design",
      "Data Modelling",
    ],
  },
  {
    label: "Databases & Data",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch"],
  },
  {
    label: "Cloud & Infrastructure",
    skills: ["Google Cloud Platform", "Docker", "Kubernetes", "CI/CD", "Git"],
  },
  {
    label: "AI-Augmented Engineering",
    skills: [
      "Agentic AI",
      "AI-Assisted Development",
      "Product Engineering",
      "Prompt Engineering",
    ],
  },
  {
    label: "Practice",
    skills: [
      "Agile",
      "Scrum",
      "Unit Testing",
      "Code Review",
      "Performance Optimization",
      "Secure Development",
    ],
  },
  {
    label: "Leadership",
    skills: [
      "Team Leadership",
      "Technical Mentoring",
      "Delivery Ownership",
      "Cross-functional Collaboration",
    ],
  },
];
