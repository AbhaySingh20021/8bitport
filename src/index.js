// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import MyComponent from './Animation'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import DOTS from 'vanta/dist/vanta.dots.min'
import SkillsSection from "./Components/Skill";
import Header from "./Components/Header"; 
import HeroSection from "./Components/HeroSection"; 
import ProjectsSection from "./Components/Projects";


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






const TIMELINE = [
  { date: "2024", title: "Application Engineer", desc: "Worked on several React/Tailwind projects ranging from landing pages to complex dashboards." },
  { date: "2023-2024", title: "Web Developer", desc: "Intensive projects in full-stack JS and Cloud services." },
  { date: "2019-2023", title: "B.Tech Computer Science", desc: "Graduated from Symbiosis Institute of Technology, Pune." },
];

/* ===========================
   Small UI components
   =========================== */



/* Hero Section */





// Example project data, replace with your actual projects



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
      <SkillsSection/>
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

