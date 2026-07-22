import Link from 'next/link'
import { FileText, Calculator, ChevronRight } from 'lucide-react'

export default function Ferramentas() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '1000px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center', fontSize: '2.5rem' }}>
        Ferramentas Administrativas Grátis
      </h1>
      <p style={{ color: 'var(--text-light)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
        Automatize seus cálculos e crie requerimentos perfeitos em segundos sem precisar depender do RH da prefeitura.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Gerador de Requerimento */}
        <Link href="/ferramentas/gerador-requerimento" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--accent-color)' }}>
            <FileText color="var(--accent-color)" size={48} style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>Gerador de Requerimentos (PDF)</h2>
            <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '2rem', fontSize: '1.1rem' }}>
              Preencha seus dados e gere instantaneamente um requerimento administrativo formal em PDF pronto para você imprimir, assinar e protocolar.
            </p>
            <span className="btn btn-accent" style={{ textAlign: 'center' }}>
              Acessar Gerador
            </span>
          </div>
        </Link>

        {/* Calculadora de Aposentadoria */}
        <Link href="/ferramentas/calculadora-aposentadoria" style={{ textDecoration: 'none' }}>
          <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid var(--secondary-color)' }}>
            <Calculator color="var(--secondary-color)" size={48} style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1rem' }}>Calculadora de Aposentadoria</h2>
            <p style={{ color: 'var(--text-light)', flex: 1, marginBottom: '2rem', fontSize: '1.1rem' }}>
              Descubra na hora se você já tem direito ao Abono de Permanência ou se já fechou os requisitos para se aposentar pelas novas regras.
            </p>
            <span className="btn btn-primary" style={{ textAlign: 'center' }}>
              Fazer Simulação
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
