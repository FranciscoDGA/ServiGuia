import { SITE_URL } from '@/lib/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/cover'],
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'GPTBot', 'PerplexityBot', 'ClaudeBot', 'Claude-SearchBot'],
        allow: ['/', '/api/cover'],
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
