import './globals.css'
import Header from '@/components/Header'
import Link from 'next/link'

export const metadata = {
  title: 'ServGuia - O Guia Definitivo do Servidor Público',
  description: 'O portal completo para a evolução da carreira, defesa de direitos e planejamento de aposentadoria de servidores públicos municipais e estaduais.',
}

export default function RootLayout({ children }) {
  const whatsappUrl = "https://wa.me/5594984478168?text=[SERVGUIA-ADV]%20Ol%C3%A1!%20Vim%20pelo%20site%20ServGuia%20e%20preciso%20falar%20com%20um%20advogado%20administrativista."

  return (
    <html lang="pt-BR">
      <body>
        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h4>ServGuia</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Democratizando o conhecimento jurídico e administrativo para servidores de todo o Brasil.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <Link href="/sobre">Sobre Nós</Link>
                  <Link href="/contato">Contato</Link>
                  <Link href="/termos-de-uso" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Termos de Uso</Link>
                  <Link href="/politica-de-privacidade" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Política de Privacidade</Link>
                </div>
              </div>
              <div className="footer-column">
                <h4>Ferramentas & Parceiros</h4>
                <ul>
                  <li><Link href="/ferramentas/gerador-requerimento">Gerador de Requerimentos (PDF)</Link></li>
                  <li><Link href="/ferramentas/calculadora-aposentadoria">Calculadora de Aposentadoria</Link></li>
                  <li><Link href="/cursos-parceiros">Cursos de Pós-Graduação (EaD)</Link></li>
                  <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Preciso de Advogado Administrativista</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Produtos</h4>
                <ul>
                  <li><Link href="/produtos/kit-requerimentos">Kit Premium de Requerimentos</Link></li>
                </ul>
              </div>
            </div>
            
            <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '8px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
              <strong>Aviso Legal (Disclaimer):</strong> O ServGuia é um portal informativo independente. Não possuímos vínculo com órgãos governamentais. Nossos conteúdos têm caráter educativo e não substituem a consulta formal ao RH do seu ente federativo ou a assessoria jurídica especializada.
            </div>

            <div className="footer-bottom" style={{ marginTop: '2rem' }}>
              <p>&copy; {new Date().getFullYear()} ServGuia. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
