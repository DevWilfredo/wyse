"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const steps = [
  [
    "01",
    "Water heaters run blindly.",
    "Most water heaters heat to a fixed setpoint on a fixed schedule, regardless of whether anyone is home or how much hot water is actually needed. The result: wasted standby heat, unnecessary cycles, and higher bills.",
  ],
  [
    "02",
    "WYSE adds intelligence and control.",
    "Installed at the appliance level, WYSE monitors usage patterns, hot-water availability, and grid conditions in real time. It trims voltage during utility peak events for demand response, and its AI manages heating cycles to eliminate waste — no shutdowns, no comfort sacrifice, no behavior change.",
  ],
  [
    "03",
    "AI learns and compounds the savings.",
    "Machine learning across 37+ real-time data points continuously improves scheduling, predicts hot-water needs, and cuts heating cycles short when enough hot water is available — shifting loads to off-peak hours and eliminating wasted standby heat.",
  ],
];

const systemFeatures = [
  "Remote Control",
  "AI Optimization",
  "Verified Savings",
  "Smart Scheduling",
  "Advanced Analytics",
  "Plug & Play",
];

const proofPoints = [
  "Patent-pending full stack: hardware, firmware, control methods, and AI optimization",
  "Validated MVP in real operating conditions",
  "Up to 2X the savings of a smart thermostat",
  "Backed by 20+ years of manufacturing experience in voltage optimization",
  "Compatible with standard 220–240V systems across North America and Europe",
  "37+ real-time data points feeding continuous ML improvement",
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

const gridNodes = [
  [160, 54, "HOME 01"], [320, 34, "HOME 02"], [480, 54, "HOME 03"],
  [92, 190, "EV"], [548, 190, "HVAC"], [176, 318, "BATTERY"],
  [320, 342, "WYSE GRID"], [464, 318, "HEAT PUMP"],
] as const;

const gridLinks = [
  [160,54,320,190],[320,34,320,190],[480,54,320,190],
  [92,190,320,190],[548,190,320,190],[176,318,320,190],
  [320,342,320,190],[464,318,320,190],[160,54,320,34],
  [320,34,480,54],[92,190,176,318],[464,318,548,190],
] as const;

function DistributedGridSvg() {
  return (
    <svg className="t-grid-svg" viewBox="0 0 640 400" role="img" aria-label="Animated WYSE distributed energy network">
      <defs>
        <radialGradient id="gridCore" cx="50%" cy="45%" r="60%"><stop offset="0" stopColor="#c5f9ff"/><stop offset=".18" stopColor="#00d1f3"/><stop offset="1" stopColor="#00778b"/></radialGradient>
        <filter id="gridGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#00d1f3" strokeOpacity=".035"/></pattern>
        <radialGradient id="gridNebula" cx="52%" cy="48%" r="58%"><stop offset="0" stopColor="#00d1f3" stopOpacity=".11"/><stop offset=".42" stopColor="#08758a" stopOpacity=".035"/><stop offset="1" stopColor="#071013" stopOpacity="0"/></radialGradient>
        <linearGradient id="gridAxis" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#00d1f3" stopOpacity="0"/><stop offset=".5" stopColor="#00d1f3" stopOpacity=".18"/><stop offset="1" stopColor="#00d1f3" stopOpacity="0"/></linearGradient>
      </defs>
      <rect width="640" height="400" rx="24" fill="url(#gridNebula)"/>
      <g className="t-grid-blueprint">
        <rect width="640" height="400" rx="24" fill="url(#gridPattern)"/>
        <path d="M26 200H614M320 20V380"/>
        <circle cx="320" cy="200" r="92"/><circle cx="320" cy="200" r="142"/><circle cx="320" cy="200" r="188"/>
        <path className="orbit" d="M85 246C167 81 474 62 568 226C466 355 187 364 85 246Z"/>
      </g>
      <g className="t-grid-stars">
        {[[48,52,1.4],[108,106,1],[226,26,1.5],[393,52,1],[584,72,1.5],[610,162,1],[62,342,1.3],[126,374,1],[242,292,1.2],[398,376,1.5],[536,350,1],[596,282,1.4],[260,112,1],[420,246,1.3]].map(([cx,cy,r],index)=><circle key={index} cx={cx} cy={cy} r={r} style={{"--star-delay":`${index * -.41}s`} as React.CSSProperties}/>) }
      </g>
      <g className="t-grid-coordinates"><text x="28" y="194">−X</text><text x="596" y="194">+X</text><text x="327" y="31">+Y</text><text x="327" y="383">−Y</text><text x="34" y="382">LIVE GRID / 37+ DATA POINTS</text></g>
      <g className="t-grid-links">
        {gridLinks.map(([x1,y1,x2,y2], index) => <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} style={{"--link-delay":`${index * -0.31}s`} as React.CSSProperties}/>) }
      </g>
      <g className="t-grid-packets">
        {gridLinks.slice(0,8).map(([x1,y1,x2,y2], index) => (
          <circle key={index} r="3.2" style={{"--packet-delay":`${index * -0.47}s`} as React.CSSProperties}>
            <animateMotion dur={`${3.5 + (index % 3) * .55}s`} begin={`${index * -.43}s`} repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2}`}/>
          </circle>
        ))}
      </g>
      <g className="t-grid-rings"><circle cx="320" cy="190" r="48"/><circle cx="320" cy="190" r="48"/><circle cx="320" cy="190" r="48"/></g>
      <g className="t-grid-nodes">
        {gridNodes.map(([x,y,label], index) => (
          <g key={label} transform={`translate(${x} ${y})`} style={{"--node-delay":`${index * -.38}s`} as React.CSSProperties}>
            <circle className="halo" r={index === 6 ? 25 : 15}/><circle className="core" r={index === 6 ? 10 : 6}/>
            <text y={index === 6 ? 43 : 29}>{label}</text>
          </g>
        ))}
      </g>
      <g className="t-grid-center" transform="translate(320 190)"><circle r="24"/><path d="M3-14-10 3h9l-4 14L12-5H2z"/><text y="42">INTELLIGENCE LAYER</text></g>
    </svg>
  );
}

export default function TechnologyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="tpage">
      <header className="navbar technology-nav">
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
          <Link className="active" href="/technology">
            Technology
          </Link>
          <i>—</i>
          <Link href="/#impact">Impact</Link>
          <i>—</i>
          <Link href="/technical-brief">Technical Brief</Link>
          <i>—</i>
          <Link href="/benefits">Benefits</Link>
          <i>—</i>
          <Link href="/invest">Invest</Link>
          <i>—</i>
          <Link href="/our-team">Our Team</Link>
        </nav>
        <Link className="nav-cta" href="/invest">
          Join the Revolution
        </Link>
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

      <section className="t-hero">
        <div className="container">
          <Eyebrow>The Technology</Eyebrow>
          <h1>Intelligence Is Replacing Infrastructure</h1>
          <p>
            Instead of building more capacity, we optimize the capacity we
            already have.
          </p>
        </div>
      </section>

      <section className="t-steps">
        <div className="container">
          <Eyebrow>How It Works</Eyebrow>
          <h2>Three steps to intelligent efficiency</h2>
          <div className="t-step-grid">
            {steps.map(([number, title, copy]) => (
              <article key={number}>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="t-promise">
            No shutdowns. No comfort sacrifice. No behavior change.
          </div>
        </div>
      </section>

      <section className="t-connected">
        <div className="container t-connected-grid">
          <div>
            <Eyebrow>Connected Intelligence</Eyebrow>
            <h2>WYSE Intelligent Energy System</h2>
            <h3 className="t-platform-line">Hardware. AI. Mobile App. One intelligent platform.</h3>
            <p>
              The WYSE system continuously optimizes energy at the appliance
              while the companion app gives homeowners complete visibility and
              control. Together they deliver real-time monitoring, intelligent
              scheduling, verified savings, and continuous software improvements.
            </p>
            <p className="muted">
              As the system learns how your appliances operate, optimization
              becomes smarter over time—without changing how you use your home.
            </p>
            <ul className="t-system-features">
              {systemFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </div>
          <div className="t-app-frame" data-node-id="23:1575">
            <video
              className="t-app-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/wyse/technology-app.png"
              aria-label="WYSE intelligent energy system mobile application"
            >
              <source
                src="/videos/Wyse_Anim_Complete_Expanded_1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="t-compounded">
        <div className="container t-compounded-grid">
          <div>
            <Eyebrow>Compounded Intelligence</Eyebrow>
            <h2>Efficiency That Stacks, Not Competes.</h2>
            <p>
              WYSE isn&apos;t here to replace your other smart efficiency products,
              like the thermostat. It&apos;s designed to compound with it.
            </p>
            <p className="muted">
              Most efficiency products optimize a single slice of your energy
              bill. WYSE is an additional intelligence layer — one that works
              alongside existing devices rather than competing with them. While
              your smart thermostat reduces HVAC waste through scheduling and
              behavioral optimization, WYSE reduces energy waste at the appliance
              level (e.g. HVAC compressor) through voltage modulation and AI-driven
              control. Each product tackles a different mechanism on a different
              load. The result isn&apos;t overlapping claims — it&apos;s additive,
              auditable savings that scale across your entire home.
            </p>
          </div>
          <div className="t-stack-diagram" aria-label="Smart thermostat and WYSE additive savings">
            <article><i>◉</i><div><strong>Smart Thermostat</strong><span>Scheduling &amp; behavioral optimization</span></div><b>Layer 1</b></article>
            <div className="t-stack-plus" aria-hidden="true"><span>+</span></div>
            <article className="active"><i>ϟ</i><div><strong>WYSE</strong><span>Voltage modulation &amp; AI-driven control</span></div><b>Layer 2</b></article>
            <div className="t-stack-plus" aria-hidden="true"><span>+</span></div>
            <article><i>✓</i><div><strong>Additive, Auditable Savings</strong><span>Different mechanisms. Different loads. No overlap.</span></div></article>
          </div>
        </div>
      </section>

      <section className="t-distributed">
        <div className="container t-distributed-grid">
          <div>
            <Eyebrow>Distributed Intelligence</Eyebrow>
            <h2>The Grid Is Becoming Distributed</h2>
            <p>
              Homes now contain high-load appliances, EV chargers, heat pumps,
              and home batteries. Electricity demand is becoming more dynamic,
              distributed, and difficult to manage.
            </p>
            <p>
              WYSE creates a distributed optimization layer across millions of
              electrified homes — transforming individual devices into nodes in
              an intelligent demand management network.
            </p>
          </div>
          <div className="t-grid-art">
            <DistributedGridSvg />
          </div>
        </div>
      </section>

      <section className="t-patent">
        <div className="t-patent-card">
          <Eyebrow>Disruptive by Design</Eyebrow>
          <h2>Not incremental. Architectural.</h2>
          <p>
            WYSE scales by reducing demand. It unlocks efficiency already
            embedded in existing infrastructure — becoming a distributed
            optimization layer across electrified homes rather than a point
            solution.
          </p>
          <blockquote>
            &quot;This is not incremental efficiency. It is a new architecture
            for a stabilized, intelligent grid.&quot;
          </blockquote>
        </div>
      </section>

      <section className="t-proof">
        <div className="container">
          <Eyebrow>Validated Technology</Eyebrow>
          <h2>Proof Points</h2>
          <div className="t-proof-grid">
            {proofPoints.map((point, index) => (
              <article key={point}>
                <span>ϟ</span>
                <p>{point}</p>
                {index === 2 && (
                  <Link className="t-methodology" href="/technical-brief">
                    Methodology <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="t-matters">
        <div className="t-copy">
          <Eyebrow>Why WYSE Matters</Eyebrow>
          <h2>
            The next generation of energy isn’t about producing more
            electricity.
            <br />
            <span>It’s about using it more intelligently.</span>
          </h2>
          <p>
            For decades, the electric grid has delivered electricity the same
            way to every home, regardless of what individual appliances actually
            require. As electrification accelerates and demand grows faster than
            infrastructure, improving how energy is consumed becomes just as
            important as generating it.
          </p>
          <p>
            WYSE introduces a patent-pending intelligent energy platform that
            combines appliance-level voltage optimization, artificial
            intelligence, and cloud software to continuously reduce waste while
            maintaining comfort and performance.
          </p>
          <p>
            Every installed system becomes part of a growing distributed
            intelligence network that benefits homeowners, utilities, and the
            grid itself.
          </p>
          <p className="t-final-line">
            More than a device. More than software.{" "}
            <span>
              WYSE is building the intelligence layer for tomorrow’s electric
              grid.
            </span>
          </p>
        </div>
      </section>

      <section className="cta-section">
        <Image src="/wyse/cta-bolt.svg" alt="" fill className="cta-bolt" />
        <div className="container cta-content">
          <Eyebrow>The Revolution Starts Here</Eyebrow>
          <h2>
            Join the <span>WYSE</span> Revolution
          </h2>
          <p>Smarter Homes — Smarter Grids — Lower Energy Bills.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/invest">
              Invest in WYSE
            </Link>
            <a className="btn btn-ghost" href="#top">
              See the Technology
            </a>
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
            <Link href="/our-team">Our Team</Link>
          </nav>
        </div>
        <div className="container copyright">
          © 2025 WYSE Power Systems, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
