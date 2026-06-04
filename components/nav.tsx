import { NAV_LINKS, SITE, SOCIALS } from "@/lib/data";
import { SocialIcon } from "./social-icon";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-x max-content flex h-16 items-center justify-between">
        {/* Wordmark */}
        <a href="#top" className="font-mono text-base font-semibold tracking-tight">
          {SITE.name}
          <span className="text-primary">.</span>
        </a>

        {/* Right: anchor links + socials */}
        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {SOCIALS.filter((s) => s.icon !== "mail").map((s) => (
              <SocialIcon key={s.label} social={s} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
