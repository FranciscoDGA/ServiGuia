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
          <Link href="/direitos-licencas/guia-licenca-premio-capacitacao" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Defesa em PAD</h3>
          <p style={{ marginBottom: '1rem' }}>O que fazer nos primeiros 10 dias após ser notificado de um Processo Administrativo Disciplinar.</p>
          <span className="btn" style={{ padding: '0.5rem 1rem', backgroundColor: '#e2e8f0', color: '#718096', cursor: 'not-allowed' }}>Em breve</span>
        </div>
        <div className="card">
          <h3>Remoção e Transferência</h3>
          <p style={{ marginBottom: '1rem' }}>Direitos à remoção por motivo de saúde ou união familiar.</p>
          <span className="btn" style={{ padding: '0.5rem 1rem', backgroundColor: '#e2e8f0', color: '#718096', cursor: 'not-allowed' }}>Em breve</span>
        </div>
      </div>
    </div>
  )
}
