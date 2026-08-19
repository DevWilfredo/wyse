import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Benefits",
  description: "Explore WYSE benefits across energy economics, comfort, grid services, automation, maintenance, transparency, and resilience.",
  path: "/benefits",
});

export default function BenefitsLayout({ children }: LayoutProps<"/benefits">) {
  return children;
}
