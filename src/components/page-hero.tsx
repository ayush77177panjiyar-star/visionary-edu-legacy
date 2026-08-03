import { Link } from "@tanstack/react-router";
import { AuroraBackdrop } from "@/components/motion/aurora-backdrop";
import { Reveal, SplitText } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  cta,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  cta?: { to: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pb-24 pt-40 text-white sm:pb-32 sm:pt-48">
      <AuroraBackdrop />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow text-gold">{eyebrow}</p>
        </Reveal>
        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <SplitText text={title} />
        </h1>
        <Reveal delay={0.15}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            {lede}
          </p>
        </Reveal>
        {cta && (
          <Reveal delay={0.25}>
            <Link
              to={cta.to}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep transition-transform hover:-translate-y-0.5"
            >
              {cta.label}
            </Link>
          </Reveal>
        )}
        <div className="mt-14 h-px w-full gold-rule opacity-40" />
      </div>
    </section>
  );
}
