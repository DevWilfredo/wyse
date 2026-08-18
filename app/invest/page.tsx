"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";

const market = [
  ["$200B+", "U.S. residential electricity market"],
  ["$300B+", "Smart energy management projected by 2030"],
  ["80M+", "Americans struggling with energy bills"],
  ["20M+", "Households behind on payments"],
  ["30–35%", "Rate increases in recent years"],
  ["1B+", "Homes globally that could benefit from voltage optimization"],
];
const channels = [
  [
    "/wyse/invest-icon-1.svg",
    "Direct-to-Consumer",
    "Online and retail sales with built-in recurring SaaS subscription.",
    24,
    40,
  ],
  [
    "/wyse/invest-icon-2.svg",
    "Installer & Contractor",
    "Professional install channels accelerate adoption in premium segments.",
    40,
    40,
  ],
  [
    "/wyse/invest-icon-3.svg",
    "Utility & Demand Response",
    "Partnership programs with grid operators for aggregated demand management.",
    32,
    48,
  ],
  [
    "/wyse/invest-icon-4.svg",
    "Enterprise Deployments",
    "Commercial and multifamily buildings for concentrated high-impact deployments.",
    34,
    40,
  ],
];
const milestones = [
  "Core hardware and software architecture complete",
  "Voltage optimization engine validated",
  "AI integration and ML pipeline live",
  "MVP validated in real operating conditions",
  "Revenue model defined",
  "Go-to-market strategy structured",
];
const nextPhase = [
  ["Finalize engineering & certification", "UL, CE."],
  [
    "Initial manufacturing run",
    "First production units at scale from proven manufacturing partner.",
  ],
  [
    "Software expansion",
    "Cloud platform, AI model improvements, utility API integrations.",
  ],
  [
    "Market launch & pilot deployment",
    "Direct sales launch including multifamily building pilots.",
  ],
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value.replace(/[\d,.]+/, "0"));

  useEffect(() => {
    const node = ref.current;
    const match = value.match(/[\d,.]+/);
    if (!node || !match) return;
    const raw = match[0];
    const target = Number(raw.replace(/,/g, ""));
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + raw.length);
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1500, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = target * eased;
        const formatted = decimals
          ? current.toFixed(decimals)
          : Math.round(current).toLocaleString("en-US");
        setDisplay(`${prefix}${formatted}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [value]);

  return <span ref={ref} className="i-count">{display}</span>;
}

export default function InvestPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <main className="invest-page" id="top">
      <header className="navbar technology-nav invest-nav">
        <Link href="/" className="logo-link" aria-label="WYSE home">
          <Image
            src="/wyse/logo.svg"
            alt="WYSE"
            width={114}
            height={28}
            priority
          />
        </Link>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <Link href="/">Home</Link>
          <i>—</i>
          <Link href="/technology">Technology</Link>
          <i>—</i>
          <Link href="/#impact">Impact</Link>
          <i>—</i>
          <Link href="/technical-brief">Technical Brief</Link>
          <i>—</i>
          <Link href="/benefits">Benefits</Link>
          <i>—</i>
          <Link className="active" href="/invest">
            Invest
          </Link>
        </nav>
        <a className="nav-cta" href="#contact">
          Join the Revolution
        </a>
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

      <section className="i-hero">
        <div className="container">
          <Label>The Opportunity</Label>
          <h1>Why Invest Now</h1>
          <p>The shift toward intelligent demand management is inevitable.</p>
        </div>
      </section>

      <section className="i-market">
        <div className="container">
          <Label>Market Opportunity</Label>
          <h2>A market that can&apos;t be ignored</h2>
          <div className="i-market-grid">
            {market.map(([value, copy]) => (
              <article key={value}>
                <strong><CountUp value={value} /></strong>
                <span>{copy}</span>
              </article>
            ))}
          </div>
          <p className="i-market-close">
            The infrastructure is already installed. The electricity is already
            being consumed. The inefficiency is already embedded. The missing
            layer is intelligence.
          </p>
        </div>
      </section>

      <section className="i-economics">
        <div className="container">
          <Label>Business Model</Label>
          <h2>Why the Economics Work</h2>
          <div className="i-econ-grid">
            <article>
              <Label>Consumer ROI</Label>
              <dl>
                <div>
                  <dt>~4,000 kWh/yr</dt>
                  <dd>typical water heater use</dd>
                </div>
                <div>
                  <dt>~25% savings</dt>
                  <dd>≈ 1,000 kWh saved</dd>
                </div>
                <div>
                  <dt>$170–$190/yr</dt>
                  <dd>in annual savings</dd>
                </div>
                <div>
                  <dt>$249</dt>
                  <dd>device price</dd>
                </div>
                <div>
                  <dt>16–18 months</dt>
                  <dd>payback period (ROI)</dd>
                </div>
              </dl>
              <small>
                Illustrative scenario assuming 25% average savings across water
                heating and other high-load appliances; actual results will
                vary.
              </small>
            </article>
            <article>
              <Label>At 1,000,000 Devices</Label>
              <strong><CountUp value="$249M" /></strong>
              <span>Hardware revenue</span>
              <strong><CountUp value="$59.9M" /></strong>
              <span>Annual recurring SaaS ($4.99/mo)</span>
              <p>1 TWh saved · 380K MT CO₂ avoided</p>
            </article>
            <article>
              <Label>Enterprise &amp; Utility</Label>
              <ul>
                <li>Demand response aggregation</li>
                <li>Grid services revenue</li>
                <li>Commercial deployments</li>
                <li>Utility partnership programs</li>
              </ul>
            </article>
          </div>
          <p className="i-econ-close">
            Hardware initiates the relationship. Software compounds the value.
          </p>
        </div>
      </section>

      <section className="i-scale">
        <div className="container">
          <Label>Path to Scale</Label>
          <h2>Four channels. One flywheel.</h2>
          <div className="i-channel-grid">
            {channels.map(([icon, title, copy, width, height]) => (
              <article key={title as string}>
                <span className="i-channel-icon">
                  <Image
                    src={icon as string}
                    alt=""
                    width={width as number}
                    height={height as number}
                  />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="i-flywheel">
            <b>The flywheel:</b> Recurring revenue becomes dominant → Data
            improves optimization → Aggregated grid participation unlocks new
            revenue streams
          </div>
        </div>
      </section>

      <section className="i-progress">
        <div className="container">
          <div className="i-progress-grid">
            <article>
              <Label>Milestones Achieved</Label>
              <ul>
                {milestones.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </article>
            <article>
              <Label>Next Phase</Label>
              <ol>
                {nextPhase.map(([title, copy], i) => (
                  <li key={title}>
                    <b>{i + 1}</b>
                    <div>
                      <strong>{title}</strong>
                      <span>{copy}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <article className="i-funds">
            <Label>Use of Funds</Label>
            <div>
              {[
                ["30%", "Engineering & Certification"],
                ["25%", "Manufacturing Scale-Up"],
                ["20%", "Software Development"],
                ["15%", "Customer Acquisition"],
                ["10%", "Working Capital"],
              ].map(([n, x]) => (
                <span key={x}>
                  <b>{n}</b>
                  {x}
                </span>
              ))}
            </div>
            <p>
              Every dollar deployed moves WYSE from MVP to installed
              infrastructure.
            </p>
          </article>
        </div>
      </section>

      <section className="i-contact" id="contact">
        <Image
          src="/wyse/invest-bolt.svg"
          alt=""
          fill
          className="i-contact-bolt"
        />
        <div className="i-contact-inner">
          <Label>Early Stage. Inflection Point.</Label>
          <h2>
            Join the <span>WYSE</span> Revolution
          </h2>
          <p>
            Early investors participate at the inflection point — before
            large-scale adoption, before recurring revenue compounds, before
            grid integration scales.
          </p>
          <div className="i-form-card">
            <h3>Get in Touch</h3>
            <p>
              Or reach us directly at{" "}
              <a href="mailto:investors@getwyse.io">investors@getwyse.io</a>
            </p>
            {sent ? (
              <div className="i-success" role="status">
                <Label>Thank You</Label>
                <h3>Your interest has been received.</h3>
                <p>Our team will be in touch with the next steps.</p>
                <button
                  className="btn btn-ghost"
                  onClick={() => setSent(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <label>
                  Name
                  <input required name="name" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="investor@example.com"
                  />
                </label>
                <label className="i-message">
                  Message
                  <textarea
                    required
                    name="message"
                    placeholder="Tell us about your investment interest..."
                    rows={4}
                  />
                </label>
                <div className="i-form-actions">
                  <button className="btn btn-primary">
                    Join the WYSE Revolution
                  </button>
                  <a
                    className="btn btn-ghost"
                    href="mailto:investors@getwyse.io?subject=Request%20the%20WYSE%20Deck"
                  >
                    Request the Deck
                  </a>
                </div>
              </form>
            )}
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
            <Link href="/">Home</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/benefits">Benefits</Link>
            <Link href="/invest">Invest</Link>
          </nav>
        </div>
        <div className="container copyright">
          &copy; 2026 WYSE Power Systems, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
