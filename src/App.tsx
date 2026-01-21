import { useState } from 'react';
import './index.css';
import { certData } from './certData';

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
      role: "DevOps Engineer & Platform Engineer",
      company: "Procter & Gamble",
      period: "2023.07 – Present",
      color: "var(--neon-blue)",
      description: "Managing over 600+ web/mobile sites on Azure. Leading centralized pipeline initiatives and enforcing security compliance across the enterprise.",
      achievements: [
        "Implemented Centralized Pipelines using GitHub Actions, improving deployment standardization for 600+ sites.",
        "Managed Azure infrastructure (App Service, Kubernetes, SQL) and Azure DevOps repositories.",
        "Integrated security/accessibility testing (SNYK) into CI/CD workflows, reducing vulnerabilities by 60%.",
        "Developed automated Next.js deployment strategies and monitoring dashboards (Grafana, Prometheus)."
      ]
    },
    {
      role: "IT Manager & Site Reliability Engineer",
      company: "Procter & Gamble",
      period: "2020.11 – 2023.06",
      color: "var(--neon-purple)",
      description: "Oversaw global website operations, automated provisioning, and SRE best practices. Focused on reliability, observability, and SLA compliance.",
      achievements: [
        "Automated website provisioning processes, significantly reducing manual setup time.",
        "Introduced observability models (Log Analysis, Tracing) for WordPress platforms.",
        "Managed high-availability environments and auto-scaling configurations.",
        "Conducted regular outage reviews and bi-weekly CAB meetings to ensure platform stability."
      ]
    },
    {
      role: "Identity & Access Management Engineering Specialist",
      company: "Accenture",
      period: "2019.12 – 2020.10",
      color: "var(--neon-pink)",
      description: "Focused on advanced automation of IAM processes and PKI infrastructure. developed custom tools to streamline administrative tasks.",
      achievements: [
        "Developed bespoke PowerShell automation tools with GUI for Active Directory management.",
        "Automated SSL certificate approval/rejection workflows via REST API.",
        "Designed and monitored Public Key Infrastructure (PKI) and Hardware Security Modules (HSM).",
        "Created complex SQL-based reports for audit and compliance."
      ]
    },
    {
      role: "Identity & Access Management Specialist",
      company: "Accenture",
      period: "2018.11 – 2019.12",
      color: "var(--neon-blue)",
      description: "Administered enterprise identity infrastructure for 500k+ users. Managed global AD domains and supported MFA solutions.",
      achievements: [
        "Managed Active Directory Domain Services for a global client (500k+ users, 1M+ devices).",
        "Administered MFA solutions (Symantec VIP, Azure MFA) and Office 365/Exchange environments.",
        "Automated SCOM agent health checks and remediation using PowerShell.",
        "Provided 2nd line support for IAM incidents in a 'follow the sun' model."
      ]
    },
    {
      role: "IT Specialist",
      company: "Wieża s.c.",
      period: "2017.01 – 2018.10",
      color: "var(--neon-purple)",
      description: "Delivered comprehensive IT support and infrastructure engineering for MSP clients.",
      achievements: [
        "Designed secure LAN/VLAN networks using Cisco, MikroTik, and Ubiquiti gear.",
        "Deployed and managed virtualization clusters (Hyper-V) and backup systems (Veeam, Altaro).",
        "Administered Windows Server environments (2008-2016) and Active Directory.",
        "Provided remote and on-site support for ERP software and workstation hardware."
      ]
    }
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
                    <a href="https://haos-fm.vercel.app" target="_blank" className="btn-glitch" style={{
                      padding: '10px 20px',
                      background: 'var(--neon-blue)',
                      color: '#000',
                      fontWeight: 'bold',
                      display: 'inline-block',
                      marginLeft: '15px',
                      textDecoration: 'none'
                    }}>
                      LAUNCH SYSTEM
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
                verified_credentials_v2.json | STATUS: COMPLIANT | TOTAL RECORDS: {certData.reduce((acc, cat) => acc + cat.items.length, 0)}
              </p>

              {certData.map((category, catIndex) => (
                <div key={catIndex} style={{ marginBottom: '40px' }}>
                  <h3 style={{
                    color: 'var(--neon-blue)',
                    borderBottom: '1px solid var(--glass-border)',
                    paddingBottom: '10px',
                    marginBottom: '20px'
                  }}>
                    {category.category.toUpperCase()}
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {category.items.map((cert, i) => (
                      <div key={i} style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '15px',
                        border: '1px solid var(--glass-border)',
                        borderLeft: `3px solid ${i % 2 === 0 ? 'var(--neon-blue)' : 'var(--neon-purple)'}`,
                        transition: 'all 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
                      >
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                            <span style={{ fontSize: '0.7rem', color: '#888' }}>{cert.date}</span>
                          </div>
                          <div style={{ fontWeight: 'bold', fontSize: '1rem', marginBottom: '10px', lineHeight: '1.2' }}>{cert.name}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          <a href={`/certs/${cert.file}`} target="_blank" className="btn-glitch" style={{ fontSize: '0.7rem', padding: '5px 10px', textTransform: 'uppercase' }}>
                            View Cert
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
