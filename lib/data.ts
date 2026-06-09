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
  imageHref?: string; // 이미지 클릭 시 이동할 URL
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
      "One Next.js 15 codebase powering multiple independent sites — each with its own brand, language, and feature set.",
    challenge:
      "Deliver multiple distinct production websites from a single codebase — each needing its own brand, language, feature set, and compliance posture, without duplicating code.",
    solution:
      "Single Next.js 15 (App Router) codebase with a persona/module toggle — features switch on per deployment through config, with build-time tree-shaking so each site ships only what it uses.",
    achievements: [
      "Module-toggle architecture reusing one codebase across 6+ distinct site profiles.",
      "Production AI chat assistant (Gemini API), instant quote calculator, and Bento showcase modules.",
      "NZ Privacy Act 2020 compliance — consent flows, data-handling, contact pipelines.",
      "Bilingual architecture (EN/KO) — locale routing + full content model.",
      "Type-safe config layer; Supabase CMS + auth; Vercel edge delivery.",
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
    index: "02",
    title: "iOS Production App Suite",
    tagline:
      "Three native iOS apps built and shipped solo — entertainment, travel, and lifestyle.",
    challenge:
      "Ship three distinct iOS apps as a solo engineer, each with its own domain, data layer, and monetisation strategy.",
    solution:
      "Native SwiftUI across all three, sharing MVVM + Core Data patterns and a consistent AdMob monetisation layer.",
    achievements: [
      "MBox — TMDB movie discovery, 4-category infinite scroll, Core Data watchlist, custom dark theme.",
      "DiscoverKR — MapKit travel guide with on-device AI (Apple Foundation Models) per attraction + Trip Planner.",
      "CoffeeStamp — Café stamp-card manager. Core Data, NavigationSplitView, zero dependencies.",
      "AdMob banner monetisation across all three apps.",
      "App Store Connect + TestFlight pipeline; iOS 15–26 range.",
    ],
    stack: [
      "Swift",
      "SwiftUI",
      "MVVM+Combine",
      "Core Data",
      "MapKit",
      "Foundation Models",
      "AdMob",
    ],
    links: [
      { label: "App Store", href: "#" },
      { label: "Code", href: "#" },
    ],
    image: "/images/ios/project-b.svg",
    imageAlt: "iOS app suite — MBox, DiscoverKR, CoffeeStamp",
  },
  {
    index: "03",
    title: "Koru — Pregnancy & Baby Companion",
    tagline:
      "Flutter app for the journey from pregnancy into early parenting — live on iOS, Android coming soon.",
    challenge:
      "Deliver a privacy-first family companion that handles sensitive data — ultrasounds, journals, health checkups — across both platforms without subscriptions.",
    solution:
      "Flutter + Firebase stack with Riverpod state management. Single codebase ships to iOS and Android; Firebase handles auth, Firestore + Storage for private user content.",
    achievements: [
      "Week-by-week pregnancy tracking with baby size milestones and a growth journal.",
      "Private memories gallery — ultrasounds, bump photos, baby moments (Firebase Storage).",
      "Well Child checkup timeline with local reminders; NZ-first care schedule.",
      "Sign in with Apple + Google + guest mode; in-app account deletion.",
      "Live on iOS App Store · Android Play Store coming soon.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase",
      "go_router",
      "AdMob",
    ],
    links: [
      { label: "App Store", href: "https://koru.jacobko.app" },
      { label: "Code", href: "#" },
    ],
    image: "/images/flutter/project-c.svg",
    imageAlt: "Koru — pregnancy and baby companion app",
  },
];

/* ---------- Capabilities strip ---------- */

export const CAPABILITIES: string[] = [
  "Frontend",
  "Backend",
  "iOS",
  "Cross-Platform",
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
  sub: "Open to engineering roles across Aotearoa New Zealand. Permanent Resident — immediate start.",
} as const;
