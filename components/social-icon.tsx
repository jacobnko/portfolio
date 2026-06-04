import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialLink } from "@/lib/data";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function SocialIcon({
  social,
  className,
}: {
  social: SocialLink;
  className?: string;
}) {
  const Icon = ICONS[social.icon];
  return (
    <a
      href={social.href}
      aria-label={social.label}
      target={social.href.startsWith("http") ? "_blank" : undefined}
      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={
        "text-muted-foreground transition-colors hover:text-foreground " +
        (className ?? "")
      }
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </a>
  );
}
