'use client'
import Link from 'next/link'
import { Calculator, ShieldAlert, HeartPulse, HardHat, FileText, PiggyBank, BookOpen } from 'lucide-react'

export default function Previdencia() {
  const articles = [
    {
      title: "Abono de Permanência",
      desc: "Você já cumpriu os requisitos para se aposentar? Saiba como parar de descontar a previdência e receber o abono.",
      icon: <PiggyBank size={24} color="#38a169" />,
      link: "/artigos/abono-permanencia"
    },
    {
      title: "Aposentadoria Especial (RPPS)",
      desc: "Saiba como ficou a aposentadoria especial pós-reforma e a regra de transição para quem já estava no sistema.",
      icon: <ShieldAlert size={24} color="#2b6cb0" />,
      link: "/artigos/aposentadoria-especial-rpps"
    },
    {
      title: "Insalubridade e Periculosidade",
      desc: "Saiba como requerer laudos técnicos e garantir seus direitos previdenciários e adicionais na folha.",
      icon: <HardHat size={24} color="#d69e2e" />,
      link: "/artigos/insalubridade-periculosidade"
    },
    {
      title: "Aposentadoria por Invalidez",
      desc: "Como funciona o cálculo proporcional ou integral após a Reforma da Previdência. O que é doença grave?",
      icon: <HeartPulse size={24} color="#e53e3e" />,
      link: "/artigos/aposentadoria-invalidez-reforma-calculo"
    },
    {
      title: "Averbação de Tempo (CTC)",
      desc: "Trabalhou na iniciativa privada? Aprenda como levar seu tempo do INSS para o serviço público.",
      icon: <FileText size={24} color="#4a5568" />,
      link: "/artigos/averbacao-tempo-servico-inss-ctc"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #234e52 0%, #319795 100%)', color: 'white', padding: '6rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.15, backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <PiggyBank size={40} color="#68d391" />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.1 }}>
            Previdência & <span style={{ color: '#68d391' }}>Saída</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
            Planeje seu futuro com segurança. Entenda as novas regras do RPPS, INSS, abono de permanência, aposentadoria especial e averbação de tempo de contribuição.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {articles.map((item, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white' }}>
              <div style={{ background: '#f0fff4', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid #c6f6d5' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '2rem', flexGrow: 1, fontSize: '1rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>
              <Link href={item.link} className="btn" style={{ background: '#f7fafc', color: 'var(--primary-color)', border: '1px solid #e2e8f0', textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} /> Ler Artigo Completo
              </Link>
            </div>
          ))}

        </div>

        {/* CTA Banner */}
        <div style={{ marginTop: '5rem', background: 'white', borderRadius: '20px', padding: '3rem', border: '2px solid #38a169', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', boxShadow: '0 20px 25px -5px rgba(56,161,105,0.1)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Calculator size={24} color="#38a169" />
              <span style={{ fontWeight: 'bold', color: '#38a169', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Ferramenta Gratuita</span>
            </div>
            <h3 style={{ fontSize: '2rem', color: '#234e52', marginBottom: '1rem', fontWeight: 800 }}>Já posso me aposentar?</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>Não fique na dúvida. Use nossa calculadora online gratuita para simular seu tempo de contribuição e descobrir se você já tem direito ao abono de permanência.</p>
          </div>
          <Link href="/ferramentas/calculadora-aposentadoria" className="btn" style={{ background: '#38a169', color: 'white', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Fazer Simulação Agora
          </Link>
        </div>
      </section>

    </div>
  )
}
