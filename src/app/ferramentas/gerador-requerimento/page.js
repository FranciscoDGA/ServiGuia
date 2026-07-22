'use client'
import { useState } from 'react'
import jsPDF from 'jspdf'
import LeadCaptureModal from '@/components/LeadCaptureModal'

export default function GeradorRequerimento() {
  const [data, setData] = useState({ name: '', matricula: '', orgao: '', tipo: 'Licença-Prêmio' })
  const [showModal, setShowModal] = useState(false)

  const handleGenerate = (e) => {
    e.preventDefault()
    if (!data.name || !data.matricula || !data.orgao) return
    setShowModal(true)
  }

  const handleLeadSuccess = () => {
    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text('REQUERIMENTO ADMINISTRATIVO', 105, 20, null, null, 'center')
    
    doc.setFontSize(12)
    doc.text(`À Chefia do Setor de Recursos Humanos - ${data.orgao}`, 20, 40)
    
    const body = `Eu, ${data.name}, matrícula nº ${data.matricula}, servidor(a) público(a) lotado(a) neste respeitável órgão, venho, respeitosamente, requerer a concessão de ${data.tipo}, de acordo com a legislação estatutária vigente, tendo em vista o cumprimento de todos os requisitos legais exigidos.`
    
    const splitText = doc.splitTextToSize(body, 170)
    doc.text(splitText, 20, 60)

    doc.text('Nestes termos,', 20, 100)
    doc.text('Pede Deferimento.', 20, 110)
    
    const dataAtual = new Date().toLocaleDateString('pt-BR')
    doc.text(`Local e data: ___________________, ${dataAtual}`, 20, 130)
    
    doc.text('___________________________________________________', 20, 160)
    doc.text('Assinatura do Servidor', 20, 170)

    doc.save(`Requerimento_${data.tipo.replace(/\s+/g, '')}.pdf`)
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>
        Gerador Automático de Requerimento PDF
      </h1>
      <p style={{ color: 'var(--text-light)', textAlign: 'center', marginBottom: '3rem' }}>
        Preencha seus dados abaixo e gere o requerimento oficial em PDF pronto para assinar e protocolar.
      </p>

      <form onSubmit={handleGenerate} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nome Completo</label>
          <input 
            type="text" 
            value={data.name} 
            onChange={(e) => setData({...data, name: e.target.value})} 
            required
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Matrícula</label>
          <input 
            type="text" 
            value={data.matricula} 
            onChange={(e) => setData({...data, matricula: e.target.value})} 
            required
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Órgão/Prefeitura</label>
          <input 
            type="text" 
            value={data.orgao} 
            onChange={(e) => setData({...data, orgao: e.target.value})} 
            required
            placeholder="Ex: Prefeitura de São Paulo"
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
          />
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Qual é o pedido?</label>
          <select 
            value={data.tipo} 
            onChange={(e) => setData({...data, tipo: e.target.value})}
            style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
          >
            <option value="Licença-Prêmio">Licença-Prêmio</option>
            <option value="Abono de Permanência">Abono de Permanência</option>
            <option value="Adicional de Insalubridade">Adicional de Insalubridade</option>
            <option value="Progressão por Títulos">Progressão por Títulos</option>
            <option value="Cópia Integral de PAD">Cópia Integral de PAD</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
          Gerar PDF Pronto
        </button>
      </form>

      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSuccess={handleLeadSuccess} 
        title="Seu PDF está quase pronto!"
        description="Para baixar seu requerimento em PDF, digite os dados abaixo."
      />
    </div>
  )
}
