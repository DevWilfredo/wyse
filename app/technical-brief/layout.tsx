import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Technical Brief",
  description: "Read the WYSE technical brief on appliance-level energy management for residential demand and efficiency.",
  path: "/technical-brief",
});

export default function TechnicalBriefLayout({ children }: LayoutProps<"/technical-brief">) {
  return children;
}
