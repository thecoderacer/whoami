import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/interactive/Reveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-12 border-l border-dusk-blue-500/40 pl-6 sm:pl-8">
        {experience.map((job, index) => (
          <li key={job.company} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden="true"
              className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-prussian-blue-500 bg-tropical-teal-500 sm:-left-[39px]"
            />

            <Reveal delay={index * 60}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <span className="font-mono text-xs text-dusk-blue-700">{job.period}</span>
              </div>

              <p className="mt-0.5 text-sm text-dusk-blue-700">{job.location}</p>

              {job.context ? (
                <p className="mt-2 text-sm italic text-dusk-blue-700">{job.context}</p>
              ) : null}

              <div className="mt-4 space-y-5">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <h4 className="text-sm font-semibold text-tropical-teal-700">
                        {role.title}
                      </h4>
                      <span className="font-mono text-[11px] text-dusk-blue-700">
                        {role.period}
                      </span>
                    </div>

                    <ul className="mt-2 space-y-1.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-sm leading-relaxed text-dusk-blue-800"
                        >
                          <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-dusk-blue-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
