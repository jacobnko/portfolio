import { ArrowUpRight } from "lucide-react";
import {
  EXPERIENCE,
  EDUCATION,
  EXPERIENCE_HEADING,
  EXPERIENCE_SUBHEADING,
  EDUCATION_SUBHEADING,
} from "@/lib/data";
import type { Experience as ExperienceItem } from "@/lib/data";

export function Experience() {
  return (
    <div className="container-x max-content">
      <h2 className="text-3xl sm:text-4xl">{EXPERIENCE_HEADING}</h2>

      {/* Experience */}
      <h3 className="mt-10 font-mono text-xs uppercase tracking-widest text-primary">
        {EXPERIENCE_SUBHEADING}
      </h3>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {EXPERIENCE.map((item) => (
          <ExperienceCard key={item.role} item={item} />
        ))}
      </div>

      {/* Education */}
      <h3 className="mt-12 font-mono text-xs uppercase tracking-widest text-primary">
        {EDUCATION_SUBHEADING}
      </h3>
      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {EDUCATION.map((item) => (
          <ExperienceCard key={item.role} item={item} />
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <article className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-xl">{item.role}</h4>
        <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-accent">
          {item.org}
        </span>
      </div>
      {item.period && (
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {item.period}
        </p>
      )}
      <p className="mt-4 leading-relaxed text-muted-foreground">{item.blurb}</p>
      {item.link && (
        <a
          href={item.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
        >
          {item.link.label}
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </a>
      )}
    </article>
  );
}
