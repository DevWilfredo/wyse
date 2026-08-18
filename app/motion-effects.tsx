"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const targets = [
  "main > section",
  ".problem > .container > .eyebrow",
  ".problem > .container > h2",
  ".problem-grid > article",
  ".problem-close",
  ".impact-section .eyebrow",
  ".impact-section .display-heading",
  ".stats > div",
  ".center-question",
  ".impact-cards > article",
  ".fine-print",
  ".impact-close",
  ".technology .section-intro",
  ".technology-grid > article",
  ".tech-close",
  ".why-grid > article",
  ".news-section > .container > .eyebrow",
  ".news-section > .container > h2",
  ".news-section .news-lead",
  ".news-grid > article",
  ".faq-wrap > .eyebrow",
  ".faq-wrap > h2",
  ".faq-tabs",
  ".faq-list",
  ".cta-content",
  ".t-step-grid > article",
  ".t-hero > .container > *",
  ".t-steps > .container > .eyebrow",
  ".t-steps > .container > h2",
  ".t-promise",
  ".t-connected-grid > div",
  ".t-system-features > li",
  ".t-compounded-grid > div",
  ".t-stack-diagram > article",
  ".t-distributed-grid > div",
  ".t-patent-card",
  ".t-proof > .container > .eyebrow",
  ".t-proof > .container > h2",
  ".t-proof-grid > article",
  ".t-copy > *",
  ".brief-document > section",
  ".i-market-grid > article",
  ".i-econ-grid > article",
  ".i-channel-grid > article",
  ".i-progress-grid > article",
  ".invest-page section > .container > .eyebrow",
  ".invest-page section > .container > h2",
  ".i-hero .container > *",
  ".i-market-close",
  ".i-econ-close",
  ".i-flywheel",
  ".i-progress-grid li",
  ".i-funds",
  ".i-funds > div > span",
  ".i-contact-inner > *",
  ".i-form-card form > *",
].join(",");

export default function MotionEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(targets));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    elements.forEach((element, index) => {
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    });
    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08, rootMargin: "0px 0px -7%" });
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element));
      });
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, [pathname]);
  return null;
}
