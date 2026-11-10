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

        <footer className="footer" style={{ backgroundColor: '#09182a', color: 'white', paddingTop: '3.5rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.25rem' }}>
            
            <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              
              {/* Coluna 1: Branding Oficial */}
              <div className="footer-column" style={{ maxWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '1.5px solid var(--secondary-color)',
                    backgroundColor: '#ffffff',
                    flexShrink: 0
                  }}>
                    <Image 
                      src="/logo-round.png" 
                      alt="ServGuia" 
                      width={38} 
                      height={38} 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: '800', color: '#ffffff', lineHeight: '1.1' }}>
                      Serv<span style={{ color: '#ecc94b' }}>Guia</span>
                    </span>
                    <span style={{ fontSize: '0.65rem', fontWeight: '700', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                      Defesa & Carreira Pública
                    </span>
                  </div>
                </div>

                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Portal informativo e prático para orientar servidores municipais e estaduais sobre seus direitos estatutários e previdenciários.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.72rem', color: '#86efac' }}>
                  <span>🔒 Compra Segura Hotmart</span>
                  <span>•</span>
                  <span>⚖️ Base STF / STJ</span>
                </div>
              </div>

              {/* Coluna 2: Previdência & RPPS */}
              <div className="footer-column">
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                  Previdência & RPPS
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <li><Link href="/ferramentas/calculadora-aposentadoria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Calculadora de Aposentadoria</Link></li>
                  <li><Link href="/artigos/aposentadoria-professor-municipal" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Aposentadoria de Professor</Link></li>
                  <li><Link href="/artigos/abono-permanencia-requisitos-aposentadoria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Abono de Permanência</Link></li>
                  <li><Link href="/artigos/como-solicitar-ctc-fracionada-meu-inss-rpps" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Averbação de Tempo (CTC)</Link></li>
                </ul>
              </div>

              {/* Coluna 3: Direitos & Defesa */}
              <div className="footer-column">
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                  Direitos & Defesa
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <li><Link href="/artigos/modelo-defesa-previa-sindicancia-pad" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Defesa em Sindicância e PAD</Link></li>
                  <li><Link href="/artigos/conversao-licenca-premio-em-pecunia-dinheiro" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Licença-Prêmio em Dinheiro</Link></li>
                  <li><Link href="/artigos/indenizacao-ferias-nao-gozadas-aposentadoria-servidor" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Indenização de Férias</Link></li>
                  <li><Link href="/artigos/reducao-jornada-pais-atipicos" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Redução de Jornada (TEA/PCD)</Link></li>
                </ul>
              </div>

              {/* Coluna 4: Institucional & Produtos */}
              <div className="footer-column">
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '1rem' }}>
                  Portal & Suporte
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <li><Link href="/produtos/kit-requerimentos" style={{ color: '#ecc94b', fontWeight: '700', textDecoration: 'none' }}>⭐ Kits de Requerimentos</Link></li>
                  <li><Link href="/sobre" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Sobre Nós</Link></li>
                  <li><Link href="/contato" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contato & Suporte</Link></li>
                  <li><Link href="/termos-de-uso" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Termos de Uso</Link></li>
                  <li><Link href="/politica-de-privacidade" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Política de Privacidade</Link></li>
                </ul>
              </div>

            </div>
            
            {/* Aviso Legal & Linha de Rodapé */}
            <div style={{ 
              borderTop: '1px solid rgba(255,255,255,0.06)', 
              paddingTop: '1.5rem', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.5rem' 
            }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: '1.5', maxWidth: '850px', margin: '0 auto' }}>
                <strong>Aviso Legal:</strong> O ServGuia é um portal informativo independente de apoio ao servidor público. Não possuímos vínculo com órgãos estatais ou prefeituras. Nossos modelos de requerimento e simuladores têm caráter administrativo e educacional.
              </p>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                &copy; {new Date().getFullYear()} ServGuia - O Guia do Servidor Público. Todos os direitos reservados.
              </p>
            </div>

          </div>
        </footer>
        <CookieBanner />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
