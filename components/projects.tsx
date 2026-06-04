import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PROJECTS_HEADING } from "@/lib/data";
import type { Project } from "@/lib/data";
import { ProjectImage } from "./project-image";

export function Projects() {
  return (
    <div className="container-x max-content">
      <header className="max-w-2xl">
        <h2 className="text-3xl sm:text-4xl">{PROJECTS_HEADING.title}</h2>
        <p className="mt-3 text-muted-foreground">{PROJECTS_HEADING.sub}</p>
      </header>

      <div className="mt-12 flex flex-col gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid gap-8 rounded-lg border border-border bg-card p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">
      {/* Text column */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-sm text-muted-foreground">
            {project.index}
          </span>
          <h3 className="text-2xl">{project.title}</h3>
        </div>
        <p className="mt-2 text-muted-foreground">{project.tagline}</p>

        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-primary">
              Challenge
            </dt>
            <dd className="mt-1 leading-relaxed">{project.challenge}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-primary">
              Solution
            </dt>
            <dd className="mt-1 leading-relaxed">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-primary">
              Key Achievements
            </dt>
            <dd className="mt-2">
              <ul className="space-y-1.5">
                {project.achievements.map((a) => (
                  <li key={a} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {a}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {/* Stack pills */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const disabled = link.href === "#";
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-disabled={disabled}
                className={
                  "inline-flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium transition-colors " +
                  (disabled
                    ? "cursor-default border-border text-muted-foreground/60"
                    : "border-border text-foreground hover:bg-secondary")
                }
              >
                {link.label}
                {!disabled && <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Image column */}
      <div className="lg:order-last">
        <ProjectImage src={project.image} alt={project.imageAlt} />
      </div>
    </article>
  );
}
