export default function ArticleLayout({ children, title, date, readTime, image }) {
  return (
    <article className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{title}</h1>
        <div style={{ color: 'var(--text-light)', fontSize: '0.95rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <span>📅 Publicado em {date}</span>
          <span>⏱️ {readTime} min de leitura</span>
        </div>
      </header>
      
      {image && (
        <div style={{ width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}

      <div className="article-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '4rem' }}>
        {children}
      </div>

      {/* E-E-A-T Author Box */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.03)', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)', marginTop: '4rem' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Sobre o Autor</h3>
        <p style={{ color: 'var(--text-light)', fontSize: '1rem', lineHeight: '1.6' }}>
          Conteúdo redigido e revisado por especialistas em Direito Administrativo e ex-servidores públicos. 
          O <strong>ServGuia</strong> tem o compromisso de trazer jurisprudência atualizada (STF/STJ) para proteger seus direitos contra a burocracia do RH.
        </p>
      </div>
    </article>
  )
}
