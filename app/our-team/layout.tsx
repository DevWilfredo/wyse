import { pageMetadata } from "../seo";

export const metadata = pageMetadata({
  title: "Our Team",
  description: "Meet the multidisciplinary team building WYSE intelligent energy-management technology.",
  path: "/our-team",
});

export default function OurTeamLayout({ children }: LayoutProps<"/our-team">) {
  return children;
}
