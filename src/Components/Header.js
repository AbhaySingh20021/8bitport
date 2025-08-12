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
  
  
  


export default function Header() {
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