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
      "One Next.js 15 codebase powering multiple independent sites — each with its own brand, language, and feature set.",
    challenge:
      "Delivering multiple distinct production websites without duplicating code or diverging quality — each needing its own brand, content, language, compliance posture, and premium conversion modules.",
    solution:
      "Architected a single Next.js 15 (App Router) codebase with a persona/module toggle system — features (AI chat, booking, e-commerce, i18n) switch on per deployment through config, with build-time tree-shaking so each site ships only what it uses.",
    achievements: [
      "Module-toggle architecture reusing one codebase across 6+ distinct site profiles.",
      "Shipped production AI chat assistant (Gemini API), instant quote calculator, and Bento showcase modules.",
      "NZ Privacy Act 2020 compliance built into code — consent flows, data-handling, contact pipelines.",
      "Full i18n bilingual architecture (EN/KO) — locale routing + content model.",
      "Type-safe config/content layer; Supabase-backed CMS + auth; Vercel edge delivery.",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind", "Supabase", "Gemini API", "i18n", "Vercel"],
    links: [
      { label: "Live Demo", href: "https://studio.jacobko.app" },
      { label: "Code", href: "#" },
    ],
    image: "/images/web/project-a.png",
    imageAlt: "Multi-tenant web platform — studio.jacobko.app",
  },
  {
    index: "02",
    title: "iOS Production App Suite",
    tagline:
      "Three standalone apps built and shipped solo — entertainment, travel, and lifestyle — each production-ready and under App Store review.",
    challenge:
      "Design, architect, and ship multiple distinct iOS apps as a solo engineer: each with its own domain, UX, data layer, and monetisation strategy, while maintaining a fast, repeatable release pipeline.",
    solution:
      "Built three native SwiftUI apps with shared architectural patterns (MVVM + Combine, Core Data) and a consistent AdMob monetisation layer. Each app targets a different category — entertainment, travel, and lifestyle — with purpose-built features per domain.",
    achievements: [
      "MBox — TMDB-powered movie discovery with hero cards, 4-category infinite scroll, and a Core Data watchlist. Custom dark theme throughout.",
      "DiscoverKR — Korea travel guide with MapKit, on-device AI (Apple Foundation Models) generating highlights and tips per attraction, Trip Planner, and KTO open data.",
      "CoffeeStamp — Lightweight café stamp-card manager. Core Data persistence, NavigationSplitView, zero external dependencies.",
      "AdMob banner monetisation integrated across all three apps.",
      "iOS 15–26 deployment target range; App Store Connect + TestFlight pipeline in place.",
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
      "A calm, full-stack Flutter app for the journey from pregnancy into early parenting — live on iOS, Android coming soon.",
    challenge:
      "Build a warm, privacy-first companion app that handles sensitive family data — ultrasounds, journals, health checkups — with a reliable cloud backend, cross-platform delivery, and zero subscription friction.",
    solution:
      "Architected a Flutter + Firebase stack with Riverpod state management and go_router navigation. Firebase handles auth (Sign in with Apple, Google, guest), Firestore + Storage for private user content, and Crashlytics/Analytics for stability. A single codebase ships to both iOS and Android.",
    achievements: [
      "Week-by-week pregnancy home with baby size milestones and a growth journal with mood tags.",
      "Private memories gallery backed by Firebase Storage — ultrasounds, bump photos, baby moments.",
      "Well Child checkup timeline with local reminders; care schedule adapts per country (NZ-first launch).",
      "Sign in with Apple + Google + guest mode; in-app account deletion (App Store guideline 5.1.1(v)).",
      "Live on iOS App Store · Android Play Store launch in progress.",
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
