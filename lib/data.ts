/**
 * 콘텐츠 단일 편집점.
 * 카피·링크·이미지 경로를 여기서만 수정하면 사이트 전체에 반영된다.
 * placeholder 로 표시된 링크/이미지는 추후 J 가 실제 값으로 교체.
 */

/* ---------- 공통 링크 / 소셜 ---------- */

export const SITE = {
  name: "Jacob Ko",
  domain: "jacobko.app",
  email: "admin@jacobko.app",
  location: "Christchurch, Aotearoa New Zealand",
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

// placeholder — J 가 실제 URL 로 교체
export const SOCIALS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jacobnko", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Email", href: `mailto:${SITE.email}`, icon: "mail" },
];

/* ---------- 내비게이션 ---------- */

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ---------- Availability 배지 ---------- */

export type Badge = { emoji: string; label: string };

export const BADGES: Badge[] = [
  { emoji: "🟢", label: "NZ Permanent Resident — No sponsorship required" },
  { emoji: "📍", label: "Based in Christchurch" },
  { emoji: "⚡", label: "Available — Immediate start" },
];

/* ---------- Hero ---------- */

export const HERO = {
  eyebrow: "SOFTWARE / PRODUCT ENGINEER",
  h1: "I design, build, and ship full products — web and mobile — on my own.",
  sub: "Full-stack engineer based in Christchurch, New Zealand. I take ideas from architecture to App Store, owning the Next.js backend, the iOS/Flutter client, and everything in between.",
  ctaPrimary: { label: "View Work", href: "#work" },
  ctaGhost: { label: "Get in touch", href: "#contact" },
} as const;

/* ---------- Selected Work ---------- */

export type ProjectLink = { label: string; href: string };

export type Project = {
  index: string;
  title: string;
  tagline: string;
  challenge: string;
  solution: string;
  achievements: string[];
  stack: string[];
  links: ProjectLink[];
  image: string; // public/ 기준 경로 (없으면 graceful degrade)
  imageAlt: string;
};

export const PROJECTS_HEADING = {
  title: "Selected Work",
  sub: "Three production systems I architected and shipped end-to-end.",
} as const;

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Modular Multi-Tenant Web Platform",
    tagline:
      "One Next.js 15 codebase powering many independent client sites via feature-flag modules.",
    challenge:
      "Shipping multiple distinct production websites without duplicating code or diverging quality — each needing its own brand, content, language, and compliance posture.",
    solution:
      "Architected a single Next.js 15 (App Router) codebase with a persona/module toggle system — features (blog, booking, e-commerce, i18n) switch on per deployment through config, monorepo-style, with build-time tree-shaking so each site ships only what it uses.",
    achievements: [
      "Designed a module-toggle architecture that reuses one codebase across 6+ distinct site profiles.",
      "Implemented NZ Privacy Act 2020 compliance in code (consent, data-handling, contact flows).",
      "Built a full i18n multilingual architecture (locale routing + content model).",
      "Type-safe content/config layer; Supabase-backed CMS + auth.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind", "Supabase", "i18n", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://momo.jacobko.app" },
      { label: "Code", href: "#" },
    ],
    image: "/images/web/project-a.svg",
    imageAlt: "Multi-tenant web platform demo screenshot",
  },
  {
    index: "02",
    title: "iOS Production Apps",
    tagline:
      "A family of native & hybrid iOS apps — currently under App Store review.",
    challenge:
      "Take multiple iOS apps from concept to a release-ready, App-Store-compliant state as a solo engineer, with a fast, repeatable delivery pipeline.",
    solution:
      "Built native Swift/SwiftUI apps with shared architecture patterns, a Next.js API Routes backend for data, and an App Store Connect + TestFlight delivery flow optimised for quick review cycles.",
    achievements: [
      "4 apps architected and submitted — Under Apple App Store Review.",
      "Native Swift/SwiftUI optimisation (Core Data on-device storage, privacy-first, no accounts).",
      "Full-stack data integration via Next.js API Routes as backend.",
      "Streamlined App Store Connect + TestFlight release pipeline.",
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "Core Data",
      "Next.js API Routes",
      "App Store Connect",
      "TestFlight",
    ],
    links: [
      { label: "App Store", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/ios/project-b.svg",
    imageAlt: "iOS app mockup screenshots",
  },
  {
    index: "03",
    title: "Flutter Cross-Platform App",
    tagline: "One Flutter codebase, both platforms, synced to a Next.js backend.",
    challenge:
      "Deliver a consistent cross-platform mobile experience with reliable data sync to the same backend that powers the web/iOS stack — without doubling engineering effort.",
    solution:
      "Built a Flutter client for cross-platform productivity, integrated with Next.js API endpoints for organic data synchronisation across web and mobile.",
    achievements: [
      "Single Flutter codebase → iOS + Android from one source.",
      "Real-time data sync against shared Next.js API.",
      "Consistent design language with the wider product ecosystem.",
    ],
    stack: ["Flutter", "Dart", "Next.js API", "REST/JSON sync"],
    links: [{ label: "Coming Soon", href: "#" }],
    image: "/images/flutter/project-c.svg",
    imageAlt: "Flutter cross-platform app mockup",
  },
];

/* ---------- Capabilities strip ---------- */

export const CAPABILITIES: string[] = [
  "Frontend",
  "Backend",
  "iOS",
  "Cross-Platform",
  "DevOps/Deploy",
  "Compliance",
];

/* ---------- Experience & Education ---------- */

export type Experience = {
  role: string;
  org: string;
  period?: string;
  blurb: string;
  link?: ProjectLink;
};

export const EXPERIENCE_HEADING = "Experience & Education";

export const EXPERIENCE: Experience[] = [
  {
    role: "iOS App Development Instructor",
    org: "Inflearn",
    period: "Since 2024",
    blurb:
      "Own the full course lifecycle end-to-end on one of Korea's largest edtech platforms — curriculum planning, on-camera filming, video editing, one-on-one learner mentoring, and ongoing course management. Turn complex native iOS topics into clear, production-grade lessons for developers.",
    link: {
      label: "View instructor profile",
      href: "https://www.inflearn.com/en/users/468073/@jacobko",
    },
  },
  {
    role: "NZQA Level 6 Diploma in ICT",
    org: "Graduate",
    blurb:
      "New Zealand-recognised ICT qualification — the local credential baseline for NZ tech roles.",
  },
];

/* ---------- Contact ---------- */

export const CONTACT = {
  heading: "Let's build something.",
  sub: "Open to engineering roles across Aotearoa New Zealand. Permanent Resident — immediate start.",
} as const;
