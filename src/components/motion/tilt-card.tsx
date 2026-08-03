import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Glassmorphism card with a subtle 3D tilt on pointer move. */
export function TiltCard({
  children,
  className,
  intensity = 7,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-py * intensity}deg) rotateY(${px * intensity}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn(
        "tilt-card group relative overflow-hidden rounded-xl border border-border/70 bg-card/70 backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-500 before:content-['']",
        "before:bg-[radial-gradient(320px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--gold)_16%,transparent),transparent_70%)]",
        "hover:before:opacity-100 hover:shadow-[0_28px_60px_-30px_color-mix(in_oklab,var(--navy)_60%,transparent)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
