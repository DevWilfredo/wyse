import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://getwyse.io";
export const siteName = "WYSE Power Systems";
export const defaultDescription =
  "Intelligent appliance-level energy management for smarter homes, smarter grids, and lower energy bills.";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: `${siteUrl}/wyse/hero.png`,
          width: 1920,
          height: 1080,
          alt: "WYSE intelligent energy management system",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/wyse/hero.png`],
    },
  };
}
