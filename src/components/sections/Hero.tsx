import { site, stats } from "@/data/site";
import { GridBackdrop } from "@/components/interactive/GridBackdrop";
import { TerminalMount } from "@/components/interactive/TerminalMount";
import { StatCounter } from "@/components/interactive/StatCounter";
import { Reveal } from "@/components/interactive/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-12 sm:pb-20 sm:pt-16">
      <GridBackdrop />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-12">
          {/* Pitch — server-rendered, readable without JavaScript */}
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-tropical-teal-500">
              Open to senior roles
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {site.name}
            </h1>

            <p className="mt-3 text-lg text-neon-ice-500 sm:text-xl">{site.title}</p>

            <p className="mt-5 max-w-xl leading-relaxed text-dusk-blue-800">
              {site.pitch}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton href={`mailto:${site.email}`}>Get in touch</LinkButton>
              <LinkButton href={site.linkedin} external variant="outline">
                LinkedIn
              </LinkButton>
            </div>

            <p className="mt-6 font-mono text-xs text-dusk-blue-700">
              {site.location} · {site.timezone} · {site.availability}
            </p>
          </div>

          {/* Interactive terminal — loads after first paint */}
          <TerminalMount />
        </div>

        {/* Headline numbers */}
        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-dusk-blue-500/30 pt-8 sm:mt-16 sm:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70}>
              <StatCounter stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
