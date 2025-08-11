// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import SeaAnemoneBackground from './Animation'
import './App.css'

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaptopCode,
  FaUserGraduate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiMongodb,
  SiSolidity,
  SiTailwindcss,
  SiMysql,
  SiRedux,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

/* ===========================
   Inline global CSS
   =========================== */
const globalStyles = `
/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Press+Start+2P&display=swap');

:root{
  --bg-1: #ffffff;
  --bg-2: #f7fbff;
  --accent-1: #06b6d4;
  --accent-2: #f472b6;
  --muted: #6b7280;
  --dark: #0f172a;
  --card-border: #111;
}

/* Reset */
*{box-sizing:border-box}
html,body,#root{height:100%;margin:0}
body{
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);
  color: #0f172a;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-y: auto;
}

/* App container uses vertical scroll-snap */
.app {
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

/* Each section fills viewport */
.section {
  scroll-snap-align: start;
  min-height: 100vh;
  padding: 48px 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Page layout wrapper */
.container {
  width: min(1180px, 94%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 32px;
  align-items: start;
}

/* Pixel headline font */
.pixel {
  font-family: "Press Start 2P", monospace;
  letter-spacing: 0.5px;
}

/* Header / Nav */
.header {
  position: fixed;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  gap: 18px;
  background: rgba(255,255,255,0.85);
  border: 2px solid #e6e6e6;
  padding: 8px 14px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(11, 20, 40, 0.06);
  align-items: center;
}
.header .brand {
  display:flex;align-items:center;gap:10px;
}
.logo-badge {
  width:42px;height:42px;border-radius:8px;
  background: linear-gradient(135deg,var(--accent-1),var(--accent-2));
  display:flex;align-items:center;justify-content:center;color:white;font-weight:700;
  box-shadow: 0 6px 18px rgba(6,182,212,0.12);
}

/* Nav links */
.header nav a {
  text-decoration:none;color:var(--dark);font-weight:600;font-size:13px;
  padding:6px 8px;border-radius:6px;
}
.header nav a:hover { background:#eef2ff; }

/* Left column card style */
.left-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,250,0.95));
  border: 3px solid var(--card-border);
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(16,24,40,0.06);
  position: relative;
}

/* Right column content card style */
.right-card {
  background: linear-gradient(180deg,#ffffff,#fcfeff);
  border-radius: 16px;
  padding: 22px;
  border: 2px dotted #111; /* dotted pixel-like */
  box-shadow: 0 14px 40px rgba(15,23,42,0.06);
  min-height: 420px;
}

/* Hero / intro */
.hero-root {
  display:flex;align-items:center;justify-content:center;
  width:100%;
  min-height:100vh;
  background:
    radial-gradient(800px 400px at 10% 10%, rgba(6,182,212,0.08), transparent 8%),
    radial-gradient(800px 400px at 90% 90%, rgba(244,114,182,0.06), transparent 8%),
    linear-gradient(180deg, #fff 0%, #f7fbff 100%);
}

/* Big hero box */
.hero-box {
  width: min(1100px, 94%);
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 28px;
  align-items:center;
}

/* Hero left */
.hero-title {
  font-size: clamp(22px, 4.6vw, 44px);
  margin:0 0 10px 0;
  line-height:1.02;
}
.hero-sub{
  font-size:15px;color:var(--muted);max-width:54ch;margin-bottom:20px;
}

/* CTA row */
.cta-row{display:flex;gap:12px;align-items:center;}
.cta-btn {
  background: linear-gradient(90deg,var(--accent-1),var(--accent-2));
  color:white;padding:12px 18px;border-radius:12px;border:0;font-weight:700;
  box-shadow: 0 8px 22px rgba(6,182,212,0.12);
  cursor:pointer;
}
.cta-outline {
  background: transparent;border:2px solid #111;padding:10px 14px;border-radius:12px;font-weight:700;
}

/* small pixel tags */
.pixel-tag{
  display:inline-block;padding:8px 10px;border-radius:8px;background:#fff;border:2px dotted #111;margin-right:8px;font-size:11px;
}

/* Right hero card */
.profile-card {
  display:flex;flex-direction:column;align-items:center;gap:14px;padding:16px;
  border-radius:12px;background:linear-gradient(180deg,#ffffff,#f7f7ff);border:3px solid #111;
}
.avatar{
  width:160px;height:160px;border-radius:18px;background:linear-gradient(135deg,#e6f9ff,#ffe6f6);
  display:flex;align-items:center;justify-content:center;font-size:26px;color:#111;font-weight:700;border:3px dotted #111;
}
.small {
  font-size:13px;color:var(--muted);
}

/* Section heading big */
.section-heading {
  font-family:"Press Start 2P", monospace;
  font-size:18px;color:#111;margin-bottom:10px;
  display:flex;align-items:center;gap:12px;
}
.section-heading .dot {
  width:12px;height:12px;border-radius:3px;background:var(--accent-1);
  box-shadow: 0 4px 10px rgba(6,182,212,0.12);
}

/* Grid utilities */
.grid-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.project-card {
  padding:18px;border-radius:12px;background:linear-gradient(180deg,#ffffff,#fcfcff);
  border:2px dotted #111;min-height:240px;display:flex;flex-direction:column;gap:12px;
  box-shadow: 0 10px 30px rgba(11,20,40,0.04);
}
.project-hero{
  flex:1;display:flex;flex-direction:column;gap:10px;
}
.project-title{font-weight:700;font-size:16px}
.tech-pill{display:inline-block;padding:6px 8px;border-radius:8px;background:#111;color:white;font-size:11px;margin-right:8px}

/* skills block */
.skill-card{padding:14px;border-radius:12px;background:#fff;border:2px solid #111;display:flex;gap:12px;align-items:center}
.skill-icon{width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#f0f7ff,#fff0f7);display:flex;align-items:center;justify-content:center;border:2px dotted #111}

/* timeline */
.timeline{display:flex;flex-direction:column;gap:18px}
.timeline-item{display:flex;gap:12px;align-items:flex-start}
.timeline-dot{width:14px;height:14px;border-radius:4px;background:var(--accent-2);border:3px solid #111;margin-top:6px}

/* contact */
.contact-grid{display:grid;grid-template-columns:1fr 360px;gap:24px;align-items:start}
.contact-card{padding:18px;border-radius:12px;background:linear-gradient(180deg,#fff,#fafafa);border:3px dotted #111}
.form-row{display:flex;gap:8px;margin-bottom:12px}
.form-input{flex:1;padding:12px;border-radius:8px;border:2px solid #111;background:transparent}
.form-area{min-height:140px;padding:12px;border-radius:8px;border:2px solid #111;background:transparent;resize:vertical}

/* footer */
.footer{padding:28px;text-align:center;color:var(--muted);font-size:13px}

/* small responsive */
@media (max-width: 980px){
  .container{grid-template-columns:1fr; padding-bottom:60px}
  .hero-box{grid-template-columns:1fr}
  .grid-cards{grid-template-columns:1fr}
  .grid-3{grid-template-columns:repeat(2,1fr)}
  .contact-grid{grid-template-columns:1fr}
}

/* subtle animations */
.fade-up { animation: fadeUp .8s cubic-bezier(.2,.9,.2,1) both;}
@keyframes fadeUp{ from { transform: translateY(12px); opacity:0 } to { transform: translateY(0); opacity:1 } }

/* pixel dotted background accents */
.pixel-bg {
  background-image: radial-gradient(#111 1px, transparent 1px);
  background-size: 6px 6px;
  opacity: 0.03;
  position: absolute;inset:0;z-index:0;
}
`;

