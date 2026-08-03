import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small attribution chip linking to the public source of a claim. */
export function SourceLink({
  href,
  label = "Source",
  className,
  invert = false,
}: {
  href: string;
  label?: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.14em] underline-offset-4 transition-colors hover:underline",
        invert ? "text-white/50 hover:text-gold-soft" : "text-muted-foreground hover:text-secondary",
        className,
      )}
    >
      {label}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}
