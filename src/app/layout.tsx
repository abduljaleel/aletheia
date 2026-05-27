import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import { PRODUCTS } from "@/data/products";
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

const SITE_URL = "https://abduljaleel.xyz/aletheia";

const TITLE = "Aletheia — Infrastructure for autonomous agents";
const DESCRIPTION =
  "Twelve products. One stack. The unconcealment layer for autonomous agents — governance, verification, optimization, infrastructure, and the physical frontier.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s · Aletheia",
  },
  description: DESCRIPTION,
  applicationName: "Aletheia",
  authors: [{ name: "Aletheia" }],
  generator: "Next.js",
  keywords: [
    "AI agents",
    "agent infrastructure",
    "agent governance",
    "agent verification",
    "agent observability",
    "agent debt",
    "constraint engine",
    "agentic kernel",
    "formal verification",
    "AI cost attribution",
    "digital twin",
    "autonomous agents",
    "AI safety",
  ],
  metadataBase: new URL("https://abduljaleel.xyz"),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Aletheia",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@abduljaleel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06070a" },
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Structured data — Organization + ItemList of the 12 products
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Aletheia",
      url: SITE_URL,
      description: DESCRIPTION,
      slogan: "Agents need new infrastructure. We're building it.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: "Aletheia",
      publisher: { "@id": `${SITE_URL}/#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#products`,
      name: "The Aletheia Stack",
      numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          description: p.oneLiner,
          url: p.url,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${jbMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
