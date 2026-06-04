import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobko.app"),
  title: "Jacob Ko — Software / Product Engineer",
  description:
    "Full-stack engineer based in Christchurch, New Zealand. I design, build, and ship full products — web and mobile — on my own.",
  openGraph: {
    title: "Jacob Ko — Software / Product Engineer",
    description:
      "Full-stack engineer based in Christchurch, New Zealand. From architecture to App Store.",
    url: "https://jacobko.app",
    siteName: "Jacob Ko",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
