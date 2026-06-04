# Plan — Personal Portfolio Site (jacobko.app)

> **새 세션 진행용 기획 문서.** 이 파일을 기준으로 신규 세션에서 구현을 시작하면 됨.
> 규칙: `git commit` / `push` 는 J 가 수동으로 함. (자동 커밋/푸시 금지)

## Context

J needs a **job-hunting portfolio site** for the NZ (Christchurch) market, separate from the
commercial `studio.jacobko.app` (which is now hidden to avoid a side-business conflict during the
job search). Target readers: NZ Hiring Managers, CTOs, Tech Recruiters who must grasp J's value in
~3 seconds. The site must look **visually identical to the studio** (same CSS, same colour set) but
be re-positioned as a pure **Software / Product Engineer** showcase — all "studio / agency / outsourcing"
language stripped out.

- **Path**: `/Users/jacobko/Document/03_Web/Portpolio` (new, currently empty — standalone project)
- **Domain**: `jacobko.app` (Vercel deploy later)
- **Stack**: Next.js 15 (App Router) · TypeScript · Tailwind 3.4 · lucide-react
- **Theme**: Light only (studio's default light tokens)
- **Format**: One-page, anchor-nav, fully responsive
- **Rule**: J handles all `git commit` / `push` manually — Claude does **not** auto-commit/push.

---

## Design system — copy verbatim from studio

Replicate these exact tokens so the look matches `studio.jacobko.app`:

| Token | Value (HSL) | Meaning |
|-------|-------------|---------|
| `--background` | `0 0% 100%` | white |
| `--foreground` | `0 0% 10%` | ink black |
| `--primary` | `220 90% 50%` | blue |
| `--accent` | `280 70% 55%` | purple |
| `--muted-foreground` | `0 0% 40%` | grey text |
| `--border` | `0 0% 90%` | hairline |
| `--radius` | `0.75rem` | corner radius |

- **Fonts**: Geist Sans (`--font-sans`) + Geist Mono (`--font-mono`) via `next/font/google`.
  Headings use display font, `font-weight: 600`, `letter-spacing: -0.01em`.
- **Utilities** to port from `Web_Template/styles/globals.css`: `.container-x` (fluid side padding),
  `.section-y` (fluid vertical rhythm), `.max-content` (1280px centred).
- **Source files** to copy tokens/utilities from:
  - `/Users/jacobko/Document/03_Web/Web_Template/styles/globals.css`
  - `/Users/jacobko/Document/03_Web/Web_Template/styles/themes/jacobko-studio.css`
  - 폰트 정의 참고: `/Users/jacobko/Document/03_Web/Web_Template/app/fonts.ts` (Geist, Geist_Mono)
- **Light only** — drop the `.dark` block and ThemeProvider; hard-set light.

### 참고: studio 토큰 원본 (jacobko-studio.css, light)

```css
[data-persona="jacobko-studio"] {
  --background: 0 0% 100%;
  --foreground: 0 0% 10%;
  --primary: 220 90% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 10%;
  --accent: 280 70% 55%;
  --accent-foreground: 0 0% 100%;
  --muted: 0 0% 96%;
  --muted-foreground: 0 0% 40%;
  --destructive: 0 70% 50%;
  --destructive-foreground: 0 0% 100%;
  --border: 0 0% 90%;
  --input: 0 0% 90%;
  --ring: 220 90% 50%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 10%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 10%;
  --radius: 0.75rem;
}
```

---

## Project structure (new repo at Portpolio)

```
Portpolio/
├── app/
│   ├── layout.tsx            # Geist fonts, metadata (metadataBase https://jacobko.app), light only
│   ├── page.tsx              # one-page composition (imports all sections)
│   ├── globals.css           # studio tokens + base + container-x/section-y/max-content
│   └── fonts.ts              # Geist + Geist_Mono
├── components/
│   ├── nav.tsx               # sticky minimal top nav + anchor links + GitHub/LinkedIn icons
│   ├── hero.tsx              # headline + availability badges
│   ├── projects.tsx          # 3 project cards (Challenge/Solution/Achievements+Stack)
│   ├── experience.tsx        # Inflearn instructor + NZQA L6 Diploma
│   ├── contact.tsx           # email / GitHub / LinkedIn
│   └── footer.tsx
├── lib/data.ts               # typed content (projects, experience, badges) — easy to edit copy
├── public/images/            # mock device images (web demo screenshots + app mockups)
├── tailwind.config.ts        # extend with HSL token mapping (same as studio)
├── postcss.config.js
├── tsconfig.json
├── package.json
└── next.config.ts
```

Content lives in `lib/data.ts` (typed arrays) so J can tweak copy/links in one place.

---

## One-page wireframe + English copy

### 0. Top nav (`nav.tsx`) — sticky, blur backdrop
- Left: wordmark `Jacob Ko` (mono font accent on the dot).
- Right: anchor links `Work · Experience · Contact` + GitHub & LinkedIn lucide icons.
- Mobile: collapse links, keep wordmark + icons.

### 1. Hero (`hero.tsx`)
- **Eyebrow** (mono, blue): `SOFTWARE / PRODUCT ENGINEER`
- **H1** (fluid, ~clamp 2.5–4rem):
  `I design, build, and ship full products — web and mobile — on my own.`
- **Sub**: `Full-stack engineer based in Christchurch, New Zealand. I take ideas from
  architecture to App Store, owning the Next.js backend, the iOS/Flutter client, and everything in between.`
- **Availability badges row** (most prominent — pill chips, blue/purple/grey):
  - 🟢 `NZ Permanent Resident — No sponsorship required`
  - 📍 `Based in Christchurch`
  - ⚡ `Available — Immediate start`
- **CTAs**: `View Work` (primary, blue) → #work · `Get in touch` (ghost) → #contact

### 2. Selected Projects (`projects.tsx`) — `#work`
Section heading: `Selected Work` + sub `Three production systems I architected and shipped end-to-end.`
Each card: number index (mono) · title · one-line tagline · **Challenge / Solution / Key Achievements**
· tech-stack pill row · link buttons. Mock image per card.

**Project A — Modular Multi-Tenant Web Platform**
- Tagline: `One Next.js 15 codebase powering many independent client sites via feature-flag modules.`
- **Challenge**: Shipping multiple distinct production websites without duplicating code or
  diverging quality — each needing its own brand, content, language, and compliance posture.
- **Solution**: Architected a single Next.js 15 (App Router) codebase with a **persona/module
  toggle system** — features (blog, booking, e-commerce, i18n) switch on per deployment through
  config, monorepo-style, with build-time tree-shaking so each site ships only what it uses.
- **Key Achievements**:
  - Designed a **module-toggle architecture** that reuses one codebase across 6+ distinct site profiles.
  - Implemented **NZ Privacy Act 2020** compliance in code (consent, data-handling, contact flows).
  - Built a full **i18n multilingual architecture** (locale routing + content model).
  - Type-safe content/config layer; Supabase-backed CMS + auth.
- **Stack**: Next.js 15 · TypeScript · Tailwind · Supabase · i18n · Vercel
- **Links**: `Live Demo` → demo subdomain (placeholder, e.g. `https://momo.jacobko.app`) · `Code` (GitHub, placeholder)
- Image: existing persona demo screenshot (web). → J 가 만든 데모 사이트 스크린샷 활용.

**Project B — iOS Production Apps**
- Tagline: `A family of native & hybrid iOS apps — currently under App Store review.`
- **Challenge**: Take multiple iOS apps from concept to a release-ready, App-Store-compliant state
  as a solo engineer, with a fast, repeatable delivery pipeline.
- **Solution**: Built native **Swift/SwiftUI** apps with shared architecture patterns, a
  **Next.js API Routes backend** for data, and an **App Store Connect + TestFlight** delivery flow
  optimised for quick review cycles.
- **Key Achievements**:
  - **4 apps** architected and submitted — *Under Apple App Store Review*.
  - Native Swift/SwiftUI optimisation (Core Data on-device storage, privacy-first, no accounts).
  - Full-stack data integration via Next.js API Routes as backend.
  - Streamlined App Store Connect + TestFlight release pipeline.
- **Stack**: Swift · SwiftUI · Core Data · Next.js API Routes · App Store Connect · TestFlight
- **Links**: `App Store` (placeholder — coming soon) · `Code` (placeholder)
- Image: mock app screenshots (placeholder mockups; 실제 스크린샷은 출시 후 교체).

**Project C — Flutter Cross-Platform App**
- Tagline: `One Flutter codebase, both platforms, synced to a Next.js backend.`
- **Challenge**: Deliver a consistent cross-platform mobile experience with reliable data sync to
  the same backend that powers the web/iOS stack — without doubling engineering effort.
- **Solution**: Built a **Flutter** client for cross-platform productivity, integrated with
  **Next.js API** endpoints for organic data synchronisation across web and mobile.
- **Key Achievements**:
  - Single Flutter codebase → iOS + Android from one source.
  - Real-time data sync against shared Next.js API.
  - Consistent design language with the wider product ecosystem.
- **Stack**: Flutter · Dart · Next.js API · REST/JSON sync
- **Links**: `Coming Soon` (placeholder) · `Code` (placeholder)
- Image: mock app screenshots (placeholder).

### 3. Capabilities strip (small, between Work & Experience)
Mono-labelled grid of what J owns end-to-end: `Frontend · Backend · iOS · Cross-Platform ·
DevOps/Deploy · Compliance`. Reinforces "builds + ships alone".

### 4. Experience & Education (`experience.tsx`) — `#experience`
Heading: `Experience & Education`
- **Technical Instructor — Inflearn** (Korea's major edtech platform)
  `Authored and taught engineering courses to thousands of developers on one of Korea's largest
  edtech platforms — turning complex topics into clear, production-grade lessons.`
- **NZQA Level 6 Diploma in ICT** — Graduate
  `New Zealand-recognised ICT qualification — the local credential baseline for NZ tech roles.`
- Lay out as a clean timeline / two-card row.

### 5. Contact (`contact.tsx`) — `#contact`
Heading: `Let's build something.` Sub: `Open to engineering roles across Aotearoa New Zealand.
Permanent Resident — immediate start.`
- **Email**: `admin@jacobko.app` (site contact) — 단, 실제 CV 에는 `jacobkosmart@gmail.com` 사용.
- **GitHub**: placeholder URL (icon + label) — 나중에 J 가 실제 링크 연결.
- **LinkedIn**: placeholder URL (icon + label) — 나중에 J 가 실제 링크 연결.
- Re-state the 3 availability badges as a final reminder.

### 6. Footer (`footer.tsx`)
`© {year} Jacob Ko · Christchurch, Aotearoa New Zealand` · small nav repeat. No "studio" wording.

---

## Images strategy
- `public/images/web/` — reuse an existing persona **demo screenshot** for Project A (light, brandable).
- `public/images/ios/` + `public/images/flutter/` — **placeholder mock images** (simple device-frame
  PNG/SVG mockups) so the layout is complete; J swaps real screenshots when apps launch.
- All images via `next/image` with explicit sizes; cards degrade gracefully if an image is missing.

## De-branding guardrails (important)
- No "studio", "agency", "외주", "client work for hire", or client brand names (Momo/Driftwood) framed
  as commercial clients. Project A is framed purely as a **technical multi-tenant architecture**.
- Footer/contact use `jacobko.app` + `admin@jacobko.app`, never `studio.jacobko.app`.

---

## Verification
1. `cd /Users/jacobko/Document/03_Web/Portpolio && npm install`
2. `npm run dev` → open `http://localhost:3000`:
   - Hero badges visible above the fold on mobile + desktop.
   - Colours/fonts match studio (blue primary, purple accent, Geist).
   - All 3 project cards render with stack pills + (placeholder) links + images.
   - Anchor nav scrolls to Work / Experience / Contact.
   - No "studio"/agency wording anywhere (grep check).
3. `npm run build` → clean production build, no TS errors.
4. Responsive check at 375px / 768px / 1280px (no overflow/break).
5. J reviews copy in `lib/data.ts`, fills real GitHub/LinkedIn URLs, then commits/pushes manually.

## Out of scope (later, by J)
- Real GitHub/LinkedIn URLs, real app images, demo subdomain wiring.
- Vercel project + `jacobko.app` domain attach.
- Resume PDF (can add a download button later).

---

## 신규 세션 시작 프롬프트 (복붙용)

> `/Users/jacobko/Document/03_Web/Portpolio/PLAN.md` 를 읽고 그대로 구현해줘.
> Next.js 15 + TS + Tailwind 3.4 + lucide-react 원페이지 포트폴리오 사이트.
> 디자인 토큰은 studio(`Web_Template/styles/themes/jacobko-studio.css`)와 동일하게 라이트 전용.
> commit / push 는 내가 직접 할거니까 하지 마.
