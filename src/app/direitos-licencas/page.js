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
          <p>Como requerer, quando é possível converter em dinheiro e as regras para gozo.</p>
        </div>
        <div className="card">
          <h3>Defesa em PAD</h3>
          <p>O que fazer nos primeiros 10 dias após ser notificado de um Processo Administrativo Disciplinar.</p>
        </div>
        <div className="card">
          <h3>Remoção e Transferência</h3>
          <p>Direitos à remoção por motivo de saúde ou união familiar.</p>
        </div>
      </div>
    </div>
  )
}
