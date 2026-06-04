"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE, SOCIALS } from "@/lib/data";
import { SocialIcon } from "./social-icon";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="container-x max-content flex h-16 items-center justify-between">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-mono text-base font-semibold tracking-tight"
        >
          {SITE.name}
          <span className="text-primary">.</span>
        </a>

        {/* Right: anchor links (desktop) + socials + hamburger (mobile) */}
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
            {/* Hamburger — mobile only, next to social icons */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="text-muted-foreground transition-colors hover:text-foreground sm:hidden"
            >
              {open ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-border/60 bg-background/95 backdrop-blur-md sm:hidden"
        >
          <ul className="container-x max-content flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
