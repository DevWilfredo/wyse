import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WYSE Power Systems",
    short_name: "WYSE",
    description: "Intelligent appliance-level energy management for smarter homes and smarter grids.",
    start_url: "/",
    display: "standalone",
    background_color: "#071013",
    theme_color: "#00d1f3",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
