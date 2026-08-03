import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { galleryCategories, galleryItems } from "@/content/gallery";

const TITLE = "Photo Gallery — Ankush Bansal & Geeta University";
const DESCRIPTION =
  "Photographs from Geeta University: convocations, foundation ceremonies, expert sessions, award moments and student milestones.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<string>("All");
  const items = galleryItems.filter((i) => filter === "All" || i.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments, ceremonies and milestones"
        lede="A visual record of institutional life at Geeta University."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition-colors",
                  filter === c
                    ? "border-gold bg-gold text-navy-deep"
                    : "border-border/70 text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <motion.figure
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative break-inside-avoid overflow-hidden rounded-xl"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-5 text-sm text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {item.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </div>

          <Reveal>
            <p className="mt-12 text-xs text-muted-foreground">
              Photographs supplied by the office of the Pro Chancellor.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
