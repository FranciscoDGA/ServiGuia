import Link from 'next/link'
import { Calculator, ShieldCheck, CheckCircle2, Award } from 'lucide-react'

export default function ArticleLayout({ children, title, date, readTime, image }) {
  return (
    <article className="article-container">
      <header className="article-header">
        <h1 className="article-title">{title}</h1>
        <div className="article-meta">
          <span>📅 Publicado em {date}</span>
          <span>⏱️ {readTime} min de leitura</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#2b6cb0', fontWeight: '600' }}>
            <ShieldCheck size={16} /> Revisão Jurídica Verificada
          </span>
        </div>
      </header>
      
      {image && (
        <div className="article-image-box">
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div className="article-content">
        {children}
      </div>

      {/* Internal Link CTA: Calculadora de Aposentadoria (SEO PageRank Boost) */}
      <div style={{ 
        marginTop: '3rem', 
        padding: '2rem', 
        backgroundColor: '#f7fafc', 
        border: '2px solid #2b6cb0', 
        borderRadius: '14px', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        textAlign: 'center' 
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#ebf8ff', color: '#2b6cb0', marginBottom: '1rem' }}>
          <Calculator size={26} />
        </div>
        <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Você sabe quando vai se aposentar no serviço público?
        </h3>
        <p style={{ color: 'var(--text-light)', maxWidth: '620px', margin: '0 auto 1.5rem', fontSize: '0.98rem', lineHeight: '1.6' }}>
          Simule gratuitamente o seu tempo restante de contribuição, as regras de transição da EC 103/2019, o pedágio de 100% e as regras exclusivas para <strong>professores municipais e estaduais</strong>.
        </p>
        <Link 
          href="/ferramentas/calculadora-aposentadoria" 
          className="btn btn-primary" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.75rem', fontSize: '1.05rem', fontWeight: 'bold' }}
        >
          <Calculator size={18} /> Simular Minha Aposentadoria Grátis
        </Link>
      </div>

      {/* CTA Cursos Parceiros */}
      <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: '#ebf8ff', border: '1px solid #90cdf4', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.3rem', color: '#2b6cb0', marginBottom: '0.5rem', fontWeight: 'bold' }}>Quer acelerar sua progressão de carreira e salário?</h3>
        <p style={{ color: '#2d3748', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Conheça as Pós-graduações parceiras do ServGuia (Reconhecidas pelo MEC) e garanta adicionais de titulação no seu estatuto.
        </p>
        <Link href="/cursos-parceiros" className="btn btn-primary" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', fontSize: '0.95rem', backgroundColor: '#3182ce' }}>
          Ver Pós-graduações Reconhecidas
        </Link>
      </div>

      {/* E-E-A-T Author & Review Box (YMYL Compliance) */}
      <div className="author-box" style={{ 
        marginTop: '2.5rem', 
        padding: '1.75rem', 
        backgroundColor: 'var(--card-bg)', 
        border: '1px solid var(--border-color)', 
        borderRadius: '12px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Award size={24} color="var(--secondary-color)" />
          <h3 style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.15rem', fontWeight: 'bold' }}>
            Compromisso Editorial & E-E-A-T ServGuia
          </h3>
        </div>
        <p style={{ color: 'var(--text-light)', fontSize: '0.92rem', lineHeight: '1.7', margin: 0 }}>
          Este artigo é periodicamente revisado por especialistas em <strong>Direito Administrativo e Regime Próprio de Previdência Social (RPPS)</strong>, com embasamento na Constituição Federal de 1988, Emenda Constitucional nº 103/2019 e precedentes vinculantes do Supremo Tribunal Federal (STF) e Superior Tribunal de Justiça (STJ). Nosso objetivo é fornecer segurança jurídica e clareza para servidores municipais, estaduais e federais.
        </p>
        <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
          <Link href="/sobre" style={{ color: 'var(--secondary-color)', fontWeight: 'bold', textDecoration: 'underline' }}>
            Conheça nossa Metodologia Editorial e Equipe &rarr;
          </Link>
        </div>
      </div>
    </article>
  )
}
