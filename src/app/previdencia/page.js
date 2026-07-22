import Link from 'next/link'

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
          <p style={{ marginBottom: '1rem' }}>Vale a pena continuar trabalhando após o tempo de aposentadoria? Calcule aqui.</p>
          <Link href="/artigos/abono-permanencia" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Aposentadoria Especial (RPPS)</h3>
          <p style={{ marginBottom: '1rem' }}>Saiba como ficou a aposentadoria especial pós-reforma e a regra de transição.</p>
          <Link href="/artigos/aposentadoria-especial-rpps" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
        <div className="card">
          <h3>Insalubridade e Periculosidade</h3>
          <p style={{ marginBottom: '1rem' }}>Saiba como requerer laudos técnicos e garantir seus direitos previdenciários e adicionais.</p>
          <Link href="/artigos/insalubridade-periculosidade" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Ler Artigo</Link>
        </div>
      </div>
    </div>
  )
}
