'use client'
import Link from 'next/link'
import { FileText, ShieldAlert, HeartPulse, Clock, Scale, BookOpen } from 'lucide-react'

export default function DireitosLicencas() {
  const articles = [
    {
      title: "Licença-Prêmio (Assiduidade)",
      desc: "Como requerer, quando é possível converter em dinheiro (pecúnia) e as regras para gozo.",
      icon: <Clock size={24} color="#38a169" />,
      link: "/artigos/guia-licenca-premio-capacitacao"
    },
    {
      title: "Primeiros 10 dias do PAD",
      desc: "O que fazer (e o que NÃO fazer) nos primeiros 10 dias após ser notificado de um Processo Administrativo Disciplinar.",
      icon: <ShieldAlert size={24} color="#e53e3e" />,
      link: "/artigos/primeiros-10-dias-pad"
    },
    {
      title: "Desvio de Função",
      desc: "Você exerce atribuições mais complexas que as do seu cargo de origem? Entenda seus direitos a indenizações.",
      icon: <Scale size={24} color="#2b6cb0" />,
      link: "/artigos/desvio-de-funcao"
    },
    {
      title: "Redução de Jornada (Pais)",
      desc: "Direito garantido pelo STF à redução de jornada para servidores pais de dependentes com deficiência ou neurodivergência.",
      icon: <HeartPulse size={24} color="#d69e2e" />,
      link: "/artigos/reducao-jornada-pais-atipicos"
    },
    {
      title: "Licença para Tratamento de Saúde",
      desc: "Como funciona a perícia médica, prazos para entrega de atestados e regras de prorrogação.",
      icon: <FileText size={24} color="#2b6cb0" />,
      link: "/artigos/licenca-tratamento-saude-pericia"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%)', color: 'white', padding: '6rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url(https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <Scale size={40} color="#63b3ed" />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.1 }}>
            Direitos & <span style={{ color: '#63b3ed' }}>Licenças</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
            O seu guia completo e definitivo sobre licença-prêmio, auxílios, atestados médicos e defesas em processos administrativos disciplinares (PAD). Conheça a lei.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {articles.map((item, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white' }}>
              <div style={{ background: '#f7fafc', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid #e2e8f0' }}>
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
        <div style={{ marginTop: '5rem', background: 'linear-gradient(135deg, #e53e3e, #c53030)', borderRadius: '20px', padding: '3rem', color: 'white', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', boxShadow: '0 20px 25px -5px rgba(229,62,62,0.3)' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <ShieldAlert size={24} color="#fed7d7" />
              <span style={{ fontWeight: 'bold', color: '#fed7d7', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Defesa e Requerimentos</span>
            </div>
            <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem', fontWeight: 800 }}>Não lute contra o RH de mãos vazias.</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Baixe nossos modelos jurídicos prontos (em Word) baseados na jurisprudência do STF. Defesas de PAD, requerimentos de licença e conversões em pecúnia.</p>
          </div>
          <Link href="/produtos/kit-requerimentos" className="btn" style={{ background: 'white', color: '#c53030', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Conhecer Kit Premium
          </Link>
        </div>
      </section>

    </div>
  )
}
