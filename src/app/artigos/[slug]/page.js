import { getArticleData, getAllArticleSlugs, getSortedArticlesData } from '@/lib/markdown'
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
    openGraph: {
      title: `${articleData.title} | ServGuia`,
      description: articleData.description,
      url: `${baseUrl}/artigos/${resolvedParams.slug}`,
      siteName: 'ServGuia',
      images: [
        {
          url: articleData.image || `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: articleData.title,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: articleData.date,
      authors: ['Dr. Francisco Gomes'],
    },
    twitter: {
      card: 'summary_large_image',
      title: articleData.title,
      description: articleData.description,
      images: [articleData.image || `${baseUrl}/logo.png`],
    },
    other: {
      amphtml: `${baseUrl}/web-stories/${resolvedParams.slug}`,
    }
  }
}

export default async function Article({ params }) {
  const resolvedParams = await params
  const articleData = await getArticleData(resolvedParams.slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://servi-guia.vercel.app'
  
  // Buscar 3 artigos relacionados para manter o usuário no site (reduzir bounce rate)
  const allArticles = getSortedArticlesData()
  const relatedArticles = allArticles
    .filter(a => a.slug !== resolvedParams.slug)
    .slice(0, 3)

  const whatsappDuvidaUrl = `https://wa.me/5594984478168?text=${encodeURIComponent(`[SERVGUIA] Olá! Acabei de ler o artigo "${articleData.title}" e gostaria de tirar uma dúvida sobre a minha situação no serviço público.`)}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/artigos/${resolvedParams.slug}`
    },
    headline: articleData.title,
    description: articleData.description,
    image: articleData.image ? [articleData.image] : [`${baseUrl}/logo.png`],
    datePublished: articleData.date,
    dateModified: articleData.date,
    author: {
      '@type': 'Person',
      name: 'Dr. Francisco Gomes',
      jobTitle: 'Especialista em Direito Administrativo e RPPS',
      url: `${baseUrl}/sobre`
    },
    publisher: {
      '@type': 'Organization',
      name: 'ServGuia',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo-round.png`,
        width: 256,
        height: 256
      }
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
        relatedArticles={relatedArticles}
        whatsappUrl={whatsappDuvidaUrl}
      >
        <div dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
      </ArticleLayout>
    </>
  )
}