import { cn } from "@/lib/utils";
import { Reveal, SplitText } from "@/components/motion/reveal";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        invert && "text-white",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "eyebrow flex items-center gap-3",
              align === "center" && "justify-center",
              invert ? "text-gold-soft" : "text-secondary",
            )}
          >
            <span className="h-px w-8 bg-gold" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <h2 className="mt-4 text-balance text-3xl leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]">
        <SplitText text={title} />
      </h2>
      {lede && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-pretty text-base leading-relaxed sm:text-lg",
              invert ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}
