// Imports
import { FaReact, FaNodeJs, FaJsSquare, FaJava, FaDocker, FaLaptopCode } from "react-icons/fa";
import { 
  SiSolidity, 
  SiMongodb, 
  SiTailwindcss, 
  SiRedux, 
  SiMysql, 
  SiExpress, 
  SiNextdotjs, 
  SiGraphql, 
  SiTypescript, 
  SiPostgresql, 
  SiDatabricks,  
  SiGithubactions, 
  SiFirebase 
} from "react-icons/si";

// Skills Array
const SKILLS = [
  { name: "React.js", icon: <FaReact size={28} color="#61dafb" /> },
  { name: "Node.js", icon: <FaNodeJs size={28} color="#8cc84b" /> },
  { name: "MongoDB", icon: <SiMongodb size={28} color="#4db33d" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={28} color="#38bdf8" /> },
  { name: "Redux", icon: <SiRedux size={28} color="#764abc" /> },
  { name: "MySQL", icon: <SiMysql size={28} color="#00758f" /> },
  { name: "Express.js", icon: <SiExpress size={28} color="#000" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} color="#111" /> },
  { name: "JavaScript", icon: <FaJsSquare size={28} color="#f7df1e" /> },

  // Added specific technical skills
  { name: "REST API Development", icon: <FaLaptopCode size={28} color="#0db7ed" /> },
  { name: "GraphQL", icon: <SiGraphql size={28} color="#e535ab" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} color="#3178c6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={28} color="#336791" /> },
  { name: "Database Management", icon: <SiDatabricks size={28} color="#ff6f00" /> },
  { name: "Java", icon: <FaJava size={28} color="#007396" /> },
  { name: "Docker", icon: <FaDocker size={28} color="#2496ed" /> },
  { name: "CI/CD Pipelines", icon: <SiGithubactions size={28} color="#2088ff" /> },
  { name: "Firebase", icon: <SiFirebase size={28} color="#ffca28" /> }
];



export default function SkillsSection() {
    
      
  
    return (
      <section className="section" id="skills" role="region" aria-label="Skills">
        <div className="container fade-up" style={{ alignItems: "start" }}>
          <div className="left-card">
            <div className="section-heading">
              <div className="dot" />
              <div>Expertise</div>
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