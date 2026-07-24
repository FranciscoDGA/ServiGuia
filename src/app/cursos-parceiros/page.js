'use client'
import Link from 'next/link'
import { GraduationCap, Award, CheckCircle2, TrendingUp, BookOpen, Star, AlertTriangle } from 'lucide-react'

export default function CursosParceiros() {
  // ATENÇÃO: Substituir os links abaixo pelos seus LINKS DE AFILIADO
  const courses = [
    {
      title: "Gestão Escolar e Coordenação",
      badge: "Mais Escolhido por Professores",
      badgeColor: "#ecc94b",
      target: "Professores e Pedagogos",
      desc: "Especialização completa para quem busca assumir cargos de direção, coordenação ou garantir pontuação máxima na evolução funcional do magistério.",
      features: ["100% EaD (Estude no seu ritmo)", "Conclusão a partir de 4 meses", "Certificado válido no Brasil todo"],
      link: "https://hotmart.com", // Substitua pelo link de afiliado
      price: "12x R$ 39,90"
    },
    {
      title: "Gestão Pública Municipal",
      badge: "Ideal para Administrativo/RH",
      badgeColor: "#e2e8f0",
      target: "Servidores Administrativos e Fiscais",
      desc: "Focado na Lei 8.112, nova lei de Licitações e orçamento público. Perfeito para servidores municipais que buscam cargos de chefia.",
      features: ["100% EaD (Sem TCC obrigatório)", "Focado em Licitações e Contratos", "Reconhecido pelo MEC"],
      link: "https://hotmart.com", // Substitua pelo link de afiliado
      price: "12x R$ 49,90"
    },
    {
      title: "Direito Administrativo Aplicado",
      badge: "Geral (Todos os Cargos)",
      badgeColor: "#e2e8f0",
      target: "Todos os Servidores",
      desc: "Domine PAD, Sindicância e Direitos dos Servidores. A pós-graduação definitiva para quem quer dominar seus direitos e subir de nível.",
      features: ["Aulas em Vídeo e Apostilas", "Especialização Lato Sensu (360h)", "Garante a pontuação máxima no PCC"],
      link: "https://hotmart.com", // Substitua pelo link de afiliado
      price: "12x R$ 59,90"
    },
    {
      title: "Segurança Pública e Direitos Humanos",
      badge: "Alta Demanda",
      badgeColor: "#fc8181",
      target: "Guardas Municipais e Policiais",
      desc: "Especialização focada no aprimoramento tático, legal e humano de agentes de segurança pública municipais e estaduais.",
      features: ["100% EaD (Sem TCC)", "Grade atualizada com o SUSP", "Certificado Rápido"],
      link: "https://hotmart.com", // Substitua pelo link de afiliado
      price: "12x R$ 45,00"
    },
    {
      title: "Saúde Pública e ESF",
      badge: "Para a Saúde",
      badgeColor: "#68d391",
      target: "Enfermeiros, Técnicos e ACS",
      desc: "Pós-graduação focada em Saúde Coletiva e Estratégia Saúde da Família. Aumente seu salário base com a especialização na sua área.",
      features: ["Especialização Lato Sensu", "Focado nas portarias do MS", "Conclusão a partir de 4 meses"],
      link: "https://hotmart.com", // Substitua pelo link de afiliado
      price: "12x R$ 49,90"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', color: 'white', padding: '6rem 2rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '50%', marginBottom: '1.5rem' }}>
            <GraduationCap size={40} color="#ecc94b" />
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.1 }}>
            Acelere sua Progressão por <span style={{ color: '#ecc94b' }}>Títulos</span>
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
            Cursos de Pós-Graduação EaD reconhecidos pelo MEC. Estude em casa, conquiste seu certificado rapidamente e garanta o seu aumento salarial (progressão vertical) na prefeitura ou estado.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '3rem' }}>
          Pós-Graduações Recomendadas para Servidores
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {courses.map((course, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'white', padding: 0, overflow: 'hidden' }}>
              <div style={{ background: course.badgeColor, padding: '0.5rem', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', color: course.badgeColor === '#ecc94b' ? '#1a202c' : '#2d3748' }}>
                {course.badge}
              </div>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <Award size={32} color="#2b6cb0" />
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-color)', lineHeight: 1.2 }}>{course.title}</h3>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#718096', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Público: {course.target}
                </div>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  {course.desc}
                </p>
                
                <div style={{ marginBottom: '2rem', flexGrow: 1 }}>
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#38a169" />
                      <span style={{ fontSize: '0.9rem', color: '#4a5568' }}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Investimento a partir de:</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#38a169' }}>{course.price}</div>
                </div>

                <a href={course.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Ver Detalhes e Matricular
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Note */}
        <div style={{ marginTop: '4rem', background: '#fffaf0', border: '1px solid #feebc8', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <AlertTriangle size={24} color="#dd6b20" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
          <div>
            <h4 style={{ color: '#c05621', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Atenção antes de matricular</h4>
            <p style={{ color: '#9c4221', fontSize: '0.95rem' }}>
              Verifique sempre a lei orgânica ou o plano de cargos (PCC) do seu município. Alguns planos exigem que a pós-graduação seja estritamente na área de atuação do servidor para garantir a progressão. Os links desta página são direcionados para plataformas parceiras oficiais (Hotmart).
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
