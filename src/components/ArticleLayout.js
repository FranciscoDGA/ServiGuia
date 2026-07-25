export default function ArticleLayout({ children, title, date, readTime, image }) {
  return (
    <article className="article-container">
      <header className="article-header">
        <h1 className="article-title">{title}</h1>
        <div className="article-meta">
          <span>📅 Publicado em {date}</span>
          <span>⏱️ {readTime} min de leitura</span>
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

      {/* CTA Cursos Parceiros */}
      <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#ebf8ff', border: '2px solid #3182ce', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#2b6cb0', marginBottom: '0.5rem', fontWeight: 'bold' }}>Quer subir de nível e aumentar seu salário?</h3>
        <p style={{ color: '#2d3748', marginBottom: '1.5rem' }}>
          Conheça as Pós-graduações parceiras do ServGuia (Reconhecidas pelo MEC) e garanta sua progressão de carreira.
        </p>
        <a href="/cursos-parceiros" className="btn btn-primary" style={{ display: 'inline-block', padding: '0.8rem 1.5rem', fontSize: '1rem', backgroundColor: '#3182ce' }}>
          Ver Cursos de Pós-graduação
        </a>
      </div>

      {/* E-E-A-T Author Box */}
      <div className="author-box">
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Sobre o Autor</h3>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>
          Conteúdo redigido e revisado por especialistas em Direito Administrativo e ex-servidores públicos. 
          O <strong>ServGuia</strong> tem o compromisso de trazer jurisprudência atualizada (STF/STJ) para proteger seus direitos contra a burocracia do RH.
        </p>
      </div>
    </article>
  )
}
