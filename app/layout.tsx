import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import AnalyticsScripts from "./components/AnalyticsScripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://myflightgotdelayed.com"),
  title: "My Flight Got Delayed — Claim what you’re owed",
  description:
    "Straight-talking guides, tools, and partners to help UK travellers claim flight delay compensation with minimal effort.",
  openGraph: {
    title: "My Flight Got Delayed",
    description:
      "Track your rights, download a compensation checklist, and connect with vetted claim partners in minutes.",
    url: "https://myflightgotdelayed.com",
    siteName: "My Flight Got Delayed",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "My Flight Got Delayed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Flight Got Delayed",
    description:
      "Guides and partners to maximise UK/EU flight delay compensation.",
  },
  keywords: [
    "flight delay compensation",
    "UK261",
    "EU261",
    "air passenger rights",
    "AirHelp alternative",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
