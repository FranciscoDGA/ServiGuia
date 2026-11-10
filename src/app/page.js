import Link from 'next/link'
import HomeSearchBar from '@/components/HomeSearchBar'
import { getSortedArticlesData } from '@/lib/markdown'
import { 
  Calculator, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Award, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  AlertTriangle,
  Scale,
  Users,
  Briefcase,
  Download,
  Sparkles,
  ChevronRight,
  FolderArchive,
  Lock,
  Zap
} from 'lucide-react'

export const metadata = {
  title: 'ServGuia - O Portal Oficial do Servidor Público (RPPS e Direitos)',
  description: 'Descubra quanto tempo falta para se aposentar, destrave adicionais salariais atrasados e acesse modelos jurídicos prontos para protocolar no RH.',
}

export default function Home() {
  const articles = getSortedArticlesData().slice(0, 6)
  const whatsappAdv = "https://wa.me/5594984478168?text=[SERVGUIA-ADV]%20Ol%C3%A1!%20Vim%20pelo%20site%20ServGuia%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica."

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION PREMIUM (Responsivo Mobile & Desktop) */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1a365d 50%, #2b6cb0 100%)',
        color: 'white',
        padding: '3.5rem 1rem 4.5rem',
        position: 'relative',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* Badge de Autoridade */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#ecc94b',
            marginBottom: '1.25rem'
          }}>
            <ShieldCheck size={15} /> O Portal Oficial de Defesa e Carreira do Servidor Público
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: '900',
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            marginBottom: '1.25rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Seus Direitos Não Podem Ficar Presos na <span style={{ color: '#ecc94b', textDecoration: 'underline decoration-2 underline-offset-6' }}>Gaveta do RH</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '720px',
            margin: '0 auto 2rem'
          }}>
            Descubra quanto tempo falta para se aposentar no RPPS, destrave adicionais atrasados e acerte no protocolo de licenças com modelos prontos fundamentados no STF e STJ.
          </p>

          {/* Barra de Busca Interativa */}
          <HomeSearchBar />

          {/* Botões de Ação com Tamanho Proporcional (Mobile Friendly) */}
          <div className="hero-buttons-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem'
          }}>
            <Link 
              href="/ferramentas/calculadora-aposentadoria" 
              className="hero-cta-btn"
              style={{
                backgroundColor: '#ecc94b',
                color: '#1a202c',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              }}
            >
              <Calculator size={18} /> Simular Aposentadoria Grátis
            </Link>

            <Link 
              href="/produtos/kit-requerimentos" 
              className="hero-cta-btn"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.7)',
              }}
            >
              <FileText size={18} /> Modelos de Requerimentos
            </Link>
          </div>

          {/* Barra de Métricas Otimizada (Grid 4 col desktop / 2x2 mobile) */}
          <div className="hero-stats-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
            padding: '1.25rem',
            backgroundColor: 'rgba(0, 0, 0, 0.22)',
            borderRadius: '14px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)'
          }}>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ecc94b', lineHeight: '1.1' }}>+15.000</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Servidores Orientados</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ecc94b', lineHeight: '1.1' }}>40+ Guias</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Base STF / STJ</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ecc94b', lineHeight: '1.1' }}>100% Válido</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Prefeituras e Estados</div>
            </div>
            <div>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ecc94b', lineHeight: '1.1' }}>4.9 ★★★★★</div>
              <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', marginTop: '0.2rem' }}>Avaliação dos Modelos</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO DE EMPATIA: "QUAL É A SUA URGÊNCIA HOJE?" */}
      <section className="container" style={{ padding: '4rem 1rem 2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Soluções Práticas para o seu Cargo
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.35rem', marginBottom: '0.5rem' }}>
            Qual é a sua urgência na repartição hoje?
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
            Clique na sua situação para acessar o roteiro jurídico e o modelo de requerimento certo:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Card 1: Professor */}
          <Link href="/artigos/aposentadoria-professor-municipal" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #3182ce', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ebf8ff', color: '#2b6cb0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <GraduationCap size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Professor(a) Municipal e Estadual
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Redução constitucional de 5 anos de idade e contribuição, regras pós-reforma (EC 103) e paridade salarial.
              </p>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Ver Regras de Professores <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Card 2: Aposentadoria Geral RPPS */}
          <Link href="/ferramentas/calculadora-aposentadoria" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #ecc94b', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#fefcbf', color: '#975a16', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Calculator size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Calculadora de Aposentadoria RPPS
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Simule em segundos quantos anos faltam na Regra Permanente, Pontos ou Pedágio de 100%.
              </p>
              <span style={{ color: '#d69e2e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Calcular Tempo Restante <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Card 3: Defesa em Sindicância e PAD */}
          <Link href="/artigos/modelo-defesa-previa-sindicancia-pad" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #e53e3e', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#fff5f5', color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Scale size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Notificado em Sindicância ou PAD?
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Como montar Defesa Prévia, anular portarias genéricas, arguir prescrição e salvar seu cargo estável.
              </p>
              <span style={{ color: '#e53e3e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Acessar Guia de Defesa <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Card 4: Licença-Prêmio em Dinheiro */}
          <Link href="/artigos/conversao-licenca-premio-em-pecunia-dinheiro" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #38a169', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#22543d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Briefcase size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Licença-Prêmio em Dinheiro (Pecúnia)
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Receba indenização de meses não usufruídos sem imposto de renda antes dos 5 anos de prescrição (Tema 1.086 STJ).
              </p>
              <span style={{ color: '#38a169', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Como Cobrar da Prefeitura <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Card 5: Pais Atípicos - Redução de Jornada */}
          <Link href="/artigos/reducao-jornada-pais-atipicos" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #805ad5', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#faf5ff', color: '#6b46c1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Users size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Redução de Jornada (TEA / Filhos PCD)
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Redução de 30% a 50% da jornada sem corte salarial e sem compensar banco de horas (Tema 1.097 STF).
              </p>
              <span style={{ color: '#805ad5', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Ver Requisitos do Laudo <ChevronRight size={16} />
              </span>
            </div>
          </Link>

          {/* Card 6: Progressão Salarial & LRF */}
          <Link href="/artigos/progressao-funcional-travada-limite-lrf-como-destravar" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '1.75rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #dd6b20', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', borderRadius: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#fffaf0', color: '#c05621', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <TrendingUp size={24} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Progressão Travada pela LRF?
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                A prefeitura não pode usar limite da Lei de Responsabilidade Fiscal para congelar sua evolução (Tema 1.075 STJ).
              </p>
              <span style={{ color: '#dd6b20', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }}>
                Como Cobrar Atrasados <ChevronRight size={16} />
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. VITRINE DE PRODUTO REFORMULADA: ARSENAL JURÍDICO EM WORD (SEM FOTO QUADRADA, 100% DESIGN PREMIUM) */}
      <section style={{
        background: 'linear-gradient(135deg, #0e2238 0%, #173250 100%)',
        color: 'white',
        padding: '4.5rem 1rem',
        marginTop: '2rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            
            {/* Lado Esquerdo: Argumentação de Valor */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(236, 201, 75, 0.15)',
                color: '#ecc94b',
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '0.82rem',
                marginBottom: '1.25rem'
              }}>
                <Zap size={15} /> Economize Tempo e Honorários
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.25rem' }}>
                Chega de Esperar Boa Vontade do RH: Protocolize Pedidos <span style={{ color: '#ecc94b' }}>Blindados na Lei</span>
              </h2>

              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', opacity: '0.9', marginBottom: '1.75rem' }}>
                Muitas negativas no serviço público acontecem oralmente no balcão porque o servidor não apresenta o pedido por escrito com a fundamentação certa. Nossos modelos em Word vêm prontos para imprimir e protocolar.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 color="#ecc94b" size={20} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem' }}><strong>Modelos Editáveis em Word (.docx):</strong> Apenas preencha os dados e imprima.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 color="#ecc94b" size={20} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem' }}><strong>Jurisprudência Atualizada STF/STJ:</strong> Citações de teses que impedem negativas fáceis.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 color="#ecc94b" size={20} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem' }}><strong>Guia Prático Passo a Passo:</strong> Como autuar, protocolar e exigir número de processo.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <CheckCircle2 color="#ecc94b" size={20} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.95rem' }}><strong>Garantia de 7 Dias Hotmart:</strong> Satisfação garantida ou reembolso integral.</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link
                  href="/produtos/kit-requerimentos"
                  className="btn"
                  style={{
                    backgroundColor: '#ecc94b',
                    color: '#1a202c',
                    fontWeight: '800',
                    fontSize: '1rem',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    textDecoration: 'none'
                  }}
                >
                  Ver Todos os Planos (a partir de R$ 37,90)
                </Link>
                <Link 
                  href="/ferramentas/amostra-gratis"
                  style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', fontSize: '0.9rem' }}
                >
                  Baixar amostra gratuita
                </Link>
              </div>
            </div>

            {/* Lado Direito: Dashboard Visual de Alta Conversão (Sem foto estática!) */}
            <div style={{
              backgroundColor: '#10273f',
              border: '2px solid rgba(236, 201, 75, 0.4)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              {/* Badge Topo */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FolderArchive size={22} color="#ecc94b" />
                  <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#ffffff' }}>Kit Master VIP de Requerimentos</span>
                </div>
                <span style={{ backgroundColor: '#ecc94b', color: '#1a202c', padding: '0.2rem 0.6rem', borderRadius: '6px', fontSize: '0.72rem', fontWeight: '800' }}>
                  ⭐ MAIS VENDIDO
                </span>
              </div>

              {/* 4 Categorias Inclusas com Ícones */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ecc94b', marginBottom: '0.25rem' }}>⚖️ Sindicância & PAD</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Defesa Prévia + Recursos</div>
                </div>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ecc94b', marginBottom: '0.25rem' }}>💰 Financeiro</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Quinquênios e Insalubridade</div>
                </div>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ecc94b', marginBottom: '0.25rem' }}>🏖️ Licenças & Férias</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>Pecúnia e Indenizações</div>
                </div>
                <div style={{ padding: '0.8rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ecc94b', marginBottom: '0.25rem' }}>⏱️ Previdência</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>CTC Fracionada e Abono</div>
                </div>
              </div>

              {/* Bloco de Preço e Oferta */}
              <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '1.25rem', borderRadius: '12px', textAlign: 'center', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'line-through' }}>Valor avulso: R$ 281,90</span>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ecc94b', marginTop: '0.2rem' }}>
                  12x R$ 19,78 <span style={{ fontSize: '0.95rem', color: 'white', fontWeight: 'normal' }}>ou R$ 197 à vista</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: '#86efac', marginTop: '0.25rem' }}>
                  ✓ Acesso vitalício a todos os 20 modelos + atualizações
                </div>
              </div>

              {/* Botão de Compra Direto */}
              <a 
                href="https://pay.hotmart.com/Y106871849B" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%', 
                  backgroundColor: '#ecc94b', 
                  color: '#1a202c', 
                  fontWeight: '800', 
                  padding: '0.9rem', 
                  borderRadius: '8px',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(236,201,75,0.3)'
                }}
              >
                <Lock size={16} /> Comprar Kit Completo com Desconto
              </a>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '0.9rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                <span>🔒 Compra Segura Hotmart</span>
                <span>⚡ Entrega Imediata no E-mail</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE FERRAMENTAS GRATUITAS (ENGAJAMENTO & LEADS) */}
      <section className="container" style={{ padding: '4.5rem 1rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Acesso Livre
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.35rem' }}>
            Ferramentas Gratuitas para o seu Dia a Dia
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1rem', maxWidth: '600px', margin: '0.35rem auto 0' }}>
            Simule regras previdenciárias e crie requerimentos sem gastar nada:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2rem', 
            borderRadius: '14px', 
            border: '2px solid var(--secondary-color)', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#ebf8ff', color: '#2b6cb0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Calculator size={24} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Calculadora de Aposentadoria RPPS
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Atualizada para a EC 103/2019. Compara regra permanente, pontos e pedágio 100% com paridade salarial.
            </p>
            <Link href="/ferramentas/calculadora-aposentadoria" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '8px', fontSize: '0.92rem' }}>
              Acessar Calculadora Grátis
            </Link>
          </div>

          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2rem', 
            borderRadius: '14px', 
            border: '1px solid var(--border-color)', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#22543d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <FileText size={24} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Gerador de Requerimento em PDF
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Preencha seus dados online e gere na hora um documento administrativo em PDF para protocolar no RH.
            </p>
            <Link href="/ferramentas/gerador-requerimento" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '8px', fontSize: '0.92rem', backgroundColor: '#059669' }}>
              Gerar PDF Grátis
            </Link>
          </div>

          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2rem', 
            borderRadius: '14px', 
            border: '1px solid var(--border-color)', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#fefcbf', color: '#975a16', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
              <Download size={24} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Amostra Grátis em Word (.docx)
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              Baixe gratuitamente nosso pacote de amostra para você conferir a estrutura jurídica das nossas peças.
            </p>
            <Link href="/ferramentas/amostra-gratis" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.75rem', borderRadius: '8px', fontSize: '0.92rem', backgroundColor: '#d69e2e' }}>
              Baixar Pacote de Amostra
            </Link>
          </div>

        </div>
      </section>

      {/* 5. ARTIGOS RECENTES & GUIAS MAIS LIDOS (SEO & CONFIANÇA) */}
      <section style={{ backgroundColor: '#edf2f7', padding: '4.5rem 1rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            <div>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Biblioteca Jurídica
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.25rem' }}>
                Artigos e Guias em Destaque
              </h2>
            </div>
            <Link href="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
              Ver todos os 40+ artigos <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {articles.map((art) => (
              <Link key={art.slug} href={`/artigos/${art.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  borderRadius: '14px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s'
                }}>
                  {art.image && (
                    <div style={{ position: 'relative', width: '100%', height: '170px' }}>
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '0.4rem', display: 'flex', gap: '0.75rem' }}>
                      <span>📅 {art.date}</span>
                      <span>⏱️ {art.readTime || 5} min</span>
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '0.5rem', flex: 1 }}>
                      {art.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.88rem', lineHeight: '1.6', marginBottom: '0.75rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {art.description}
                    </p>
                    <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Ler artigo completo <ArrowRight size={15} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DEPOIMENTOS REAIS: PROVA SOCIAL */}
      <section className="container" style={{ padding: '4.5rem 1rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quem Já Usou Recomenda
          </span>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.35rem' }}>
            O que dizem os servidores públicos
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.75rem', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '0.75rem' }}>
              <Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.92rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.25rem' }}>
              "O RH da minha prefeitura disse que eu não tinha direito à redução de carga horária para o tratamento do meu filho com autismo. Protocolamos o modelo do ServGuia com o Tema 1.097 do STF e em 15 dias a portaria foi publicada sem corte salarial."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', fontSize: '0.95rem', display: 'block' }}>Luciana M.</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Enfermeira Estatutária Municipal</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.75rem', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '0.75rem' }}>
              <Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.92rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.25rem' }}>
              "Eu ia pagar quase R$ 2.000 para um advogado particular fazer uma defesa simples em sindicância. O modelo de defesa prévia do Kit PAD do ServGuia tinha todas as preliminares de nulidade. A comissão arquivou o processo preliminarmente."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', fontSize: '0.95rem', display: 'block' }}>Marcos T.</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Guarda Municipal</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.75rem', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '0.75rem' }}>
              <Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} /><Star fill="#ecc94b" size={16} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.92rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1.25rem' }}>
              "Me aposentei e a prefeitura queria engolir 2 períodos de licença-prêmio que nunca pude tirar por falta de professor substituto. Com o requerimento do kit, recebi mais de R$ 32.000 em pecúnia sem pagar imposto de renda."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', fontSize: '0.95rem', display: 'block' }}>Renata C.</strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Professora Aposentada da Rede Estadual</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA FINAL ENCAPSULADO (SEM BOTÕES FLUTUANDO SOBRE O RODAPÉ) */}
      <section className="container" style={{ padding: '0 1rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#0f2742', 
          color: 'white', 
          padding: '3rem 1.5rem', 
          borderRadius: '16px',
          textAlign: 'center',
          border: '1px solid rgba(236, 201, 75, 0.3)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <AlertTriangle size={36} color="#ecc94b" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '800', marginBottom: '0.75rem' }}>
            Não Deixe Seus Direitos Prescreverem em 5 Anos
          </h2>
          <p style={{ fontSize: '1rem', color: '#cbd5e0', lineHeight: '1.6', maxWidth: '640px', margin: '0 auto 2rem' }}>
            No serviço público, quem não requer formalmente perde adicionais, férias e dinheiro todos os meses. Garanta seus requerimentos jurídicos agora.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            <Link 
              href="/produtos/kit-requerimentos" 
              className="btn"
              style={{
                backgroundColor: '#ecc94b',
                color: '#1a202c',
                fontWeight: '800',
                padding: '0.85rem 1.75rem',
                borderRadius: '8px',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              Conhecer Kit de Requerimentos
            </Link>
            <a 
              href={whatsappAdv} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#e53e3e',
                color: 'white',
                fontWeight: '700',
                padding: '0.85rem 1.5rem',
                borderRadius: '8px',
                fontSize: '0.95rem',
                textDecoration: 'none'
              }}
            >
              Falar com Advogado
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
