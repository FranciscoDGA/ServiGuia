import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Descomplique sua Carreira no Serviço Público</h1>
          <p>
            Entenda como calcular sua evolução funcional, gratificações, licenças prêmio e prepare-se para a sua aposentadoria com segurança. Tudo em um só lugar, feito por especialistas.
          </p>
          <Link href="/evolucao-carreira" className="btn btn-primary" style={{ marginRight: '1rem' }}>
            Começar Agora
          </Link>
          <Link href="/direitos-licencas" className="btn btn-accent">
            Ver Modelos Gratuitos
          </Link>
        </div>
      </section>

      <section className="container">
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
