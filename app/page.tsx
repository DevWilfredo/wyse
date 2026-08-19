"use client";

import Image from "next/image";
import { FormEvent, useEffect, useRef, useState } from "react";
import TechnologyVisual from "./components/technology-visual";

const problems = [
  [
    "/wyse/battery.svg",
    "Homes are electrifying",
    "Heat pumps, induction ranges, and EV chargers are replacing gas appliances at scale.",
  ],
  [
    "/wyse/thunder.svg",
    "EVs are charging",
    "Every EV adds 1–2 kW of overnight load — millions of vehicles simultaneously drawing power.",
  ],
  [
    "/wyse/computer.svg",
    "AI data centers are scaling",
    "AI infrastructure demands are doubling grid load projections across major metropolitan regions.",
  ],
  [
    "/wyse/graph.svg",
    "Peak load is rising faster than infrastructure",
    "Grid buildout takes decades. Demand isn’t waiting.",
  ],
];
const impacts = [
  [
    "/wyse/impact-ev.png",
    "82,600+ cars removed from the road",
    "The equivalent of taking tens of thousands of petrol vehicles off the road every single year.",
  ],
  [
    "/wyse/impact-home.png",
    "Power for ~90,000 homes",
    "Enough clean electricity recovered annually to power an entire community.",
  ],
  [
    "/wyse/impact-plant.png",
    "A power plant we don’t have to build",
    "Demand reduction at this scale replaces the need for new generation capacity.",
  ],
  [
    "/wyse/impact-interior.png",
    "Hundreds of millions kept in consumers’ pockets",
    "Real, measurable savings returned to the families who need them most.",
  ],
];
const technology = [
  [
    "voltage",
    "Optimizes voltage in real time",
    "Continuously adjusts voltage within regulatory tolerance ranges without any user intervention or comfort loss.",
  ],
  [
    "ai",
    "Uses AI to reduce waste",
    "Machine learning across 37+ real-time data points identifies and eliminates hidden inefficiencies in every cycle.",
  ],
  [
    "peak",
    "Smooths peak demand",
    "Smart scheduling shifts loads to off-peak hours, relieving grid stress when it matters most.",
  ],
  [
    "network",
    "Connects into distributed grid intelligence",
    "Each device contributes to a network-wide optimization layer, unlocking value beyond any single home.",
  ],
];
const news = [
  [
    "/wyse/news-1.png",
    "Dive Brief",
    "July 16, 2026",
    "Retail electric rate increases outpace inflation with prices set to rise higher",
    "Regulators approved 64% of the dollar value of revenue increase requests over the past five years.",
  ],
  [
    "/wyse/news-2.png",
    "Utility Dive",
    "July 17, 2026",
    "AI data center growth could force US utilities to rethink generation plans, BofA says",
    "Data center demand will outpace planned utility capacity additions by more than 100 GW through 2030.",
  ],
  [
    "/wyse/news-3.png",
    "Daily Energy Insider",
    "Feb 18, 2026",
    "AI is reshaping U.S. electricity demand faster than the grid can keep up",
    "Electricity consumption is entering a new era of rapid, structural growth.",
  ],
  [
    "/wyse/news-4.png",
    "Utility Dive",
    "Dec 23, 2025",
    "Home efficiency upgrades could offset data center loads while creating jobs: report",
    "Efficiency investments can benefit local grids, employment and utility ratepayers.",
  ],
  [
    "/wyse/news-5.png",
    "Utility Dive",
    "Nov 26, 2025",
    "Residential electricity prices continue rise, up 7.4% in September: EIA",
    "Capacity constraints, transmission and fuel costs are pushing household prices higher.",
  ],
  [
    "/wyse/news-6.png",
    "Opinion",
    "Feb 6, 2025",
    "Electricity is the next energy crisis",
    "Demand is accelerating while infrastructure takes years to plan and build.",
  ],
];
const faqs = [
  [
    "What exactly is WYSE?",
    "WYSE is an intelligent home energy management system that reduces avoidable electricity consumption without changing the way you live.",
  ],
  [
    "How does WYSE reduce my electricity bill?",
    "It uses real-time data and adaptive voltage optimization to reduce energy waste in high-load appliances.",
  ],
  [
    "Do I have to change my daily routine?",
    "No. WYSE works automatically in the background and is designed to preserve comfort and convenience.",
  ],
  [
    "Will I notice any difference?",
    "You should notice lower energy use, not a change in appliance performance or comfort.",
  ],
  [
    "Is WYSE safe for my appliances?",
    "Yes. The system operates within regulated voltage tolerances and continuously monitors performance.",
  ],
  [
    "Does WYSE replace my electrical panel?",
    "No. It integrates with the home’s existing electrical infrastructure.",
  ],
  [
    "What appliances does WYSE work with?",
    "The current system targets water heating, with additional high-load appliance optimization planned.",
  ],
  [
    "Can I control WYSE from my phone?",
    "Connected controls and energy insights are part of the WYSE product roadmap.",
  ],
  [
    "Does WYSE require Wi-Fi?",
    "Connectivity enables monitoring and intelligence features; core safety behavior remains local.",
  ],
  [
    "Does WYSE learn over time?",
    "Yes. Its machine-learning layer uses ongoing system data to improve optimization.",
  ],
  [
    "Can WYSE work with solar panels?",
    "WYSE is designed to complement distributed energy resources, including residential solar.",
  ],
  [
    "Can WYSE work with home batteries?",
    "The architecture is designed to coordinate with home batteries as the platform expands.",
  ],
  [
    "Will it work in Europe?",
    "Market availability depends on local electrical standards and certification.",
  ],
  [
    "Can I install it myself?",
    "Installation should be completed by a qualified professional.",
  ],
  [
    "What happens if the power goes out?",
    "WYSE safely resumes operation when electricity is restored.",
  ],
  [
    "Does WYSE collect my personal information?",
    "The system is designed around energy telemetry, with privacy and security controls for connected services.",
  ],
  [
    "Will software updates be automatic?",
    "Connected systems can receive secure updates as the platform evolves.",
  ],
  [
    "When will WYSE become available?",
    "Join the WYSE list to receive availability and investment updates.",
  ],
];
const investorFaqs = [
  [
    "Why now?",
    "Electrification, AI data centers, EV adoption, and rising electricity demand are increasing pressure on grids around the world. WYSE addresses this structural trend by improving the efficiency of existing infrastructure rather than requiring new generation capacity.",
  ],
  [
    "Why can't companies like Tesla, Siemens, Schneider Electric or Eaton simply build this?",
    "Large companies could pursue similar markets, but WYSE's focus on appliance-level control with bypass-verified M&V, combined with our patent-pending architecture and AI-driven optimization, creates a defensible position in a niche they have not prioritized.",
  ],
  [
    "What intellectual property has WYSE developed?",
    "WYSE has filed a US non-provisional patent application covering key aspects of its optimization architecture, control methods, and AI-based energy management platform. The application is currently patent pending.",
  ],
  [
    "Is the technology already working?",
    "Yes. WYSE has developed and validated a working MVP demonstrating intelligent voltage optimization and AI-assisted energy management under real operating conditions.",
  ],
  [
    "What makes WYSE different from traditional voltage optimization?",
    "Traditional voltage optimization generally applies fixed reductions. WYSE continuously analyzes appliance behavior, electrical conditions, and operating patterns to dynamically optimize energy consumption in real time using AI.",
  ],
  [
    "Why start with water heaters?",
    "Electric water heaters represent one of the largest residential electrical loads while offering a straightforward installation path and significant energy-saving potential. The platform is designed to expand into additional appliance categories over time.",
  ],
  [
    "Is WYSE a hardware company or a software company?",
    "Both. Hardware establishes the installed base while software, AI, cloud services, and recurring subscriptions create long-term value and recurring revenue.",
  ],
  [
    "How does WYSE generate revenue?",
    "Revenue is expected from multiple channels including hardware sales, annual SaaS subscriptions, utility partnerships, demand-response aggregation, enterprise deployments, and future grid services.",
  ],
  [
    "Why is recurring software important?",
    "Every installed device generates operational data that improves optimization models. As the installed base grows, software becomes an increasingly valuable component of the business model.",
  ],
  [
    "What is the long-term vision?",
    "WYSE aims to become an intelligent distributed energy platform connecting millions of appliances into a coordinated optimization network that benefits consumers, utilities, and the broader electric grid.",
  ],
  [
    "What market opportunity is WYSE pursuing?",
    "WYSE addresses multiple overlapping markets including residential energy management, demand response, grid optimization, home electrification, AI-enabled energy software, and utility digitization. Together these represent hundreds of billions of dollars in market opportunity.",
  ],
  [
    "What milestones have already been completed?",
    "Current achievements include core architecture completed, AI integration developed, working MVP validated, business model defined, go-to-market strategy established, and patent application filed.",
  ],
  [
    "What are the next milestones?",
    "Current priorities include product certification, initial manufacturing, software expansion, pilot deployments, commercial launch, and utility integrations.",
  ],
  [
    "What are the biggest risks?",
    "Like all emerging technologies, WYSE faces engineering, certification, manufacturing, market adoption, and execution risks. The company is actively addressing these through staged product validation, strategic partnerships, and phased commercialization.",
  ],
  [
    "What makes WYSE difficult to replicate?",
    "The company's long-term competitive advantage is expected to come from the combination of patent-pending intellectual property, AI optimization models, appliance-level architecture, cloud software platform, operational data collected from deployed devices, utility integrations, and continuous software improvements.",
  ],
  [
    "Who benefits from WYSE?",
    "WYSE is designed to benefit everyone in the energy chain, not just the homeowner. Homeowners and small businesses benefit directly through reduced energy bills, consistent with the measured water-heating results in this brief. Utility companies stand to benefit as well: WYSE's architecture is designed to function as a Demand Side Management (DSM) resource. Today, many utilities manage peak demand by temporarily shutting off enrolled loads — water heaters, air conditioners — at customers' homes during high-demand periods, a blunt tool that can noticeably affect comfort. WYSE is designed to reduce load automatically and continuously as part of normal operation, with minimal impact on the homeowner's routine, and to manage any additional reduction requested during a utility demand-response event within the same comfort-first guardrails. It is also designed to give utilities appliance-level visibility into energy consumption and usage patterns that most utilities cannot currently see, since standard smart meters report only whole-home totals, not what's happening at each individual appliance.",
  ],
];

