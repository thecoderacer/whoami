"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/interactive/Reveal";
import { projects, projectFilters, type ProjectCategory } from "@/data/projects";

type Filter = "all" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div
        role="group"
        aria-label="Filter projects by type"
        className="mb-8 flex flex-wrap gap-2"
      >
        {projectFilters.map((option) => {
          const active = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={active}
              className={`rounded-lg px-3.5 py-1.5 text-sm transition-colors duration-200 ${
                active
                  ? "bg-tropical-teal-500 font-semibold text-prussian-blue-500"
                  : "border border-dusk-blue-500/50 text-dusk-blue-800 hover:border-tropical-teal-500/60 hover:text-neon-ice-500"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Cards remount when the filter changes, so they animate back in. */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 60}>
            <Card
              interactive
              className={`h-full ${
                project.featured ? "border-tropical-teal-500/40" : ""
              }`}
            >
              <article className="flex h-full flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3
                    className={`text-base font-semibold leading-snug ${
                      project.featured ? "text-neon-ice-500" : ""
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.featured ? (
                    <span className="shrink-0 rounded-full border border-tropical-teal-500/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-tropical-teal-500">
                      Featured
                    </span>
                  ) : null}
                </div>

                <p className="mt-2 font-mono text-[11px] text-dusk-blue-700">
                  {project.client} · {project.period}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-dusk-blue-800">
                  {project.summary}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-[13px] leading-relaxed text-dusk-blue-700"
                    >
                      <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-tropical-teal-500/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.stack.map((tech) => (
                    <li key={tech}>
                      <Badge variant={project.featured ? "accent" : "default"}>
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </article>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
