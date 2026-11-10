import './globals.css'
import Header from '@/components/Header'
import CookieBanner from '@/components/CookieBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'ServGuia - O Guia Definitivo do Servidor Público',
  description: 'O portal completo para a evolução da carreira, defesa de direitos e planejamento de aposentadoria de servidores públicos municipais e estaduais.',
  metadataBase: new URL('https://servi-guia.vercel.app'),
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://servi-guia.vercel.app',
  },
  openGraph: {
    title: 'ServGuia - O Guia Definitivo do Servidor Público',
    description: 'O portal completo para a evolução da carreira, defesa de direitos e planejamento de aposentadoria de servidores públicos.',
    url: 'https://servi-guia.vercel.app',
    siteName: 'ServGuia',
    images: [
      {
        url: '/logo.png', // Idealmente deve ser uma imagem retangular de 1200x630px para OG
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServGuia - O Guia Definitivo do Servidor Público',
    description: 'Acesse guias definitivos sobre sindicância, PAD, licenças e aposentadoria do servidor público.',
  },
  verification: {
    google: 'qH9gltE4Lk1p5ONSBCSMwkXGR9eqixIDruwOJLPqlZQ',
  },
}

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ServGuia',
  url: 'https://servi-guia.vercel.app',
  logo: 'https://servi-guia.vercel.app/logo.png',
  description: 'O portal completo para a evolução da carreira, defesa de direitos e planejamento de aposentadoria de servidores públicos.'
}

export default function RootLayout({ children }) {
  const whatsappUrl = "https://wa.me/5594984478168?text=[SERVGUIA-ADV]%20Ol%C3%A1!%20Vim%20pelo%20site%20ServGuia%20e%20preciso%20falar%20com%20um%20advogado%20administrativista."

  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <GoogleAnalytics ga_id="G-R0J2K8CVKQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />

        <main>{children}</main>

        <footer className="footer" style={{ backgroundColor: '#102a43', color: 'white', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '4px solid var(--secondary-color)' }}>
          <div className="container">
            <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
              
              {/* Coluna 1: Branding Oficial */}
              <div className="footer-column">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid rgba(255,255,255,0.4)',
                    backgroundColor: '#ffffff',
                    flexShrink: 0
                  }}>
                    <Image 
                      src="/logo-round.png" 
                      alt="ServGuia" 
                      width={46} 
                      height={46} 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.1' }}>
                      Serv<span style={{ color: '#ecc94b' }}>Guia</span>
                    </span>
                    <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Defesa & Carreira Pública
                    </span>
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Democratizando o conhecimento jurídico e administrativo para servidores estatutários de todos os municípios e estados do Brasil.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.92rem' }}>
                  <Link href="/sobre" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Sobre Nós</Link>
                  <Link href="/contato" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Contato & Suporte</Link>
                  <Link href="/termos-de-uso" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Termos de Uso</Link>
                  <Link href="/politica-de-privacidade" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Política de Privacidade</Link>
                </div>
              </div>

              {/* Coluna 2: Guias e Conteúdo */}
              <div className="footer-column">
                <h4 style={{ color: '#ecc94b', fontSize: '1.15rem', marginBottom: '1.25rem', fontWeight: 'bold' }}>Guias e Categorias</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
                  <li><Link href="/previdencia" style={{ color: 'rgba(255,255,255,0.85)' }}>Aposentadoria e RPPS</Link></li>
                  <li><Link href="/direitos-licencas" style={{ color: 'rgba(255,255,255,0.85)' }}>Licença-Prêmio e Direitos</Link></li>
                  <li><Link href="/evolucao-carreira" style={{ color: 'rgba(255,255,255,0.85)' }}>Evolução de Carreira e Salário</Link></li>
                  <li><Link href="/blog" style={{ color: 'rgba(255,255,255,0.85)' }}>Todos os Artigos do Blog</Link></li>
                </ul>
              </div>

              {/* Coluna 3: Ferramentas Gratuitas */}
              <div className="footer-column">
                <h4 style={{ color: '#ecc94b', fontSize: '1.15rem', marginBottom: '1.25rem', fontWeight: 'bold' }}>Ferramentas & Simuladores</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
                  <li><Link href="/ferramentas/calculadora-aposentadoria" style={{ color: 'rgba(255,255,255,0.85)' }}>Calculadora de Aposentadoria RPPS</Link></li>
                  <li><Link href="/ferramentas/gerador-requerimento" style={{ color: 'rgba(255,255,255,0.85)' }}>Gerador de Requerimentos (PDF)</Link></li>
                  <li><Link href="/ferramentas/amostra-gratis" style={{ color: 'rgba(255,255,255,0.85)' }}>Amostra Grátis em Word (.docx)</Link></li>
                  <li><Link href="/cursos-parceiros" style={{ color: 'rgba(255,255,255,0.85)' }}>Pós-graduações Reconhecidas MEC</Link></li>
                  <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#fc8181', fontWeight: 'bold' }}>Assessoria Jurídica Especializada</a></li>
                </ul>
              </div>

              {/* Coluna 4: Produtos */}
              <div className="footer-column">
                <h4 style={{ color: '#ecc94b', fontSize: '1.15rem', marginBottom: '1.25rem', fontWeight: 'bold' }}>Kits de Documentos</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '1rem' }}>
                  Modelos prontos e validados juridicamente para protocolar no RH sem pagar fortunas a advogados.
                </p>
                <Link 
                  href="/produtos/kit-requerimentos" 
                  className="btn"
                  style={{
                    backgroundColor: '#ecc94b',
                    color: '#1a202c',
                    fontWeight: 'bold',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    display: 'inline-block',
                    textAlign: 'center',
                    fontSize: '0.92rem'
                  }}
                >
                  Conhecer o Kit Premium
                </Link>
              </div>

            </div>
            
            <div style={{ marginTop: '3rem', padding: '1.25rem', backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: '10px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', textAlign: 'center', lineHeight: '1.6' }}>
              <strong>Aviso Legal (Disclaimer):</strong> O ServGuia é um portal informativo independente e educacional. Não possuímos vínculo com órgãos governamentais ou prefeituras. Nossos modelos e simuladores destinam-se ao suporte administrativo do servidor e não substituem parecer jurídico individualizado em casos judiciais complexos.
            </div>

            <div className="footer-bottom" style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
              <p>&copy; {new Date().getFullYear()} ServGuia - O Guia do Servidor Público. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
        <CookieBanner />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