function Button({
  children,
  ghost = false,
  onClick,
}: {
  children: React.ReactNode;
  ghost?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={ghost ? "btn btn-ghost" : "btn btn-primary"}
    >
      {children}
    </button>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function ImpactStat({ target, decimals = 0, prefix = "", suffix, title, grouped = false }: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  title: string;
  grouped?: boolean;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const startedRef = useRef(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        frameRef.current = requestAnimationFrame(() => setCurrent(target));
        return;
      }
      const start = performance.now();
      const duration = 1650;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(target * eased);
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        run();
        observer.disconnect();
      }
    }, { threshold: 0.35, rootMargin: "0px 0px -8%" });
    observer.observe(element);
    return () => {
      observer.disconnect();
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target]);

  const number = grouped
    ? Math.round(current).toLocaleString("de-DE")
    : current.toFixed(decimals);

  return <div ref={elementRef}>
    <b>⌁</b>
    <strong aria-label={`${prefix}${target}${suffix}`}>{prefix}{number}{suffix}</strong>
    <span>{title}</span>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [faqType, setFaqType] = useState<"home" | "investor">("home");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <header className="navbar">
        <a href="#home" className="logo-link" aria-label="WYSE home">
          <Image
            src="/wyse/logo.svg"
            alt="WYSE"
            width={114}
            height={28}
            priority
          />
        </a>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <i>—</i>
          <a href="/technology" onClick={() => setMenuOpen(false)}>
            Technology
          </a>
          <i>—</i>
          <a href="#impact" onClick={() => setMenuOpen(false)}>
            Impact
          </a>
          <i>—</i>
          <a href="/technical-brief" onClick={() => setMenuOpen(false)}>
            Technical Brief
          </a>
          <i>—</i>
          <a href="/benefits" onClick={() => setMenuOpen(false)}>
            Benefits
          </a>
          <i>—</i>
          <a href="/invest" onClick={() => setMenuOpen(false)}>
            Invest
          </a>
          <i>—</i>
          <a href="/our-team" onClick={() => setMenuOpen(false)}>
            Our Team
          </a>
        </nav>
        <button className="nav-cta" onClick={() => setModalOpen(true)}>
          Join the Revolution
        </button>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <section id="home" className="hero">
        <Image
          src="/wyse/hero.png"
          alt="Modern home surrounded by an intelligent energy network"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Label>
            Introducing a new generation of intelligent energy management.
          </Label>
          <h1>
            <span className="hero-join">Join the</span>
            <Image
              className="hero-wordmark"
              src="/wyse/logo.svg"
              alt="WYSE"
              width={390}
              height={96}
              priority
            />
            <span className="hero-revolution">Revolution</span>
          </h1>
          <p className="hero-tagline">
            <strong>Smarter Homes — Smarter Grids — Lower Energy Bills.</strong>
          </p>
          <p className="hero-copy">
            AI-driven voltage optimization cuts water heater energy use by
            <br className="hero-copy-break" /> up to 25% — with A/C optimization
            coming next.
          </p>
          <div className="actions">
            <Button onClick={() => setModalOpen(true)}>Invest in WYSE</Button>
            <Button
              ghost
              onClick={() =>
                document
                  .querySelector("#technology")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See the Technology
            </Button>
          </div>
        </div>
        <div className="energy-marquee" aria-label="WYSE energy benefits">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div
                className="marquee-group"
                aria-hidden={group === 1}
                key={group}
              >
                {[
                  "LESS WASTE",
                  "MORE INTELLIGENCE",
                  "LESS POWER CONSUMPTION",
                  "LESS COST",
                ].map((text) => (
                  <span key={text}>
                    <Image
                      src="/wyse/marquee-bolt.svg"
                      alt=""
                      width={11}
                      height={17}
                    />
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section problem">
        <div className="container">
          <Label>The Problem</Label>
          <h2>Electric demand is outpacing electrical infrastructure.</h2>
          <div className="problem-grid">
            {problems.map(([icon, title, copy]) => (
              <article className="glass-card" key={title}>
                <Image src={icon} alt="" width={43} height={38} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <p className="problem-close">
            Utilities respond by <strong>building more generation, raising rates, and
            shutting appliances off during peak events.</strong>{" "}
            <a href="#technology">But there’s another way →</a>
          </p>
        </div>
      </section>

      <section id="impact" className="impact-section">
        <Image src="/wyse/impact-grid.svg" alt="" fill className="impact-bg" />
        <div className="container relative">
          <Label>Impact at Scale</Label>
          <h2 className="display-heading">
            What if 1,000,000
            <br />
            homes joined?
          </h2>
          <div className="stats">
            <ImpactStat target={1} decimals={1} suffix=" TWh" title="Electricity saved every year" />
            <ImpactStat target={379893} grouped suffix=" MT" title="CO₂ emissions avoided annually" />
            <ImpactStat target={1} decimals={1} suffix=" GW" title="Removed from peak grid stress" />
            <ImpactStat target={180} prefix="$" suffix="M" title="Saved by families each year" />
          </div>
          <p className="center-question">What does that really mean?</p>
          <div className="impact-cards">
            {impacts.map(([img, title, copy]) => (
              <article key={title}>
                <div className="card-image">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width:700px) 100vw,25vw"
                  />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="fine-print">
            Illustrative scenario assuming 25% average savings across water
            heating and other high-load appliances; actual results will vary.
          </p>
          <p className="impact-close">
            And this starts with a <span>single system</span> inside your home.
          </p>
        </div>
      </section>

      <section id="technology" className="dark-section technology">
        <div className="container">
          <Label>How It Works</Label>
          <div className="section-intro">
            <h2>
              How WYSE makes
              <br />
              this possible
            </h2>
            <p>
              Working MVP validating intelligent voltage optimization and
              AI-driven load management. Built on patent-pending energy
              optimization architecture.
            </p>
          </div>
          <div className="technology-grid">
            {technology.map(([visual, title, copy], index) => (
              <article className={`tech-card tech-${index + 1}`} key={title}>
                <div className="tech-viz">
                  <TechnologyVisual variant={visual as "voltage" | "ai" | "peak" | "network"} />
                </div>
                <div className="tech-copy">
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="tech-close">
            Small reduction in consumption per home.{" "}
            <span>Massive impact together.</span>
          </p>
        </div>
      </section>

      <section id="brief" className="dark-section why-section">
        <div className="container why-grid">
          <article className="glass-card why-card">
            <Label>Why Now</Label>
            <h2>Why Now?</h2>
            <p>
              Electricity demand is growing at the fastest pace in two decades.
            </p>
            <ul>
              <li>AI data centers doubling grid load projections</li>
              <li>EV adoption creating new peak demand curves</li>
              <li>Home electrification displacing gas at scale</li>
              <li>
                Peak demand is outpacing electrical infrastructure buildout
              </li>
              <li>
                Residential electricity rates have risen over 30% in the past
                five years
              </li>
            </ul>
          </article>
          <article className="glass-card why-card">
            <Label>The Better Path</Label>
            <h2>Demand reduction needs no new power plants</h2>
            <ul>
              <li>No multi-year permitting processes</li>
              <li>No new transmission corridors</li>
              <li>It starts at the source of consumption</li>
              <li>Already embedded in existing infrastructure</li>
            </ul>
            <p className="payback">
              WYSE lowers electric bills, with typical system payback in under 2
              years.
            </p>
          </article>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <Label>Latest Industry News</Label>
          <h2>The Energy Landscape Is Shifting</h2>
          <p className="news-lead">
            Rising rates, surging demand, and grid strain — the conditions that
            make WYSE essential are accelerating.
          </p>
          <div className="news-grid">
            {news.map(([img, source, date, title, copy], index) => (
              <article
                className={index < 2 ? "news-card featured" : "news-card"}
                key={title}
              >
                <div className="news-image">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width:700px) 100vw,50vw"
                  />
                </div>
                <div className="news-copy">
                  <p className="news-meta">
                    <span>{source}</span> · {date}
                  </p>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a
                    href="#invest"
                    onClick={(e) => {
                      e.preventDefault();
                      setModalOpen(true);
                    }}
                  >
                    Read Article <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-wrap">
          <Label>FAQ</Label>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-tabs">
            <button
              className={faqType === "home" ? "active" : ""}
              onClick={() => {
                setFaqType("home");
                setOpenFaq(null);
              }}
            >
              Homeowner FAQ
            </button>
            <button
              className={faqType === "investor" ? "active" : ""}
              onClick={() => {
                setFaqType("investor");
                setOpenFaq(null);
              }}
            >
              Investor FAQ
            </button>
          </div>
          <div className="faq-list">
            {(faqType === "home" ? faqs : investorFaqs).map(([question, answer], index) => (
              <div
                className={openFaq === index ? "faq-item open" : "faq-item"}
                key={question}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{question}</span>
                  <b>+</b>
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="invest" className="cta-section">
        <Image src="/wyse/cta-bolt.svg" alt="" fill className="cta-bolt" />
        <div className="container cta-content">
          <Label>The Revolution Starts Here</Label>
          <h2>Join the WYSE Revolution</h2>
          <p>Smarter Homes — Smarter Grids — Lower Energy Bills.</p>
          <div className="actions">
            <Button onClick={() => setModalOpen(true)}>Invest in WYSE</Button>
            <Button
              ghost
              onClick={() =>
                document
                  .querySelector("#technology")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See the Technology
            </Button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-top">
          <div>
            <Image src="/wyse/logo.svg" alt="WYSE" width={130} height={32} />
            <p>Smarter Homes — Smarter Grids — Lower Energy Bills.</p>
          </div>
          <nav>
            <a href="#home">Home</a>
            <a href="/technology">Technology</a>
            <a href="/benefits">Benefits</a>
            <button onClick={() => setModalOpen(true)}>Invest</button>
            <a href="/our-team">Our Team</a>
          </nav>
        </div>
        <div className="container copyright">
          © 2025 WYSE Power Systems, Inc. All rights reserved.
        </div>
      </footer>

      {modalOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setModalOpen(false)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            {sent ? (
              <div className="success">
                <Label>Thank You</Label>
                <h2 id="modal-title">Welcome to the revolution.</h2>
                <p>
                  We’ve received your details and will keep you informed about
                  WYSE.
                </p>
                <Button onClick={() => setModalOpen(false)}>Close</Button>
              </div>
            ) : (
              <>
                <Label>Join the Revolution</Label>
                <h2 id="modal-title">Invest in a smarter energy future.</h2>
                <p>
                  Tell us a little about yourself and our team will be in touch.
                </p>
                <form onSubmit={submit}>
                  <label>
                    Full name
                    <input name="name" required autoFocus />
                  </label>
                  <label>
                    Email address
                    <input name="email" type="email" required />
                  </label>
                  <label>
                    Interest
                    <select name="interest" defaultValue="">
                      <option value="" disabled>
                        Select one
                      </option>
                      <option>Investor</option>
                      <option>Homeowner</option>
                      <option>Industry partner</option>
                    </select>
                  </label>
                  <label>
                    Message
                    <textarea name="message" rows={3} />
                  </label>
                  <Button>Submit interest</Button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
