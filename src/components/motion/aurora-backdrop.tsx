import { cn } from "@/lib/utils";

/** Slow animated aurora / wave gradient backdrop. */
export function AuroraBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="animate-aurora absolute -left-[15%] top-[-25%] h-[70vh] w-[70vw] rounded-full opacity-60 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--azure) 45%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-aurora absolute right-[-20%] top-[10%] h-[60vh] w-[60vw] rounded-full opacity-50 blur-[120px]"
        style={{
          animationDelay: "-7s",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--gold) 38%, transparent), transparent 70%)",
        }}
      />
      <div
        className="animate-aurora absolute bottom-[-30%] left-[25%] h-[65vh] w-[65vw] rounded-full opacity-45 blur-[130px]"
        style={{
          animationDelay: "-14s",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--navy) 55%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
