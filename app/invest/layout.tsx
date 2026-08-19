import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Invest",
  description: "Explore the market opportunity, economics, scale strategy, milestones, and investment case for WYSE Power Systems.",
  path: "/invest",
});

export default function InvestLayout({ children }: LayoutProps<"/invest">) {
  return children;
}
