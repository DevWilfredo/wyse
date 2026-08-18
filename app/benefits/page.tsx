"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ButtonLink from "../components/button-link";

type Capability = { title: string; benefit: string; limitation: string };
type Category = { number: string; title: string; subtitle: string; capabilities: Capability[] };

const categories: Category[] = [
  { number: "01", title: "Energy & Economic", subtitle: "Beyond a Lower Setpoint", capabilities: [
    { title: "Dynamic Setpoint per Fixture", benefit: "Delivers 115°F for a shower, 130°F for a dishwasher, 105°F for a hand wash via DTP clustering.", limitation: "A static setpoint cannot adapt delivery temperature to each fixture or use case." },
    { title: "Per-Cycle Optimization", benefit: "Cuts the \"tail\" of each heating cycle when ROI collapses, avoiding the most expensive kWh (overshoot).", limitation: "Thermostat always runs to setpoint; every cycle overshoots slightly." },
    { title: "Idle-Hot Elimination", benefit: "AI allows the tank to cool during predictable absence (night, work, vacation) without manual intervention.", limitation: "Static setpoint maintains temperature 24/7 regardless of occupancy." },
    { title: "Inlet-Temperature Adaptation", benefit: "Adjusts preheat timing based on incoming cold water temp (winter vs. summer).", limitation: "No awareness of inlet temp; same heating logic year-round." },
    { title: "Time-of-Use Rate Arbitrage", benefit: "Preheats during off-peak rates; coasts during on-peak.", limitation: "No tariff awareness; heats whenever thermostat demands." },
    { title: "Predictive Preheat", benefit: "Banks heat only when usage is imminent (geofence, learned routines).", limitation: "Reacts only to temperature drop; often reheats after a small draw that did not meaningfully deplete hot water." },
  ]},
  { number: "02", title: "Comfort & Availability", subtitle: "Always Ready, Always Safe", capabilities: [
    { title: "Outage Risk Prediction", benefit: "Models State of Charge and reserve minutes; forces preheat if risk/outage exceeds threshold.", limitation: "User discovers cold water only when the shower runs cold." },
    { title: "Arrival-Aware Preheat", benefit: "Detects inbound user via geofence and preheats to target before arrival.", limitation: "User arrives home to a cold tank if the last draw was hours ago." },
    { title: "Anti-Scald Guardrails", benefit: "Hard floor at 113–120°F delivery; never allows DTP below safe temp.", limitation: "User might manually set too low, risking Legionella; or too high, risking scalding." },
    { title: "Sanitize Cycle Protection", benefit: "Automatically overrides all optimizations and runs full-temp sanitize cycles per health standards.", limitation: "User forgets to raise temp periodically; health risk." },
    { title: "Stratification Awareness", benefit: "Uses pipe thermal signatures to detect tank stratification and adjust availability estimates.", limitation: "No knowledge of tank internal state." },
    { title: "Cold-Snap Buffering", benefit: "Automatically widens preheat buffers and raises DTP targets when inlet temp drops below 50°F.", limitation: "Static setpoint delivers colder water in winter without warning." },
  ]},
  { number: "03", title: "Grid Services & Revenue", subtitle: "A New Revenue Layer", capabilities: [
    { title: "Firm Demand Response (DR)", benefit: "Voltage trim + cycle cuts provide verified 15–20% kW shed during utility events.", limitation: "No grid interaction; zero DR revenue." },
    { title: "Peak Demand Reduction", benefit: "Shifts or shaves load during grid peaks, reducing capacity charges for C&I customers or earning residential DR credits.", limitation: "Heats indiscriminately during peak hours." },
    { title: "Recovery Smoothing", benefit: "Post-DR recovery is algorithmically smoothed to prevent rebound peaks.", limitation: "Post-DR all heaters recover simultaneously, creating worse peaks." },
    { title: "Revenue Stack", benefit: "Earns DR payments + energy savings simultaneously.", limitation: "Earns neither DR payments nor optimized savings." },
  ]},
  { number: "04", title: "Intelligence & Automation", subtitle: "Zero Behavior Change Required", capabilities: [
    { title: "Zero Behavior Change Required", benefit: "Learns usage autonomously; user does not need to adjust habits.", limitation: "Savings require manual discipline (turning down, timing, vacation mode)." },
    { title: "Per-Household Learning", benefit: "Adapts to unique draw patterns, fixture types, and seasonal shifts via on-device ML.", limitation: "One-size-fits-all; no adaptation." },
    { title: "Federated Fleet Learning", benefit: "Improves models across thousands of homes without sharing private data.", limitation: "No learning capability." },
    { title: "Contextual Decision-Making", benefit: "Decisions factor in State of Charge, inlet temp, ambient temp, tariff, DR signal, and geofence simultaneously.", limitation: "Binary on/off based on a bimetal strip." },
    { title: "Confidence-Gated Actions", benefit: "Low-confidence predictions trigger conservative buffers; high confidence enables aggressive savings.", limitation: "No concept of confidence or risk." },
  ]},
  { number: "05", title: "Maintenance & Diagnostics", subtitle: "Safety Built In", capabilities: [
    { title: "Predictive Maintenance", benefit: "Detects scaling, element wear, and sensor drift via thermal/electrical anomaly detection (isolation forest + autoencoder).", limitation: "Failures are discovered only when the tank stops working." },
    { title: "Power Quality Monitoring", benefit: "Tracks PF, THD, and autotransformer temp; alerts to electrical issues.", limitation: "No electrical diagnostics." },
    { title: "Automatic Fail-Safe", benefit: "Reverts to nominal thermostat operation on fault, anomaly, or low confidence.", limitation: "No failsafe beyond the mechanical thermostat itself." },
    { title: "Efficiency Drift Correction", benefit: "Flags degraded elements or insulation failure before energy waste accumulates.", limitation: "Slow degradation goes unnoticed for years." },
    { title: "Leak/Draw Anomaly Detection", benefit: "Detects unexpected continuous draws that may indicate leaks.", limitation: "No awareness of draw patterns." },
  ]},
  { number: "06", title: "Data, Transparency & Trust", subtitle: "Verified, Not Estimated", capabilities: [
    { title: "Bypass-Validated Savings", benefit: "Physical bypass circuit proves what the heater \"would have\" consumed vs. what it did consume.", limitation: "No measurement; savings are guesswork." },
    { title: "Attribution Clarity", benefit: "M&V ledger separates tail-cut savings, scheduling savings, and DR kW shed.", limitation: "No attribution possible." },
    { title: "Real-Time Dashboards", benefit: "User sees State of Charge, reserve minutes, last draw, predicted next usage, and monthly savings.", limitation: "No visibility into operation or savings." },
    { title: "Audit-Ready Reporting", benefit: "Generates auditor-friendly rollups with confidence intervals.", limitation: "No data to audit." },
  ]},
  { number: "07", title: "Operational Resilience", subtitle: "Always On, Always Safe", capabilities: [
    { title: "Cold Inlet Adaptation", benefit: "Detects very cold inlet (<50°F) and enforces larger buffers to prevent cold-water events.", limitation: "Fixed logic; higher risk of cold showers in winter." },
    { title: "API / Connectivity Failure Handling", benefit: "Falls back to safe local controls if cloud/API is unreachable.", limitation: "N/A for a dumb thermostat, but smart thermostats often fail open." },
    { title: "Multi-Device Orchestration", benefit: "Can coordinate with home solar, battery, or EV charger load management.", limitation: "No integration capability." },
  ]},
];

