'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, FileText, Star, AlertTriangle, Download } from 'lucide-react'

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
              O <strong>Kit Premium de Requerimentos</strong> te dá o poder de exigir seus direitos de forma autônoma. Diferente de modelos genéricos da internet, estes são os mesmos formulários fundamentados que advogados usam contra os RHs de Prefeituras e Estados.
            </p>
            <a href="#comprar" className="btn" style={{ backgroundColor: '#ecc94b', color: '#1a202c', fontSize: '1.2rem', padding: '1.2rem 3rem', textTransform: 'uppercase', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s', display: 'inline-block' }}>
              Quero Acessar o Kit Completo
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

      {/* Lista de Documentos */}
      <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>
            Os 20 Modelos que Você Receberá
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.2rem' }}>
            Todos em formato Word (.docx), 100% editáveis e prontos para preencher e assinar.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {allForms.map((category, idx) => (
              <div key={idx} style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem' }}>
                  {category.cat}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-color)' }}>
                      <FileText size={18} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preço, CTA e Garantia */}
      <section id="comprar" className="container" style={{ padding: '5rem 2rem', maxWidth: '700px' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '3rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '2px solid var(--secondary-color)' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '2.2rem', marginBottom: '1rem', fontWeight: '800' }}>Libere Seu Acesso Imediato</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>Receba agora todos os 20 arquivos editáveis no seu e-mail.</p>
          
          <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <p style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '1.2rem' }}>Valor de um advogado: R$ 1.500+</p>
            <p style={{ fontSize: '4.5rem', fontWeight: '900', color: 'var(--secondary-color)', margin: '0.5rem 0', lineHeight: '1' }}>
              <span style={{ fontSize: '2rem', verticalAlign: 'top' }}>R$</span>47<span style={{ fontSize: '1.5rem' }}>,00</span>
            </p>
            <p style={{ color: 'var(--text-light)', fontWeight: 'bold' }}>Pagamento único. Acesso vitalício.</p>
          </div>
          
          <a href="#link-da-hotmart-aqui" className="btn" style={{ display: 'block', width: '100%', fontSize: '1.5rem', padding: '1.5rem', backgroundColor: '#38a169', color: 'white', fontWeight: 'bold', borderRadius: '12px', boxShadow: '0 10px 20px rgba(56, 161, 105, 0.3)', marginBottom: '1.5rem', textDecoration: 'none' }}>
            Comprar Agora (Acesso Imediato)
          </a>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
            <ShieldCheck size={20} color="#38a169" />
            <span>Compra 100% Segura. Garantia Incondicional de 7 dias.</span>
          </div>
        </div>
      </section>
    </div>
  )
}
