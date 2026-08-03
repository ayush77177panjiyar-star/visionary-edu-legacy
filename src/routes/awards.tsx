import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { SourceLink } from "@/components/source-link";
import { awards } from "@/content/profile";

const TITLE = "Awards & Recognition — Geeta University";
const DESCRIPTION =
  "Recognitions received by Geeta University and its institutes, including the Certificate of Excellence in the Outcome-Based Education Rankings 2022.";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/awards" },
    ],
    links: [{ rel: "canonical", href: "/awards" }],
  }),
  component: Awards,
});

function Awards() {
  return (
    <>
      <PageHero
        eyebrow="Awards"
        title="Recognition on the public record"
        lede="Only recognitions published by the university or an identifiable third party are listed here."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <TiltCard className="h-full rounded-2xl border border-border/70 p-8">
                <Award className="h-6 w-6 text-gold" aria-hidden="true" />
                <p className="eyebrow mt-6 text-muted-foreground">{a.scope}</p>
                <h2 className="mt-3 font-display text-xl leading-snug text-foreground">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-secondary">{a.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                <SourceLink href={a.source} className="mt-5" />
              </TiltCard>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-3xl px-5 sm:px-8">
          <p className="rounded-xl bg-surface p-6 text-sm leading-relaxed text-muted-foreground">
            Personal awards conferred on Mr. Bansal as an individual are not listed because no
            independently published record of them was found. Share official citations and they
            will be added here with their sources.
          </p>
        </div>
      </section>
    </>
  );
}
