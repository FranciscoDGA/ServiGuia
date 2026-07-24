import { getSortedArticlesData } from '@/lib/markdown'

export default function sitemap() {
  const baseUrl = 'https://servi-guia.vercel.app' // Troque pelo domínio real assim que tiver

  // Rotas Estáticas Principais
  const staticRoutes = [
    '',
    '/sobre',
    '/blog',
    '/evolucao-carreira',
    '/direitos-licencas',
    '/previdencia',
    '/ferramentas',
    '/ferramentas/calculadora-aposentadoria',
    '/ferramentas/gerador-requerimento',
    '/cursos-parceiros',
    '/produtos/kit-requerimentos',
    '/assessoria-juridica',
    '/contato',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Rotas Dinâmicas (Artigos do Blog)
  const articles = getSortedArticlesData()
  const dynamicRoutes = articles.map((article) => ({
    url: `${baseUrl}/artigos/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
