import Link from 'next/link'

export default function DireitosLicencas() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Direitos & Licenças</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        O seu guia completo sobre licença-prêmio, auxílios, atestados médicos e processos administrativos disciplinares (PAD).
      </p>
      
      <div className="card-grid" style={{ padding: '0' }}>
        <div className="card">
          <h3>Licença-Prêmio</h3>
          <p style={{ marginBottom: '1rem' }}>Como requerer, quando é possível converter em dinheiro e as regras para gozo.</p>
          <Link href="/artigos/guia-licenca-premio-capacitacao" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Primeiros 10 dias do PAD</h3>
          <p style={{ marginBottom: '1rem' }}>O que fazer nos primeiros 10 dias após ser notificado de um Processo Administrativo Disciplinar.</p>
          <Link href="/artigos/primeiros-10-dias-pad" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Desvio de Função</h3>
          <p style={{ marginBottom: '1rem' }}>Você exerce atribuições mais complexas que as do seu cargo? Entenda seus direitos.</p>
          <Link href="/artigos/desvio-de-funcao" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Redução de Jornada (Pais)</h3>
          <p style={{ marginBottom: '1rem' }}>Direito a redução para servidores pais de dependentes com deficiência/neurodivergência.</p>
          <Link href="/artigos/reducao-jornada-pais-atipicos" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
      </div>
    </div>
  )
}
