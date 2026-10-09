import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/interactive/Reveal";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with">
      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal key={group.label} delay={index * 50}>
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-tropical-teal-500">
                {group.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
