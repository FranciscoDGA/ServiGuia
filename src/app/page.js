import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Descomplique sua Carreira no Serviço Público</h1>
          <p>
            Entenda como calcular sua evolução funcional, gratificações, licenças prêmio e prepare-se para a sua aposentadoria com segurança. Tudo em um só lugar, feito por especialistas.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/ferramentas/calculadora-aposentadoria" className="btn btn-primary">
              Calcular Aposentadoria (Grátis)
            </Link>
            <Link href="/ferramentas/gerador-requerimento" className="btn btn-accent">
              Gerar Requerimento em PDF
            </Link>
          </div>
        </div>
      </section>

      {/* Destaque Monetização */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cansado de pagar honorários para advogados?</h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Tenha acesso ao nosso banco exclusivo de Modelos em Word para protocolar pedidos de progressão, licença e defesas de forma autônoma e 100% legal.
          </p>
          <Link href="/produtos/kit-requerimentos" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>
            Conhecer o Kit de Requerimentos Premium
          </Link>
        </div>
      </section>

      {/* Categorias Principais */}
      <section className="container" style={{ paddingTop: '5rem' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2rem' }}>Guias Completos</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Evolução & Carreira</h3>
            <p>Descubra como acelerar sua progressão funcional. Saiba tudo sobre avaliação de desempenho, pós-graduação e adicionais.</p>
            <Link href="/evolucao-carreira" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler mais</Link>
          </div>
          <div className="card">
            <h3>Direitos & Licenças</h3>
            <p>Aprenda a requerer licença-prêmio, auxílios e atestados, além de se defender em PADs de forma correta.</p>
            <Link href="/direitos-licencas" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler mais</Link>
          </div>
          <div className="card">
            <h3>Previdência & Saída</h3>
            <p>Planeje sua aposentadoria no RPPS ou INSS. Calcule abono de permanência, aposentadoria especial e mais.</p>
            <Link href="/previdencia" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler mais</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
