import React from 'react'

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Segoe UI', sans-serif", background: 'linear-gradient(135deg, #0a192f, #112240, #1a365d)', minHeight: '100vh', color: '#fff' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', padding: '4rem 1rem 2rem' }}>
        {/* DevOps Icon */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ marginBottom: '1.5rem' }}>
          <circle cx="60" cy="60" r="55" stroke="#00d4ff" strokeWidth="3" fill="none" />
          <path d="M60 20 L60 100 M20 60 L100 60" stroke="#00d4ff" strokeWidth="2" opacity="0.3" />
          <text x="60" y="68" textAnchor="middle" fill="#00d4ff" fontSize="28" fontWeight="bold">∞</text>
        </svg>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0', background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          DevOps Engineer
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '600px', margin: '0 auto' }}>
          CI/CD • Automation • Cloud Infrastructure • Containerization
        </p>
      </div>

      {/* Cards Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <Card icon="🐳" title="Docker" desc="Containerized deployments" color="#0db7ed" />
        <Card icon="⚙️" title="CI/CD" desc="Automated pipelines" color="#f5a623" />
        <Card icon="☁️" title="AWS Cloud" desc="Scalable infrastructure" color="#ff9900" />
        <Card icon="📊" title="Monitoring" desc="Observability & alerts" color="#e74c3c" />
        <Card icon="🔒" title="Security" desc="DevSecOps practices" color="#2ecc71" />
        <Card icon="🚀" title="Kubernetes" desc="Orchestration at scale" color="#326ce5" />
      </div>

      {/* Footer */}
      <p style={{ textAlign: 'center', color: '#555', padding: '2rem', fontSize: '0.85rem' }}>
        Built with React + Vite | Deployed via GitHub Actions
      </p>
    </div>
  )
}

function Card({ icon, title, desc, color }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)', border: `1px solid ${hovered ? color : color + '33'}`, borderRadius: '12px', padding: '1.5rem', width: '240px', textAlign: 'center', backdropFilter: 'blur(10px)', transform: hovered ? 'translateY(-8px) scale(1.02)' : 'none', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: hovered ? `0 10px 30px ${color}33` : 'none' }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <h3 style={{ margin: '0.3rem 0', color }}>{title}</h3>
      <p style={{ margin: 0, color: '#999', fontSize: '0.9rem' }}>{desc}</p>
    </div>
  )
}
