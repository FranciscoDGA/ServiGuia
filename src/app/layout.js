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
              <Link href="/evolucao-carreira" className="nav-link">Evolução & Carreira</Link>
              <Link href="/direitos-licencas" className="nav-link">Direitos & Licenças</Link>
              <Link href="/previdencia" className="nav-link">Previdência & Saída</Link>
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
              </div>
              <div className="footer-column">
                <h4>Conteúdo</h4>
                <ul>
                  <li><Link href="/evolucao-carreira">Evolução & Carreira</Link></li>
                  <li><Link href="/direitos-licencas">Direitos & Licenças</Link></li>
                  <li><Link href="/previdencia">Previdência & Saída</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Recursos</h4>
                <ul>
                  <li><a href="#">Modelos de Requerimento</a></li>
                  <li><a href="#">Simulador de Aposentadoria</a></li>
                  <li><a href="#">Calculadora de Triênios</a></li>
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
