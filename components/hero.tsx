import { HERO } from "@/lib/data";
import { AvailabilityBadges } from "./availability-badges";

export function Hero() {
  return (
    <section className="container-x max-content pb-12 pt-16 sm:pb-20 sm:pt-24">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-primary">
        {HERO.eyebrow}
      </p>

      <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,6vw,4rem)] leading-[1.05]">
        {HERO.h1}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {HERO.sub}
      </p>

      {/* Availability — most prominent */}
      <AvailabilityBadges className="mt-8" />

      {/* CTAs */}
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={HERO.ctaPrimary.href}
          className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {HERO.ctaPrimary.label}
        </a>
        <a
          href={HERO.ctaGhost.href}
          className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
        >
          {HERO.ctaGhost.label}
        </a>
      </div>
    </section>
  );
}
