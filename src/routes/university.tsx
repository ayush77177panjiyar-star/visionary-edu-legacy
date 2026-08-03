import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SourceLink } from "@/components/source-link";
import { Counter } from "@/components/motion/counter";
import { university } from "@/content/site";
import { universityFacts } from "@/content/profile";
import { galleryItems } from "@/content/gallery";

const TITLE = "Geeta University, Panipat — Vision & Growth";
const DESCRIPTION =
  "Geeta University, Panipat: a forty-acre campus offering more than seventy programmes, established in 2022 out of the Geeta Group of Institutions founded in 1985.";

export const Route = createFileRoute("/university")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/university" },
    ],
    links: [{ rel: "canonical", href: "/university" }],
  }),
  component: University,
});

function University() {
  return (
    <>
      <PageHero
        eyebrow="Geeta University"
        title="A university built out of forty years of schooling"
        lede="Naultha, Panipat — forty acres, seventy-plus programmes, and a governance framework notified in the Haryana Government Gazette."
      />

      <section className="border-b border-border/60 bg-surface py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
          {[
            { value: 1985, label: "Group founded", raw: true },
            { value: 2022, label: "University established", raw: true },
            { value: 70, suffix: "+", label: "Programmes offered" },
            { value: 40, label: "Acre campus" },
          ].map((s) => (
            <Reveal key={s.label}>
              <Counter
                value={s.value}
                {...(s.suffix ? { suffix: s.suffix } : {})}
                className="font-display text-4xl font-semibold text-primary sm:text-5xl"
              />
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="The institution"
            title="What the public record shows"
            lede="Each card links to the source it is drawn from."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {universityFacts.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <article className="h-full rounded-2xl border border-border/70 p-8">
                  <h2 className="font-display text-xl text-foreground">{f.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  <SourceLink href={f.source} className="mt-5" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={galleryItems[8]!.src}
              alt={galleryItems[8]!.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Campus" title="Naultha, Panipat" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The campus sits on NH-71 at Naultha, Panipat, and covers forty acres. Admission
              offices operate in Sonipat, Shamli, Karnal and Delhi.
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted-foreground">
              <p>{university.address}</p>
              <p>{university.phone}</p>
              <p>{university.email}</p>
            </div>
            <SourceLink href={university.source} className="mt-5" />
          </div>
        </div>
      </section>
    </>
  );
}
