export default function ArticleLayout({ children, title, date, readTime }) {
  return (
    <article className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>{title}</h1>
        <div style={{ color: 'var(--text-light)', fontSize: '0.95rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <span>📅 Publicado em {date}</span>
          <span>⏱️ {readTime} min de leitura</span>
        </div>
      </header>
      <div className="article-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
        {children}
      </div>
    </article>
  )
}
