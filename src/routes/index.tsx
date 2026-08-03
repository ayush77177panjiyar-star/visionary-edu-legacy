import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, Gem, GraduationCap } from "lucide-react";
import { AuroraBackdrop } from "@/components/motion/aurora-backdrop";
import { ParticleField } from "@/components/motion/particle-field";
import { Reveal, SplitText } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";
import { TiltCard } from "@/components/motion/tilt-card";
import { SectionHeading } from "@/components/section-heading";
import { SourceLink } from "@/components/source-link";
import { person, university } from "@/content/site";
import { portraitImage, galleryItems } from "@/content/gallery";
import {
  biography,
  milestones,
  newsItems,
  philosophy,
  pillars,
  statistics,
} from "@/content/profile";

const TITLE = "Ankush Bansal — Pro Chancellor, Geeta University";
const DESCRIPTION =
  "Ankush Bansal is Co-Founder and Pro Chancellor of Geeta University, Panipat, and Vice Chairman of the Geeta Group of Institutions — building education in Haryana since 1985.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillarIcons = { compass: Compass, eye: Eye, gem: Gem, "graduation-cap": GraduationCap };

function Home() {
  return (
    <>
      <Hero />
      <StatBand />
      <AboutPreview />
      <Pillars />
      <JourneyPreview />
      <GalleryPreview />
      <NewsPreview />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden bg-navy-deep text-white">
      <AuroraBackdrop />
      <ParticleField />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pb-28">
        <div>
          <Reveal>
            <p className="eyebrow text-gold">{person.theme}</p>
          </Reveal>
          <h1 className="mt-6 font-display text-[2.7rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            <SplitText text="Ankush" />
            <br />
            <span className="text-gradient-gold">
              <SplitText text="Bansal" delay={0.12} />
            </span>
          </h1>
          <Reveal delay={0.25}>
            <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/55">
              Pro Chancellor · Geeta University, Panipat
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Co-Founder of a state university and Vice Chairman of an education group that
              has been building institutions in Haryana since 1985 — from a single campus in
              Panipat to seventy-plus programmes on forty acres.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy-deep transition-transform hover:-translate-y-0.5"
              >
                Explore the vision
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/85 transition-colors hover:border-gold/60 hover:text-white"
              >
                The journey
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.55}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              {person.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="animate-soft-float relative mx-auto max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/25 via-transparent to-azure/25 blur-2xl"
            />
            <TiltCard className="relative overflow-hidden rounded-[1.75rem] border border-white/15">
              <img
                src={portraitImage}
                alt="Ankush Bansal, Pro Chancellor of Geeta University"
                width={880}
                height={1100}
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-lg">Ankush Bansal</p>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-soft">
                  Co-Founder &amp; Pro Chancellor
                </p>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
      />
    </section>
  );
}

function StatBand() {
  return (
    <section className="border-y border-border/60 bg-surface py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-12 px-5 sm:px-8 lg:grid-cols-3">
        {statistics.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <div>
              <Counter
                value={stat.value}
                {...("suffix" in stat ? { suffix: stat.suffix as string } : {})}
                className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.note}</p>
              <SourceLink href={stat.source} className="mt-2" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={galleryItems[1]!.src}
              alt={galleryItems[1]!.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
            <div className="glass absolute -bottom-8 -right-4 hidden max-w-[15rem] rounded-xl p-5 sm:block">
              <p className="font-display text-3xl text-primary">1985</p>
              <p className="mt-1 text-xs text-muted-foreground">
                The year the Geeta Group of Institutions began in Panipat.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="A builder of institutions, not just buildings"
            lede={biography.paragraphs[0]!}
          />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {biography.paragraphs[1]!}
          </p>
          <SourceLink href={biography.source} label={biography.sourceLabel} className="mt-5" />

          <blockquote className="mt-10 border-l-2 border-gold pl-6">
            <p className="font-display text-lg italic leading-relaxed text-foreground sm:text-xl">
              “{philosophy.quotes[0]!.text}”
            </p>
            <footer className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span>Pro Chancellor's message</span>
              <SourceLink
                href={philosophy.quotes[0]!.source}
                label={philosophy.quotes[0]!.sourceLabel}
              />
            </footer>
          </blockquote>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-secondary"
          >
            Read the full profile
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <AuroraBackdrop />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Guiding principles"
          title="What the work is built on"
          lede="Four commitments that shape how Geeta University is led."
          align="center"
          invert
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillarIcons[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <TiltCard className="glass-dark h-full rounded-2xl p-7">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{pillar.body}</p>
                  <SourceLink href={pillar.source} className="mt-4" invert />
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JourneyPreview() {
  const preview = milestones.slice(0, 4);
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The journey"
          title="Four decades, one continuous line"
          lede="From a Panipat education society in 1985 to a multidisciplinary state university."
        />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((m, i) => (
            <Reveal as="li" key={m.year + m.title} delay={i * 0.07} className="bg-background p-7">
              <p className="font-display text-4xl text-gold">{m.year}</p>
              <h3 className="mt-4 text-base font-semibold text-foreground">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              <SourceLink href={m.source} label={m.sourceLabel} className="mt-4" />
            </Reveal>
          ))}
        </ol>
        <Link
          to="/journey"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-secondary"
        >
          See the full timeline
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const picks = galleryItems.slice(2, 8);
  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments from the campus"
          lede="Convocations, foundation ceremonies, expert sessions and student milestones."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {picks.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05}>
              <figure className="group relative overflow-hidden rounded-xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={900}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-xs text-white/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Link
          to="/gallery"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-secondary"
        >
          View the full gallery
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function NewsPreview() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="In the news" title="Recent coverage" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <Reveal key={item.href} delay={i * 0.08}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col rounded-2xl border border-border/70 p-7 transition-colors hover:border-gold/60"
              >
                <p className="eyebrow text-muted-foreground">
                  {item.outlet} · {item.date}
                </p>
                <h3 className="mt-4 font-display text-xl leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                  Read the report
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-28 text-white sm:py-36">
      <AuroraBackdrop />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-gold">{university.name}</p>
        </Reveal>
        <h2 className="mt-6 font-display text-3xl leading-tight sm:text-5xl">
          <SplitText text="Education that outlives the people who build it." />
        </h2>
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </Link>
            <a
              href={university.website}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/85 transition-colors hover:border-gold/60 hover:text-white"
            >
              Visit Geeta University
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
