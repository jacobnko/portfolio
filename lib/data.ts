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
  { emoji: "🟢", label: "NZ Permanent Resident" },
  { emoji: "📍", label: "Christchurch, New Zealand" },
  { emoji: "🌐", label: "Open to remote · NZ-wide" },
];

/* ---------- Hero ---------- */

export const HERO = {
  eyebrow: "MOBILE / SOFTWARE ENGINEER",
  h1: "I design, build, and ship full products — mobile and web — on my own.",
  sub: "Full-stack engineer who ships complete products end-to-end. Web platforms on Next.js, production APIs on NestJS, native iOS in Swift, and cross-platform mobile in Flutter — from schema to App Store. I integrate AI tooling into my workflow to build fast and reliably, while owning every architectural decision.",
  ctaPrimary: { label: "View Work", href: "#work" },
  ctaGhost: { label: "Get in touch", href: `mailto:${SITE.email}` },
} as const;

/* ---------- Selected Work ---------- */

export type ProjectLink = { label: string; href: string; disabled?: boolean };

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
  imageHref?: string; // 이미지 클릭 시 이동할 URL
};

export const PROJECTS_HEADING = {
  title: "Selected Work",
  sub: "Production systems I architected and shipped end-to-end.",
} as const;

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Mobile Apps — iOS & Android",
    tagline:
      "Native iOS and cross-platform Android development — UIKit / SwiftUI for Apple, Flutter for dual-market.",
    challenge:
      "Design and ship four distinct mobile apps as a solo engineer across entertainment, travel, lifestyle, and parenting.",
    solution:
      "iOS apps built with UIKit and SwiftUI following modern Apple platform guidelines. Flutter delivers the Android side from a single codebase — enabling simultaneous dual-market launch.",
    achievements: [
      "Koru — Pregnancy & baby companion, Firebase backend. iOS live · Android coming. (Flutter)",
      "MBox — TMDB movie discovery, infinite scroll, SwiftData watchlist. (iOS Native)",
      "DiscoverKR — Korea travel guide with MapKit + on-device AI (Apple Foundation Models). (iOS Native)",
      "CoffeeStamp — Café stamp-card manager, zero dependencies. (iOS Native)",
    ],
    stack: [
      "UIKit",
      "SwiftUI",
      "Flutter",
      "Firebase",
      "Concurrency",
      "SwiftData",
      "MapKit",
      "Foundation Models",
    ],
    links: [
      { label: "App Store Profile", href: "#", disabled: false },
      { label: "Koru", href: "https://koru.jacobko.app/" },
      { label: "MBox", href: "https://studio.jacobko.app/mbox" },
      { label: "DiscoverKR", href: "https://discoverykr.jacobko.app/" },
      { label: "CoffeeStamp", href: "https://coffeestamp.jacobko.app/" },
    ],
    image: "/images/mobile-apps-thumbnail.png",
    imageAlt: "Native mobile apps — iOS & Android",
    imageHref: "#",
  },
  {
    index: "02",
    title: "Modular Multi-Tenant Web Platform",
    tagline:
      "One Next.js 15 codebase powering multiple independent sites — each with its own brand, language, and feature set.",
    challenge:
      "Ship multiple distinct production sites from one codebase — each with its own brand, language, and compliance posture.",
    solution:
      "Next.js 15 App Router with a persona/module toggle — features switch on per deployment through config.",
    achievements: [
      "Module-toggle architecture across 6+ site profiles from one codebase.",
      "Production AI chat (Gemini API), quote calculator, and Bento showcase modules.",
      "Bilingual EN/KO — locale routing + full content model.",
      "NZ Privacy Act 2020 compliance; Supabase CMS + auth; Vercel edge delivery.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind", "Supabase", "Gemini API", "i18n", "Vercel"],
    links: [
      { label: "Live Site", href: "https://studio.jacobko.app" },
    ],
    image: "/images/browser-mockup.png",
    imageAlt: "Multi-tenant web platform — studio.jacobko.app",
    imageHref: "https://studio.jacobko.app",
  },
  {
    index: "03",
    title: "Multi-Tenant Booking API",
    tagline:
      "A production reservation backend I designed end-to-end — auth, tenant isolation, and a concurrency-safe booking rule.",
    challenge:
      "Architect a multi-tenant reservation system that handles the hard parts — auth, tenant isolation, and race-condition-proof booking — deployed to production with a full test suite and no BaaS shortcuts.",
    solution:
      "KiwiSlot: a multi-tenant reservation API on NestJS + PostgreSQL with JWT auth, role-based guards, code-enforced tenant isolation, and a transactional pessimistic lock that prevents double-booking. AI-assisted workflow — I directed the architecture and own every decision.",
    achievements: [
      "Self-designed relational schema (5 entities) with versioned Prisma migrations.",
      "JWT auth + OWNER/STAFF role guards; multi-tenant data isolation enforced in code.",
      "Concurrency-safe double-booking prevention via pessimistic lock — proven race-free with parallel tests.",
      "Unit + e2e tests; GitHub Actions CI runs against real Postgres on every push.",
      "Multi-stage Docker image on Neon + Render; interactive Swagger docs live.",
    ],
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT", "Docker", "GitHub Actions", "Swagger"],
    links: [
      { label: "Live Demo", href: "https://kiwislot-demo.jacobko.app" },
      { label: "API Docs", href: "https://kiwislot.jacobko.app/api/docs" },
    ],
    image: "/images/backend-mockup.png",
    imageAlt: "KiwiSlot — Swagger API docs and concurrency demo",
    imageHref: "https://kiwislot-demo.jacobko.app",
  },
];

