export default function robots() {
  const baseUrl = 'https://servguia.com.br' // Troque pelo domínio real assim que tiver

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
