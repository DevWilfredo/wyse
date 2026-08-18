import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import MotionEffects from "./motion-effects";

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
  title: "WYSE | Intelligent Energy Management",
  description: "Smarter Homes — Smarter Grids — Lower Energy Bills.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${wyse.variable} ${inter.variable}`}>
      <body>{children}<MotionEffects /></body>
    </html>
  );
}
