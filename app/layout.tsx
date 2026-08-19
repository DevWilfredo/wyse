import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./header-layout.css";
import MotionEffects from "./motion-effects";
import { defaultDescription, siteName, siteUrl } from "./seo";

const wyse = Montserrat({
  variable: "--font-wyse",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WYSE | Intelligent Energy Management",
    template: "%s | WYSE",
  },
  description: defaultDescription,
  applicationName: siteName,
  category: "Energy Technology",
  keywords: [
    "intelligent energy management",
    "appliance energy management",
    "voltage optimization",
    "residential demand response",
    "smart grid technology",
    "water heater energy savings",
    "home energy efficiency",
    "WYSE Power Systems",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: "WYSE | Intelligent Energy Management",
    description: defaultDescription,
    locale: "en_US",
    images: [{ url: "/wyse/hero.png", width: 1920, height: 1080, alt: "WYSE intelligent energy management system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WYSE | Intelligent Energy Management",
    description: defaultDescription,
    images: ["/wyse/hero.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#12252c" },
    { media: "(prefers-color-scheme: dark)", color: "#071013" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: defaultDescription,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className={`${wyse.variable} ${inter.variable}`}>
      <body>
        {children}
        <MotionEffects />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </body>
    </html>
  );
}
