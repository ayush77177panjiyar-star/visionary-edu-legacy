import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SourceLink } from "@/components/source-link";
import { milestones } from "@/content/profile";

const TITLE = "Journey & Milestones — Ankush Bansal";
const DESCRIPTION =
  "A sourced timeline of the Geeta Group of Institutions and Geeta University, from its founding in Panipat in 1985 to the university's second convocation in 2026.";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/journey" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <PageHero
        eyebrow="Journey"
        title="Four decades of building"
        lede="Every milestone below is drawn from a public record — an official notification, the university's own pages, or press coverage."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <ol className="relative border-l border-border/70 pl-8 sm:pl-12">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year + m.title} delay={i * 0.05} className="pb-14 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] mt-2 grid h-3.5 w-3.5 place-items-center rounded-full bg-gold ring-4 ring-background"
                />
                <p className="font-display text-3xl text-gold sm:text-4xl">{m.year}</p>
                <h2 className="mt-3 font-display text-xl text-foreground sm:text-2xl">
                  {m.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{m.body}</p>
                <SourceLink href={m.source} label={m.sourceLabel} className="mt-4" />
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
