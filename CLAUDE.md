# CLAUDE.md — Personal Portfolio Site (jacobko.app)

> 이 파일은 모든 세션에 자동 로드되는 프로젝트 지침이다.
> 상세 기획·와이어프레임·카피는 [`PLAN.md`](./PLAN.md) 가 단일 진실원본(source of truth).
> 새 작업 시작 전 PLAN.md 를 먼저 확인할 것.

## 절대 규칙 (HARD RULES)

1. **`git commit` / `git push` 금지.** J 가 직접 수동으로 한다. Claude 는 절대 자동 커밋/푸시하지 않는다.
2. **De-branding**: "studio / agency / 외주 / client work for hire / 상업 클라이언트(Momo·Driftwood)" 표현 금지.
   - Project A 는 순수 **기술적 multi-tenant 아키텍처**로만 서술.
   - 연락처/푸터는 `jacobko.app` + `admin@jacobko.app` 만 사용. `studio.jacobko.app` 절대 노출 금지.
3. **Light 테마 전용.** `.dark` 블록·ThemeProvider 없음. 라이트 토큰 하드코딩.
4. 디자인 토큰은 studio 와 **시각적으로 동일**해야 함 (아래 토큰 표 준수).

## 프로젝트 개요

- **목적**: NZ(크라이스트처치) 구직용 포트폴리오. 타깃 독자(Hiring Manager·CTO·Recruiter)가 3초 안에 가치를 파악.
- **포지셔닝**: 순수 **Software / Product Engineer** 쇼케이스 (스튜디오/에이전시 언어 전부 제거).
- **경로**: `/Users/jacobko/Document/03_Web/Portpolio`
- **도메인**: `jacobko.app` (추후 Vercel 배포)
- **형식**: 원페이지, 앵커 내비, 완전 반응형.

## 스택

- Next.js 15 (App Router) · TypeScript · Tailwind 3.4 · lucide-react
- 폰트: Geist Sans + Geist Mono (`next/font/google`)

## 디자인 토큰 (studio 와 동일, HSL)

| Token | Value | 의미 |
|-------|-------|------|
| `--background` | `0 0% 100%` | white |
| `--foreground` | `0 0% 10%` | ink black |
| `--primary` | `220 90% 50%` | blue |
| `--accent` | `280 70% 55%` | purple |
| `--muted-foreground` | `0 0% 40%` | grey text |
| `--border` | `0 0% 90%` | hairline |
| `--radius` | `0.75rem` | corner radius |

- 토큰/유틸 원본: `Web_Template/styles/globals.css`, `Web_Template/styles/themes/jacobko-studio.css`
- 폰트 정의 참고: `Web_Template/app/fonts.ts`
- 포팅할 유틸: `.container-x` · `.section-y` · `.max-content`(1280px centred)
- 헤딩: display font, weight 600, letter-spacing -0.01em

## 구조

```
app/        layout.tsx · page.tsx · globals.css · fonts.ts
components/  nav · hero · projects · experience · contact · footer
lib/data.ts  타입 지정된 콘텐츠 (projects/experience/badges) — 카피·링크 단일 편집점
public/images/  web · ios · flutter (목업/스크린샷)
tailwind.config.ts · postcss.config.js · tsconfig.json · package.json · next.config.ts
```

섹션 구성: Nav → Hero(availability badges 강조) → Selected Work(3 cards) → Capabilities strip → Experience & Education → Contact → Footer. 상세 카피는 PLAN.md 참조.

## 검증

1. `npm install` → `npm run dev` (localhost:3000)
2. Hero 배지가 모바일/데스크탑 폴드 위에 보임, 색/폰트 studio 일치
3. 3개 프로젝트 카드(스택 pill + 링크 + 이미지) 렌더, 앵커 내비 동작
4. `grep` 으로 "studio"/agency 표현 없음 확인
5. `npm run build` 클린(TS 에러 0), 375/768/1280px 반응형 확인

## 닉네임

- **J** = 사용자(jacobko) / **C** = Claude(나). J 가 "C야" 하면 응답.
