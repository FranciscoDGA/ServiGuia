export default function EvolucaoCarreira() {
  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Evolução & Carreira</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '3rem' }}>
        Aqui você encontra tudo sobre como acelerar sua progressão funcional, avaliação de desempenho, pós-graduação e adicionais (quinquênio, sexta-parte, etc).
      </p>
      
      <div className="card-grid" style={{ padding: '0' }}>
        <div className="card">
          <h3>Progressão por Títulos</h3>
          <p>Como usar sua pós-graduação ou mestrado para subir de nível na tabela salarial.</p>
        </div>
        <div className="card">
          <h3>Avaliação de Desempenho</h3>
          <p>Passo a passo para recorrer de notas injustas e garantir sua promoção.</p>
        </div>
        <div className="card">
          <h3>Estágio Probatório</h3>
          <p>Direitos, deveres e como funciona a estabilidade constitucional na prática.</p>
        </div>
      </div>
    </div>
  )
}
