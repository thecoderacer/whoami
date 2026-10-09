import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/interactive/Reveal";
import { about, headlineMetric } from "@/data/about";
// Static import, not a /public path: Next emits this under /_next/static/media/
// and applies basePath, which a raw "/profile.jpg" does NOT get. On a GitHub
// Pages project page that difference is a 404.
import profilePhoto from "@/assets/profile.jpg";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Twelve years of shipping software">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div className="space-y-4">
          {about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 60}>
              <p className="leading-relaxed text-dusk-blue-800">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="flex flex-col gap-5">
            {/* The source is a full portrait whose aspect nearly matches the frame,
                so object-cover alone cannot crop in. Scaling about a point near the
                face gives a proper headshot without editing the original file. */}
            <div className="relative aspect-4/5 w-full max-w-[200px] overflow-hidden rounded-xl border border-dusk-blue-500/40">
              <Image
                src={profilePhoto}
                alt="Anggara Pratama"
                fill
                sizes="200px"
                className="origin-[50%_30%] scale-[1.65] object-cover"
              />
            </div>

            {/* The standout proof point gets its own panel. */}
            <aside className="rounded-xl border border-tropical-teal-500/30 bg-tropical-teal-500/[0.06] p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-tropical-teal-500">
                Featured work
              </p>

              <p className="mt-4 font-mono text-4xl font-semibold text-neon-ice-500">
                {headlineMetric.value}
              </p>
              <p className="mt-1 text-sm text-dusk-blue-800">
                {headlineMetric.unit} {headlineMetric.qualifier}
              </p>

              <p className="mt-5 border-t border-dusk-blue-500/30 pt-5 text-sm leading-relaxed text-dusk-blue-700">
                {headlineMetric.detail}
              </p>
            </aside>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
