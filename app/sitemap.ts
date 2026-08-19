import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-19T00:00:00.000Z");
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/technology", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/benefits", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/technical-brief", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/invest", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/our-team", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
