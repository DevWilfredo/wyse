import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  return <Link href={href} className={`wyse-button wyse-button--${variant} ${className}`.trim()}>{children}</Link>;
}
