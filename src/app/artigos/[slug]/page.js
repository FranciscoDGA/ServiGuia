import { getArticleData, getAllArticleSlugs } from '@/lib/markdown'
import ArticleLayout from '@/components/ArticleLayout'

export async function generateStaticParams() {
  const paths = getAllArticleSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const articleData = await getArticleData(resolvedParams.slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://servi-guia.vercel.app'
  
  return {
    title: `${articleData.title} | ServGuia`,
    description: articleData.description,
    alternates: {
      canonical: `${baseUrl}/artigos/${resolvedParams.slug}`,
    },
    other: {
      amphtml: `${baseUrl}/web-stories/${resolvedParams.slug}`,
    }
  }
}

export default async function Article({ params }) {
  const resolvedParams = await params
  const articleData = await getArticleData(resolvedParams.slug)
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: articleData.title,
    description: articleData.description,
    datePublished: articleData.date,
    author: {
      '@type': 'Organization',
      name: 'ServGuia'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleLayout 
        title={articleData.title}
        date={articleData.date}
        readTime={articleData.readTime}
        image={articleData.image}
      >
      <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--card-bg)', border: '2px solid var(--secondary-color)', borderRadius: 'var(--radius)', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 'bold' }}>Não perca seus direitos!</h3>
          <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem' }}>Faça parte do nosso grupo exclusivo no WhatsApp e receba dicas semanais sobre os direitos dos servidores públicos.</p>
          <a href="https://chat.whatsapp.com/SEULINKAQUI" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', fontSize: '1.1rem', backgroundColor: '#25D366' }}>
            Entrar no Grupo VIP do WhatsApp
          </a>
        </div>
      </ArticleLayout>
    </>
  )
}
