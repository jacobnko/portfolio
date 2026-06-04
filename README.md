# Jacob Ko — Portfolio

Job-hunting portfolio site for the NZ (Christchurch) market.
Positioned as a pure **Software / Product Engineer** showcase.

- **Live**: https://jacobko.app (deploy via Vercel)
- **Stack**: Next.js 15 (App Router) · TypeScript · Tailwind 3.4 · lucide-react
- **Theme**: Light only — design tokens mirror `studio.jacobko.app`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

## Editing content

All copy, links, badges, and image paths live in **[`lib/data.ts`](./lib/data.ts)** —
edit there and the whole site updates. No need to touch components for copy changes.

Common edits:
- `SOCIALS` — real GitHub / LinkedIn URLs
- `PROJECTS[].links` — App Store / Code / demo URLs (placeholders are `#`)
- `PROJECTS[].image` — swap placeholder SVGs in `public/images/**` for real screenshots

## Structure

```
app/         layout · page · globals.css · fonts · icon
components/   nav · hero · capabilities · projects · experience · contact · footer
lib/data.ts  typed content (single edit point)
public/images/  web · ios · flutter (placeholder mockups → replace with real)
```

## Planning docs

- [`PLAN.md`](./PLAN.md) — full spec & wireframe (source of truth)
- [`ROADMAP.md`](./ROADMAP.md) — phased implementation log
- [`CLAUDE.md`](./CLAUDE.md) — project rules for AI assistance

> Note: `git commit` / `push` are done manually by the owner.
