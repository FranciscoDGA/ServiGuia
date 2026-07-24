'use client'
import Link from 'next/link'
import { FileText, Calculator, Download, Settings, Wrench } from 'lucide-react'

export default function Ferramentas() {
  const tools = [
    {
      title: "Gerador de Requerimentos (PDF)",
      desc: "Preencha seus dados online e gere instantaneamente um requerimento administrativo formal em PDF pronto para imprimir, assinar e protocolar.",
      icon: <FileText size={32} color="#2b6cb0" />,
      link: "/ferramentas/gerador-requerimento",
      btnText: "Acessar Gerador",
      color: "#ebf8ff",
      iconColor: "#3182ce"
    },
    {
      title: "Calculadora de Aposentadoria",
      desc: "Descubra na hora se você já tem direito ao Abono de Permanência ou se já fechou os requisitos para se aposentar pelas novas regras.",
      icon: <Calculator size={32} color="#38a169" />,
      link: "/ferramentas/calculadora-aposentadoria",
      btnText: "Fazer Simulação",
      color: "#f0fff4",
      iconColor: "#38a169"
    },
    {
      title: "Modelos Grátis (Word)",
      desc: "Baixe 2 arquivos totalmente gratuitos e editáveis para você testar. O primeiro passo para conhecer a qualidade do nosso Kit Premium.",
      icon: <Download size={32} color="#d69e2e" />,
      link: "/ferramentas/amostra-gratis",
      btnText: "Baixar Amostra",
      color: "#fffff0",
      iconColor: "#d69e2e"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', color: 'white', padding: '6rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Wrench size={40} color="#a0aec0" />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.1 }}>
            Ferramentas <span style={{ color: '#ecc94b' }}>Administrativas</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
            Automatize seus cálculos e crie requerimentos perfeitos em segundos. Nossas calculadoras e geradores são 100% gratuitos para ajudar você a não depender do RH.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          
          {tools.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', padding: '2.5rem', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', border: '1px solid #e2e8f0', transition: 'transform 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
              <div style={{ background: item.color, width: '70px', height: '70px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', flexGrow: 1, fontSize: '1.1rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
              <Link href={item.link} className="btn" style={{ background: item.iconColor, color: 'white', textAlign: 'center', width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                {item.btnText}
              </Link>
            </div>
          ))}

        </div>
      </section>

    </div>
  )
}
