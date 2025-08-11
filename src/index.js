// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from './Animation'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'

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


/* Inject styles into head */


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
    <section className="section" id="about" role="region" aria-label="Hero">
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
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: myRef.current
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>
    <div className="app" role="main">
      <MyComponent />
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <TimelineSection />
      <ContactSection />
      
      <Footer />
    </div>
  </div>
}

/* Mount to DOM */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

