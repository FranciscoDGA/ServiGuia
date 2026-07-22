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
  return {
    title: `${articleData.title} | ServGuia`,
    description: articleData.description,
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
      </ArticleLayout>
    </>
  )
}
