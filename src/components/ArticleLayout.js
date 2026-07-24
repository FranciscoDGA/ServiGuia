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
