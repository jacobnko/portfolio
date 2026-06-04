import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT, SITE, SOCIALS } from "@/lib/data";
import { AvailabilityBadges } from "./availability-badges";

const ICONS = { github: Github, linkedin: Linkedin, mail: Mail } as const;

export function Contact() {
  return (
    <div className="container-x max-content">
      <h2 className="text-3xl sm:text-4xl">{CONTACT.heading}</h2>
      <p className="mt-3 max-w-xl text-lg text-muted-foreground">{CONTACT.sub}</p>

      {/* Contact channels */}
      <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.icon];
          const display =
            social.icon === "mail" ? SITE.email : social.label;
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {display}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Final reminder of availability */}
      <AvailabilityBadges className="mt-10" />
    </div>
  );
}
