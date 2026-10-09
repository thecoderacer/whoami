import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/interactive/Reveal";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Credentials">
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((certification, index) => (
          <Reveal key={certification.credentialId} delay={index * 80}>
            <Card className="h-full">
              <h3 className="text-base font-semibold">{certification.name}</h3>
              <p className="mt-1.5 text-sm text-dusk-blue-700">
                {certification.issuer} · {certification.date}
              </p>
              <p className="mt-3 font-mono text-[11px] text-dusk-blue-700">
                Credential ID: {certification.credentialId}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
