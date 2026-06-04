import { ArrowUpRight } from "lucide-react";
import { EXPERIENCE, EXPERIENCE_HEADING } from "@/lib/data";

export function Experience() {
  return (
    <div className="container-x max-content">
      <h2 className="text-3xl sm:text-4xl">{EXPERIENCE_HEADING}</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {EXPERIENCE.map((item) => (
          <article
            key={item.role}
            className="rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl">{item.role}</h3>
              <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-accent">
                {item.org}
              </span>
            </div>
            {item.period && (
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {item.period}
              </p>
            )}
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {item.blurb}
            </p>
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
        ))}
      </div>
    </div>
  );
}
