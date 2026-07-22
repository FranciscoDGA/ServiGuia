'use client'
import Link from 'next/link'
import { CheckCircle, ShieldCheck, Clock, FileText, Star, AlertTriangle } from 'lucide-react'

export default function KitRequerimentos() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem', fontFamily: 'var(--font-inter)' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', color: 'white', padding: '5rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
            <AlertTriangle size={18} color="#ecc94b" />
            <span>Atenção Servidor Público: Pare de perder dinheiro!</span>
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800' }}>
            Não pague <span style={{ color: '#ecc94b' }}>R$ 1.500</span> para um advogado protocolar um pedido simples no seu RH.
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
            O <strong>Kit Premium de Requerimentos Administrativos</strong> te dá o poder de exigir seus direitos de forma autônoma, rápida e 100% fundamentada na lei. Copie, cole, preencha e assine.
          </p>
          <a href="#comprar" className="btn" style={{ backgroundColor: '#ecc94b', color: '#1a202c', fontSize: '1.3rem', padding: '1.2rem 3rem', textTransform: 'uppercase', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s' }}>
            Quero Acessar o Kit Agora
          </a>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>Compra 100% segura. Acesso imediato aos arquivos em Word (.docx).</p>
        </div>
      </section>

      {/* Dores (Por que comprar?) */}
      <section className="container" style={{ padding: '5rem 2rem', maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #e53e3e', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#e53e3e', marginBottom: '1rem' }}>Tempo Perdido</h3>
            <p style={{ color: 'var(--text-light)' }}>Chegar no RH e não saber como pedir o que é seu por direito. Ficar dias esperando a prefeitura lhe dar um modelo que nunca chega.</p>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #ecc94b', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#d69e2e', marginBottom: '1rem' }}>Dinheiro Jogado Fora</h3>
            <p style={{ color: 'var(--text-light)' }}>Contratar um advogado administrativista apenas para escrever uma petição de licença-prêmio que você mesmo poderia fazer em 5 minutos.</p>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #38a169', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#38a169', marginBottom: '1rem' }}>Direitos Negados</h3>
            <p style={{ color: 'var(--text-light)' }}>Ter processos indeferidos porque o pedido foi feito "de boca" ou sem a devida fundamentação jurídica escrita.</p>
          </div>
        </div>
      </section>

      {/* Benefícios e O que vem no Kit */}
      <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
            O que você vai receber imediatamente?
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Recurso contra Avaliação de Desempenho no Estágio Probatório', desc: 'Evite a reprovação injusta com fundamentação em princípios constitucionais.' },
              { title: 'Requerimento de Licença-Prêmio em Dinheiro', desc: 'Modelo pronto exigindo a conversão em pecúnia baseado na jurisprudência do STF.' },
              { title: 'Defesa Prévia para Processo Administrativo (PAD)', desc: 'Modelo emergencial para os primeiros 10 dias após a citação, blindando seus direitos.' },
              { title: 'Requerimento de Adicional de Insalubridade e Periculosidade', desc: 'Peça a emissão imediata do laudo LTCAT no seu setor para garantir o adicional.' },
              { title: 'Pedido de Indenização por Desvio de Função', desc: 'Cobre os retroativos da diferença salarial por estar exercendo cargo de nível superior.' },
              { title: 'Requerimento de Redução de Jornada (Pais de Atípicos)', desc: 'Garanta a redução de carga horária sem perda salarial para cuidar de dependentes.' }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', background: 'var(--bg-color)', padding: '1.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
                <div style={{ backgroundColor: 'rgba(43, 108, 176, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <FileText size={28} color="var(--primary-color)" />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.3rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container" style={{ padding: '5rem 2rem', maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '3rem' }}>O que os servidores dizem:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { name: 'Marcos T., Guarda Municipal', text: 'Eu ia pagar 2 mil pro advogado fazer minha defesa no PAD. O modelo do kit salvou minha vida e meu bolso.' },
            { name: 'Ana P., Enfermeira', text: 'Usei o modelo de insalubridade, protocolei no RH e no mês seguinte a portaria já saiu. Muito prático!' },
            { name: 'Roberto S., Analista', text: 'Os modelos vêm certinhos no Word. Foi só trocar o nome da prefeitura e meus dados. Recomendo a todos.' }
          ].map((test, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#ecc94b" color="#ecc94b" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '1rem' }}>"{test.text}"</p>
              <p style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{test.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preço, CTA e Garantia */}
      <section id="comprar" className="container" style={{ padding: '2rem', maxWidth: '700px' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '20px', padding: '3rem', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '2px solid var(--secondary-color)' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '1rem', fontWeight: '800' }}>Libere Seu Acesso Imediato</h3>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>Receba agora todos os arquivos editáveis em Word no seu e-mail.</p>
          
          <div style={{ background: 'var(--bg-color)', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
            <p style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '1.2rem' }}>Preço normal: R$ 197,00</p>
            <p style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--secondary-color)', margin: '0.5rem 0', lineHeight: '1' }}>
              <span style={{ fontSize: '2rem', verticalAlign: 'top' }}>R$</span>47<span style={{ fontSize: '1.5rem' }}>,00</span>
            </p>
            <p style={{ color: 'var(--text-light)', fontWeight: 'bold' }}>Pagamento único. Acesso vitalício.</p>
          </div>
          
          <a href="/Kit-Requerimentos-Premium.zip" download className="btn" style={{ display: 'block', width: '100%', fontSize: '1.5rem', padding: '1.5rem', backgroundColor: '#38a169', color: 'white', fontWeight: 'bold', borderRadius: '12px', boxShadow: '0 10px 20px rgba(56, 161, 105, 0.3)', marginBottom: '1.5rem', textDecoration: 'none' }}>
            Comprar Agora via PIX (Baixar Amostra)
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