const controls = [
  ["When to heat", "(scheduling)"], ["How much to heat", "(tail-cut, DTP)"],
  ["How fast to heat", "(DR preheat, coasting)"], ["How safely to heat", "(sanitize, anti-scald)"],
  ["How intelligently to heat", "(learning, fleet data)"],
];

export default function BenefitsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [openCapability, setOpenCapability] = useState<number | null>(0);
  const [capabilitiesEntered, setCapabilitiesEntered] = useState(false);
  const capabilityListRef = useRef<HTMLDivElement>(null);
  const category = categories[active];

  useEffect(() => {
    if (capabilitiesEntered) return;
    const list = capabilityListRef.current;
    if (!list) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCapabilitiesEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -8%" });

    observer.observe(list);
    return () => observer.disconnect();
  }, [capabilitiesEntered]);

  const selectCategory = (index: number) => {
    if (index === active) return;
    setActive(index);
    setOpenCapability(0);
  };

  return <main id="top" className="benefits-page">
    <header className="navbar technology-nav benefits-nav">
      <Link href="/" className="logo-link" aria-label="WYSE home"><Image src="/wyse/logo.svg" alt="WYSE" width={114} height={28} priority /></Link>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
        <Link href="/">Home</Link><i>—</i><Link href="/technology">Technology</Link><i>—</i><Link href="/#impact">Impact</Link><i>—</i><Link href="/technical-brief">Technical Brief</Link><i>—</i><Link className="active" href="/benefits">Benefits</Link><i>—</i><Link href="/invest">Invest</Link>
      </nav>
      <Link className="nav-cta" href="/invest">Join the Revolution</Link>
      <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
    </header>

    <section className="benefits-hero">
      <div className="benefits-shell">
        <p className="eyebrow">WYSE Power Systems — Benefits</p>
        <h1>A Thermostat is a Static Setpoint.<br/><span>WYSE Is a Dynamic Control System.</span></h1>
        <p className="benefits-lead">A homeowner can manually lower their water heater thermostat to 120°F and save energy. This explains why the WYSE device delivers materially superior outcomes across energy, economics, comfort, safety, grid services, and maintenance — outcomes that are impossible to achieve with a static dial setting.</p>
        <div className="benefits-controls" aria-label="WYSE control capabilities">{controls.map(([label, note]) => <div key={label}><b>{label}</b><span>{note}</span></div>)}</div>
      </div>
    </section>

    <section className="benefits-body">
      <div className="benefits-shell benefits-layout">
        <aside className="benefits-categories">
          <p>CATEGORIES</p>
          <div className="benefits-category-list" role="tablist" aria-label="Benefit categories">
            {categories.map((item, index) => <button key={item.number} role="tab" aria-selected={active === index} className={active === index ? "active" : ""} onClick={() => selectCategory(index)}><span>{item.number}</span><span><b>{item.title}</b>{active === index && <small>{item.subtitle}</small>}</span></button>)}
          </div>
          <div className="benefits-legend"><span><i/>WYSE delivers</span><span><i/>Static setpoint cannot</span></div>
        </aside>

        <div className="benefits-category" key={category.number} role="tabpanel">
          <header><h2><span>{category.number}</span>{category.title}</h2><p>{category.subtitle}</p></header>
          <div className="benefits-capabilities" ref={capabilityListRef}>
            {category.capabilities.map((capability, index) => {
              const isOpen = openCapability === index;
              const visibility = capabilitiesEntered ? " is-visible category-enter" : "";
              return <article style={{ "--benefit-delay": `${120 + index * 120}ms` } as React.CSSProperties} className={`${isOpen ? "benefit-card benefit-reveal open" : "benefit-card benefit-reveal"}${visibility}`} key={capability.title}>
                <button aria-expanded={isOpen} onClick={() => setOpenCapability(isOpen ? null : index)}>
                  <span className="benefit-dot"/><span className="benefit-copy"><b>{capability.title}</b><small>{capability.benefit}</small></span><span className="benefit-toggle" aria-hidden="true">+</span>
                </button>
                <div className="benefit-detail"><div><span className="benefit-cannot"><b>×</b><span><small>STATIC SETPOINT CANNOT</small><p>{capability.limitation}</p></span></span></div></div>
              </article>;
            })}
          </div>
          <div className="benefits-count"><span>{category.capabilities.length} capabilities in this category</span><span>{categories.map((item, index) => <button key={item.number} aria-label={`Show ${item.title}`} className={index === active ? "active" : ""} onClick={() => selectCategory(index)}/>)}</span></div>
        </div>
      </div>

      <div className="benefits-shell benefits-bottom">
        <p className="eyebrow">The Bottom Line</p>
        <h2>The static setpoint is a blunt instrument. WYSE is a precision instrument.</h2>
        <p>That is why it can achieve 20% savings without the user ever touching a dial — and why it generates revenue streams (DR, maintenance alerts, grid services) that a manual dial cannot.</p>
        <div className="actions"><ButtonLink href="/invest">Invest in WYSE</ButtonLink><ButtonLink href="/technical-brief" variant="secondary">Read the Technical Brief</ButtonLink></div>
      </div>
    </section>

    <footer><div className="container footer-top"><div><Image src="/wyse/logo.svg" alt="WYSE" width={130} height={32}/><p>Smarter Homes — Smarter Grids — Lower Energy Bills.</p></div><nav><Link href="/">Home</Link><Link href="/technology">Technology</Link><Link href="/benefits">Benefits</Link><Link href="/invest">Invest</Link><Link href="/#team">Our Team</Link></nav></div><div className="container copyright">© 2025 WYSE Power Systems, Inc. All rights reserved.</div></footer>
  </main>;
}
