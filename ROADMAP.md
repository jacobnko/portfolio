# ROADMAP — 구현 단계별 플랜 (커밋 단위)

> 기획 원본: [`PLAN.md`](./PLAN.md) · 지침: [`CLAUDE.md`](./CLAUDE.md)
> **커밋은 5개 묶음(A~E)** 으로 한다 (토큰 절약). `commit`/`push` 는 **J 가 직접** 한다 (C는 코드만 준비).
> 각 묶음은 독립적으로 빌드/동작 가능하도록 설계됨. 진행 시 체크박스 갱신.
>
> | 묶음 | Phase | 커밋 메시지 |
> |---|---|---|
> | **A** | 0 + 1 | `chore: scaffold Next.js 15 + studio design system` |
> | **B** | 2 + 3 | `feat: content model + layout shell (nav/footer)` |
> | **C** | 4 + 5 | `feat: hero + selected work + capabilities` |
> | **D** | 6 + 7 | `feat: experience, contact + placeholder images` |
> | **E** | 8 | `chore: responsive QA + production build verification` |

---

## Phase 0 — 프로젝트 스캐폴딩 & 툴링
빈 폴더에 Next.js 15 골격과 설정 파일을 깐다. (아직 화면 없음, 빌드만 통과)

- [x] 0.1 `git init` (현재 repo 아님)
- [x] 0.2 `package.json` — next@15, react, typescript, tailwindcss@3.4, postcss, autoprefixer, lucide-react
- [x] 0.3 `tsconfig.json` · `next.config.ts` · `postcss.config.js`
- [x] 0.4 `.gitignore` (node_modules, .next, .env*, .DS_Store)
- [x] 0.5 `npm install` 로 lockfile 생성 + 설치 확인
- [x] 0.6 빈 `app/layout.tsx` + `app/page.tsx` (Hello) → `npm run dev` 부팅 확인

↩️ (묶음 A 계속 — Phase 1 끝에서 커밋)

---

## Phase 1 — 디자인 시스템 기반
studio 와 시각적으로 동일한 라이트 토큰·폰트·유틸을 깐다.

- [x] 1.1 `app/fonts.ts` — Geist Sans + Geist Mono (`next/font/google`)
- [x] 1.2 `app/globals.css` — studio 라이트 토큰 하드코딩(:root) + base + `.container-x`/`.section-y`/`.max-content`
- [x] 1.3 `tailwind.config.ts` — HSL 토큰 매핑(studio 와 동일), 폰트 패밀리 연결
- [x] 1.4 `app/layout.tsx` — 폰트 적용, metadata(`metadataBase: https://jacobko.app`), lang, light 고정
- [x] 1.5 색/폰트 적용 확인 (임시 page에 토큰 샘플)

➡️ **Commit A:** `chore: scaffold Next.js 15 + studio design system`

---

## Phase 2 — 콘텐츠 모델
카피/링크를 한 곳에서 편집하도록 타입 지정 데이터 레이어 구성.

- [x] 2.1 `lib/data.ts` — 타입 정의 (Project, Experience, Badge, NavLink 등)
- [x] 2.2 PLAN.md 카피 그대로 입력: hero, 3개 projects(A/B/C), capabilities, experience×2, contact, badges×3
- [x] 2.3 placeholder 링크/이미지 경로 상수화 (나중에 J 가 교체)

↩️ (묶음 B 계속 — Phase 3 끝에서 커밋)

---

## Phase 3 — 레이아웃 셸 (Nav + Footer + page 골격)
페이지 뼈대를 세우고 앵커 내비/푸터부터 채운다.

- [x] 3.1 `components/nav.tsx` — sticky, blur backdrop, wordmark, 앵커(Work·Experience·Contact), GitHub/LinkedIn 아이콘, 모바일 대응
- [x] 3.2 `components/footer.tsx` — `© {year} Jacob Ko · Christchurch, Aotearoa NZ` + 미니 내비
- [x] 3.3 `app/page.tsx` — Nav + (빈 섹션 앵커들) + Footer 조립
- [x] 3.4 앵커 스크롤 동작 확인

➡️ **Commit B:** `feat: content model + layout shell (nav/footer)`

---

## Phase 4 — Hero 섹션
첫인상(availability 배지 강조) 구현.

- [x] 4.1 `components/hero.tsx` — eyebrow / H1(clamp) / sub / CTA(View Work·Get in touch)
- [x] 4.2 Availability 배지 3종 (PR·Christchurch·Immediate start) — 가장 도드라지게
- [x] 4.3 폴드 위 가시성 확인 (모바일/데스크탑)

↩️ (묶음 C 계속 — Phase 5 끝에서 커밋)

---

## Phase 5 — Selected Work + Capabilities
핵심 쇼케이스.

- [x] 5.1 `components/projects.tsx` — 카드(번호·제목·태그라인·Challenge/Solution/Achievements·스택 pill·링크·이미지)
- [x] 5.2 3개 프로젝트(A 멀티테넌트 / B iOS / C Flutter) 렌더
- [x] 5.3 Capabilities strip (Frontend·Backend·iOS·Cross-Platform·DevOps·Compliance)
- [x] 5.4 카드 이미지 누락 시 graceful degrade

➡️ **Commit C:** `feat: hero + selected work + capabilities`

---

## Phase 6 — Experience & Contact
신뢰·전환 섹션.

- [ ] 6.1 `components/experience.tsx` — Inflearn 강사 + NZQA L6 Diploma (타임라인/2카드)
- [ ] 6.2 `components/contact.tsx` — heading, email(`admin@jacobko.app`), GitHub/LinkedIn(placeholder), 배지 3종 재노출
- [ ] 6.3 `app/page.tsx` 에 두 섹션 연결

↩️ (묶음 D 계속 — Phase 7 끝에서 커밋)

---

## Phase 7 — 이미지/에셋 (placeholder)
레이아웃 완성을 위한 임시 비주얼.

- [ ] 7.1 `public/images/web/` — Project A 데모 스크린샷 (J 제공/기존 활용)
- [ ] 7.2 `public/images/ios/` · `public/images/flutter/` — 디바이스 프레임 목업(PNG/SVG)
- [ ] 7.3 `next/image` 명시적 size 연결

➡️ **Commit D:** `feat: experience, contact + placeholder images`

---

## Phase 8 — 마감 QA & 빌드 검증
출시 전 점검.

- [ ] 8.1 De-brand `grep` 체크 ("studio"/agency 표현 0)
- [ ] 8.2 반응형 375 / 768 / 1280px (overflow·깨짐 없음)
- [ ] 8.3 `npm run build` 클린 (TS 에러 0)
- [ ] 8.4 metadata/OG/favicon 등 마무리
- [ ] 8.5 README 간단 작성 (실행/배포 메모)

➡️ **Commit E:** `chore: responsive QA + production build verification`

---

## 이후 (J 가 직접, out of scope)
- 실제 GitHub/LinkedIn URL, 실제 앱 이미지, 데모 서브도메인 연결
- Vercel 프로젝트 + `jacobko.app` 도메인 연결
- Resume PDF 다운로드 버튼
