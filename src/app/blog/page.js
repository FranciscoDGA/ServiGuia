import { getSortedArticlesData } from '@/lib/markdown'
import Link from 'next/link'

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
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>
        {q ? `Resultados para: "${q}"` : 'Todos os Artigos'}
      </h1>
      <p style={{ color: 'var(--text-light)', textAlign: 'center', marginBottom: '3rem' }}>
        O acervo completo do ServGuia com todos os guias, passo a passos e dicas essenciais para a sua carreira.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {articles.map((article) => (
          <div key={article.slug} style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            {article.image && (
              <div style={{ width: '100%', height: '250px', position: 'relative', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
            <div style={{ padding: '2rem' }}>
              <Link href={`/artigos/${article.slug}`} style={{ textDecoration: 'none' }}>
                <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem', fontSize: '1.5rem' }}>
                  {article.title}
                </h2>
              </Link>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                <span>📅 {new Date(article.date).toLocaleDateString('pt-BR')}</span>
                <span>⏱️ {article.readTime} min de leitura</span>
              </div>
              <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem' }}>
                {article.description}
              </p>
              <Link href={`/artigos/${article.slug}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem', display: 'inline-block' }}>
                Ler Artigo Completo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
