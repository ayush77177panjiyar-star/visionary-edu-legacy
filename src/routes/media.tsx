import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";
import { newsItems, videos } from "@/content/profile";

const TITLE = "News & Media — Ankush Bansal, Geeta University";
const DESCRIPTION =
  "Press coverage and official notices featuring Ankush Bansal and Geeta University, including the 2026 convocation and the SJHIFM memorandum of understanding.";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/media" },
    ],
    links: [{ rel: "canonical", href: "/media" }],
  }),
  component: Media,
});

function Media() {
  return (
    <>
      <PageHero
        eyebrow="News & media"
        title="Coverage and official record"
        lede="Reports from the press and notices published by the university itself."
      />

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70">
            {newsItems.map((item, i) => (
              <Reveal as="li" key={item.href} delay={i * 0.06} className="bg-background">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex flex-col gap-3 p-8 transition-colors hover:bg-surface"
                >
                  <p className="eyebrow text-muted-foreground">
                    {item.outlet} ·{" "}
                    <time dateTime={item.dateISO}>{item.date}</time>
                  </p>
                  <h2 className="font-display text-xl leading-snug text-foreground sm:text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                    Read the source
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Video"
            title="From the official channel"
            lede="Published on the Geeta University YouTube channel."
          />
          <div className="mt-12 grid gap-6">
            {videos.map((v) => (
              <Reveal key={v.id}>
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-background">
                  <div className="aspect-video w-full">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full border-0"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl text-foreground">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