/* ---------- Capabilities strip ---------- */

export const CAPABILITIES: string[] = [
  "iOS",
  "Flutter",
  "Full-Stack",
  "API Design",
  "DevOps/Deploy",
  "AI Integration",
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
export const EXPERIENCE_SUBHEADING = "Experience";
export const EDUCATION_SUBHEADING = "Education";

export const EXPERIENCE: Experience[] = [
  {
    role: "iOS App Development Instructor",
    org: "Inflearn",
    period: "Aug 2022 – Present · Remote, KR",
    blurb:
      "Teaching native iOS development on one of Korea's largest edtech platforms — from curriculum design and filming to learner mentoring.",
    link: {
      label: "View instructor profile",
      href: "https://www.inflearn.com/en/users/468073/@jacobko",
    },
  },
  {
    role: "Junior iOS Developer",
    org: "PetEasy Co., Ltd.",
    period: "Jun 2020 – Dec 2021 · Seoul, KR",
    blurb:
      "Built and maintained SwiftUI / UIKit features for a pet-services platform — shop search, reservation flows, and a CoreLocation-powered dog-walking rewards system. Integrated RESTful APIs and managed TestFlight beta builds through to App Store release.",
  },
  {
    role: "Junior IT Support Specialist",
    org: "Donggok Precision",
    period: "Jan 2019 – Apr 2020 · Seoul, KR",
    blurb:
      "Handled hardware, software, and network troubleshooting to minimise downtime. Managed system updates, data backups, and workstation setups across the local IT infrastructure.",
  },
  {
    role: "Telecommunication Technician",
    org: "Garden City Comms",
    period: "Jan 2017 – Aug 2018 · Christchurch, NZ",
    blurb:
      "Installed and maintained structured data cable and LAN systems across client sites. Executed end-to-end network deployments from technical blueprints and resolved connectivity issues to ensure maximum uptime.",
  },
];

export const EDUCATION: Experience[] = [
  {
    role: "Diploma in Information and Communications Technology",
    org: "CPIT, NZ",
    period: "Mar 2016",
    blurb:
      "New Zealand-recognised ICT qualification (NZQA Level 6) — the local credential baseline for NZ tech roles.",
  },
];

/* ---------- Contact ---------- */

export const CONTACT = {
  heading: "Let's build something.",
  sub: "Open to engineering roles across Aotearoa New Zealand. NZ Permanent Resident.",
} as const;
