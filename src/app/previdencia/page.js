export default function Previdencia() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Previdência & Saída</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        Planeje seu futuro com segurança. Entenda as regras do RPPS, INSS, abono de permanência e aposentadoria especial.
      </p>
      
      <div className="card-grid" style={{ padding: '0' }}>
        <div className="card">
          <h3>Abono de Permanência</h3>
          <p>Vale a pena continuar trabalhando após o tempo de aposentadoria? Calcule aqui.</p>
        </div>
        <div className="card">
          <h3>Aposentadoria Especial</h3>
          <p>Requisitos para guardas municipais, enfermeiros e cargos com insalubridade.</p>
        </div>
        <div className="card">
          <h3>Regras de Transição (RPPS)</h3>
          <p>O que mudou com a Reforma da Previdência e qual regra é a melhor para você.</p>
        </div>
      </div>
    </div>
  )
}
