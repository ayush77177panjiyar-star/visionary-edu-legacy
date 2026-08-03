import { createFileRoute } from "@tanstack/react-router";
import { Globe2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SourceLink } from "@/components/source-link";
import { Counter } from "@/components/motion/counter";
import { internationalPresence, internationalSource, statistics } from "@/content/profile";
import { admissionOffices } from "@/content/site";

const TITLE = "Impact & Reach — Geeta University, Panipat";
const DESCRIPTION =
  "The measurable reach of Geeta University: graduates, admission offices across north India, and international guests from six countries at the 2026 convocation.";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Reach you can count"
        lede="Figures shown here are limited to those published in official notices or the press."
      />

      <section className="border-b border-border/60 bg-surface py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 sm:px-8 lg:grid-cols-3">
          {statistics.map((s) => (
            <Reveal key={s.label}>
              <Counter
                value={s.value}
                {...("suffix" in s ? { suffix: s.suffix as string } : {})}
                className="font-display text-4xl font-semibold text-primary sm:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              <SourceLink href={s.source} className="mt-2" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="International"
            title="Guests from six countries"
            lede="Reported at the university's second convocation in January 2026."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {internationalPresence.map((c, i) => (
              <Reveal as="li" key={c.country} delay={i * 0.05}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border/70 p-6">
                  <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-display text-lg text-foreground">{c.country}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <SourceLink href={internationalSource} label="The Tribune, 25 January 2026" className="mt-6" />
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Presence" title="Offices across north India" />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
            {admissionOffices.map((o, i) => (
              <Reveal as="li" key={o.city} delay={i * 0.05} className="bg-background p-7">
                <p className="font-display text-xl text-foreground">{o.city}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.address}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