/* Inject styles into head */
const styleTag = document.createElement("style");
styleTag.innerHTML = globalStyles;
document.head.appendChild(styleTag);

/* ===========================
   Dummy data for content
   =========================== */

const SKILLS = [
  { name: "React.js", icon: <FaReact size={28} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} color="#8cc84b" /> },
  { name: "Solidity", icon: <SiSolidity size={28} color="#333" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} color="#4db33d" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} color="#38bdf8" /> },
  { name: "Redux", icon: <SiRedux size={28} color="#764abc" /> },
  { name: "MySQL", icon: <SiMysql size={28} color="#00758f" /> },
  { name: "Express.js", icon: <SiExpress size={28} color="#000" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} color="#111" /> },
  { name: "JavaScript", icon: <FaJsSquare size={28} color="#f7df1e" /> },
];



const TIMELINE = [
  { date: "2024", title: "Application Engineer", desc: "Worked on several React/Tailwind projects ranging from landing pages to complex dashboards." },
  { date: "2023-2024", title: "Web Developer", desc: "Intensive projects in full-stack JS and Cloud services." },
  { date: "2019-2023", title: "B.Tech Computer Science", desc: "Graduated from Symbiosis Institute of Technology, Pune." },
];

/* ===========================
   Small UI components
   =========================== */

