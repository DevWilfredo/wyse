"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sections = [
  ["01", "Executive Summary", "executive-summary"],
  ["02", "The Problem", "the-problem"],
  ["03", "The WYSE Approach", "wyse-approach"],
  ["04", "The Physics", "the-physics"],
  ["05", "Evidence: What Has Been Measured", "evidence"],
  ["06", "Technology & IP", "technology-ip"],
  ["07", "Safety & Compliance", "safety-compliance"],
  ["08", "How WYSE Compares", "comparison"],
  ["09", "Roadmap", "roadmap"],
  ["10", "Conclusion", "conclusion"],
];

function Status({
  type,
  children,
}: {
  type: "measured" | "modeled" | "roadmap";
  children: React.ReactNode;
}) {
  return (
    <div className={`brief-status ${type}`}>
      <b>{type}</b>
      <span>{children}</span>
    </div>
  );
}

function SectionTitle({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="brief-section-title">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function TechnicalBriefPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="brief-page">
      <header className="navbar technology-nav brief-nav">
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
          <Link className="active" href="/technical-brief">
            Technical Brief
          </Link>
          <i>—</i>
          <Link href="/benefits">Benefits</Link>
          <i>—</i>
          <Link href="/invest">Invest</Link>
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

      <section className="brief-hero">
        <div className="brief-shell">
          <p className="eyebrow">WYSE Power Systems — Technical Brief</p>
          <h1>
            Appliance-Level Energy Management
            <br />
            for Residential Demand &amp; Efficiency
          </h1>
          <p className="brief-lead">
            Prepared for prospective investors and backers. This document
            distinguishes between results that have been independently measured,
            results that are modeled or projected from measured data and
            third-party research, and capabilities that are on the near-term
            product roadmap.
          </p>
          <div className="brief-legend">
            <Status type="measured">
              Directly observed in independent or in-house lab testing, with data and methodology available.
            </Status>
            <Status type="modeled">
              Calculated from measured physics/data plus published third-party research; not yet directly measured by WYSE at the integrated system level.
            </Status>
            <Status type="roadmap">
              Capability implemented in current firmware or architecture; savings not yet confirmed through field validation.
            </Status>
          </div>
        </div>
      </section>

      <div className="brief-layout brief-shell">
        <aside className="brief-index">
          <p>Contents</p>
          <nav>
            {sections.map(([n, title, id]) => (
              <a key={id} href={`#${id}`}>
                <span>{n}</span>
                {title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="brief-document">
          <section id="executive-summary">
            <SectionTitle number="01">Executive Summary</SectionTitle>
            <p>
              WYSE is a smart energy-management system that includes a device or hardware that is installed at an individual electric appliance — beginning with the electric resistance water heater with A/C optimization coming next — and reduces its electricity consumption without a change in occupant behavior or comfort.
            </p>
            <p>
              WYSE combines three mechanisms: <b>intelligent cycle management</b>, which reduces unnecessary heating once a cycle has produced enough hot water for anticipated use; <b>smart scheduling</b>, which reduces standby losses by avoiding heating during hours a household reliably will not need hot water (e.g. nighttime); and <b>voltage optimization</b>, which reduces instantaneous power draw during active heating and provides utility-grade demand response (kW shed) during peak grid events. Because cycle management and scheduling address energy consumption directly, while voltage optimization addresses demand shape, they are complementary rather than redundant.
            </p>
            <p>
              WYSE&apos;s initial application is the electric resistance water heater — one of the largest single controllable electrical loads in most U.S. homes, and the load type for which voltage-based power reduction is most direct and predictable. The underlying physics governing instantaneous power is well established: for a resistive load, power falls with the square of the voltage supplied (Joule&apos;s Law, P = V²/R). Independent laboratory testing confirmed that WYSE reliably modulates power as designed: a 19% reduction in instantaneous wattage was measured on a resistive heating element. In a thermostat-controlled water heater, this wattage reduction extends heating time rather than reducing total energy per cycle; its primary value is demand response (firm kW shed), not standalone energy efficiency.
            </p>
            <p>
              This document presents what has been measured, what is modeled
              from that data combined with independent third-party research, and
              what remains on the engineering roadmap — clearly separated, so
              so the strength of the evidence is never overstated.
            </p>
          </section>

          <section id="the-problem">
            <SectionTitle number="02">
              The Problem: Rising Demand, Rising Bills, Aging Infrastructure
            </SectionTitle>
            <p>
              U.S. residential electricity demand is accelerating for several
              converging reasons: home electrification (heat pumps, induction
              ranges, EV chargers displacing gas appliances), the growth of AI
              and data center load on regional grids, and electricity rates that
              have climbed faster than inflation in many regions over the past
              several years.
            </p>
            <p>
              Utilities have historically addressed rising demand by building
              new generation and transmission capacity — a process that takes
              years and is reflected in customer rates. A complementary
              approach, used by utilities for decades, is Conservation Voltage
              Reduction (CVR): lowering the voltage delivered across a
              distribution circuit to reduce aggregate demand. Documented CVR programs typically report demand reductions in the range of 1–4% at the circuit level, driven primarily by voltage-sensitive loads such as motors and electronics. For pure resistive loads like water heating elements, voltage reduction lowers instantaneous kW but does not reduce total kWh in a thermostat-controlled system, because runtime extends to deliver the same total heat energy.
            </p>
            <p>
              Residential “whole-home” voltage optimizers, sold mainly in the UK and EU market, apply the same logic at the household panel level rather than the utility level, with reported household savings
              generally around 10%. Because the adjustment is still uniform
              across every downstream appliance, it faces the same structural
              ceiling: it cannot tailor the reduction to what each individual
              appliance actually needs, and it cannot decide to stop optimizing a cycle early or reschedule it — it only ever turns one dial.
            </p>
            <p>What is needed is a solution that addresses both sides of this problem directly, at the source of consumption. Homeowners and small businesses need a way to lower their electricity bills without changing their habits or sacrificing comfort. Utilities need a way to manage load demand that goes beyond blunt, circuit-wide or panel-wide adjustments — one that acts at the level of the individual appliance actually driving consumption, rather than averaging across every load on a circuit regardless of whether each one benefits. A device that combines appliance-level control with real-time sensing and adaptive decision-making can serve both needs at once: reducing the homeowner&apos;s bill today, while giving utilities a more precise and controllable resource for managing demand than anything currently available at the grid or panel level.</p>
          </section>

          <section id="wyse-approach">
            <SectionTitle number="03">
              The WYSE Approach: Three Complementary Mechanisms, Coordinated by a Decision Layer
            </SectionTitle>
            <p>Appliances do not respond to voltage changes the same way, so a single voltage setting applied to an entire home or an entire circuit is inherently a compromise — this is why WYSE controls at the individual appliance rather than the panel or the utility circuit. But appliance-level control is only the starting point. Water-heating energy loss comes from more than one source, and WYSE is built around three complementary mechanisms — voltage optimization, intelligent cycle management, and smart scheduling — each targeting a different one, rather than a single voltage-reduction trick applied uniformly.</p>
            <h3>3.1 Two systems, working together</h3>
            <p>
              <b>The Hardware (the actuator).</b> A device installed between the utility supply and the water heater that can sense, and precisely adjust, the voltage delivered to the appliance in real time, within safety and standards limits. The hardware enables two distinct functions: (i) a bypass circuit for measurement and verification of software-driven savings, and (ii) voltage trimming for utility demand response events.
            </p>
            <p><b>The Control &amp; Optimization Layer (the intelligence).</b> Firmware and cloud logic that decide, continuously, what to do with that actuator — hold a reduced voltage, end a heating cycle early once enough hot water is available, delay a cycle, or apply more or less voltage trimming — based on real-time sensing, learned usage patterns, and verified measurement of what each action actually saved.</p>
            <p>It is the second system — not the autotransformer by itself — that determines how much of the theoretically available savings is actually captured without affecting comfort.</p>
            <h3>3.2 How the hardware works, in plain terms</h3>
            <p>
              The WYSE device sits between the utility supply and the target appliance. Inside, a servo-controlled autotransformer continuously adjusts the output voltage under the direction of an onboard microcontroller. Real-time sensors measure voltage, current, power, power factor, and temperature on both the input and output sides. A bypass circuit allows the system to compare optimized vs. non-optimized power draw on the same appliance, under the same conditions — which is how energy savings are measured and verified rather than merely estimated — and also serves as an automatic fail-safe: if the device faults or loses power, the appliance reverts to receiving direct utility voltage rather than being left without power.
            </p>
            <p>Externally mounted pipe temperature sensors on the hot and cold-water lines give the system a non-invasive way to estimate remaining hot water availability and detect draw events, without a flow meter.</p>
            <h3>3.3 The control logic: safety and comfort come before efficiency</h3>
            <p>
              WYSE’s firmware applies a layered decision hierarchy, in order of
              priority:
            </p>
            <ol className="brief-priorities">
              <li>
                <b>Safety guardrails</b>
                <span>
                  Enforce that voltage stays within applicable regulatory tolerance (ANSI C84.1 Range A), respect anti-scald minimums, and defer to any active sanitize cycle.
                </span>
              </li>
              <li>
                <b>Comfort protection</b>
                <span>
                  Never let hot water availability fall below a threshold appropriate to the detected or predicted activity (e.g., a shower vs. a hand wash).
                </span>
              </li>
              <li>
                <b>Efficiency optimization</b>
                <span>
                  Only once safety and comfort are satisfied does the system apply the voltage, cycle-timing, or scheduling adjustment that reduces energy consumption.
                </span>
              </li>
            </ol>
            <p>
              This ordering — safety, then comfort, then efficiency — prevents
              appliance performance or safety from being sacrificed to chase
              marginally larger savings number.
            </p>
            <h3>3.4 Three complementary mechanisms, and how they reinforce one another</h3>
            <ul><li><b>Voltage Optimization</b> — reduces instantaneous power while actively heating, providing firm kW shed for utility demand response.</li><li><b>Intelligent Cycle Management</b> — ends a cycle once enough hot water has been produced for anticipated use.</li><li><b>Smart Scheduling</b> — avoids heating during hours a household reliably will not need hot water.</li></ul>
            <Status type="roadmap">WYSE&apos;s field pilot will train and customize these models to each household&apos;s real usage patterns. The core control architecture has been implemented and is ready for field validation.</Status>
            <p>Independent published research supports a conservative planning assumption of up to <b>22% energy reduction</b> from cycle management and smart scheduling once field validated. Voltage optimization does not add to this energy total; it provides separate utility revenue via demand response.</p>
          </section>

          <section id="the-physics">
            <SectionTitle number="04">
              The Physics: How Voltage Reduction Modulates Power
            </SectionTitle>
            <p>
              For a resistive electrical load, power is governed by Joule’s Law:
            </p>
            <div className="brief-formula">P = V² / R</div>
            <p>
              Because power scales with the square of voltage, a relatively
              small voltage reduction produces a larger reduction in
              instantaneous power draw.
            </p>
            <div className="brief-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Input Voltage</th>
                    <th>Calculated Power</th>
                    <th>Reduction vs. 240V Baseline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["240 V (nominal baseline)", "≈ 4,500 W", "—"],
                    ["235 V", "≈ 4,314 W", "-4.1%"],
                    ["230 V", "≈ 4,133 W", "-8.2%"],
                    ["225 V", "≈ 3,955 W", "-12.1%"],
                    ["220 V", "≈ 3,781 W", "-16.0%"],
                    ["216 V (ANSI Range A floor)", "≈ 3,645 W", "-19.0%"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      {r.map((c) => (
                        <td key={c}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="brief-caption">
              Table 1. Illustrative calculated power vs. voltage for a fixed
              resistive load, based on Joule’s Law.{" "}
              <em>Modeled — calculation, not a lab measurement.</em>
            </p>
            <p>The key practical question is not whether this physics is real — it is well established — but what it implies for a thermostat-controlled appliance. Because the thermostat demands a fixed water temperature, lower power simply extends runtime to deliver the same total heat energy (plus slightly more standby loss to the room). The 19% power reduction is therefore a demand-response asset (kW shed), not an energy-efficiency mechanism. Section 3.4 explains how cycle management and scheduling — not voltage reduction — capture the energy savings.</p>
          </section>

          <section id="evidence">
            <SectionTitle number="05">
              Evidence: What Has Been Measured
            </SectionTitle>
            <h3><span className="brief-badge measured">Measured</span> 5.1 Independent laboratory validation — Florida Atlantic University</h3>
            <p>
              In June 2025, the WYSE system was independently tested by Florida Atlantic University&apos;s College of Engineering and Computer Science, with results verified and signed by a faculty member of the department. A 1000W resistive water heating element was tested under two conditions: direct connection to a standard 120V AC wall outlet (baseline), and connection through the WYSE device.
            </p>
            <div className="brief-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Direct Outlet (Baseline)</th>
                    <th>Through WYSE Device</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Starting temperature", "73°F", "73°F"],
                    ["Average power draw", "722 W", "586 W"],
                    ["Time to reach final temperature", "59.9 sec", "90.4 sec"],
                    ["Final temperature reached", "1,076°F", "1,076°F"],
                  ].map((r) => (
                    <tr key={r[0]}>
                      {r.map((c) => (
                        <td key={c}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="brief-caption">
              FAU laboratory test results, June 2025. Source: WYSE Electronics Testing Report, FAU College of Engineering and Computer Science.
            </p>
            <p>The result: a 19% reduction in instantaneous power draw. This confirms that voltage reduction modulates power as designed.</p>
            <h3><span className="brief-badge measured">Measured</span> 5.2 Corroborating bench tests, at different reduction depths</h3>
            <p>
              Two further in-house bench tests, at different voltage-reduction depths and on different heating elements, were conducted to check whether the FAU result generalizes. They are reported here as separate, independent data points rather than combined into a single percentage, because they used different rigs and different reduction depths.
            </p>
            <div className="brief-table-wrap"><table><thead><tr><th>Test</th><th>Voltage / Power Change</th><th>Result</th></tr></thead><tbody><tr><td>Full-size 240V-class element (≈5.5kW)</td><td>220V → 205V (-6.82%)</td><td>Power: 5,455W → 4,711W (-13.65%)</td></tr><tr><td>1000W element, open-air</td><td>≈20% power reduction by design</td><td>845W → 670W; time to peak temp 90s → 150s</td></tr></tbody></table></div>
            <p className="brief-caption">Table 3. Corroborating bench tests. Sources: internal test reports, water heating element and water heater resistance tests.</p>
            <p>The full-size element test is a useful sanity check: a 6.82% voltage reduction, under pure Joule&apos;s Law scaling, predicts approximately a 13.2% power reduction; the measured reduction was 13.65% — closely consistent with expected resistive behavior, and confirmation that the physics observed on the FAU bench element scales to a full-sized residential-class element.</p>
            <p className="brief-note">Across the tests, the pattern is consistent: reducing voltage reduces instantaneous power by roughly the amount Joule&apos;s Law predicts, and the element surface still reaches the same peak temperature. However, the extended heating time means the element loses more heat to the surrounding air during the cycle. In a tank-style water heater, the relevant metric is energy delivered to the water, which remains constant for a given temperature rise regardless of voltage. The extended runtime therefore represents a net energy cost, not a savings.</p>
            <h3><span className="brief-badge measured">Measured</span> 5.3 Scaling to a full ANSI-compliant voltage range</h3>
            <p>U.S. residential water heaters typically operate on a 240V circuit. ANSI C84.1 Range A defines the standard utilization voltage tolerance for this service; the lower bound of that range is 216V — a 10% reduction from nominal. Applying the same physics at that full, standards-compliant range yields an instantaneous power reduction of approximately 19–20% during active heating. This is the demand response capacity available to utilities; it does not translate to proportional kWh savings for the homeowner.</p>
          </section>

          <section id="technology-ip">
            <SectionTitle number="06">
              Technology &amp; Intellectual Property
            </SectionTitle>
            <p>
              WYSE&apos;s approach is the subject of a non-provisional U.S. utility patent application (built on prior provisional filings), covering the appliance-level voltage regulation module, real-time sensing architecture, machine-learning-driven control firmware, and the hierarchical safety/comfort/efficiency arbitration logic described in Section 3.
            </p>
            <p>The patent application is written broadly enough to cover appliance types beyond water heaters, including HVAC, refrigeration, and industrial motor loads, and describes handling for both resistive and inductive/variable-frequency-drive loads. The patent claims establish defensibility across broad appliance categories, but measured results and field-tested control logic are currently scoped to electric resistance water heating.</p>
            <ul>
              <li>
                Granular appliance-level voltage optimization rather than
                panel-wide adjustment.
              </li>
              <li>
                Closed-loop sensing on both the utility and appliance sides.
              </li>
              <li>
                An adaptive control hierarchy that treats voltage as one of several coordinated levers — alongside cycle timing and scheduling.
              </li>
              <li>
                An integrated hot-water estimation subsystem using non-invasive pipe temperature sensing.
              </li>
              <li>
                Automatic bypass for fail-safe operation and same-condition
                verification.
              </li>
            </ul>
            <p>
              Voltage optimization as a general concept is not new. What distinguishes WYSE is the specific combination of appliance-level granularity, real-time bidirectional sensing, and an adaptive control system that decides how and when to use voltage as a demand-response lever, alongside cycle management and scheduling.
            </p>
          </section>

          <section id="safety-compliance">
            <SectionTitle number="07">Safety, Compliance, and Regulatory Pathway</SectionTitle>
            <Status type="measured">Core safety mechanisms</Status>
            <p>
              WYSE is designed to operate within established ANSI C84.1 voltage
              tolerance ranges and to preserve appliance operation as the first
              constraint.
            </p>
            <ul>
              <li>
                <b>Automatic bypass:</b> restores direct utility power if the
                optimizer loses power or detects a fault.
              </li>
              <li>
                <b>Overcurrent and temperature protection:</b> continuously
                monitors electrical and thermal limits.
              </li>
              <li>
                <b>ANSI C84.1 Range A:</b> operates entirely within existing regulatory voltage tolerance standards.
              </li>
            </ul>
            <Status type="roadmap">
              UL certification (targeting UL 916, the Energy Management Equipment standard) and CE certification are the next major milestones. These are not yet complete; this document represents validated bench-level engineering and a defined path to certified, field-deployed hardware.
            </Status>
          </section>

          <section id="comparison">
            <SectionTitle number="08">How WYSE Compares</SectionTitle>
            <div className="brief-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Approach</th>
                    <th>Control Granularity</th>
                    <th>Documented Savings Range</th>
                    <th>Adapts Decisions in Real Time?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Utility Conservation Voltage Reduction (CVR)</td>
                    <td>Entire distribution circuit</td>
                    <td>1–4% (published utility programs)</td>
                    <td>No — fixed offset</td>
                  </tr>
                  <tr>
                    <td>Whole-home voltage optimizers (UK/EU market)</td>
                    <td>Entire household panel</td>
                    <td>≈10% (vendor-reported)</td>
                    <td>No — fixed offset</td>
                  </tr>
                  <tr>
                    <td>Smart thermostats (e.g., Nest, Ecobee)</td>
                    <td>HVAC only, via scheduling/setpoints</td>
                    <td>≈10–12% of AC/heating load</td>
                    <td>Scheduling only — no voltage control</td>
                  </tr>
                  <tr>
                    <td>WYSE (Software Layer)</td>
                    <td>Individual appliance</td>
                    <td>10–22% modeled energy savings (cycle management + scheduling)</td>
                    <td>Yes — AI driven</td>
                  </tr>
                  <tr><td>WYSE (VO + Software)</td><td>Individual appliance</td><td>19% measured kW shed (demand response); energy savings from software layer</td><td>Yes — coordinated</td></tr>
                </tbody>
              </table>
            </div>
            <p className="brief-caption">
              Table 4. Comparative positioning. Third-party figures are drawn from published industry sources and utility program documentation. WYSE figures per Sections 5.1–5.3, with tiers as labeled.
            </p>
          </section>

          <section id="roadmap">
            <SectionTitle number="09">Roadmap</SectionTitle>
            <div className="brief-roadmap">
              <article>
                <Status type="measured">9.1 Milestones achieved</Status>
                <ul>
                  <li>Core hardware and firmware architecture complete</li>
                  <li>Voltage optimization engine validated on resistive loads (Sections 5.1–5.2)</li>
                  <li>Non-provisional U.S. patent application filed</li>
                  <li>Autotransformer remotely controllable via mobile app</li>
                  <li>Pilot deployment sites secured for initial field program</li>
                </ul>
              </article>
              <article>
                <Status type="roadmap">9.2 Next phase</Status>
                <ul>
                  <li>UL 916 (Energy Management Equipment) and CE certification</li>
                  <li>Field pilot deployment — training and validating cycle management and scheduling models against real household usage patterns</li>
                  <li>Integrated measurement of energy savings alongside demand response</li>
                  <li>Extension to HVAC, refrigeration, and additional appliance categories — architecturally supported, pending field validation</li>
                </ul>
              </article>
            </div>
          </section>

          <section id="conclusion">
            <SectionTitle number="10">Conclusion</SectionTitle>
            <p>
              WYSE&apos;s approach is built around a clear-eyed understanding of where the value actually sits in appliance-level energy management. Voltage optimization reliably modulates instantaneous power draw — this has been independently measured and confirmed across multiple bench tests — and its primary value is as a demand-response asset (firm kW shed) for utilities, coordinated by software to avoid extending heating time in ways that compromise comfort or erode energy savings.
            </p>
            <p>
              The energy savings — modeled at up to 22% of household water-heating consumption — come from intelligent cycle management and smart scheduling, which address standby losses and over-heating directly. These mechanisms are implemented in the current architecture and ready for field validation, sequenced behind UL certification. The combination of both systems — demand response value from voltage optimization and energy savings from the software layer — is what makes WYSE&apos;s proposition distinct from either a simple voltage optimizer or a smart thermostat alone.
            </p>
            <p>
              Investors and backers evaluating WYSE should treat the 19% measured power reduction as the company&apos;s validated demand-response capability; the 10–22% combined energy savings as a conservative, evidence-based modeled projection pending integrated field validation; and extension to additional appliance categories as an architecturally-supported roadmap item. This document will be updated as pilot and certification data become available.
            </p>
            <div className="brief-disclaimer">
              <p>
                This document is intended for informational purposes for prospective investors and crowdfunding backers. It does not constitute an offer to sell securities. Figures labeled MODELED are projections based on measured data and third-party research and should not be treated as guaranteed outcomes. Sources available on request.
              </p>
            </div>
            <Link className="wyse-button wyse-button--secondary brief-invest" href="/invest">
              Explore Investment Opportunities
            </Link>
          </section>
        </article>
      </div>

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
            <Link href="/#team">Our Team</Link>
          </nav>
        </div>
        <div className="container copyright">
          © 2025 WYSE Power Systems, Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
