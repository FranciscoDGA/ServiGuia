import Link from 'next/link'
import Image from 'next/image'
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
  BookOpen,
  Sparkles,
  ChevronRight
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
      
      {/* 1. HERO SECTION PREMIUM */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1a365d 50%, #2b6cb0 100%)',
        color: 'white',
        padding: '5rem 1.5rem 6rem',
        position: 'relative',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          
          {/* Badge de Autoridade */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.45rem 1.25rem',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#ecc94b',
            marginBottom: '1.75rem'
          }}>
            <ShieldCheck size={16} /> O Portal Oficial de Defesa e Carreira do Servidor Público
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: '900',
            lineHeight: '1.15',
            letterSpacing: '-0.5px',
            marginBottom: '1.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Seus Direitos Não Podem Ficar Presos na <span style={{ color: '#ecc94b', textDecoration: 'underline decoration-2 underline-offset-8' }}>Gaveta do RH</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '780px',
            margin: '0 auto 2.5rem'
          }}>
            Descubra quanto tempo falta para se aposentar no RPPS, destrave adicionais salariais atrasados e acerte no protocolo de licenças com modelos jurídicos prontos e fundamentados no STF e STJ.
          </p>

          {/* Barra de Busca Interativa */}
          <HomeSearchBar />

          {/* Botões de Ação Imediata */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem'
          }}>
            <Link 
              href="/ferramentas/calculadora-aposentadoria" 
              className="btn"
              style={{
                backgroundColor: '#ecc94b',
                color: '#1a202c',
                fontWeight: 'bold',
                padding: '0.95rem 2rem',
                borderRadius: '50px',
                fontSize: '1.05rem',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <Calculator size={20} /> Simular Minha Aposentadoria Grátis
            </Link>

            <Link 
              href="/produtos/kit-requerimentos" 
              className="btn"
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.8)',
                fontWeight: 'bold',
                padding: '0.95rem 2rem',
                borderRadius: '50px',
                fontSize: '1.05rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <FileText size={20} /> Ver Modelos do Kit de Requerimentos
            </Link>
          </div>

          {/* Barra de Prova Social e Números */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ecc94b' }}>+15.000</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>Servidores Orientados</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ecc94b' }}>40+ Guias</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>Jurisprudência STF / STJ</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ecc94b' }}>100% Válido</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>Em Prefeituras e Estados</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ecc94b' }}>4.9 ★★★★★</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.8)' }}>Avaliação dos Modelos</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO DE EMPATIA: "QUAL É A SUA URGÊNCIA HOJE?" */}
      <section className="container" style={{ padding: '5rem 1.5rem 3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Soluções Práticas para o seu Cargo
          </span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Qual é a sua urgência na repartição hoje?
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Não passe anos esperando o RH agir de boa vontade. Clique na sua situação para ver o roteiro legal e o modelo certo:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Card 1: Professor */}
          <Link href="/artigos/aposentadoria-professor-municipal" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #3182ce', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#ebf8ff', color: '#2b6cb0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <GraduationCap size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Professor(a) Municipal e Estadual
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Entenda a redução constitucional de 5 anos de idade e contribuição, regras pós-reforma (EC 103) e cálculo da integralidade do magistério.
              </p>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Ver Regras de Professores <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card 2: Aposentadoria Geral RPPS */}
          <Link href="/ferramentas/calculadora-aposentadoria" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #ecc94b', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#fefcbf', color: '#975a16', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Calculator size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Calculadora de Aposentadoria RPPS
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Simule em segundos quantos anos faltam na Regra Permanente, Regra por Pontos ou no Pedágio de 100% com Paridade Salarial.
              </p>
              <span style={{ color: '#d69e2e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Calcular Tempo Restante <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card 3: Defesa em Sindicância e PAD */}
          <Link href="/artigos/modelo-defesa-previa-sindicancia-pad" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #e53e3e', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#fff5f5', color: '#e53e3e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Scale size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Notificado em Sindicância ou PAD?
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Saiba como montar sua Defesa Prévia, anular portarias genéricas, arguir prescrição de faltas e proteger sua estabilidade funcional.
              </p>
              <span style={{ color: '#e53e3e', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Acessar Guia de Defesa <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card 4: Licença-Prêmio em Dinheiro */}
          <Link href="/artigos/conversao-licenca-premio-em-pecunia-dinheiro" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #38a169', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#22543d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Briefcase size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Licença-Prêmio em Dinheiro (Pecúnia)
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Vai se aposentar e acumulou períodos de licença? Receba até R$ 60.000 em indenização sem IR com base no Tema 1.086 do STJ.
              </p>
              <span style={{ color: '#38a169', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Como Cobrar da Prefeitura <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card 5: Pais Atípicos - Redução de Jornada */}
          <Link href="/artigos/reducao-jornada-pais-atipicos" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #805ad5', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#faf5ff', color: '#6b46c1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Users size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Redução de Jornada (TEA / Filhos com Deficiência)
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Conquiste a redução de 30% a 50% da carga horária para acompanhar terapias sem corte salarial e sem compensar banco de horas (Tema 1.097 STF).
              </p>
              <span style={{ color: '#805ad5', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Ver Requisitos do Laudo <ChevronRight size={18} />
              </span>
            </div>
          </Link>

          {/* Card 6: Progressão Salarial & LRF */}
          <Link href="/artigos/progressao-funcional-travada-limite-lrf-como-destravar" style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', padding: '2rem', display: 'flex', flexDirection: 'column', borderTop: '4px solid #dd6b20', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', backgroundColor: '#fffaf0', color: '#c05621', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <TrendingUp size={28} />
              </div>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Progressão Travada pela LRF?
              </h3>
              <p style={{ color: 'var(--text-light)', flex: 1, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                A prefeitura não pode usar a Lei de Responsabilidade Fiscal para congelar sua evolução por tempo ou pós-graduação (Tema 1.075 STJ).
              </p>
              <span style={{ color: '#dd6b20', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.95rem' }}>
                Como Destravar e Cobrar Atrasados <ChevronRight size={18} />
              </span>
            </div>
          </Link>

        </div>
      </section>

      {/* 3. VITRINE DE PRODUTO: KIT PREMIUM DE REQUERIMENTOS (O MOTOR DE VENDAS) */}
      <section style={{
        background: 'linear-gradient(135deg, #102a43 0%, #1a365d 100%)',
        color: 'white',
        padding: '5rem 1.5rem',
        marginTop: '3rem'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Lado Esquerdo: Pitch de Vendas Direto */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(236, 201, 75, 0.2)',
                color: '#ecc94b',
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '0.85rem',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={16} /> O Fim da Enrolação no RH
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: '900', lineHeight: '1.2', marginBottom: '1.5rem' }}>
                Não Pague R$ 1.500 para um Advogado Protocolar um <span style={{ color: '#ecc94b' }}>Pedido Simples</span>
              </h2>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.7', opacity: '0.9', marginBottom: '2rem' }}>
                Tenha em mãos o arsenal completo de <strong>20 requerimentos administrativos em formato Word (.docx)</strong> prontos para você preencher o nome da sua prefeitura, imprimir e protocolar amanhã de manhã.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 color="#ecc94b" size={22} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem' }}><strong>Modelos 100% Editáveis:</strong> Troque os dados e protocole sem burocracia.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 color="#ecc94b" size={22} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem' }}><strong>Fundamentação Blindada:</strong> Citações expressas da CF/88, STF e STJ.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 color="#ecc94b" size={22} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem' }}><strong>Guia de Preenchimento Passo a Passo</strong> incluso como bônus gratuito.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 color="#ecc94b" size={22} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1rem' }}><strong>Garantia Incondicional de 7 Dias:</strong> Satisfação ou reembolso via Hotmart.</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <Link
                  href="/produtos/kit-requerimentos"
                  className="btn"
                  style={{
                    backgroundColor: '#ecc94b',
                    color: '#1a202c',
                    fontWeight: '900',
                    fontSize: '1.15rem',
                    padding: '1.1rem 2.5rem',
                    borderRadius: '50px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
                    textDecoration: 'none'
                  }}
                >
                  Ver Planos a partir de R$ 37,90
                </Link>
                <Link 
                  href="/ferramentas/amostra-gratis"
                  style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'underline', fontSize: '0.95rem' }}
                >
                  Baixar amostra grátis primeiro
                </Link>
              </div>
            </div>

            {/* Lado Direito: Mockup Visual e Card de Preço */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '420px', aspectRatio: '1/1', marginBottom: '1.5rem' }}>
                <Image 
                  src="/kit_mockup.png" 
                  alt="Kit Premium de Requerimentos para Servidores" 
                  fill 
                  style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
                  priority
                />
              </div>

              {/* Destaque do Kit Master VIP */}
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                backdropFilter: 'blur(10px)', 
                border: '1px solid rgba(236,201,75,0.5)', 
                borderRadius: '16px', 
                padding: '1.5rem', 
                textAlign: 'center',
                width: '100%',
                maxWidth: '380px'
              }}>
                <div style={{ fontSize: '0.85rem', color: '#ecc94b', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  ⭐ Pacote Mais Escolhido por Servidores
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', marginTop: '0.25rem' }}>Kit Master VIP Completo</div>
                <div style={{ fontSize: '2rem', fontWeight: '900', color: '#ecc94b', margin: '0.5rem 0' }}>
                  12x R$ 19,78 <span style={{ fontSize: '1rem', color: 'white', fontWeight: 'normal' }}>ou R$ 197 à vista</span>
                </div>
                <a 
                  href="https://pay.hotmart.com/Y106871849B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{ 
                    display: 'block', 
                    width: '100%', 
                    backgroundColor: '#ecc94b', 
                    color: '#1a202c', 
                    fontWeight: 'bold', 
                    padding: '0.85rem', 
                    borderRadius: '8px',
                    textDecoration: 'none'
                  }}
                >
                  Garantir Acesso Imediato
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEÇÃO DE FERRAMENTAS GRATUITAS (ENGAJAMENTO & LEADS) */}
      <section className="container" style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Sem Burocracia
          </span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.5rem' }}>
            Ferramentas Gratuitas para o seu Dia a Dia
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '650px', margin: '0.5rem auto 0' }}>
            Crie documentos em PDF e simule regras previdenciárias sem pagar nada:
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2.5rem', 
            borderRadius: '16px', 
            border: '2px solid var(--secondary-color)', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#ebf8ff', color: '#2b6cb0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Calculator size={28} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Calculadora de Aposentadoria RPPS
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Atualizada para a EC 103/2019. Compara na hora a regra geral permanente, regra de pontos e o pedágio de 100% para homens, mulheres e <strong>professores municipais</strong>.
            </p>
            <Link href="/ferramentas/calculadora-aposentadoria" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.9rem' }}>
              Acessar Calculadora Grátis
            </Link>
          </div>

          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2.5rem', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#f0fdf4', color: '#22543d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <FileText size={28} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Gerador de Requerimento em PDF
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Preencha seus dados online e gere um requerimento administrativo profissional pronto para imprimir, assinar e protocolar na sua repartição.
            </p>
            <Link href="/ferramentas/gerador-requerimento" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.9rem', backgroundColor: '#059669' }}>
              Gerar PDF Grátis
            </Link>
          </div>

          <div style={{ 
            backgroundColor: 'var(--card-bg)', 
            padding: '2.5rem', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#fefcbf', color: '#975a16', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Download size={28} />
            </div>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
              Amostra Grátis em Word (.docx)
            </h3>
            <p style={{ color: 'var(--text-light)', flex: 1, lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Baixe gratuitamente nosso pacote de amostra com modelos editáveis em Word para você conferir a estrutura jurídica das nossas peças.
            </p>
            <Link href="/ferramentas/amostra-gratis" className="btn btn-primary" style={{ textAlign: 'center', padding: '0.9rem', backgroundColor: '#d69e2e' }}>
              Baixar Pacote de Amostra
            </Link>
          </div>

        </div>
      </section>

      {/* 5. ARTIGOS RECENTES & GUIAS MAIS LIDOS (SEO & CONFIANÇA) */}
      <section style={{ backgroundColor: '#edf2f7', padding: '5rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <div>
              <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Biblioteca Jurídica
              </span>
              <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.25rem' }}>
                Guias e Artigos Mais Acessados
              </h2>
            </div>
            <Link href="/blog" style={{ color: 'var(--secondary-color)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '1.05rem' }}>
              Ver todos os 40+ artigos <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {articles.map((art) => (
              <Link key={art.slug} href={`/artigos/${art.slug}`} style={{ textDecoration: 'none' }}>
                <article style={{ 
                  backgroundColor: 'var(--card-bg)', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s'
                }}>
                  {art.image && (
                    <div style={{ position: 'relative', width: '100%', height: '180px' }}>
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                  )}
                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'flex', gap: '0.75rem' }}>
                      <span>📅 {art.date}</span>
                      <span>⏱️ {art.readTime || 5} min</span>
                    </div>
                    <h3 style={{ color: 'var(--primary-color)', fontSize: '1.15rem', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '0.75rem', flex: 1 }}>
                      {art.title}
                    </h3>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {art.description}
                    </p>
                    <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Ler artigo completo <ArrowRight size={16} />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. DEPOIMENTOS REAIS: PROVA SOCIAL */}
      <section className="container" style={{ padding: '5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quem Já Usou Recomenda
          </span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-color)', fontWeight: '800', marginTop: '0.5rem' }}>
            O que os servidores públicos dizem do ServGuia
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          
          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '1rem' }}>
              <Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.98rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "O RH da minha prefeitura disse que eu não tinha direito à redução de carga horária para o tratamento do meu filho com autismo. Protocolamos o modelo do ServGuia com o Tema 1.097 do STF e em 15 dias a portaria foi publicada sem nenhum corte salarial."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', display: 'block' }}>Luciana M.</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Enfermeira Estatutária Municipal</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '1rem' }}>
              <Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.98rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Eu ia pagar quase R$ 2.000 para um advogado particular fazer uma defesa simples em sindicância. O modelo de defesa prévia do Kit PAD do ServGuia tinha todas as preliminares de nulidade. A comissão arquivou o processo preliminarmente."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', display: 'block' }}>Marcos T.</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Guarda Municipal</span>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--card-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', gap: '0.2rem', color: '#ecc94b', marginBottom: '1rem' }}>
              <Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} /><Star fill="#ecc94b" size={18} />
            </div>
            <p style={{ color: 'var(--text-color)', fontSize: '0.98rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "Me aposentei e a prefeitura queria engolir 2 períodos de licença-prêmio que nunca pude tirar por falta de professor substituto. Com o requerimento do kit, recebi mais de R$ 32.000 em pecúnia sem pagar imposto de renda."
            </p>
            <div>
              <strong style={{ color: 'var(--primary-color)', display: 'block' }}>Renata C.</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Professora Aposentada da Rede Estadual</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA FINAL DE ALTA CONVERSÃO */}
      <section style={{ 
        backgroundColor: '#1a202c', 
        color: 'white', 
        padding: '5rem 1.5rem', 
        textAlign: 'center',
        borderTop: '4px solid #ecc94b'
      }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <AlertTriangle size={48} color="#ecc94b" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', marginBottom: '1rem' }}>
            Não Deixe Seus Direitos Prescreverem em 5 Anos
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e0', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            No serviço público, a inércia é o maior aliado da má gestão. Quem não requer formalmente perde adicionais, férias e dinheiro todos os meses.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <Link 
              href="/produtos/kit-requerimentos" 
              className="btn"
              style={{
                backgroundColor: '#ecc94b',
                color: '#1a202c',
                fontWeight: '900',
                padding: '1.1rem 2.5rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}
            >
              Conhecer o Kit de Requerimentos
            </Link>
            <a 
              href={whatsappAdv} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: '#e53e3e',
                color: 'white',
                fontWeight: 'bold',
                padding: '1.1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                textDecoration: 'none'
              }}
            >
              Falar com Advogado Parceiro
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
