'use client'
import Link from 'next/link'
import { 
  FileText, 
  Calculator, 
  Download, 
  Wrench, 
  Sparkles, 
  GraduationCap, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2,
  Scale
} from 'lucide-react'

export default function Ferramentas() {
  const tools = [
    {
      title: "Calculadora de Aposentadoria RPPS & Abono",
      badge: "🔥 MAIS ACESSADA PELOS SERVIDORES",
      badgeColor: "#ecc94b",
      badgeTextColor: "#1a202c",
      isFeatured: true,
      desc: "Simule sua data de aposentadoria pelas regras de transição da Reforma (EC 103/2019): regra de pontos, pedágio de 100% e redução especial de 5 anos para professores municipais e estaduais.",
      icon: <Calculator size={32} color="#16a34a" />,
      link: "/ferramentas/calculadora-aposentadoria",
      btnText: "Fazer Simulação Gratuita",
      btnStyle: { background: '#16a34a', color: 'white' },
      features: [
        "Regra de Transição por Pontos (Art. 4º EC 103)",
        "Regra do Pedágio de 100% (Art. 20 EC 103)",
        "Redução de 5 anos para Professores do Magistério",
        "Cálculo de Elegibilidade ao Abono de Permanência"
      ]
    },
    {
      title: "Gerador Automático de Requerimentos (PDF)",
      badge: "100% Gratuito & Instantâneo",
      badgeColor: "#3182ce",
      badgeTextColor: "#ffffff",
      isFeatured: false,
      desc: "Preencha seus dados online e gere um requerimento administrativo oficial estruturado em PDF pronto para imprimir, assinar e protocolar no RH.",
      icon: <FileText size={28} color="#2b6cb0" />,
      link: "/ferramentas/gerador-requerimento",
      btnText: "Acessar Gerador PDF",
      btnStyle: { background: '#2b6cb0', color: 'white' },
      features: [
        "Requerimentos de Licença-Prêmio",
        "Abono de Permanência",
        "Adicional de Insalubridade e Laudo",
        "Cópia Integral de Autos de PAD"
      ]
    },
    {
      title: "Amostra Grátis em Word (.docx Editável)",
      badge: "Download Direto Sem Custo",
      badgeColor: "#38a169",
      badgeTextColor: "#ffffff",
      isFeatured: false,
      desc: "Baixe gratuitamente 2 modelos de requerimentos fundamentados em formato Word (.docx). Edite no computador, altere os dados e protocole.",
      icon: <Download size={28} color="#38a169" />,
      link: "/ferramentas/amostra-gratis",
      btnText: "Baixar Amostra Grátis",
      btnStyle: { background: '#38a169', color: 'white' },
      features: [
        "Requerimento de Indenização de Férias",
        "Requerimento de Averbação de Tempo (CTC)",
        "Formato 100% editável no Word (.docx)",
        "Citações das Leis Estatutárias"
      ]
    },
    {
      title: "Kits de Requerimentos Administrativos Prontos",
      badge: "Pacote Profissional Completo",
      badgeColor: "#d69e2e",
      badgeTextColor: "#ffffff",
      isFeatured: false,
      desc: "Arsenal completo com até 20 modelos em Word para todas as demandas do servidor: licenças, progressões, defesas em PAD, férias e CTC.",
      icon: <FileCheck2 size={28} color="#d69e2e" />,
      link: "/produtos/kit-requerimentos",
      btnText: "Ver Pacotes a partir de R$ 37,90",
      btnStyle: { background: '#ecc94b', color: '#09182a' },
      features: [
        "Direitos Financeiros e Retroativos",
        "Licenças e Conversão em Dinheiro (Pecúnia)",
        "Defesas Prévia e Recursos em PAD",
        "Garantia de 7 Dias via Hotmart"
      ]
    },
    {
      title: "Pós-Graduações EaD para Progressão Salarial",
      badge: "Reconhecidas pelo MEC",
      badgeColor: "#805ad5",
      badgeTextColor: "#ffffff",
      isFeatured: false,
      desc: "Especializações rápidas a distância voltadas para a evolução funcional de professores, servidores da saúde e do administrativo municipal/estadual.",
      icon: <GraduationCap size={28} color="#805ad5" />,
      link: "/cursos-parceiros",
      btnText: "Ver Pós-Graduações Recomendadas",
      btnStyle: { background: '#805ad5', color: 'white' },
      features: [
        "Conclusão a partir de 4 meses",
        "Válidas para Progressão por Títulos",
        "Aulas 100% online no seu ritmo",
        "Sem TCC obrigatório na maioria dos cursos"
      ]
    },
    {
      title: "Assessoria Jurídica com Advogados Especialistas",
      badge: "Direito Administrativo & Previdenciário",
      badgeColor: "#e53e3e",
      badgeTextColor: "#ffffff",
      isFeatured: false,
      desc: "Teve um direito expressamente negado ou está enfrentando perseguição em PAD? Conecte-se com nossa rede parceira de advogados em todo o país.",
      icon: <Scale size={28} color="#e53e3e" />,
      link: "/assessoria-juridica",
      btnText: "Solicitar Análise de Especialista",
      btnStyle: { background: '#e53e3e', color: 'white' },
      features: [
        "Análise de processos disciplinares e demissão",
        "Ações de destravamento de progressão na LRF",
        "Mandado de Segurança para Licenças e Vencimentos",
        "Atendimento online em todo o território nacional"
      ]
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #102a45 60%, #1a365d 100%)', 
        color: 'white', 
        padding: '5rem 1.5rem 6rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236,201,75,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: 'rgba(236,201,75,0.12)', 
            border: '1px solid rgba(236,201,75,0.3)', 
            padding: '0.45rem 1.2rem', 
            borderRadius: '50px', 
            marginBottom: '1.5rem',
            color: '#ecc94b',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <Sparkles size={16} /> CENTRAL DE FERRAMENTAS & SIMULADORES ESTATUTÁRIOS
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1.2rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Ferramentas & Recursos para o <span style={{ color: '#ecc94b', textDecoration: 'underline', textDecorationColor: 'rgba(236,201,75,0.4)', textUnderlineOffset: '6px' }}>Servidor Público</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Automatize seus cálculos de aposentadoria, gere requerimentos oficiais em PDF e acesse modelos fundamentados no STF e STJ para não depender da boa vontade do RH.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link 
              href="/ferramentas/calculadora-aposentadoria" 
              className="btn" 
              style={{ 
                backgroundColor: '#ecc94b', 
                color: '#09182a', 
                fontWeight: 700, 
                fontSize: '1rem', 
                padding: '0.85rem 1.8rem', 
                borderRadius: '50px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                boxShadow: '0 8px 20px rgba(236,201,75,0.25)'
              }}
            >
              <Calculator size={18} /> Acessar Calculadora RPPS
            </Link>

            <Link 
              href="/ferramentas/gerador-requerimento" 
              className="btn" 
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.08)', 
                color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)', 
                fontWeight: 600, 
                fontSize: '1rem', 
                padding: '0.85rem 1.8rem', 
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FileText size={18} /> Gerador de Requerimento PDF
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content: Grid de Ferramentas */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* Barra Informativa Rápida */}
        <div style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '1.2rem 2rem', 
          boxShadow: '0 10px 25px -5px rgba(0,0,0,0.06)', 
          border: '1px solid #e2e8f0', 
          marginBottom: '2.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ background: '#ebf8ff', padding: '0.6rem', borderRadius: '10px' }}>
              <Wrench size={20} color="#2b6cb0" />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Recursos Práticos e Independentes</strong>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Desenvolvidos especificamente para servidores municipais, estaduais e federais estatutários.</span>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2b6cb0', backgroundColor: '#ebf8ff', padding: '0.35rem 0.8rem', borderRadius: '20px' }}>
            {tools.length} Recursos Disponíveis
          </span>
        </div>

        {/* Grid de Ferramentas */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {tools.map((item, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                background: 'white',
                borderRadius: '18px',
                border: item.isFeatured ? '2px solid #ecc94b' : '1px solid #e2e8f0',
                padding: '2rem',
                boxShadow: item.isFeatured ? '0 12px 28px -5px rgba(236,201,75,0.25)' : '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
            >
              {/* Badge */}
              <div style={{ marginBottom: '1.2rem' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  background: item.badgeColor, 
                  color: item.badgeTextColor, 
                  padding: '0.3rem 0.75rem', 
                  borderRadius: '20px',
                  display: 'inline-block'
                }}>
                  {item.badge}
                </span>
              </div>

              {/* Ícone e Título */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  background: '#f8fafc', 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '14px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  border: '1px solid #e2e8f0' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--primary-color)', lineHeight: 1.25, fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>

              {/* Descrição */}
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontSize: '0.94rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>

              {/* Lista de Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                {item.features.map((feat, fIdx) => (
                  <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#4a5568' }}>
                    <CheckCircle2 size={15} color="#38a169" style={{ flexShrink: 0 }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Botão de Ação */}
              <Link 
                href={item.link} 
                className="btn" 
                style={{ 
                  ...item.btnStyle,
                  textAlign: 'center', 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: 700,
                  padding: '0.9rem 1.2rem',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                }}
              >
                {item.btnText} <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

      </section>

    </div>
  )
}