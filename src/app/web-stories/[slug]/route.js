import { getArticleData } from '@/lib/markdown';
import { SITE_URL, toAbsoluteUrl } from '@/lib/site';

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildShortTitle(rawTitle = '') {
  const clean = String(rawTitle).trim();
  const suffix = ' | ServGuia';
  if (clean.length + suffix.length <= 63) return `${clean}${suffix}`;
  return `${clean.slice(0, 60 - suffix.length).trimEnd()}...${suffix}`;
}

function extractHighlights(contentHtml = '', fallbackDescription = '') {
  const plain = String(contentHtml)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!plain) return fallbackDescription;
  return plain.length > 360 ? `${plain.slice(0, 357).trimEnd()}...` : plain;
}

export async function GET(request, { params }) {
  const { slug } = await params;

  try {
    const article = await getArticleData(slug);
    const domain = SITE_URL;
    const logoUrl = `${domain}/logo.png`;
    const coverImage = toAbsoluteUrl(article.image || '/logo.png');
    const primaryColor = '#1e3a8a';
    const shortTitle = escapeHtml(buildShortTitle(article.title));
    const safeTitle = escapeHtml(article.title);
    const safeDescription = escapeHtml(
      article.description || `Guia prático sobre ${article.title} para servidores públicos estatutários.`
    );
    const highlights = escapeHtml(extractHighlights(article.contentHtml, article.description));

    const ampHtml = `<!DOCTYPE html>
<html amp lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <title>${shortTitle}</title>
    <meta name="description" content="${safeDescription}">
    <link rel="canonical" href="${domain}/artigos/${slug}">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta property="og:title" content="${shortTitle}">
    <meta property="og:description" content="${safeDescription}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${domain}/web-stories/${slug}">
    <meta property="og:image" content="${escapeHtml(coverImage)}">

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
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.2;
        margin-bottom: 16px;
      }
      .description {
        font-size: 1.1rem;
        line-height: 1.5;
        font-weight: 500;
      }
      .bg-color {
        background-color: ${primaryColor};
      }
      .cta-text {
        font-size: 1.7rem;
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
      title="${safeTitle}"
      publisher="ServGuia"
      publisher-logo-src="${logoUrl}"
      poster-portrait-src="${escapeHtml(coverImage)}"
    >
      <amp-story-page id="capa">
        <amp-story-grid-layer template="fill">
          <amp-img src="${escapeHtml(coverImage)}" width="720" height="1280" layout="responsive" alt="${safeTitle}"></amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="fill" class="overlay"></amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content" id="bottom">
          <amp-img src="${logoUrl}" width="48" height="48" class="logo" alt="Logo ServGuia"></amp-img>
          <h1 class="title">${safeTitle}</h1>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="resumo" class="bg-color">
        <amp-story-grid-layer template="fill">
          <div style="background-color: ${primaryColor}; width: 100%; height: 100%;"></div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content">
          <h2 class="title" style="font-size: 1.7rem; margin-top: 32px;">Resumo do Direito</h2>
          <p class="description">${safeDescription}</p>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="detalhes" class="bg-color">
        <amp-story-grid-layer template="fill">
          <div style="background-color: #162b4d; width: 100%; height: 100%;"></div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content">
          <h2 class="title" style="font-size: 1.7rem; margin-top: 32px;">Pontos Essenciais</h2>
          <p class="description">${highlights}</p>
        </amp-story-grid-layer>
      </amp-story-page>

      <amp-story-page id="cta" class="bg-color">
        <amp-story-grid-layer template="fill">
          <div style="background-color: #0f172a; width: 100%; height: 100%;"></div>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical" class="slide-content">
          <p class="cta-text">Quer entender todas as regras e baixar modelos para o RH?</p>
        </amp-story-grid-layer>
        <amp-story-page-outlink layout="nodisplay">
          <a href="${domain}/artigos/${slug}">Leia o artigo completo no ServGuia</a>
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
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
