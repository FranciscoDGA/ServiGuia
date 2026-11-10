'use client'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Send, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react'

export default function Contato() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ nome: '', email: '', motivo: 'Dúvida Geral', mensagem: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const whatsappUrl = "https://wa.me/5594984478168?text=[SERVGUIA-CONTATO]%20Ol%C3%A1!%20Gostaria%20de%20falar%20com%20a%20equipe%20do%20ServGuia."

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium Oficial */}
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
            marginBottom: '1.2rem',
            color: '#ecc94b',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <Sparkles size={16} /> CANAL OFICIAL DE ATENDIMENTO AO SERVIDOR
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', marginBottom: '1.1rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Fale com a Equipe do <span style={{ color: '#ecc94b' }}>ServGuia</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            Tem dúvidas sobre nossos guias, sugestões de novos requerimentos para sua prefeitura ou precisa de suporte para seus kits? Estamos à disposição.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10, maxWidth: '1000px' }}>
        
        {/* Grid de Canais de Contato Rápidos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          
          {/* Card WhatsApp */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '1.8rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid #bbf7d0' }}>
              <MessageCircle size={24} color="#16a34a" />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.4rem', fontWeight: 800 }}>Atendimento WhatsApp</h3>
            <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '1.2rem' }}>Suporte rápido de Segunda a Sexta, das 08h às 18h.</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn" 
              style={{ background: '#16a34a', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.2rem', borderRadius: '8px', fontWeight: 700, fontSize: '0.88rem' }}
            >
              <MessageCircle size={16} /> Iniciar Conversa
            </a>
          </div>

          {/* Card E-mail */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '1.8rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ebf8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid #bee3f8' }}>
              <Mail size={24} color="#2b6cb0" />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.4rem', fontWeight: 800 }}>E-mail Institucional</h3>
            <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '1.2rem' }}>Para parcerias, sugestões e suporte pós-venda.</p>
            <span style={{ color: '#2b6cb0', fontWeight: 700, fontSize: '0.92rem', display: 'block' }}>contato@serviguia.com.br</span>
          </div>

          {/* Card Tempo de Resposta */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '1.8rem', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#fffaf0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid #feebc8' }}>
              <Clock size={24} color="#dd6b20" />
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.4rem', fontWeight: 800 }}>Tempo Médio de Resposta</h3>
            <p style={{ color: '#718096', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Respondemos todas as solicitações em até <strong>24 horas úteis</strong>.</p>
            <span style={{ fontSize: '0.82rem', color: '#38a169', fontWeight: 700 }}>✓ Equipe 100% Dedicada</span>
          </div>

        </div>

        {/* Formulário de Contato */}
        <div style={{ background: 'white', borderRadius: '20px', padding: '3rem 2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', fontWeight: 800, marginBottom: '0.8rem' }}>
            Envie sua Mensagem
          </h2>
          <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Preencha o formulário abaixo para enviar sua solicitação diretamente para o nosso setor editorial e de atendimento.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--primary-color)', fontSize: '0.92rem' }}>
                    Seu Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    value={formData.nome} 
                    onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                    required 
                    placeholder="Ex: Carlos Eduardo de Souza"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--primary-color)', fontSize: '0.92rem' }}>
                    Seu Melhor E-mail *
                  </label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    required 
                    placeholder="Ex: carloseduardo@email.com"
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '0.95rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--primary-color)', fontSize: '0.92rem' }}>
                  Qual o Motivo do Contato? *
                </label>
                <select 
                  value={formData.motivo} 
                  onChange={(e) => setFormData({...formData, motivo: e.target.value})}
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '0.95rem', outline: 'none', backgroundColor: '#f8fafc', fontWeight: 600 }}
                >
                  <option value="Dúvida sobre Artigo ou Guia">Dúvida sobre Artigo ou Guia Estatutário</option>
                  <option value="Suporte Kit de Requerimentos">Suporte sobre os Kits de Requerimentos (Hotmart)</option>
                  <option value="Sugestão de Novo Modelo">Sugestão de Novo Modelo de Requerimento</option>
                  <option value="Parceria ou Imprensa">Parceria ou Imprensa</option>
                  <option value="Outro">Outro Assunto</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, color: 'var(--primary-color)', fontSize: '0.92rem' }}>
                  Sua Mensagem *
                </label>
                <textarea 
                  rows="5" 
                  value={formData.mensagem} 
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})} 
                  required 
                  placeholder="Descreva detalhadamente sua dúvida ou solicitação..."
                  style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn" 
                style={{ 
                  background: '#2b6cb0', 
                  color: 'white', 
                  padding: '1rem 2.5rem', 
                  fontWeight: 700, 
                  fontSize: '1.05rem', 
                  borderRadius: '10px', 
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(43,108,176,0.25)'
                }}
              >
                <Send size={18} /> Enviar Mensagem Agora
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', background: '#f0fdf4', borderRadius: '16px', border: '1px solid #86efac' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <CheckCircle2 size={32} color="#16a34a" />
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#166534', fontWeight: 800, marginBottom: '0.5rem' }}>
                Mensagem Enviada com Sucesso!
              </h3>
              <p style={{ color: '#15803d', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
                Agradecemos o seu contato. Nossa equipe analisará sua solicitação e responderá no e-mail informado em até 24 horas úteis.
              </p>
            </div>
          )}
        </div>

      </section>

    </div>
  )
}