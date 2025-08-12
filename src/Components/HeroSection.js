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

  import profilePic from "../Images/Profile.png";
  import { useState, useEffect } from "react";
  import ScrollAnimationWrapper from "./useScrollAnimations";


  
 



  function TypingHeading({ text = "", speed = 100 }) {
    const [displayedText, setDisplayedText] = useState("");
  
    useEffect(() => {
      if (typeof text !== "string" || text.length === 0) {
        setDisplayedText("");
        return;
      }
  
      let index = 0;
      setDisplayedText(""); // reset before typing
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);
  
      return () => clearInterval(interval);
    }, [text, speed]);
  
    return <h1 className="section-heading subheading">{displayedText}</h1>;
  }
  
  





export default function HeroSection() {
   

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
  
            <p className="hero-sub subheading ">I build beautiful front-end experiences, modern web apps, and secure feature integrations. I focus on performance, accessibility and polished UI.</p>
  
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
          

            <div className="avatar">
                    <img src={profilePic} alt="Abhay Singh" className="avatar-img" />
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "var(--muted)", fontSize: 13 }}>Full-Stack Developer</div>
            </div>
  
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <a className="pixel-tag" href="https://github.com/AbhaySingh20021"><FaGithub /></a>
              <a className="pixel-tag" href="https://www.linkedin.com/in/abhay-singh-77688b1bb/"><FaLinkedin /></a>
              <a className="pixel-tag" href="mailto:abhaysengar3250@gmail.com"><FaEnvelope /></a>
            </div>
  
            <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 800 }}>12+</div>
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
  
  