'use client'
import Link from 'next/link'
import { 
  FileText, 
  ShieldAlert, 
  HeartPulse, 
  Clock, 
  Scale, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Coins, 
  AlertTriangle, 
  ArrowRight,
  UserCheck
} from 'lucide-react'

export default function DireitosLicencas() {
  const articles = [
    {
      title: "Modelo de Defesa Prévia em Sindicância e PAD",
      badge: "Mais Buscado • Urgente",
      badgeColor: "#e53e3e",
      badgeTextColor: "#ffffff",
      desc: "Guia completo com estrutura jurídica para anular acusações infundadas, apontar cerceamento de defesa e prescrição na fase inicial.",
      icon: <ShieldAlert size={24} color="#e53e3e" />,
      link: "/artigos/modelo-defesa-previa-sindicancia-pad",
      tag: "Defesa Disciplinar"
    },
    {
      title: "Primeiros 10 Dias ao Ser Notificado de um PAD",
      badge: "Alerta Prático",
      badgeColor: "#dd6b20",
      badgeTextColor: "#ffffff",
      desc: "O que fazer (e os 3 erros fatais para NUNCA cometer) logo após assinar a notificação inicial da comissão processante.",
      icon: <AlertTriangle size={24} color="#dd6b20" />,
      link: "/artigos/primeiros-10-dias-pad",
      tag: "Processo Disciplinar"
    },
    {
      title: "Conversão de Licença-Prêmio em Pecúnia (Dinheiro)",
      badge: "STJ Tema 1.086",
      badgeColor: "#38a169",
      badgeTextColor: "#ffffff",
      desc: "Servidor que se aposentou ou acumulou períodos tem direito de receber o saldo em dinheiro sem incidência de Imposto de Renda.",
      icon: <Coins size={24} color="#38a169" />,
      link: "/artigos/conversao-licenca-premio-em-pecunia-dinheiro",
      tag: "Dinheiro em Folha"
    },
    {
      title: "Redução de Jornada para Pais de Atípicos (TEA / PCD)",
      badge: "STF Tema 1.097",
      badgeColor: "#3182ce",
      badgeTextColor: "#ffffff",
      desc: "Direito garantido pelo STF de redução de até 50% da carga horária para servidores municipais e estaduais com dependente com deficiência.",
      icon: <HeartPulse size={24} color="#3182ce" />,
      link: "/artigos/reducao-jornada-pais-atipicos",
      tag: "Inclusão & Família"
    },
    {
      title: "Desvio de Função no Serviço Público",
      badge: "STJ Súmula 378",
      badgeColor: "#805ad5",
      badgeTextColor: "#ffffff",
      desc: "Trabalhando em função com atribuições superiores às do seu cargo? Aprenda a comprovar e cobrar as diferenças salariais retroativas.",
      icon: <Scale size={24} color="#805ad5" />,
      link: "/artigos/desvio-de-funcao",
      tag: "Diferença Salarial"
    },
    {
      title: "Indenização de Férias Não Gozadas na Aposentadoria",
      badge: "Jurisprudência Vinculante",
      badgeColor: "#d69e2e",
      badgeTextColor: "#1a202c",
      desc: "Não tirou as férias antes da exoneração ou aposentadoria? O poder público é obrigado a indenizar integralmente com terço constitucional.",
      icon: <Clock size={24} color="#d69e2e" />,
      link: "/artigos/indenizacao-ferias-nao-gozadas-aposentadoria-servidor",
      tag: "Indenizações"
    },
    {
      title: "Licença para Tratamento de Saúde e Perícia",
      badge: "Segurança Funcional",
      badgeColor: "#319795",
      badgeTextColor: "#ffffff",
      desc: "Como funciona a perícia médica, prazos para entrega de atestados médicos e regras de prorrogação sem desconto indevido na remuneração.",
      icon: <FileText size={24} color="#319795" />,
      link: "/artigos/licenca-tratamento-saude-pericia",
      tag: "Saúde e Atestados"
    },
    {
      title: "Guia Prático da Licença-Prêmio e Capacitação",
      badge: "Direito Estatutário",
      badgeColor: "#4a5568",
      badgeTextColor: "#ffffff",
      desc: "Critérios de assiduidade, interrupções legais de prazo, requerimento de usufruto e regras para afastamento para capacitação profissional.",
      icon: <BookOpen size={24} color="#4a5568" />,
      link: "/artigos/guia-licenca-premio-capacitacao",
      tag: "Afastamentos"
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #152642 60%, #1e3a68 100%)', 
        color: 'white', 
        padding: '5rem 1.5rem 6rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '8%', 
          width: '520px', 
          height: '520px', 
          background: 'radial-gradient(circle, rgba(99,179,237,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: 'rgba(99,179,237,0.12)', 
            border: '1px solid rgba(99,179,237,0.3)', 
            padding: '0.45rem 1.2rem', 
            borderRadius: '50px', 
            marginBottom: '1.5rem',
            color: '#90cdf4',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <Scale size={16} /> DIREITO ESTATUTÁRIO & DEFESA DISCIPLINAR • STF & STJ
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.4rem)', marginBottom: '1.2rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Direitos, Licenças & <span style={{ color: '#ecc94b', textDecoration: 'underline', textDecorationColor: 'rgba(236,201,75,0.4)', textUnderlineOffset: '6px' }}>Defesa em PAD</span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '780px', margin: '0 auto 2.5rem' }}>
            Não lute desarmado contra o RH ou comissões processantes. Entenda como anular perseguições em PAD, converter licença-prêmio em dinheiro, pedir redução de jornada e receber verbas devidas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link 
              href="/produtos/kit-requerimentos#planos" 
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
              <ShieldAlert size={18} /> Modelos de Defesa de PAD e Licenças
            </Link>

            <Link 
              href="/assessoria-juridica" 
              className="btn" 
              style={{ 
                backgroundColor: 'rgba(235,87,87,0.15)', 
                color: '#feb2b2', 
                border: '1px solid rgba(235,87,87,0.4)', 
                fontWeight: 600, 
                fontSize: '1rem', 
                padding: '0.85rem 1.8rem', 
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <UserCheck size={18} /> Falar com Advogado Parceiro
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
            <div style={{ background: '#feebc8', padding: '0.6rem', borderRadius: '10px' }}>
              <ShieldAlert size={20} color="#c05621" />
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Defesa Técnica Blindada</strong>
              <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>Princípios da ampla defesa, contraditório, Lei nº 9.784/99 e precedentes consolidados dos tribunais superiores.</span>
            </div>
          </div>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#2b6cb0', backgroundColor: '#ebf8ff', padding: '0.35rem 0.8rem', borderRadius: '20px' }}>
            {articles.length} Artigos Jurídicos
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
          
          {/* Card 1: Kit Especialista de PAD */}
          <div style={{ 
            background: 'linear-gradient(135deg, #742a2a 0%, #9b2c2c 100%)', 
            borderRadius: '20px', 
            padding: '2.5rem', 
            border: '2px solid rgba(254,178,178,0.3)', 
            boxShadow: '0 15px 30px -10px rgba(155,44,44,0.3)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.2)', color: '#ffffff', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '1.2rem' }}>
                <ShieldAlert size={16} /> PACOTE ESPECIALIZADO DE DEFESA
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
                Kit Defesa PAD & Sindicância
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Não enfrente a comissão processante sem argumentos técnicos. Modelos prontos de Defesa Prévia, Alegações Finais, Pedido de Reconsideração e Recurso Hierárquico.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fed7d7' }}>
                  <CheckCircle2 size={16} color="#fed7d7" /> Modelos completos em formato Word (.docx)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fed7d7' }}>
                  <CheckCircle2 size={16} color="#fed7d7" /> Teses de prescrição e nulidades do processo
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#fed7d7' }}>
                  <CheckCircle2 size={16} color="#fed7d7" /> Economize até R$ 2.500 em honorários iniciais
                </li>
              </ul>
            </div>

            <Link 
              href="/produtos/kit-requerimentos#planos" 
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
              Garantir Kit de Defesa PAD <ArrowRight size={18} />
            </Link>
          </div>

          {/* Card 2: Kit Completo de Requerimentos */}
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
                <Sparkles size={16} /> 20 FORMULÁRIOS ADMINISTRATIVOS
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
                Kit de Licenças & Direitos Funcionais
              </h3>
              <p style={{ fontSize: '0.98rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Todos os requerimentos que você precisa para o RH: Licença-Prêmio, Conversão em Pecúnia, Redução de Carga Horária e Indenização de Férias.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Modelos 100% preenchíveis no computador
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#ecc94b' }}>
                  <CheckCircle2 size={16} color="#ecc94b" /> Fundamentação com jurisprudência do STF
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
              Conhecer Todos os Modelos Prontos <ArrowRight size={18} />
            </Link>
          </div>

        </div>

      </section>

    </div>
  )
}