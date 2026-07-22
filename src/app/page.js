'use client'
import Link from 'next/link'
import { Search, Download, ShieldCheck, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ padding: '6rem 2rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>
            Descomplique sua Carreira no Serviço Público
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.6' }}>
            Descomplique seus direitos, calcule sua evolução de carreira e acesse modelos de requerimentos prontos para o RH do seu município ou estado.
          </p>
          
          {/* Barra de Busca Inteligente */}
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', maxWidth: '600px', margin: '0 auto 3rem', backgroundColor: 'var(--card-bg)', padding: '0.5rem', borderRadius: '50px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)' }}>
            <Search color="var(--text-light)" style={{ marginLeft: '1rem', alignSelf: 'center' }} />
            <input 
              type="text" 
              placeholder="Qual a sua dúvida? (Ex: Licença prêmio, triênio, PAD...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ flex: 1, padding: '1rem', border: 'none', background: 'transparent', color: 'var(--text-color)', fontSize: '1.1rem', outline: 'none' }}
            />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: '50px', padding: '0.8rem 2rem' }}>Buscar</button>
          </form>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ferramentas/calculadora-aposentadoria" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
              Calcular Aposentadoria
            </Link>
            <Link href="/ferramentas/gerador-requerimento" className="btn btn-accent">
              Gerar Requerimento Grátis
            </Link>
          </div>
        </div>
      </section>

      {/* Categorias Principais */}
      <section className="container" style={{ padding: '5rem 2rem' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2rem' }}>Acesse Nossos Guias</h2>
        <div className="card-grid">
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <TrendingUp color="var(--primary-color)" size={40} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Evolução & Carreira</h3>
            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Descubra como acelerar sua progressão funcional. Saiba tudo sobre avaliação de desempenho, pós-graduação e adicionais.</p>
            <Link href="/evolucao-carreira" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Acessar Guias</Link>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <ShieldCheck color="var(--primary-color)" size={40} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Direitos & Licenças</h3>
            <p style={{ flex: 1, marginBottom: '1.5rem' }}>Aprenda a requerer licença-prêmio, auxílios, abonos, além de se defender em PADs e sindicâncias de forma correta.</p>
            <Link href="/direitos-licencas" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Acessar Guias</Link>
          </div>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--primary-color)', color: 'white' }}>
            <Download color="white" size={40} style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Modelos Prontos</h3>
            <p style={{ flex: 1, marginBottom: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>Cansado de ter direitos negados no RH? Acesse nosso Kit de Requerimentos Administrativos redigidos por especialistas.</p>
            <Link href="/produtos/kit-requerimentos" className="btn btn-accent" style={{ width: '100%', textAlign: 'center' }}>Conhecer o Kit Premium</Link>
          </div>
        </div>
      </section>

      {/* Banner Captura de Leads (Isca Digital) */}
      <section style={{ backgroundColor: '#edf2f7', padding: '4rem 2rem', color: '#2d3748' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 400px', maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a202c' }}>Precisa entrar com um pedido no RH?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', opacity: 0.9 }}>
              Não corra o risco de ter seu requerimento indeferido por erros bobos. Baixe gratuitamente nosso e-book com os <strong>5 Requerimentos Essenciais</strong> que todo servidor deve ter na gaveta.
            </p>
          </div>
          <div style={{ flex: '1 1 300px', maxWidth: '400px', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', textAlign: 'center', color: 'var(--primary-color)' }}>Baixar Kit Gratuito</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Lead Capturado! Arquivo enviado para o e-mail.') }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Seu Nome" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              <input type="email" placeholder="Seu melhor E-mail" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              <input type="tel" placeholder="WhatsApp (DDD)" required style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', outline: 'none' }} />
              <button type="submit" className="btn btn-primary" style={{ padding: '1rem', fontWeight: 'bold' }}>Quero Baixar Grátis</button>
            </form>
          </div>
        </div>
      </section>

      {/* Banner Assessoria Jurídica B2B */}
      <section style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>⚖️ Teve um direito negado ou precisa de defesa em PAD?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
            Conte com nossa rede nacional de advogados parceiros especialistas em Direito Administrativo para analisar seu caso.
          </p>
          <Link href="/assessoria-juridica" className="btn btn-primary" style={{ backgroundColor: '#e53e3e', border: 'none', padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Solicitar Análise de Especialista
          </Link>
        </div>
      </section>
    </div>
  )
}
