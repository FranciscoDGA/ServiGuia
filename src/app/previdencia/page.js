'use client'
import Link from 'next/link'
import { 
  Calculator, 
  ShieldAlert, 
  HeartPulse, 
  HardHat, 
  FileText, 
  PiggyBank, 
  BookOpen, 
  GraduationCap, 
  Coins, 
  FileCheck2, 
  Clock, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react'

export default function Previdencia() {
  const articles = [
    {
      title: "Aposentadoria de Professor Municipal e Estadual",
      badge: "Mais Buscado • Atualizado 2026",
      badgeColor: "#ecc94b",
      badgeTextColor: "#1a202c",
      desc: "Regras pós-Reforma da Previdência (EC 103/2019): redução de 5 anos na idade e tempo, regras de transição por pontos e pedágio 100%.",
      icon: <GraduationCap size={24} color="#2b6cb0" />,
      link: "/artigos/aposentadoria-professor-municipal",
      tag: "Magistério RPPS"
    },
    {
      title: "Como Solicitar CTC Fracionada no Meu INSS",
      badge: "Guia Prático Passo a Passo",
      badgeColor: "#3182ce",
      badgeTextColor: "#ffffff",
      desc: "Aprenda a averbar no RPPS somente o tempo do INSS que você precisa, deixando o restante para uma aposentadoria futura no RGPS sem travas.",
      icon: <FileCheck2 size={24} color="#319795" />,
      link: "/artigos/como-solicitar-ctc-fracionada-meu-inss-rpps",
      tag: "Averbação de Tempo"
    },
    {
      title: "Abono de Permanência: Como Parar de Descontar a Previdência",
      badge: "Dinheiro no Bolso",
      badgeColor: "#38a169",
      badgeTextColor: "#ffffff",
      desc: "Cumpriu os requisitos de aposentadoria e continua na ativa? Você tem direito de receber de volta o desconto da previdência (14%).",
      icon: <PiggyBank size={24} color="#38a169" />,
      link: "/artigos/abono-permanencia",
      tag: "Abono RPPS"
    },
    {
      title: "Conversão de Licença-Prêmio em Pecúnia (Dinheiro)",
      badge: "Jurisprudência STJ Tema 1.086",
      badgeColor: "#805ad5",
      badgeTextColor: "#ffffff",
      desc: "Aposentou-se ou está prestes a se aposentar com períodos de licença acumulados? O STJ proíbe o enriquecimento ilícito do Estado.",
      icon: <Coins size={24} color="#d69e2e" />,
      link: "/artigos/conversao-licenca-premio-em-pecunia-dinheiro",
      tag: "Indenização na Saída"
    },
    {
      title: "Indenização de Férias Não Gozadas na Aposentadoria",
      badge: "Direito Adquirido",
      badgeColor: "#dd6b20",
      badgeTextColor: "#ffffff",
      desc: "Servidor que se aposenta ou é exonerado com férias simples ou proporcionais não usufruídas tem direito a indenização integral sem IR.",
      icon: <Clock size={24} color="#dd6b20" />,
      link: "/artigos/indenizacao-ferias-nao-gozadas-aposentadoria-servidor",
      tag: "Verba Indenizatória"
    },
    {
      title: "Aposentadoria Especial no RPPS (Insalubridade)",
      badge: "Regras de Transição",
      badgeColor: "#3182ce",
      badgeTextColor: "#ffffff",
      desc: "Trabalhou exposto a agentes químicos, biológicos ou ruído? Entenda o direito à redução etária e como comprovar através de LTCAT.",
      icon: <ShieldAlert size={24} color="#2b6cb0" />,
      link: "/artigos/aposentadoria-especial-rpps",
      tag: "Insalubridade / RPPS"
    },
    {
      title: "Aposentadoria por Invalidez e Doenças Graves",
      badge: "Cálculo e Legislação",
      badgeColor: "#e53e3e",
      badgeTextColor: "#ffffff",
      desc: "Entenda o cálculo proporcional vs. integral após a Reforma, a rol de doenças que dão direito a proventos integrais e a perícia médica.",
      icon: <HeartPulse size={24} color="#e53e3e" />,
      link: "/artigos/aposentadoria-invalidez-reforma-calculo",
      tag: "Perícia e Saúde"
    },
    {
      title: "Insalubridade e Periculosidade: Laudos Técnicos",
      badge: "Direito em Folha",
      badgeColor: "#d69e2e",
      badgeTextColor: "#1a202c",
      desc: "Como exigir do órgão laudos técnicos atualizados (LTCAT/PPRA) para garantir os adicionais de 10%, 20% ou 40% na remuneração.",
      icon: <HardHat size={24} color="#d69e2e" />,
      link: "/artigos/insalubridade-periculosidade",
      tag: "Adicionais"
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
        {/* Glow de fundo */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
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
            <Sparkles size={16} /> GUIA ESTATUTÁRIO & RPPS • EC 103/2019 & STF
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1.2rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Aposentadoria & Previdência do <span style={{ color: '#ecc94b', textDecoration: 'underline', textDecorationColor: 'rgba(236,201,75,0.4)', textUnderlineOffset: '6px' }}>Servidor Público</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Domine as novas regras do RPPS: cálculo de proventos, regras de transição por pontos e pedágio, aposentadoria especial de professores e da saúde, abono de permanência e averbação de tempo do INSS.
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
              <Calculator size={18} /> Simular na Calculadora RPPS
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
              <FileText size={18} /> Kits de Requerimentos Previdenciários
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
              <Scale size={20} color="#2b6cb0" />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Fundamentação Estatutária Atualizada</strong>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Art. 40 da CF/88, EC 103/2019, Temas 1.075 e 1.086 do STJ e jurisprudência vinculante do STF.</span>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2b6cb0', backgroundColor: '#ebf8ff', padding: '0.35rem 0.8rem', borderRadius: '20px' }}>
            {articles.length} Artigos & Guias Disponíveis
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

        {/* SEÇÃO DE ALTA CONVERSÃO: 2 CARDS ESTRATÉGICOS */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Calculadora RPPS */}
          <div style={{ 
            background: 'linear-gradient(135deg, #ffffff 0%, #f0fff4 100%)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            border: '2px solid #38a169', 
            boxShadow: '0 15px 30px -10px rgba(56,161,105,0.15)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#dcfce7', color: '#166534', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.2rem' }}>
                <Calculator size={16} /> FERRAMENTA 100% GRATUITA
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#166534', marginBottom: '0.8rem', fontWeight: 800 }}>
                Já posso me aposentar ou pedir Abono?
              </h3>
              <p style={{ fontSize: '0.98rem', color: '#374151', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Não dependa da má vontade do RH. Nossa calculadora aplica as regras de transição da EC 103/2019, redução do magistério e calcula se você já tem direito ao Abono de Permanência.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#15803d' }}>
                  <CheckCircle2 size={16} color="#38a169" /> Simulação de Homem e Mulher com RPPS
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#15803d' }}>
                  <CheckCircle2 size={16} color="#38a169" /> Regra do Professor com redução de 5 anos
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#15803d' }}>
                  <CheckCircle2 size={16} color="#38a169" /> Regra de Pontos e Pedágio de 100%
                </li>
              </ul>
            </div>

            <Link 
              href="/ferramentas/calculadora-aposentadoria" 
              className="btn" 
              style={{ 
                background: '#16a34a', 
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
              Fazer Simulação Gratuita Agora <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2: Kit Requerimentos Aposentadoria & CTC */}
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
                <Sparkles size={16} /> MODELOS EM WORD EDITÁVEL (.DOCX)
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
                Kits de Requerimentos Previdenciários
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Tenha os requerimentos exatos para protocolar: Averbação de Tempo (CTC Fracionada), Pedido de Abono de Permanência, Conversão de Licença-Prêmio em Dinheiro e Férias Indenizadas.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Modelos 100% editáveis no Word
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Fundamentação expressa no STF e STJ
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Planos acessíveis a partir de R$ 37,90
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
              Conhecer Todos os Modelos Prontos <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>

    </div>
  )
}