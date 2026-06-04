/**
 * 포트폴리오 폰트 — studio 와 동일하게 Geist Sans + Geist Mono.
 * Geist 를 본문(--font-sans) 과 디스플레이(--font-display) 양쪽에 매핑한다
 * (studio 의 jacobko-studio 페르소나가 올-Geist 구성이므로).
 */
import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const fontVariables = [geistSans.variable, geistMono.variable].join(" ");
