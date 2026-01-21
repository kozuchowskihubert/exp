import { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('mission');

  const skills = [
    { name: 'Azure', color: '#0072C6' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Kubernetes', color: '#326ce5' },
    { name: 'Terraform', color: '#5835CC' },
    { name: 'React', color: '#61DAFB' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3670A0' },
    { name: 'DevOps', color: '#bc13fe' }
  ];

  const experience = [
    {
      role: "Identity & Access Management Specialist",
      company: "Accenture",
      period: "2018.11 – 2019.12",
      color: "var(--neon-blue)",
      description: "Operated within a high-velocity enterprise environment managing identity infrastructure for over 500,000 users. Led automation initiatives to reduce manual toil and improve system reliability.",
      achievements: [
        "Orchestrated Active Directory infrastructure management for global enterprise clients.",
        "Engineered automated health checks and monitoring solutions using PowerShell and SCOM.",
        "Administered complex Multi-Factor Authentication (MFA) systems including Symantec VIP and Azure MFA.",
        "Streamlined user provisioning workflows, reducing onboarding time by 40%."
      ]
    },
    {
      role: "IT Specialist",
      company: "Wieża s.c.",
      period: "2017.01 – 2018.10",
      color: "var(--neon-purple)",
      description: "Provided end-to-end infrastructure support and network engineering for MSP clients. Focused on virtualization and secure network design.",
      achievements: [
        "Designed and deployed secure LAN/VLAN architectures using Cisco and MikroTik equipment.",
        "Managed Hyper-V virtualization clusters and implemented Veeam Backup & Replication strategies.",
        "Resolved critical hardware and software incidents with strict SLA adherence.",
        "Optimized Windows Server environments for performance and security compliance."
      ]
    }
  ];

  const certifications = [
    { name: "IBM Applied DevOps Engineering", issuer: "IBM", date: "2024.02", id: "DEV-IBM-001" },
    { name: "Meta Front-End Developer", issuer: "Meta", date: "2024.02", id: "META-FE-2024" },
    { name: "DevOps on AWS Specialization", issuer: "AWS", date: "2023", id: "AWS-DOP-PRO" },
    { name: "Microsoft Azure Data Engineering", issuer: "Microsoft", date: "2023.02", id: "AZ-203" },
    { name: "Docker, Kubernetes and OpenShift", issuer: "IBM", date: "2023.12", id: "IB-CONT-01" },
    { name: "App Dev using Microservices & Serverless", issuer: "IBM", date: "2023.12", id: "IBM-SERV-01" },
    { name: "Reliable Google Cloud Infrastructure", issuer: "Google Cloud", date: "2021.06", id: "GCP-SRE-01" },
    { name: "Site Reliability Engineering (SRE) Foundation", issuer: "DevOps Institute", date: "2021", id: "SRE-F-01" },
    { name: "CCNA Routing and Switching", issuer: "Cisco", date: "2017", id: "CSCO-1293" }
  ];

  return (
    <div className="app-container">
      {/* HUD Header */}
      <header style={{
        padding: '20px',
        borderBottom: '1px solid var(--glass-border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(5,5,5,0.8)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--neon-blue)' }}>
          HAOS<span style={{ color: 'var(--neon-purple)' }}>_SYSTEMS</span>
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#666' }}>
          SYS.STATUS: <span style={{ color: '#0f0' }}>ONLINE</span>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 20px',
        background: 'radial-gradient(circle at center, rgba(188, 19, 254, 0.1) 0%, transparent 60%)'
      }}>
        <h1 className="glitch" style={{ marginBottom: '1rem' }}>HUBERT KOZUCHOWSKI</h1>
        <h2 style={{ color: 'var(--neon-blue)', fontSize: '1.5rem', fontWeight: 300 }}>
          DEVOPS ENGINEER | CLOUD ARCHITECT | MUSIC PRODUCER
        </h2>
        <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.2rem', color: '#ccc' }}>
          "Bridging the gap between reliable infrastructure and creative chaos."
        </p>

        <div style={{ display: 'flex', gap: '20px', marginTop: '2rem' }}>
          <a href="#projects" onClick={(e) => { e.preventDefault(); setActiveTab('flight_deck'); }} style={{
            padding: '10px 30px',
            background: 'var(--neon-blue)',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            boxShadow: '0 0 15px var(--neon-blue)',
            cursor: 'pointer'
          }}>
            Explore Systems
          </a>
          <a href="https://github.com/kozuchowskihubert" target="_blank" style={{
            padding: '10px 30px',
            border: '1px solid var(--neon-purple)',
            color: 'var(--neon-purple)',
            fontWeight: 'bold',
            borderRadius: '2px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            GitHub Access
          </a>
        </div>
      </section>

      {/* Main Interface */}
      <main className="container" style={{ paddingBottom: '100px' }}>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: '40px', borderBottom: '1px solid var(--glass-border)', overflowX: 'auto' }}>
          {['mission', 'flight_deck', 'experience', 'certs'].map(tab => (
            <button key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? 'var(--neon-purple)' : 'var(--glass)',
                color: activeTab === tab ? '#fff' : '#888',
                border: 'none',
                padding: '15px 30px',
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                cursor: 'pointer',
                clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
            >
              {tab.replace('_', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content Modules */}
        <div className="card" style={{ minHeight: '600px' }}>

          {activeTab === 'mission' && (
            <div className="fade-in">
              <h2 className="section-title">Mission Protocol</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h3 style={{ color: 'var(--neon-blue)', marginBottom: '1rem' }}>Engineering</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    I specialize in building resilient, scalable cloud architectures.
                    From <strong>Identity & Access Management</strong> to robust <strong>Infrastructure as Code</strong>,
                    I treat every deployment as a mission-critical operation.
                  </p>
                  <p>
                    <strong>Focus:</strong> Automating the "impossible", securing enterprise environments (Accenture experience),
                    and mastering the Azure/AWS duality.
                  </p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--neon-purple)', marginBottom: '1rem' }}>Synthesis (Music)</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    Under the alias <strong>HAOS</strong>, I pioneer Future House and High Tech Minimal sounds.
                    But I don't just use tools—I build them.
                  </p>
                  <p>
                    My flagship project, the <strong>Flight Beat Engine</strong>, is a testament to the crossover
                    between technical precision and artistic expression.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '4rem' }}>
                <h3 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', marginBottom: '20px' }}>
                  Tech Arsenal
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {skills.map(skill => (
                    <span key={skill.name} style={{
                      padding: '8px 16px',
                      background: `rgba(255,255,255,0.05)`,
                      border: `1px solid ${skill.color}`,
                      color: '#fff',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      boxShadow: `0 0 5px ${skill.color}40`
                    }}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'flight_deck' && (
            <div className="fade-in">
              <h2 className="section-title" style={{ color: 'var(--neon-pink)' }}>Project: Flight Deck</h2>
              <div style={{
                background: 'url(https://images.unsplash.com/photo-1550077432-a2941aa563f9?q=80&w=1964&auto=format&fit=crop) center/cover',
                height: '300px',
                borderRadius: '4px',
                marginBottom: '2rem',
                position: 'relative',
                border: '1px solid var(--neon-pink)'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, #050505 0%, transparent 100%)'
                }}></div>
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px'
                }}>
                  <h3 style={{ fontSize: '2rem', textShadow: '0 0 10px #000' }}>Azure Music Studio</h3>
                  <p style={{ color: 'var(--neon-pink)' }}>STATUS: FLIGHT READY v2.6</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h4>System Core</h4>
                  <ul style={{ listStyle: 'none', marginTop: '10px' }}>
                    <li style={{ marginBottom: '10px' }}>🔹 <strong>Cloud Native DAW</strong> running on Azure App Service</li>
                    <li style={{ marginBottom: '10px' }}>🔹 <strong>Modular Synthesis Engine</strong> for sound design</li>
                    <li style={{ marginBottom: '10px' }}>🔹 <strong>PostgreSQL</strong> backed project storage</li>
                    <li style={{ marginBottom: '10px' }}>🔹 <strong>React</strong> frontend with low-latency audio handling</li>
                  </ul>
                  <div style={{ marginTop: '20px' }}>
                    <a href="https://github.com/kozuchowskihubert/azure-psql-app" target="_blank" className="btn-glitch" style={{
                      padding: '10px 20px',
                      background: 'var(--neon-pink)',
                      color: '#000',
                      fontWeight: 'bold',
                      display: 'inline-block'
                    }}>
                      ACCESS SOURCE CODE
                    </a>
                  </div>
                </div>
                <div>
                  <h4>Transmission</h4>
                  <p style={{ marginBottom: '20px' }}>
                    Catch the latest sonic experiments and devlogs on the HAOS channel.
                  </p>
                  <a href="https://www.youtube.com/@haos_" target="_blank" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#f00',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                  }}>
                    ▶ WATCH ON YOUTUBE
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="fade-in">
              <h2 className="section-title">Log Data (Experience)</h2>
              <div style={{ borderLeft: '2px solid var(--glass-border)', paddingLeft: '30px' }}>
                {experience.map((job, index) => (
                  <div key={index} style={{ marginBottom: '60px', position: 'relative' }}>
                    <div style={{
                      position: 'absolute', left: '-36px', top: '5px',
                      width: '10px', height: '10px', background: job.color, borderRadius: '50%',
                      boxShadow: `0 0 10px ${job.color}`
                    }}></div>
                    <h3 style={{ color: '#fff', fontSize: '1.4rem' }}>{job.role}</h3>
                    <div style={{ color: job.color, fontSize: '0.9rem', marginBottom: '10px', fontWeight: 'bold' }}>
                      {job.company.toUpperCase()} | {job.period}
                    </div>
                    <p style={{ color: '#ccc', marginBottom: '15px', fontStyle: 'italic' }}>
                      {job.description}
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#bbb' }}>
                      {job.achievements.map((ach, i) => (
                        <li key={i} style={{ marginBottom: '5px' }}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'certs' && (
            <div className="fade-in">
              <h2 className="section-title">Clearance Levels (Certifications)</h2>
              <p style={{ color: '#888', marginBottom: '20px', fontSize: '0.9rem' }}>
                verified_credentials_v2.json | STATUS: COMPLIANT
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.02)',
                    padding: '20px',
                    border: '1px solid var(--glass-border)',
                    borderLeft: `3px solid ${i % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-purple)'}`,
                    transition: 'all 0.3s'
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.7rem', color: '#888' }}>ISSUER: {cert.issuer}</span>
                      <span style={{ fontSize: '0.7rem', color: '#666' }}>{cert.date}</span>
                    </div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '10px' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--neon-blue)' }}>
                      ID: {cert.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '20px',
        color: '#666',
        fontSize: '0.8rem',
        borderTop: '1px solid var(--glass-border)'
      }}>
        HAOS_SYSTEMS © 2026 | TERMINAL SESSION ID: {Math.floor(Math.random() * 999999)}
      </footer>
    </div>
  );
}

export default App;
