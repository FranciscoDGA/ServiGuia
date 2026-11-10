'use client'
import Link from 'next/link'
import { 
  GraduationCap, 
  Briefcase, 
  TrendingUp, 
  BookOpen, 
  AlertTriangle,
  Award,
  Sparkles,
  CheckCircle2,
  Scale,
  Coins,
  ArrowRight
} from 'lucide-react'

export default function EvolucaoCarreira() {
  const articles = [
    {
      title: "Progressão Travada pela LRF: Como Destravar (Tema 1.075 STJ)",
      badge: "Tema 1.075 STJ • Dinheiro Retroativo",
      badgeColor: "#ecc94b",
      badgeTextColor: "#1a202c",
      desc: "O município alegou estouro do limite de gastos da LRF para congelar sua evolução funcional? O STJ já decidiu que o ato é ilegal.",
      icon: <Coins size={24} color="#d69e2e" />,
      link: "/artigos/progressao-funcional-travada-limite-lrf-como-destravar",
      tag: "Jurisprudência Vinculante"
    },
    {
      title: "Progressão por Títulos e Pós-Graduação",
      badge: "Aumento Salarial em Folha",
      badgeColor: "#3182ce",
      badgeTextColor: "#ffffff",
      desc: "Como usar sua pós-graduação ou mestrado para subir de nível na tabela salarial e garantir gratificações permanentes no contracheque.",
      icon: <GraduationCap size={24} color="#2b6cb0" />,
      link: "/artigos/progressao-por-titulos",
      tag: "Evolução Funcional"
    },
    {
      title: "Avaliação de Desempenho e Seus Efeitos na Promoção",
      badge: "Carreira & Mérito",
      badgeColor: "#38a169",
      badgeTextColor: "#ffffff",
      desc: "Como funcionam as notas de avaliação, quais os recursos cabíveis em caso de perseguição de chefia e seu reflexo na progressão horizontal.",
      icon: <TrendingUp size={24} color="#38a169" />,
      link: "/artigos/avaliacao-desempenho-progressao-carreira",
      tag: "Avaliação de Mérito"
    },
    {
      title: "Estágio Probatório: Direitos, Deveres e Estabilidade",
      badge: "Segurança no Cargo",
      badgeColor: "#805ad5",
      badgeTextColor: "#ffffff",
      desc: "O que a comissão avaliadora pode ou não exigir, as hipóteses reais de exoneração e como funciona a estabilidade do Art. 41 da CF/88.",
      icon: <AlertTriangle size={24} color="#805ad5" />,
      link: "/artigos/estagio-probatorio",
      tag: "Estabilidade"
    },
    {
      title: "Servidor Público e MEI: O que a Lei Realmente Permite?",
      badge: "Mitos & Verdades",
      badgeColor: "#dd6b20",
      badgeTextColor: "#ffffff",
      desc: "Entenda a diferença entre administrar uma empresa e ser sócio cotista/acionista. Evite abertura incorreta de CNPJ e penalidades disciplinares.",
      icon: <Briefcase size={24} color="#dd6b20" />,
      link: "/artigos/servidor-pode-ter-mei",
      tag: "Atividade Econômica"
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
            <Sparkles size={16} /> EVOLUÇÃO FUNCIONAL & PROGRESSÃO SALARIAL
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1.2rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Evolução, Salário & <span style={{ color: '#ecc94b', textDecoration: 'underline', textDecorationColor: 'rgba(236,201,75,0.4)', textUnderlineOffset: '6px' }}>Carreira Pública</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Destrave sua promoção na folha de pagamento. Conheça as teses do STJ contra a desculpa do limite da LRF, aproveite títulos de pós-graduação reconhecidos pelo MEC e suba de padrão salarial.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link 
              href="/cursos-parceiros" 
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
              <GraduationCap size={18} /> Ver Cursos de Pós-Graduação (MEC)
            </Link>

            <Link 
              href="/produtos/kit-requerimentos" 
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
              <TrendingUp size={18} /> Modelos de Requerimento de Progressão
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content: Grid de Artigos */}
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
              <Award size={20} color="#2b6cb0" />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Progressão Horizontal e Vertical</strong>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Entenda como a jurisprudência protege seus vencimentos contra retenções financeiras arbitrárias do município.</span>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2b6cb0', backgroundColor: '#ebf8ff', padding: '0.35rem 0.8rem', borderRadius: '20px' }}>
            {articles.length} Artigos de Carreira
          </span>
        </div>

        {/* Grid de Artigos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
          {articles.map((item, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%', 
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '1.8rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                transition: 'all 0.25s ease'
              }}
            >
              {/* Top Tag & Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.5px', 
                  fontWeight: 700, 
                  color: '#4a5568',
                  background: '#f7fafc',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid #edf2f7'
                }}>
                  {item.tag}
                </span>

                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  background: item.badgeColor, 
                  color: item.badgeTextColor, 
                  padding: '0.25rem 0.6rem', 
                  borderRadius: '20px' 
                }}>
                  {item.badge}
                </span>
              </div>

              {/* Ícone e Título */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ 
                  background: '#f8fafc', 
                  width: '46px', 
                  height: '46px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0,
                  border: '1px solid #e2e8f0' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-color)', lineHeight: 1.3, fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>

              {/* Descrição */}
              <p style={{ color: 'var(--text-light)', marginBottom: '1.8rem', flexGrow: 1, fontSize: '0.92rem', lineHeight: 1.6 }}>
                {item.desc}
              </p>

              {/* Botão Ler */}
              <Link 
                href={item.link} 
                className="btn" 
                style={{ 
                  background: '#f8fafc', 
                  color: 'var(--primary-color)', 
                  border: '1px solid #cbd5e0', 
                  textAlign: 'center', 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontWeight: 600,
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  transition: 'background 0.2s'
                }}
              >
                <BookOpen size={16} /> Ler Artigo Completo
              </Link>
            </div>
          ))}
        </div>

        {/* SEÇÃO DE ALTA CONVERSÃO */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Pós-Graduações MEC */}
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #ebf8ff 100%)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            border: '2px solid #3182ce', 
            boxShadow: '0 15px 30px -10px rgba(49,130,206,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#bee3f8', color: '#2b6cb0', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.2rem' }}>
                <GraduationCap size={16} /> PROGRESSÃO VERTICAL IMEDIATA
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#1a365d', marginBottom: '0.8rem', fontWeight: 800 }}>
                Pós-Graduação EaD Reconhecida pelo MEC
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#2d3748', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Conquiste a pontuação necessária no Plano de Cargos e Carreira (PCC) do seu município. Cursos flexíveis, conclusão rápida a partir de 4 meses e certificado aceito no Brasil todo.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#2b6cb0' }}>
                  <CheckCircle2 size={16} color="#3182ce" /> Especializações para Magistério, Saúde e Gestão Pública
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#2b6cb0' }}>
                  <CheckCircle2 size={16} color="#3182ce" /> Estude no seu horário sem atrapalhar sua escala de trabalho
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#2b6cb0' }}>
                  <CheckCircle2 size={16} color="#3182ce" /> Aumento permanente no vencimento base
                </li>
              </ul>
            </div>

            <Link 
              href="/cursos-parceiros" 
              className="btn" 
              style={{ 
                background: '#2b6cb0', 
                color: 'white', 
                padding: '0.95rem 1.5rem', 
                fontSize: '1.05rem', 
                fontWeight: 700, 
                borderRadius: '10px', 
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              Ver Especializações Disponíveis <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2: Kit Requerimentos de Progressão & LRF */}
          <div style={{ 
            background: 'linear-gradient(135deg, #09182a 0%, #1a365d 100%)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            border: '2px solid rgba(236,201,75,0.4)', 
            boxShadow: '0 15px 30px -10px rgba(0,0,0,0.25)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236,201,75,0.15)', color: '#ecc94b', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.2rem', border: '1px solid rgba(236,201,75,0.3)' }}>
                <Coins size={16} /> DIREITO AO RETROATIVO
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
                Kit de Requerimentos Financeiros
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Modelos prontos para cobrar progressão por tempo de serviço (quinquênios/triênios), adicional de titulação e pedido de destravamento de progressão com base no Tema 1.075 do STJ.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Modelos 100% editáveis no Word (.docx)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Cobrança de valores retroativos com juros e correção
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Acesso imediato no Hotmart (a partir de R$ 37,90)
                </li>
              </ul>
            </div>

            <Link 
              href="/produtos/kit-requerimentos" 
              className="btn" 
              style={{ 
                background: '#ecc94b', 
                color: '#09182a', 
                padding: '0.95rem 1.5rem', 
                fontSize: '1.05rem', 
                fontWeight: 700, 
                borderRadius: '10px', 
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              Garantir Modelos Financeiros Prontos <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>

    </div>
  )
}