'use client'
import { useState } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import { FileText, ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Printer } from 'lucide-react'
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
    
    const body = `Eu, ${data.name}, matrícula nº ${data.matricula}, servidor(a) público(a) estatutário(a) lotado(a) neste respeitável órgão, venho, respeitosamente, perante Vossa Senhoria, requerer a concessão de ${data.tipo}, de acordo com a legislação estatutária vigente, tendo em vista o cabal cumprimento de todos os requisitos legais e temporais exigidos pela ordem constitucional e estatutária.`
    
    const splitText = doc.splitTextToSize(body, 170)
    doc.text(splitText, 20, 60)

    doc.text('Nestes termos,', 20, 105)
    doc.text('Pede e espera Deferimento.', 20, 115)
    
    const dataAtual = new Date().toLocaleDateString('pt-BR')
    doc.text(`Local e data: ___________________, ${dataAtual}`, 20, 135)
    
    doc.text('___________________________________________________', 20, 165)
    doc.text(`Assinatura do(a) Servidor(a): ${data.name}`, 20, 175)

    doc.save(`Requerimento_${data.tipo.replace(/\s+/g, '_')}_ServGuia.pdf`)
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Header Bar */}
      <div style={{ background: '#09182a', padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ maxWidth: '800px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/ferramentas" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
            <ArrowLeft size={16} /> Voltar para Ferramentas
          </Link>
          <span style={{ color: '#ecc94b', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px' }}>
            GERADOR 100% GRATUITO
          </span>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ebf8ff', color: '#2b6cb0', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.2rem' }}>
            <Sparkles size={16} /> FORMATAÇÃO OFICIAL ESTATUTÁRIA
          </div>
          
          <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: '800', lineHeight: 1.2 }}>
            Gerador Automático de Requerimento em PDF
          </h1>
          
          <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Preencha seus dados institucionais abaixo e faça o download instantâneo do documento formatado para imprimir, assinar e protocolar no setor de Recursos Humanos.
          </p>
        </div>

        <form 
          onSubmit={handleGenerate} 
          style={{ 
            background: 'white', 
            padding: '2.5rem', 
            borderRadius: '20px', 
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.06)', 
            border: '1px solid #e2e8f0' 
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
              Nome Completo do Servidor
            </label>
            <input 
              type="text" 
              value={data.name} 
              onChange={(e) => setData({...data, name: e.target.value})} 
              required
              placeholder="Ex: Maria das Graças Silva"
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                Matrícula Funcional
              </label>
              <input 
                type="text" 
                value={data.matricula} 
                onChange={(e) => setData({...data, matricula: e.target.value})} 
                required
                placeholder="Ex: 123456-7"
                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                Órgão / Prefeitura / Secretaria
              </label>
              <input 
                type="text" 
                value={data.orgao} 
                onChange={(e) => setData({...data, orgao: e.target.value})} 
                required
                placeholder="Ex: Prefeitura Municipal de Santos"
                style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
              Tipo de Requerimento / Pedido
            </label>
            <select 
              value={data.tipo} 
              onChange={(e) => setData({...data, tipo: e.target.value})}
              style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none', backgroundColor: '#f8fafc' }}
            >
              <option value="Licença-Prêmio (Usufruto)">Concessão de Licença-Prêmio (Usufruto)</option>
              <option value="Conversão de Licença-Prêmio em Pecúnia">Conversão de Licença-Prêmio em Dinheiro (Pecúnia)</option>
              <option value="Abono de Permanência">Abono de Permanência (Isenção Previdenciária)</option>
              <option value="Averbação de Tempo de Contribuição (CTC)">Averbação de Tempo de Contribuição (CTC)</option>
              <option value="Adicional de Insalubridade">Adicional de Insalubridade / Laudo LTCAT</option>
              <option value="Progressão por Títulos e Especialização">Progressão Funcional por Títulos</option>
              <option value="Cópia Integral de Processo Administrativo (PAD)">Cópia Integral de Autos de PAD / Sindicância</option>
              <option value="Indenização de Férias Não Gozadas">Indenização de Férias Não Gozadas</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn" 
            style={{ 
              width: '100%', 
              fontSize: '1.1rem', 
              padding: '1.1rem', 
              background: '#2b6cb0', 
              color: 'white', 
              fontWeight: 700, 
              borderRadius: '10px', 
              border: 'none',
              boxShadow: '0 8px 20px rgba(43,108,176,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              cursor: 'pointer'
            }}
          >
            <Printer size={20} /> Gerar e Baixar Requerimento PDF
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem', color: '#718096', fontSize: '0.85rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <CheckCircle2 size={15} color="#38a169" /> Arquivo pronto para impressão
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <ShieldCheck size={15} color="#38a169" /> Seus dados não são armazenados
            </span>
          </div>
        </form>

        <LeadCaptureModal 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
          onSuccess={handleLeadSuccess} 
          title="Seu PDF está quase pronto!"
          description="Preencha seus dados rápidos para autorizar o download imediato do seu requerimento oficial."
        />
      </div>
    </div>
  )
}