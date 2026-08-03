import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SourceLink } from "@/components/source-link";
import { TiltCard } from "@/components/motion/tilt-card";
import { person } from "@/content/site";
import { portraitImage } from "@/content/gallery";
import { biography, philosophy, pillars } from "@/content/profile";

const TITLE = "About Ankush Bansal — Co-Founder & Pro Chancellor";
const DESCRIPTION =
  "The biography, roles and educational philosophy of Ankush Bansal, Co-Founder and Pro Chancellor of Geeta University and Vice Chairman of the Geeta Group of Institutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The visionary behind transforming education"
        lede="Co-Founder and Pro Chancellor of Geeta University, Panipat. Vice Chairman of the Geeta Group of Institutions."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Biography" title="A life spent building institutions" />
            <div className="mt-8 space-y-6">
              {biography.paragraphs.map((p) => (
                <Reveal key={p.slice(0, 24)}>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
            <SourceLink href={biography.source} label={biography.sourceLabel} className="mt-6" />
          </div>

          <Reveal delay={0.1}>
            <TiltCard className="overflow-hidden rounded-2xl border border-border/70">
              <img
                src={portraitImage}
                alt="Ankush Bansal, Pro Chancellor of Geeta University"
                loading="lazy"
                width={880}
                height={1100}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Positions held"
            title="Roles across the group"
            lede="As listed on his public professional profile."
          />
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2">
            {person.titles.map((t, i) => (
              <Reveal as="li" key={t.org} delay={i * 0.06} className="bg-background p-8">
                <p className="font-display text-xl text-foreground">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.org}</p>
                <SourceLink href={t.source} label="LinkedIn" className="mt-4" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Philosophy"
            title="In his own words"
            lede="From the Pro Chancellor's message on the Geeta University leadership page."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {philosophy.quotes.map((q, i) => (
              <Reveal key={q.text.slice(0, 20)} delay={i * 0.1}>
                <blockquote className="h-full rounded-2xl border border-border/70 p-8">
                  <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
                    “{q.text}”
                  </p>
                  <footer className="mt-6">
                    <SourceLink href={q.source} label={q.sourceLabel} />
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl bg-surface p-8">
                  <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  <SourceLink href={p.source} className="mt-4" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
