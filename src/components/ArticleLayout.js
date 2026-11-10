import Link from 'next/link'
import { 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Calendar,
  MessageCircle,
  FileCheck2,
  Sparkles
} from 'lucide-react'

export default function ArticleLayout({ children, title, date, readTime, image, relatedArticles = [], whatsappUrl }) {
  return (
    <article className="article-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.25rem 5rem' }}>
      
      {/* Header do Artigo */}
      <header className="article-header" style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            background: '#ebf8ff', 
            color: '#2b6cb0', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '50px', 
            fontSize: '0.8rem', 
            fontWeight: 700 
          }}>
            <ShieldCheck size={14} /> Revisão Jurídica Verificada
          </span>

          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.35rem', 
            background: '#f0fff4', 
            color: '#22543d', 
            padding: '0.25rem 0.75rem', 
            borderRadius: '50px', 
            fontSize: '0.8rem', 
            fontWeight: 700 
          }}>
            <Sparkles size={14} /> Atualizado CF/88 & STF
          </span>
        </div>

        <h1 className="article-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--primary-color)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
          {title}
        </h1>

        <div className="article-meta" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.2rem', color: '#718096', fontSize: '0.88rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.2rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Calendar size={15} color="#a0aec0" /> Publicado em {new Date(date).toLocaleDateString('pt-BR')}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Clock size={15} color="#a0aec0" /> {readTime || 5} min de leitura
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2b6cb0', fontWeight: 600 }}>
            Por: Dr. Francisco Gomes
          </span>
        </div>
      </header>
      
      {/* Imagem de Capa */}
      {image && (
        <div className="article-image-box" style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
          <img src={image} alt={title} style={{ width: '100%', height: 'auto', maxHeight: '420px', objectFit: 'cover' }} />
        </div>
      )}

      {/* Conteúdo HTML do Markdown */}
      <div className="article-content" style={{ fontSize: '1.08rem', lineHeight: '1.8', color: '#2d3748' }}>
        {children}
      </div>

      {/* Box de Ação 1: Calculadora de Aposentadoria (SEO PageRank Boost) */}
      <div style={{ 
        marginTop: '3.5rem', 
        padding: '2.2rem', 
        backgroundColor: '#ffffff', 
        border: '2px solid #2b6cb0', 
        borderRadius: '16px', 
        boxShadow: '0 10px 25px -5px rgba(43,108,176,0.1)',
        textAlign: 'center' 
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '50%', backgroundColor: '#ebf8ff', color: '#2b6cb0', marginBottom: '1rem' }}>
          <Calculator size={28} />
        </div>
        <h3 style={{ fontSize: '1.45rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800 }}>
          Você sabe exatamente quando vai se aposentar pelo RPPS?
        </h3>
        <p style={{ color: 'var(--text-light)', maxWidth: '640px', margin: '0 auto 1.5rem', fontSize: '0.98rem', lineHeight: '1.6' }}>
          Simule gratuitamente seu tempo restante de contribuição, regras de transição por pontos, pedágio de 100% da EC 103/2019 e redução de 5 anos para professores.
        </p>
        <Link 
          href="/ferramentas/calculadora-aposentadoria" 
          className="btn" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            padding: '0.9rem 1.8rem', 
            fontSize: '1rem', 
            fontWeight: 700, 
            backgroundColor: '#2b6cb0', 
            color: 'white',
            borderRadius: '50px',
            boxShadow: '0 4px 12px rgba(43,108,176,0.25)' 
          }}
        >
          <Calculator size={18} /> Simular Minha Aposentadoria Grátis
        </Link>
      </div>

      {/* Box de Ação 2: Kits de Requerimentos Word (.docx) */}
      <div style={{ 
        marginTop: '2rem', 
        padding: '2rem', 
        background: 'linear-gradient(135deg, #09182a 0%, #1a365d 100%)', 
        borderRadius: '16px', 
        color: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        border: '1px solid rgba(236,201,75,0.3)'
      }}>
        <div style={{ flex: '1 1 450px' }}>
          <span style={{ color: '#ecc94b', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Evite Enrolação no RH
          </span>
          <h4 style={{ fontSize: '1.3rem', color: 'white', margin: '0.3rem 0 0.5rem', fontWeight: 800 }}>
            Precisa protocolar um pedido administrativo formal?
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>
            Tenha em mãos modelos prontos em Word (.docx) fundamentados nas leis estatutárias e decisões do STF.
          </p>
        </div>
        <Link 
          href="/produtos/kit-requerimentos" 
          className="btn" 
          style={{ 
            backgroundColor: '#ecc94b', 
            color: '#09182a', 
            fontWeight: 700, 
            fontSize: '0.95rem', 
            padding: '0.8rem 1.6rem', 
            borderRadius: '50px',
            whiteSpace: 'nowrap'
          }}
        >
          Ver Requerimentos Prontos &rarr;
        </Link>
      </div>

      {/* Box de Suporte Oficial via WhatsApp (Sem link quebrado!) */}
      {whatsappUrl && (
        <div style={{ 
          marginTop: '2rem', 
          padding: '1.8rem 2rem', 
          backgroundColor: '#f0fdf4', 
          border: '1px solid #86efac', 
          borderRadius: '16px', 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '1.5rem' 
        }}>
          <div>
            <h4 style={{ fontSize: '1.15rem', color: '#166534', margin: '0 0 0.3rem', fontWeight: 800 }}>
              Ficou com alguma dúvida sobre o seu caso?
            </h4>
            <p style={{ color: '#15803d', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
              Envie sua mensagem pelo canal oficial de suporte do ServGuia.
            </p>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn" 
            style={{ 
              backgroundColor: '#16a34a', 
              color: 'white', 
              padding: '0.8rem 1.5rem', 
              fontWeight: 700, 
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.92rem'
            }}
          >
            <MessageCircle size={18} /> Tirar Dúvida no WhatsApp
          </a>
        </div>
      )}

      {/* E-E-A-T Author & Review Box (YMYL Compliance para o Googlebot e Avaliadores) */}
      <div className="author-box" style={{ 
        marginTop: '3.5rem', 
        padding: '2rem', 
        backgroundColor: '#ffffff', 
        border: '1px solid #e2e8f0', 
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#09182a', color: '#ecc94b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.1rem', flexShrink: 0 }}>
            FG
          </div>
          <div>
            <h3 style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.15rem', fontWeight: 800 }}>
              Dr. Francisco Gomes
            </h3>
            <span style={{ fontSize: '0.82rem', color: '#718096', fontWeight: 600 }}>
              Especialista em Direito Administrativo, Servidores Públicos & RPPS
            </span>
          </div>
        </div>

        <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
          Este conteúdo foi elaborado com base nas disposições expressas da Constituição Federal de 1988, na Emenda Constitucional nº 103/2019, na Lei Federal nº 8.112/90 e nos Temas Repetitivos vinculantes do STF e STJ. As informações são revisadas periodicamente para garantir conformidade jurídica e segurança estatutária para servidores municipais, estaduais e federais.
        </p>

        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.82rem', color: '#718096' }}>
          <Link href="/sobre" style={{ color: '#2b6cb0', fontWeight: 700, textDecoration: 'none' }}>
            Conhecer Nossa Metodologia & Equipe Editorial &rarr;
          </Link>
          <span style={{ fontStyle: 'italic', fontSize: '0.78rem' }}>
            Aviso: Conteúdo informativo. Não substitui parecer advocatício individualizado.
          </span>
        </div>
      </div>

      {/* Artigos Relacionados (Reduz Rejeição / Aumenta Tempo de Permanência do Usuário) */}
      {relatedArticles.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <BookOpen size={20} color="#2b6cb0" />
            <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-color)', fontWeight: 800, margin: 0 }}>
              Artigos Recomendados para Você:
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {relatedArticles.map((art) => (
              <Link 
                key={art.slug} 
                href={`/artigos/${art.slug}`}
                style={{ 
                  background: 'white', 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0', 
                  padding: '1.5rem', 
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#718096', display: 'block', marginBottom: '0.5rem' }}>
                    📅 {new Date(art.date).toLocaleDateString('pt-BR')}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--primary-color)', lineHeight: 1.35, fontWeight: 700, margin: '0 0 0.8rem' }}>
                    {art.title}
                  </h4>
                </div>
                <span style={{ color: '#2b6cb0', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginTop: '1rem' }}>
                  Ler Artigo <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </article>
  )
}