import { cn } from "@/lib/utils";

/** Elegant crest monogram used in the nav, footer and loading screen. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Ankush Bansal monogram"
    >
      <defs>
        <linearGradient id="mono-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--gold-soft)" />
          <stop offset="55%" stopColor="var(--gold)" />
          <stop offset="100%" stopColor="var(--gold-soft)" />
        </linearGradient>
      </defs>
      <path
        d="M32 3 58 13v22c0 14-11 23-26 26C17 58 6 49 6 35V13z"
        fill="none"
        stroke="url(#mono-gold)"
        strokeWidth="2"
      />
      <path
        d="M32 9 52 16.7V35c0 11-8.5 18.3-20 20.9C20.5 53.3 12 46 12 35V16.7z"
        fill="none"
        stroke="url(#mono-gold)"
        strokeWidth="0.8"
        opacity="0.55"
      />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="22"
        fontWeight="700"
        fill="url(#mono-gold)"
      >
        AB
      </text>
    </svg>
  );
}
