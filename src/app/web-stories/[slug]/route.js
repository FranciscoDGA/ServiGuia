import { getArticleData } from '@/lib/markdown';

export async function GET(request, { params }) {
  const { slug } = await params;
  
  try {
    const article = await getArticleData(slug);
    const domain = process.env.NEXT_PUBLIC_SITE_URL || 'https://servi-guia.vercel.app';
    const logoUrl = `${domain}/logo.png`;
    const coverImage = article.image || 'https://picsum.photos/seed/servguia/800/1200';
    const primaryColor = '#1e3a8a'; // Dark blue

    const ampHtml = `<!DOCTYPE html>
<html amp lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>${article.title} - Web Story</title>
    <link rel="canonical" href="${domain}/artigos/${slug}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>

    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>

    <style amp-custom>
      amp-story {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      }
      .slide-content {
        padding: 32px;
        color: white;
      }
      .overlay {
        background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8));
      }
      .title {
        font-size: 2.2rem;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 16px;
      }
      .description {
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 500;
      }
      .bg-color {
        background-color: ${primaryColor};
      }
      .cta-text {
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        margin-top: auto;
        margin-bottom: auto;
      }
      .logo {
        width: 48px;
        height: 48px;
        border-radius: 8px;
        margin-bottom: 16px;
      }
    </style>
  </head>
  <body>
    <amp-story
      standalone
      title="${article.title}"
      publisher="ServGuia"
      publisher-logo-src="${logoUrl}"
      poster-portrait-src="${coverImage}"
    >
      <!-- Slide 1: Capa -->
      <amp-story-page id="capa">
        <amp-story-grid-layer template="fill">
          <amp-img src="${coverImage}" width="720" height="1280" layout="responsive" alt="Capa"></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="fill" class="overlay"></amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content" id="bottom">
          <amp-img src="${logoUrl}" width="48" height="48" class="logo" alt="Logo"></amp-img>
          <h1 class="title">${article.title}</h1>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Slide 2: Resumo -->
      <amp-story-page id="resumo" class="bg-color">
        <amp-story-grid-layer template="fill">
          <div style="background-color: ${primaryColor}; width: 100%; height: 100%;"></div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content">
          <h2 class="title" style="font-size: 1.8rem; margin-top: 40px;">Resumo</h2>
          <p class="description">${article.description}</p>
        </amp-story-grid-layer>
      </amp-story-page>

      <!-- Slide 3: CTA -->
      <amp-story-page id="cta" class="bg-color">
        <amp-story-grid-layer template="fill">
           <div style="background-color: #0f172a; width: 100%; height: 100%;"></div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content">
          <p class="cta-text">Quer saber mais sobre os seus direitos?</p>
        </amp-story-grid-layer>
        <amp-story-page-outlink layout="nodisplay">
          <a href="${domain}/artigos/${slug}">Leia o artigo completo</a>
        </amp-story-page-outlink>
      </amp-story-page>

    </amp-story>
  </body>
</html>`;

    return new Response(ampHtml, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return new Response('Not Found', { status: 404 });
  }
}
