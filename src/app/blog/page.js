import { getSortedArticlesData } from '@/lib/markdown'
import Link from 'next/link'
import { BookOpen, Sparkles, Clock, Calendar, ArrowRight, Search, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Artigos & Guias para o Servidor Público | ServGuia',
  description: 'Acervo completo de artigos, jurisprudência do STF/STJ, modelos de requerimentos e análises sobre previdência (RPPS), PAD, licenças e progressão funcional.'
}

export default async function Blog({ searchParams }) {
  const resolvedParams = await searchParams
  const q = resolvedParams?.q?.toLowerCase() || ''
  
  let articles = getSortedArticlesData()
  
  if (q) {
    articles = articles.filter(article => 
      article.title.toLowerCase().includes(q) || 
      article.description.toLowerCase().includes(q)
    )
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #102a45 60%, #1a365d 100%)', 
        color: 'white', 
        padding: '5rem 1.5rem 6rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236,201,75,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: 'rgba(236,201,75,0.12)', 
            border: '1px solid rgba(236,201,75,0.3)', 
            padding: '0.45rem 1.2rem', 
            borderRadius: '50px', 
            marginBottom: '1.5rem',
            color: '#ecc94b',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <Sparkles size={16} /> ACERVO ESTATUTÁRIO & PRÁTICO DO SERVIDOR PÚBLICO
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1.2rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Artigos, Guias & <span style={{ color: '#ecc94b', textDecoration: 'underline', textDecorationColor: 'rgba(236,201,75,0.4)', textUnderlineOffset: '6px' }}>Jurisprudência</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            {q ? `Exibindo resultados para a pesquisa: "${q}"` : 'Guias aprofundados, decisões vinculantes do STF e STJ, teses de defesa em PAD, regras de previdência e estratégias de evolução de carreira.'}
          </p>

          {/* Form de Busca */}
          <form action="/blog" method="GET" style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '0.5rem', background: 'white', padding: '0.4rem', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1rem', flexGrow: 1 }}>
              <Search size={18} color="#718096" />
              <input 
                type="text" 
                name="q" 
                defaultValue={q} 
                placeholder="Pesquisar artigo (ex: aposentadoria, PAD, CTC, licença)..." 
                style={{ width: '100%', border: 'none', outline: 'none', padding: '0.6rem 0.8rem', fontSize: '0.95rem', color: '#1a202c' }}
              />
            </div>
            <button type="submit" className="btn" style={{ background: '#09182a', color: 'white', border: 'none', borderRadius: '50px', padding: '0.6rem 1.4rem', fontWeight: 600 }}>
              Buscar
            </button>
          </form>
        </div>
      </section>

      {/* Main Content: Lista de Artigos */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
        
        {/* Barra Informativa */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '1.2rem 2rem', 
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.06)', 
          border: '1px solid #e2e8f0', 
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ background: '#ebf8ff', padding: '0.6rem', borderRadius: '10px' }}>
              <BookOpen size={20} color="#2b6cb0" />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Conteúdo Jurídico e Administrativo Verificado</strong>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Artigos atualizados com a legislação vigente e regras da EC 103/2019.</span>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2b6cb0', backgroundColor: '#ebf8ff', padding: '0.35rem 0.8rem', borderRadius: '20px' }}>
            {articles.length} Artigos Encontrados
          </span>
        </div>

        {/* Grid de Artigos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {articles.map((article) => (
            <div 
              key={article.slug} 
              style={{ 
                background: 'white', 
                borderRadius: '16px', 
                border: '1px solid #e2e8f0', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
            >
              {article.image && (
                <div style={{ width: '100%', height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  {article.category && (
                    <span style={{ 
                      position: 'absolute', 
                      bottom: '12px', 
                      left: '12px', 
                      background: 'rgba(9, 24, 42, 0.85)', 
                      backdropFilter: 'blur(4px)', 
                      color: '#ecc94b', 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      padding: '0.25rem 0.65rem', 
                      borderRadius: '6px' 
                    }}>
                      {article.category}
                    </span>
                  )}
                </div>
              )}
              
              <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                {/* Meta Data */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.82rem', color: '#718096', marginBottom: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={14} color="#a0aec0" /> {new Date(article.date).toLocaleDateString('pt-BR')}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} color="#a0aec0" /> {article.readTime || 5} min de leitura
                  </span>
                </div>

                {/* Título */}
                <Link href={`/artigos/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <h2 style={{ color: 'var(--primary-color)', marginBottom: '0.8rem', fontSize: '1.25rem', lineHeight: 1.35, fontWeight: 700 }}>
                    {article.title}
                  </h2>
                </Link>

                {/* Descrição */}
                <p style={{ color: 'var(--text-light)', marginBottom: '1.8rem', fontSize: '0.92rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {article.description}
                </p>

                {/* Botão */}
                <Link 
                  href={`/artigos/${article.slug}`} 
                  className="btn" 
                  style={{ 
                    background: '#f8fafc', 
                    color: 'var(--primary-color)', 
                    border: '1px solid #cbd5e0', 
                    textAlign: 'center', 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontWeight: 600,
                    padding: '0.75rem 1rem',
                    borderRadius: '10px'
                  }}
                >
                  Ler Artigo Completo <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner Inferior */}
        <div style={{ 
          marginTop: '4rem', 
          background: 'linear-gradient(135deg, #09182a 0%, #1a365d 100%)', 
          borderRadius: '20px', 
          padding: '2.5rem 3rem', 
          color: 'white', 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '2rem',
          border: '1px solid rgba(236,201,75,0.3)',
          boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
        }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236,201,75,0.15)', color: '#ecc94b', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.8rem' }}>
              <ShieldCheck size={16} /> PACOTES DE MODELOS PRONTOS
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
              Precisa protocolar um pedido no RH amanhã?
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
              Acesse nosso Kit de Requerimentos Administrativos em formato Word editável (.docx). Prontos para preencher seu nome, imprimir e protocolar.
            </p>
          </div>
          <Link 
            href="/produtos/kit-requerimentos" 
            className="btn" 
            style={{ 
              background: '#ecc94b', 
              color: '#09182a', 
              padding: '1rem 2rem', 
              fontSize: '1.05rem', 
              fontWeight: 700, 
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 20px rgba(236,201,75,0.3)'
            }}
          >
            Conhecer Kits a partir de R$ 37,90 <ArrowRight size={18} />
          </Link>
        </div>

      </section>

    </div>
  )
}