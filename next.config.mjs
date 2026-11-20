/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL || '').trim().replace(/\/$/, '');
    if (!rawSiteUrl) return [];

    let targetOrigin = '';
    try {
      const parsed = new URL(rawSiteUrl);
      if (parsed.hostname === 'servi-guia.vercel.app') return [];
      targetOrigin = parsed.origin;
    } catch {
      return [];
    }

    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'servi-guia.vercel.app' }],
        destination: `${targetOrigin}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
