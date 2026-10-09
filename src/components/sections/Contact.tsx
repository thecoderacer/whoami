import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/interactive/Reveal";
import { site } from "@/data/site";

const CHANNELS = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "Instagram",
    value: site.instagramLabel,
    href: site.instagram,
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedinLabel,
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubLabel,
    href: site.github,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p className="mb-8 max-w-2xl leading-relaxed text-dusk-blue-800">
        Open to senior full-stack and backend engineering roles. Remote-first from
        Indonesia ({site.timezone}) — I overlap comfortably with European hours and can
        adjust for US time zones with notice.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {CHANNELS.map((channel, index) => (
          <Reveal key={channel.label} delay={index * 60}>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-4 rounded-xl border border-dusk-blue-500/40 bg-space-indigo-500/40 p-5 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-tropical-teal-500/60 hover:bg-space-indigo-500/70"
            >
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-tropical-teal-500">
                  {channel.label}
                </span>
                <span className="mt-1 block break-all text-sm text-dusk-blue-800 group-hover:text-neon-ice-500">
                  {channel.value}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-dusk-blue-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-neon-ice-500"
              >
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
