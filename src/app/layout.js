import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'ServGuia - O Guia Definitivo do Servidor Público',
  description: 'O portal completo para a evolução da carreira, defesa de direitos e planejamento de aposentadoria de servidores públicos municipais e estaduais.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="header">
          <div className="container header-content">
            <Link href="/" className="logo">
              ServGuia
            </Link>
            <nav className="nav-links">
              <Link href="/sobre" className="nav-link">Sobre</Link>
              <Link href="/evolucao-carreira" className="nav-link">Carreira</Link>
              <Link href="/direitos-licencas" className="nav-link">Direitos</Link>
              <Link href="/previdencia" className="nav-link">Previdência</Link>
              <Link href="/ferramentas/calculadora-aposentadoria" className="nav-link" style={{color: 'var(--secondary-color)'}}>Ferramentas</Link>
              <Link href="/produtos/kit-requerimentos" className="nav-link" style={{color: 'var(--accent-color)'}}>Produtos</Link>
              <Link href="/contato" className="nav-link">Contato</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-column">
                <h4>ServGuia</h4>
                <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Democratizando o conhecimento jurídico e administrativo para servidores de todo o Brasil.
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <Link href="/sobre" style={{ marginRight: '1rem' }}>Sobre</Link>
                  <Link href="/contato">Contato</Link>
                </div>
              </div>
              <div className="footer-column">
                <h4>Ferramentas</h4>
                <ul>
                  <li><Link href="/ferramentas/gerador-requerimento">Gerador de Requerimentos (PDF)</Link></li>
                  <li><Link href="/ferramentas/calculadora-aposentadoria">Calculadora de Aposentadoria</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Produtos</h4>
                <ul>
                  <li><Link href="/produtos/kit-requerimentos">Kit Premium de Requerimentos</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} ServGuia. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
