import Link from 'next/link'
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react'

export default function CursosParceiros() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '800' }}>
            Acelere sua Progressão por Títulos
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
            Cursos de Pós-Graduação EaD reconhecidos pelo MEC. Estude em casa, conquiste seu certificado rapidamente e garanta o seu aumento salarial na prefeitura ou estado.
          </p>
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="container" style={{ padding: '4rem 2rem', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2rem' }}>Pós-Graduações Recomendadas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          {/* Curso 1 */}
          <div style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#ecc94b', padding: '1rem', textAlign: 'center', color: '#1a202c', fontWeight: 'bold' }}>
              Mais Escolhido por Professores
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <GraduationCap size={40} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Gestão Escolar e Coordenação</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-color)' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 100% EaD (Estude no seu ritmo)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Conclusão a partir de 4 meses</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Certificado válido no Brasil todo</li>
              </ul>
              <button onClick={() => alert('Inserir Link de Afiliado aqui')} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Ver Detalhes e Valor
              </button>
            </div>
          </div>

          {/* Curso 2 */}
          <div style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', textAlign: 'center', color: '#4a5568', fontWeight: 'bold' }}>
              Ideal para Administrativo/RH
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Award size={40} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Gestão Pública Municipal</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-color)' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ 100% EaD (Sem TCC obrigatório)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Focado na Lei 8.112 e Licitações</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Certificado reconhecido pelo MEC</li>
              </ul>
              <button onClick={() => alert('Inserir Link de Afiliado aqui')} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Ver Detalhes e Valor
              </button>
            </div>
          </div>

          {/* Curso 3 */}
          <div style={{ background: 'var(--card-bg)', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow)', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', textAlign: 'center', color: '#4a5568', fontWeight: 'bold' }}>
              Geral (Todos os Cargos)
            </div>
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <BookOpen size={40} color="var(--primary-color)" />
                <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Direito Administrativo Aplicado</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', color: 'var(--text-color)' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Aulas em Vídeo e Apostilas</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Especialização Lato Sensu (360h)</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Garante a pontuação máxima no PCC</li>
              </ul>
              <button onClick={() => alert('Inserir Link de Afiliado aqui')} className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Ver Detalhes e Valor
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
