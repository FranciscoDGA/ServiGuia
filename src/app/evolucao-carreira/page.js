'use client'
import Link from 'next/link'
import Image from 'next/image'
import { GraduationCap, Briefcase, TrendingUp, BookOpen, AlertTriangle } from 'lucide-react'

export default function EvolucaoCarreira() {
  const articles = [
    {
      title: "Progressão por Títulos",
      desc: "Como usar sua pós-graduação ou mestrado para subir de nível na tabela salarial e garantir aumento na folha.",
      icon: <GraduationCap size={24} color="#2b6cb0" />,
      link: "/artigos/progressao-por-titulos"
    },
    {
      title: "Estágio Probatório",
      desc: "Direitos, deveres e como funciona a estabilidade constitucional na prática. O que pode causar reprovação?",
      icon: <AlertTriangle size={24} color="#2b6cb0" />,
      link: "/artigos/estagio-probatorio"
    },
    {
      title: "Servidor e MEI",
      desc: "Entenda os mitos e verdades sobre a abertura de CNPJ por servidores públicos. O que a lei permite?",
      icon: <Briefcase size={24} color="#2b6cb0" />,
      link: "/artigos/servidor-pode-ter-mei"
    },
    {
      title: "Avaliação de Desempenho",
      desc: "Como funcionam as notas de avaliação e qual o impacto delas na sua progressão horizontal de carreira.",
      icon: <TrendingUp size={24} color="#2b6cb0" />,
      link: "/artigos/avaliacao-desempenho-progressao-carreira"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', color: 'white', padding: '6rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <TrendingUp size={40} color="#ecc94b" />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.1 }}>
            Evolução & <span style={{ color: '#ecc94b' }}>Carreira</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
            Estratégias legais para acelerar sua progressão funcional, avaliações de desempenho, uso de pós-graduação e as regras do estágio probatório. Suba de nível com segurança.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {articles.map((item, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white' }}>
              <div style={{ background: '#ebf8ff', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
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
        <div style={{ marginTop: '5rem', background: 'linear-gradient(to right, #1a202c, #2d3748)', borderRadius: '20px', padding: '3rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '2rem', color: '#ecc94b', marginBottom: '1rem', fontWeight: 800 }}>Dê um salto na sua carreira.</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Conheça nossos cursos de Pós-Graduação EaD voltados para servidores públicos. Reconhecidos pelo MEC e ideais para a sua progressão salarial.</p>
          </div>
          <Link href="/cursos-parceiros" className="btn" style={{ background: '#ecc94b', color: '#1a202c', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Ver Cursos Recomendados
          </Link>
        </div>
      </section>

    </div>
  )
}
