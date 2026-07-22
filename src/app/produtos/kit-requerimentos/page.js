'use client'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function KitRequerimentos() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            Não pague R$ 1.500 para um advogado protocolar um pedido simples no RH.
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem' }}>
            O <strong>Kit Premium de Requerimentos e Recursos Administrativos</strong> contém todos os modelos em Word (.docx) que você precisa para garantir seus direitos na prefeitura.
          </p>
          <a href="#comprar" className="btn btn-accent" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', textTransform: 'uppercase' }}>
            Quero Acessar o Kit Agora
          </a>
        </div>
      </section>

      {/* Benefícios */}
      <section className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2rem' }}>
          O que você vai receber?
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            'Modelo de Recurso contra Avaliação de Desempenho no Estágio Probatório.',
            'Modelo de Requerimento de Conversão de Licença-Prêmio em Pecúnia.',
            'Modelo de Defesa Prévia para Processo Administrativo (PAD).',
            'Requerimento de Adicional de Insalubridade/Periculosidade com pedido de Laudo.',
            'Pedido de Aposentadoria e Simulação no RPPS.',
            'Bônus: Tabela Dinâmica em Excel para cálculo de tempo de serviço.'
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'var(--card-bg)', padding: '1.5rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
              <CheckCircle size={28} color="var(--primary-color)" />
              <p style={{ fontSize: '1.1rem', margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preço e CTA */}
      <section id="comprar" className="container" style={{ padding: '2rem', maxWidth: '600px', textAlign: 'center', background: 'var(--card-bg)', borderRadius: 'var(--radius)', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '2px solid var(--accent-color)' }}>
        <h3 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '1rem' }}>Oferta de Lançamento</h3>
        <p style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '1.2rem' }}>De R$ 197,00</p>
        <p style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--secondary-color)', margin: '0.5rem 0' }}>Por apenas R$ 47,00</p>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Pagamento único. Acesso vitalício.</p>
        
        <button onClick={() => alert('Integração com Hotmart/Kiwify em breve!')} className="btn btn-primary" style={{ width: '100%', fontSize: '1.3rem', padding: '1.2rem', marginBottom: '1rem' }}>
          Comprar via PIX ou Cartão
        </button>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Compra 100% segura. Garantia de 7 dias.</p>
      </section>
    </div>
  )
}