function Header() {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo-badge">AS</div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <strong style={{ fontSize: 13 }}>Abhay Singh</strong>
          <span style={{ fontSize: 11, color: "var(--muted)" }}>Full Stack Web Developer</span>
        </div>
      </div>
      <nav style={{ marginLeft: 12 }}>
        <a href="#about">About</a>
        <a href="#skills" style={{ marginLeft: 10 }}>Skills</a>
        <a href="#projects" style={{ marginLeft: 10 }}>Projects</a>
        <a href="#timeline" style={{ marginLeft: 10 }}>Journey</a>
        <a href="#contact" style={{ marginLeft: 10 }}>Contact</a>
      </nav>
    </header>
  );
}

/* Hero Section */
function HeroSection() {
  return (
    <section className="section hero-root" id="about" role="region" aria-label="Hero">
      <div className="pixel-bg" />
      <div className="hero-box fade-up">
        <div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
            <div className="pixel-tag">Full-Stack</div>
            <div className="pixel-tag">Web Design</div>
          </div>

          <h2 className="hero-title pixel">Hi — I’m <span style={{ background: "linear-gradient(90deg,#06b6d4,#f472b6)", WebkitBackgroundClip: "text", color: "transparent" }}>Abhay Singh</span></h2>

          <p className="hero-sub">I build beautiful front-end experiences, modern web apps, and secure feature integrations. I focus on performance, accessibility and polished UI.</p>

          <div className="cta-row">
            <a className="cta-btn" href="#projects">View Projects</a>
            <a className="cta-outline" href="#contact">Contact Me</a>
          </div>

          <div style={{ marginTop: 22, display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <FaReact color="#61dafb" /> <small className="small">React</small>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <FaNodeJs color="#8cc84b" /> <small className="small">Node.js</small>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <SiSolidity color="#333" /> <small className="small">JavaScript</small>
            </div>
          </div>
        </div>

        <aside className="profile-card">
          <div className="avatar">AS</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 800, fontSize: 18 }}>Abhay Singh</div>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>Full-Stack Developer</div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <a className="pixel-tag" href="#"><FaGithub /></a>
            <a className="pixel-tag" href="#"><FaLinkedin /></a>
            <a className="pixel-tag" href="#"><FaEnvelope /></a>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800 }}>6+</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Projects</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 800 }}>1</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>Years exp.</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* Skills Section */
