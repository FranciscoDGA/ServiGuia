'use client'
import { useState } from 'react'
import { Scale, ShieldAlert, FileSearch } from 'lucide-react'

export default function AssessoriaJuridica() {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', case: '', urgencia: 'Normal' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Caso recebido com sucesso! Nossa equipe ou um advogado parceiro entrará em contato.')
    // Lógica para enviar o lead para o banco de dados ou e-mail dos advogados parceiros
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '4rem', fontFamily: 'var(--font-inter)' }}>
      {/* Hero */}
      <section style={{ backgroundColor: '#1a202c', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '800' }}>
            Problemas graves no RH?
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem', color: '#cbd5e0' }}>
            Processos Administrativos Disciplinares (PAD), demissões injustas, aposentadorias negadas ou desvios de função complexos exigem especialistas. Conectamos você aos melhores advogados administrativistas do país.
          </p>
        </div>
      </section>

      <section className="container" style={{ padding: '4rem 2rem', maxWidth: '1000px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        
        {/* Informações */}
        <div>
          <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '2rem' }}>Como funciona?</h2>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            <FileSearch size={32} color="var(--secondary-color)" />
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Análise Gratuita do Caso</h3>
              <p style={{ color: 'var(--text-light)' }}>Você descreve seu problema de forma sigilosa no formulário. Nossa triagem analisa a viabilidade da causa.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            <Scale size={32} color="var(--secondary-color)" />
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. Encaminhamento Especializado</h3>
              <p style={{ color: 'var(--text-light)' }}>Seu caso é encaminhado diretamente para um advogado parceiro focado em servidores do seu Estado.</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            <ShieldAlert size={32} color="var(--secondary-color)" />
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Defesa Imediata</h3>
              <p style={{ color: 'var(--text-light)' }}>O especialista entra em contato com você via WhatsApp para iniciar a defesa no PAD ou entrar com Mandado de Segurança.</p>
            </div>
          </div>
        </div>

        {/* Formulário de Lead B2B */}
        <div style={{ background: 'var(--card-bg)', padding: '2.5rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: 'var(--primary-color)', fontSize: '1.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>Descreva seu Problema</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Nome Completo</label>
              <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>WhatsApp com DDD</label>
              <input type="tel" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Município / Estado de Lotação</label>
              <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Urgência (Há prazo correndo?)</label>
              <select style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} value={formData.urgencia} onChange={e => setFormData({...formData, urgencia: e.target.value})}>
                <option value="Normal">Sem urgência extrema</option>
                <option value="Alta">Urgência! Tenho prazo de PAD vencendo</option>
                <option value="Demissao">Fui Demitido/Exonerado recentemente</option>
              </select>
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>Resumo do Caso</label>
              <textarea rows="4" required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} placeholder="Fui acusado de... / O RH negou minha aposentadoria alegando..." value={formData.case} onChange={e => setFormData({...formData, case: e.target.value})}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', marginTop: '1rem' }}>
              Solicitar Contato Especializado
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center' }}>Seus dados são 100% confidenciais (Sigilo Cliente-Advogado).</p>
          </form>
        </div>
      </section>
    </div>
  )
}
