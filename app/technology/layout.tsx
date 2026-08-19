import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Technology",
  description: "Discover how WYSE combines appliance-level control, real-time sensing, voltage modulation, and AI-driven optimization.",
  path: "/technology",
});

export default function TechnologyLayout({ children }: LayoutProps<"/technology">) {
  return children;
}