function SkillsSection() {
  return (
    <section className="section" id="skills" role="region" aria-label="Skills">
      <div className="container fade-up" style={{ alignItems: "start" }}>
        <div className="left-card">
          <div className="section-heading">
            <div className="dot" />
            <div style={{ fontSize: 14 }}>Expertise</div>
          </div>

          <h3 style={{ marginTop: 8, marginBottom: 8, fontSize: 20 }} className="pixel">Skills</h3>
          <p className="small">A mix of modern front-end tooling and backend primitives. Comfortable shipping production apps.</p>

          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              <div className="pixel-tag">React</div>
              <div className="pixel-tag">Next.js</div>
              <div className="pixel-tag">Tailwind</div>
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, background: "#06b6d4", borderRadius: 3 }} />
                <div style={{ fontWeight: 700 }}>Front-end Engineering</div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 8, height: 8, background: "#f472b6", borderRadius: 3 }} />
                <div style={{ fontWeight: 700 }}>Cloud Development</div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <small style={{ color: "var(--muted)" }}>Available for freelance & full-time</small>
            </div>
          </div>
        </div>

        <div className="right-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div className="section-heading"><div className="dot" /> <div>Technical Skills</div></div>
              <h3 className="pixel" style={{ marginTop: 6 }}>Toolbox</h3>
            </div>
            <div style={{ textAlign: "right", color: "var(--muted)" }}>
              <div>Proficiency</div>
              <div style={{ fontSize: 12 }}>Illustrative</div>
            </div>
          </div>

          <div className="grid-3">
            {SKILLS.map((s, idx) => (
              <div key={idx} className="skill-card fade-up" style={{ gap: 12 }}>
                <div className="skill-icon">{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 800 }}>{s.name}</div>
                  <div style={{ marginTop: 8, height: 8, background: "#eef2ff", borderRadius: 6, overflow: "hidden" }}>
                    <div style={{ width: `${75 - idx}%`, height: "100%", background: "linear-gradient(90deg,var(--accent-1),var(--accent-2))" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}



// Example project data, replace with your actual projects
const PROJECTS1 = [
  {
    title: "Cloud Voting System",
    subtitle: "Blockchain · dApp",
    description:
      "A secure cloud-based voting system leveraging blockchain for transparency and immutability.",
    tags: ["Solidity", "React", "Node"],
    role: "Full-stack developer",
    tech: "Solidity, React, Node",
    liveDemo: "https://cloudvoting.example.com",
    source: "https://github.com/yourusername/cloud-voting",
  },
  {
    title: "NFT Marketplace",
    subtitle: "Blockchain · Marketplace",
    description:
      "An NFT marketplace platform for artists and collectors to trade digital art securely.",
    tags: ["React", "Ethereum", "Web3.js"],
    role: "Frontend developer",
    tech: "React, Web3.js, Solidity",
    liveDemo: "https://nftmarketplace.example.com",
    source: "https://github.com/yourusername/nft-marketplace",
  },
  {
    title: "Price Scraper",
    subtitle: "Backend · Scraper",
    description:
      "A backend service that scrapes e-commerce sites for price comparison and alerts.",
    tags: ["Node.js", "Puppeteer", "MongoDB"],
    role: "Backend developer",
    tech: "Node.js, Puppeteer, MongoDB",
    liveDemo: null,
    source: "https://github.com/yourusername/price-scraper",
  },
  // Add more projects as needed
];

function ProjectsSection() {
  return (
    <section
      className="section"
      id="projects"
      role="region"
      aria-label="Projects"
    >
      <div className="container fade-up" style={{ alignItems: "start" }}>
        <div className="left-card">
          <div className="section-heading">
            <div className="dot" /> <div>Selected Works</div>
          </div>
          <h3 className="pixel" style={{ marginTop: 10 }}>
            Featured Projects
          </h3>
          <p className="small" style={{ marginTop: 12 }}>
            A few projects showcasing a mix of frontend UI, backend systems and on-chain work. Click any project to view more.
          </p>

          <div style={{ marginTop: 18 }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <FaLaptopCode color="#06b6d4" />{" "}
              <div style={{ fontWeight: 700 }}>Full-stack Projects</div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
              <div className="pixel-tag">dApp</div>
              <div className="pixel-tag">Marketplace</div>
              <div className="pixel-tag">Scraper</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          {/* Large project hero card */}
          <div
            className="project-card fade-up"
            style={{ display: "flex", flexDirection: "row", gap: 18 }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{ fontSize: 13, color: "var(--muted)", marginBottom: 8 }}
              >
                {PROJECTS1[0].subtitle}
              </div>
              <div className="project-title">{PROJECTS1[0].title}</div>
              <div style={{ marginTop: 10, color: "var(--muted)" }}>
                {PROJECTS1[0].description}
              </div>

              <div style={{ marginTop: 12 }}>
                {PROJECTS1[0].tags.map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                {PROJECTS1[0].liveDemo && (
                  <a
                    className="cta-btn"
                    href={PROJECTS1[0].liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                  </a>
                )}
                {PROJECTS1[0].source && (
                  <a
                    className="cta-outline"
                    href={PROJECTS1[0].source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source
                  </a>
                )}
              </div>
            </div>

            <div
              style={{
                width: 260,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  height: 140,
                  borderRadius: 10,
                  background:
                    "linear-gradient(135deg,#06b6d4,#f472b6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                }}
              >
                Screenshot
              </div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>
                Role: {PROJECTS1[0].role} · Tech: {PROJECTS1[0].tech}
              </div>
            </div>
          </div>

          {/* Grid of other project cards */}
          <div className="grid-cards">
            {PROJECTS1.slice(1).map((p, i) => (
              <div key={i} className="project-card fade-up">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>
                    {p.subtitle}
                  </div>
                </div>
                <div className="project-hero" style={{ marginTop: 6 }}>
                  <div style={{ color: "var(--muted)" }}>{p.description}</div>
                </div>
                <div style={{ marginTop: 10 }}>
                  {p.tags.map((t, j) => (
                    <span key={j} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;


/* Timeline / Journey Section */
function TimelineSection() {
  return (
    <section className="section" id="timeline" role="region" aria-label="Journey">
      <div className="container fade-up" style={{ alignItems: "start" }}>
        <div className="left-card">
          <div className="section-heading"><div className="dot" /> <div>Journey</div></div>
          <h3 className="pixel" style={{ marginTop: 10 }}>Where I’ve worked & learned</h3>
          <p className="small" style={{ marginTop: 8 }}>A short timeline of professional milestones and education.</p>
          <div style={{ marginTop: 12 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <div style={{ fontWeight: 700, color: "var(--muted)" }}>Currently</div>
              <div style={{ marginLeft: 6, color: "var(--muted)" }}>Open to collaborations</div>
            </div>
          </div>
        </div>

        <div className="right-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div className="section-heading"><div className="dot" /> <div>Experience Timeline</div></div>
              <h3 className="pixel" style={{ marginTop: 6 }}>Timeline</h3>
            </div>
            <div style={{ color: "var(--muted)", fontSize: 12 }}>Selected highlights</div>
          </div>

          <div className="timeline">
            {TIMELINE.map((it, idx) => (
              <div key={idx} className="timeline-item fade-up" style={{ alignItems: "flex-start" }}>
                <div style={{ width: 90, textAlign: "right", color: "var(--muted)", fontSize: 13 }}>
                  <div style={{ fontWeight: 800 }}>{it.date}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 12 }}>
                    <div className="timeline-dot" />
                    <div>
                      <div style={{ fontWeight: 800 }}>{it.title}</div>
                      <div style={{ color: "var(--muted)", marginTop: 6 }}>{it.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 10 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <FaCheckCircle color="#06b6d4" />
                <div style={{ color: "var(--muted)" }}>Built multiple production Apps and sites with a focus on UX and performance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contact Section */
function ContactSection() {
  return (
    <section className="section" id="contact" role="region" aria-label="Contact">
      <div className="pixel-bg" />
      <div className="container fade-up" style={{ alignItems: "start" }}>
        <div className="left-card">
          <div className="section-heading"><div className="dot" /> <div>Get in touch</div></div>
          <p className="small" style={{ marginTop: 8 }}>
            I’m available for freelance and contract work. I respond quickly to messages and value clear project briefs.
          </p>

          <div style={{ marginTop: 14 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <FaEnvelope /> <div style={{ fontWeight: 700 }}>abhaysengar3250@gmail.com</div>
            </div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <FaMapMarkerAlt /> <div style={{ fontWeight: 700 }}>Pune, India</div>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <a className="cta-btn" href="mailto:abhaysengar3250@gmail.com">Email Me</a>
          </div>
        </div>

        <div className="right-card contact-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
            <div className="section-heading"><div className="dot" /> <div>Message</div></div>
            <div style={{ color: "var(--muted)", fontSize: 12 }}>I'll get back within 48 hours</div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("This demo form is not wired to a server."); }} style={{ marginTop: 8 }}>
            <div className="form-row">
              <input className="form-input" name="name" placeholder="Your name" required />
              <input className="form-input" name="email" type="email" placeholder="Email" required />
            </div>
            <div style={{ marginBottom: 12 }}>
              <input className="form-input" name="subject" placeholder="Subject" />
            </div>
            <div style={{ marginBottom: 12 }}>
              <textarea className="form-area" name="message" placeholder="Tell me about your project..." required />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="cta-btn" type="submit">Send message</button>
              <button className="cta-outline" type="button" onClick={() => { alert("Demo reset"); }}>Reset</button>
            </div>
          </form>

          <div style={{ marginTop: 18 }}>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>Also find me on</div>
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <a className="pixel-tag" href="https://github.com/AbhaySingh20021"><FaGithub /></a>
              <a className="pixel-tag" href="https://www.linkedin.com/in/abhay-singh-77688b1bb/"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div className="logo-badge" style={{ width: 44, height: 44, borderRadius: 10 }}>AS</div>
            <div>
              <div style={{ fontWeight: 800 }}>Abhay Singh</div>
              <div style={{ fontSize: 13, color: "var(--muted)" }}>Full stack Web Developer</div>
            </div>
          </div>

          <div style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Abhay Singh — Built with React
          </div>
        </div>
      </div>
    </footer>
  );
}



/* Main App */
function App() {
  return (
    <div className="app" role="main">
      <SeaAnemoneBackground />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}

/* Mount to DOM */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

