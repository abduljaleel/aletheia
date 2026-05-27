import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Aletheia · Infrastructure for autonomous agents",
  description:
    "Twelve products. One stack. The unconcealment layer for agents — governance, verification, optimization, infrastructure, and the physical frontier.",
  metadataBase: new URL("https://abduljaleel.xyz"),
  openGraph: {
    title: "Aletheia",
    description: "Infrastructure for the age of autonomous agents.",
    url: "https://abduljaleel.xyz/aletheia",
    siteName: "Aletheia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${jbMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
