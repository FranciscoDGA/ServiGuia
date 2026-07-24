'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, FileText, Star, AlertTriangle, CheckCircle2, Crown } from 'lucide-react'

export default function KitRequerimentos() {
  const allForms = [
    { cat: "Direitos Financeiros", items: ["Adicional por Tempo de Serviço (Anuênio/Quinquênio)", "Progressão/Promoção Funcional", "Adicional de Insalubridade/Periculosidade", "Pagamento de Férias Não Gozadas (Indenização)", "Restituição de Descontos Indevidos"] },
    { cat: "Licenças e Afastamentos", items: ["Concessão de Licença-Prêmio", "Conversão de Licença-Prêmio em Pecúnia", "Licença para Capacitação / Mestrado", "Licença para Tratamento de Saúde (Prorrogação)", "Licença para Acompanhar Pessoa da Família Doente"] },
    { cat: "Sindicância e PAD", items: ["Defesa Prévia (Sindicância / PAD)", "Cópia Integral de Processo Administrativo", "Recurso Administrativo contra Punição", "Pedido de Reconsideração de Ato Administrativo"] },
    { cat: "Aposentadoria e Previdência", items: ["Averbação de Tempo de Contribuição", "Certidão de Tempo de Contribuição (CTC)", "Abono de Permanência", "Aposentadoria Voluntária por Idade/Tempo"] },
    { cat: "Dia a Dia e Jornada", items: ["Redução de Jornada (Filho com Deficiência)", "Alteração de Lotação / Remoção"] }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem', fontFamily: 'var(--font-inter)' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', color: 'white', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 2 }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
              <AlertTriangle size={18} color="#ecc94b" />
              <span>Atenção Servidor Público: Pare de perder dinheiro!</span>
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800' }}>
              Não pague <span style={{ color: '#ecc94b' }}>R$ 1.500</span> para um advogado protocolar um pedido simples.
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '800px' }}>
              Os <strong>Kits de Requerimentos ServGuia</strong> te dão o poder de exigir seus direitos de forma autônoma. Diferente de modelos genéricos da internet, estes são os mesmos formulários fundamentados na Lei e no STF que advogados usam contra os RHs de Prefeituras e Estados.
            </p>
            <a href="#planos" className="btn" style={{ backgroundColor: '#ecc94b', color: '#1a202c', fontSize: '1.2rem', padding: '1.2rem 3rem', textTransform: 'uppercase', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s', display: 'inline-block' }}>
              Ver Todos os Pacotes
            </a>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/ferramentas/amostra-gratis" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', fontSize: '0.95rem' }}>
                Ainda não tem certeza? Baixe uma amostra grátis primeiro.
              </Link>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1/1' }}>
              <Image 
                src="/kit_mockup.png" 
                alt="Kit Premium de Requerimentos" 
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="container" style={{ padding: '5rem 2rem', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
          Por que você não acha isso no Google?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #e53e3e', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#e53e3e', marginBottom: '1rem' }}>Prefeituras Escondem o Jogo</h3>
            <p style={{ color: 'var(--text-light)' }}>Cada RH tem sua regra, mas a Constituição é uma só. Requerimentos sem a devida fundamentação legal são automaticamente indeferidos ou ignorados por meses.</p>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #ecc94b', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#d69e2e', marginBottom: '1rem' }}>Modelos Genéricos Falham</h3>
            <p style={{ color: 'var(--text-light)' }}>O que você acha solto na internet serve para empresas privadas. No Direito Administrativo, se você não citar a lei e o STF, seu direito é negado.</p>
          </div>
        </div>
      </section>

      {/* Pricing / Planos */}
      <section id="planos" style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '800' }}>
            Escolha o Pacote Ideal para Você
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Todos os arquivos são em formato Word (.docx), 100% editáveis. Acesso Vitalício.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
            
            {/* Plano 1 */}
            <div style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#4a5568', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Básico</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Focado no dia a dia, férias e licenças comuns.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>R$ 37</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,90</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#38a169" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>5 Formulários de Licenças</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#38a169" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Abonos e Jornada</span></li>
              </ul>
              <a href="#link-hotmart-basico" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#e2e8f0', color: '#4a5568', fontWeight: 'bold' }}>Quero o Básico</a>
            </div>

            {/* Plano 2 */}
            <div style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#2b6cb0', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Financeiro</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Retorno imediato: Insalubridade, Quinquênio e Atrasados.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#2b6cb0' }}>R$ 97</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>7 Formulários Financeiros e Previdenciários</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Não pague 30% a advogados</span></li>
              </ul>
              <a href="#link-hotmart-financeiro" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#ebf8ff', color: '#2b6cb0', fontWeight: 'bold' }}>Quero o Financeiro</a>
            </div>

            {/* Plano 3 */}
            <div style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#e53e3e', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Defesa PAD</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Sindicância e Processos Administrativos. Salve seu emprego.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#e53e3e' }}>R$ 147</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#e53e3e" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Defesa Prévia, Recursos e Pedido de Cópia</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#e53e3e" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Fundamentação no STF</span></li>
              </ul>
              <a href="#link-hotmart-pad" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#fff5f5', color: '#e53e3e', fontWeight: 'bold' }}>Quero o de Defesa</a>
            </div>

            {/* Plano VIP (Destaque) */}
            <div style={{ background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', padding: '2.5rem 2rem', borderRadius: '20px', border: '2px solid #ecc94b', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', height: '100%', transform: 'scale(1.05)', position: 'relative', zIndex: 10 }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ecc94b', color: '#1a202c', padding: '0.2rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Crown size={14} /> MAIS VENDIDO
              </div>
              <h3 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Kit Master VIP</h3>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>O Arsenal Completo. Todos os 20 documentos por um valor único.</p>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ textDecoration: 'line-through', color: '#718096', fontSize: '0.9rem', margin: 0 }}>Se comprados separados: R$ 281,90</p>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: '#ecc94b' }}>R$ 197</span><span style={{ fontSize: '1.2rem', color: '#a0aec0' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: 'white' }}><strong>Todos os 20 Formulários</strong></span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>Kit Básico + Kit Financeiro + Kit PAD</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>Acesso Imediato</span></li>
              </ul>
              <a href="#link-hotmart-vip" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#ecc94b', color: '#1a202c', fontWeight: 'bold', fontSize: '1.2rem', padding: '1rem' }}>
                COMPRAR KIT COMPLETO
              </a>
            </div>

          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-light)', marginTop: '4rem' }}>
            <ShieldCheck size={20} color="#38a169" />
            <span>Pagamento 100% Seguro. Garantia Incondicional de 7 dias em todos os planos.</span>
          </div>
        </div>
      </section>

    </div>
  )
}
