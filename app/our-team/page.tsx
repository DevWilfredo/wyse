"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const members = [
  {
    name: "Victor Ducharne",
    role: "CEO / Founder",
    image: "/wyse/team/victor-ducharne.png",
    bio: "Managing Director. Law graduate and Financial Professional with extensive experience in entrepreneurship in various sectors, including energy.",
  },
  {
    name: "Juan Bernardo Santaella",
    role: "Business Development",
    image: "/wyse/team/juan-bernardo-santaella.png",
    bio: "Business Development / Director. Administration graduate with broad expertise in business development. He led the new product development team for Master Card Latin America.",
  },
  {
    name: "Guillermo Plehn",
    role: "CMO",
    image: "/wyse/team/guillermo-plehn.png",
    bio: "CMO / Director. Administration graduate with broad expertise in online sales and marketing, helping clients from several sectors.",
  },
  {
    name: "Saeed Ur Rehman",
    role: "Engineering",
    image: "/wyse/team/saeed-ur-rehman.png",
    bio: "Electrical engineer, specialized in Electronics and Communication, with vast experience in Printed Circuit Board (PCB) design and programming.",
  },
  {
    name: "Luciano Azpiazu Carnivell",
    role: "Advisor",
    image: "/wyse/team/luciano-azpiazu-carnivell.png",
    bio: "Engineering Graduate with extensive track record as an advisor in the energy sector. Worked for Iberdrola in Bilbao for over 35 years, specializing in electric power distribution. President of the Engineering Institute of Spain (IIE); President of the Federation of Associations of Engineers of Spain (FAIIE); Dean of the Association of Engineers of Bizkaia (COIIB); Mentor.",
  },
  {
    name: "Andrew Morrison",
    role: "CDO",
    image: "/wyse/team/andrew-morrison.png",
    bio: "Development & Industrial Design. Design expert with 20 years of experience bringing innovation and ideas from concept to market.",
  },
  {
    name: "Farhan Muhhamad",
    role: "Engineering",
    image: "/wyse/team/farhan-muhhamad.png",
    bio: "Electrical engineering graduate specializing in embedded firmware for MCUs and SBCs, with expertise in IoT, BMS and industrial automation systems using MQTT, Modbus-TCP, CAN bus, RS-485 and OPC UA. Experienced in Python backends and cross-platform Flutter App development.",
  },
  {
    name: "Juan Augusto Araujo",
    role: "Legal",
    image: "/wyse/team/juan-augusto-araujo.png",
    bio: "Mr. Araujo is part of our legal team, with vast experience in trademark and patents internationally.",
  },
];

export default function OurTeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="team-page">
      <header className="navbar technology-nav team-nav">
        <Link href="/" className="logo-link" aria-label="WYSE home">
          <Image src="/wyse/logo.svg" alt="WYSE" width={114} height={28} priority />
        </Link>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <Link href="/">Home</Link><i>—</i>
          <Link href="/technology">Technology</Link><i>—</i>
          <Link href="/#impact">Impact</Link><i>—</i>
          <Link href="/technical-brief">Technical Brief</Link><i>—</i>
          <Link href="/benefits">Benefits</Link><i>—</i>
          <Link href="/invest">Invest</Link><i>—</i>
          <Link className="active" href="/our-team">Our Team</Link>
        </nav>
        <Link className="nav-cta" href="/invest">Join the Revolution</Link>
        <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      </header>

      <section className="team-hero">
        <div className="team-shell">
          <p className="eyebrow">Our Team</p>
          <h1>Positioned to Lead a Massive,<br />Underserved Market</h1>
          <p className="team-lead">At WYSE, our commitment goes beyond assembling a team of professionals; we believe that true innovation arises when expertise meets passion. We intentionally surround ourselves with individuals with vast experience in their respective fields, but who are also committed to making a meaningful contribution to the world and a more sustainable future.</p>
        </div>
      </section>

      <div className="team-divider" aria-hidden="true" />

      <section className="team-members">
        <div className="team-grid">
          {members.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-portrait">
                <Image src={member.image} alt={member.name} fill sizes="(max-width:640px) 160px, 176px" />
              </div>
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <span className="team-card-divider" aria-hidden="true" />
              <p className="team-bio">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-cta">
        <p>Interested in what we&apos;re building?</p>
        <Link className="wyse-button wyse-button--secondary" href="/invest">Invest in WYSE <span aria-hidden="true">→</span></Link>
      </section>

      <footer>
        <div className="container footer-top">
          <div><Image src="/wyse/logo.svg" alt="WYSE" width={130} height={32}/><p>Smarter Homes — Smarter Grids — Lower Energy Bills.</p></div>
          <nav><Link href="/">Home</Link><Link href="/technology">Technology</Link><Link href="/benefits">Benefits</Link><Link href="/invest">Invest</Link><Link href="/our-team">Our Team</Link></nav>
        </div>
        <div className="container copyright">© 2025 WYSE Power Systems, Inc. All rights reserved.</div>
      </footer>
    </main>
  );
}
