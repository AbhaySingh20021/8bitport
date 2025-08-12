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
  
  
  

  const PROJECTS1 = [
    {
      title: "Cloud Voting System",
      subtitle: "Blockchain · dApp",
      description:
        "A secure, tamper-proof online voting platform leveraging blockchain to ensure transparency, immutability, and accessibility for large-scale elections. Implemented multi-factor authentication and end-to-end encryption for voter privacy.",
      tags: ["Solidity", "React", "Node.js", "Web3.js", "IPFS"],
      role: "Full-stack developer",
      tech: "Solidity, React, Node.js, Web3.js, IPFS, TailwindCSS",
      liveDemo: "https://github.com/AbhaySingh20021/Vote_Block_main",
      source: "https://github.com/AbhaySingh20021/Vote_Block_main",
      timeline: "Jan 2024 – Mar 2024",
      highlights: [
        "Deployed smart contracts on Ethereum testnet",
        "Integrated IPFS for decentralized vote storage",
        "Achieved <1% error rate in simulated large-scale tests"
      ]
    },
    {
      title: "NFT Marketplace",
      subtitle: "Blockchain · Marketplace",
      description:
        "A modern NFT marketplace for artists and collectors to mint, trade, and showcase digital assets. Included auction functionality, lazy minting to reduce gas fees, and an interactive gallery view.",
      tags: ["React", "Ethereum", "Web3.js", "Solidity", "Moralis"],
      role: "Frontend developer",
      tech: "React, Web3.js, Solidity, Moralis, TailwindCSS",
      liveDemo: "https://nftmarketplace.example.com",
      source: "https://github.com/abhay-singh/nft-marketplace",
      timeline: "Nov 2023 – Jan 2024",
      highlights: [
        "Optimized rendering for 1,000+ NFT assets",
        "Integrated wallet authentication via MetaMask",
        "Implemented bidding system with on-chain settlement"
      ]
    },
    {
      title: "Price Scraper",
      subtitle: "Backend · Scraper",
      description:
        "A backend microservice that monitors prices across multiple e-commerce platforms and triggers real-time alerts when price drops are detected. Features an API for third-party integration and a dashboard for analytics.",
      tags: ["Node.js", "Puppeteer", "MongoDB", "Express"],
      role: "Backend developer",
      tech: "Node.js, Puppeteer, MongoDB, Express.js, Chart.js",
      liveDemo: null,
      source: "https://github.com/abhay-singh/price-scraper",
      timeline: "Aug 2023 – Oct 2023",
      highlights: [
        "Reduced scrape time by 40% using headless browser optimizations",
        "Created REST API for partner integration",
        "Added MongoDB aggregation pipeline for trend analysis"
      ]
    },
    {
      title: "Decentralized Storage Drive",
      subtitle: "Blockchain · IPFS",
      description:
        "A decentralized Google Drive alternative using IPFS for storage and Ethereum smart contracts for access control. Supports file versioning and sharing with encrypted access tokens.",
      tags: ["IPFS", "Solidity", "React", "Node.js"],
      role: "Full-stack developer",
      tech: "IPFS, Solidity, React, Node.js, TailwindCSS",
      liveDemo: "https://decentralizeddrive.example.com",
      source: "https://github.com/abhay-singh/decentralized-drive",
      timeline: "May 2023 – Jul 2023",
      highlights: [
        "Encrypted file uploads for end-to-end privacy",
        "Implemented permission-based file access",
        "Handled 500+ concurrent file requests without downtime"
      ]
    },
    {
      title: "Android Expense Tracker",
      subtitle: "Mobile · Finance",
      description:
        "An Android application that helps users track daily expenses, set budgets, and view visual spending analytics. Supports cloud backup and offline mode.",
      tags: ["Kotlin", "Firebase", "RoomDB"],
      role: "Android developer",
      tech: "Kotlin, Firebase, RoomDB, MPAndroidChart",
      liveDemo: null,
      source: "https://github.com/abhay-singh/expense-tracker",
      timeline: "Feb 2023 – Apr 2023",
      highlights: [
        "Integrated Firebase for real-time sync",
        "Added biometric authentication",
        "Designed custom animations for chart transitions"
      ]
    }
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