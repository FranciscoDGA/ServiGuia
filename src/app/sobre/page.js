import Link from 'next/link'
import { Briefcase, AlertCircle, Clock, ShieldCheck, Download, GraduationCap, ChevronRight } from 'lucide-react'

export default function Sobre() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '800' }}>Quem faz o ServGuia?</h1>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', opacity: 0.9 }}>
            Eu sou servidor público concursado. Eu sei exatamente o que você passa no balcão do RH, e criei este portal para que você nunca mais seja enrolado.
          </p>
        </div>
      </section>

      {/* A História Real (Dores) */}
      <section className="container" style={{ maxWidth: '900px', marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: 'var(--card-bg)', padding: '3rem', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2rem' }}>A realidade que ninguém te conta</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
            <p>
              Eu sei como é difícil conseguir um atendimento claro no setor de Recursos Humanos. Sei a frustração de ouvir um "não" sem qualquer embasamento jurídico, apenas porque "é o costume da prefeitura".
            </p>
            <p>
              Eu sei o desespero que é esperar meses (às vezes anos) por uma resposta sobre o seu pedido de <strong>Licença-Prêmio</strong> ou <strong>Averbação de Tempo de Contribuição</strong>, vendo seu direito ser empurrado com a barriga.
            </p>
            <p>
              Foi vivendo essas dores na pele, e vendo colegas concursados perderem dinheiro e direitos básicos, que decidi criar o <strong>ServGuia</strong>. Nossa missão é ser o seu "RH Digital Descomplicado". Um escudo contra a má gestão pública e a burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* Como podemos ajudar (Hub de Soluções) */}
      <section className="container" style={{ marginTop: '5rem' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.2rem' }}>Tudo o que você precisa em um só lugar</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          Não gaste rios de dinheiro com advogados antes de esgotar seus recursos administrativos. Acesse nosso arsenal gratuito e premium:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Card: Kit Requerimentos */}
          <Link href="/produtos/kit-requerimentos" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--accent-color)' }}>
              <Download color="var(--accent-color)" size={40} style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Kit Premium de Requerimentos</h3>
              <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '1.5rem' }}>
                Acabe com o "não". Modelos em Word validados juridicamente para você protocolar pedidos de licença, defesas e abonos com extrema autoridade.
              </p>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Conhecer o Kit <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card: Ferramentas */}
          <Link href="/ferramentas" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--secondary-color)' }}>
              <Briefcase color="var(--secondary-color)" size={40} style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Ferramentas & Simuladores</h3>
              <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '1.5rem' }}>
                Acesse nossa Calculadora de Aposentadoria e nosso Gerador de Requerimentos em PDF gratuito para não depender de tabelas confusas do RH.
              </p>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Usar Ferramentas Grátis <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card: Cursos */}
          <Link href="/cursos-parceiros" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid #059669' }}>
              <GraduationCap color="#059669" size={40} style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Evolução (Cursos e Pós)</h3>
              <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '1.5rem' }}>
                Descubra como uma Pós-Graduação rápida em EaD pode engordar seu holerite com os adicionais de qualificação do seu estatuto.
              </p>
              <span style={{ color: '#059669', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Ver Cursos Parceiros <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card: Assessoria */}
          <Link href="/assessoria-juridica" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid #e53e3e' }}>
              <ShieldCheck color="#e53e3e" size={40} style={{ marginBottom: '1rem' }} />
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Defesa Jurídica Especializada</h3>
              <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '1.5rem' }}>
                Vai responder a uma Sindicância ou PAD? Teve um direito vital negado? Conecte-se com nossa rede de advogados parceiros administrativistas.
              </p>
              <span style={{ color: '#e53e3e', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Falar com Advogado <ChevronRight size={18} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Convite para o Blog */}
      <section className="container" style={{ marginTop: '5rem', textAlign: 'center' }}>
        <div style={{ padding: '3rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <AlertCircle color="var(--primary-color)" size={40} style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Conhecimento é a sua maior arma</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Explore nossos mais de 40 artigos densos e gratuitos sobre evolução de carreira, previdência e direitos funcionais.
          </p>
          <Link href="/blog" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
            Acessar o Blog de Artigos
          </Link>
        </div>
      </section>
    </div>
  )
}
