'use client'
import { useState } from 'react'
import Link from 'next/link'
import jsPDF from 'jspdf'
import { 
  FileText, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Printer, 
  ArrowRight,
  Download,
  AlertCircle
} from 'lucide-react'
import LeadCaptureModal from '@/components/LeadCaptureModal'

export default function GeradorRequerimento() {
  const [data, setData] = useState({ name: '', matricula: '', orgao: '', tipo: 'Licença-Prêmio (Usufruto)' })
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
    
    const body = `Eu, ${data.name}, matrícula funcional nº ${data.matricula}, servidor(a) público(a) estatutário(a) lotado(a) neste respeitável órgão, venho, respeitosamente, perante Vossa Senhoria, requerer a concessão de ${data.tipo}, de acordo com a legislação estatutária vigente, tendo em vista o cabal cumprimento de todos os requisitos legais e temporais exigidos pela ordem constitucional e estatutária.`
    
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
      
      {/* Hero Section Premium Oficial */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #102a45 60%, #1a365d 100%)', 
        color: 'white', 
        padding: '4.5rem 1.5rem 5.5rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Glow de fundo */}
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236,201,75,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', textAlign: 'center' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <Link 
              href="/ferramentas" 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                fontSize: '0.85rem',
                backgroundColor: 'rgba(255,255,255,0.08)',
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              <ArrowLeft size={14} /> Voltar para Central de Ferramentas
            </Link>
          </div>

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
            <Sparkles size={16} /> FORMATAÇÃO ESTATUTÁRIA OFICIAL • 100% GRATUITO
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Gerador Automático de Requerimento em <span style={{ color: '#ecc94b' }}>PDF</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Preencha seus dados funcionais abaixo e faça o download instantâneo do requerimento administrativo formatado e carimbado, pronto para assinar e protocolar no RH.
          </p>
        </div>
      </section>

      {/* Main Container com o Formulário */}
      <div className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10, maxWidth: '800px' }}>
        
        <form 
          onSubmit={handleGenerate} 
          style={{ 
            background: 'white', 
            padding: '2.5rem', 
            borderRadius: '20px', 
            boxShadow: '0 12px 30px -5px rgba(0,0,0,0.08)', 
            border: '1px solid #e2e8f0' 
          }}
        >
          {/* Alerta de facilidade */}
          <div style={{ 
            background: '#f8fafc', 
            padding: '1rem 1.25rem', 
            borderRadius: '12px', 
            border: '1px solid #e2e8f0', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.8rem', 
            marginBottom: '2rem' 
          }}>
            <FileText size={22} color="#2b6cb0" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.88rem', color: '#4a5568' }}>
              <strong>Preenchimento Rápido:</strong> Os campos abaixo serão inseridos diretamente na estrutura jurídica formal do requerimento em folha A4.
            </div>
          </div>

          {/* Nome */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
              Nome Completo do Servidor(a) *
            </label>
            <input 
              type="text" 
              value={data.name} 
              onChange={(e) => setData({...data, name: e.target.value})} 
              required
              placeholder="Ex: Maria das Graças Ferreira"
              style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
            />
          </div>

          {/* Grid de 2 Colunas */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                Matrícula Funcional *
              </label>
              <input 
                type="text" 
                value={data.matricula} 
                onChange={(e) => setData({...data, matricula: e.target.value})} 
                required
                placeholder="Ex: 987654-3"
                style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
                Órgão / Prefeitura / Secretaria *
              </label>
              <input 
                type="text" 
                value={data.orgao} 
                onChange={(e) => setData({...data, orgao: e.target.value})} 
                required
                placeholder="Ex: Prefeitura Municipal de Santos"
                style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none' }}
              />
            </div>
          </div>

          {/* Tipo de Requerimento */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '700', color: 'var(--primary-color)', fontSize: '0.95rem' }}>
              Qual é o Pedido que você deseja protocolar? *
            </label>
            <select 
              value={data.tipo} 
              onChange={(e) => setData({...data, tipo: e.target.value})}
              style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: '10px', border: '1px solid #cbd5e0', fontSize: '1rem', color: '#1a202c', outline: 'none', backgroundColor: '#f8fafc', fontWeight: '600' }}
            >
              <option value="Licença-Prêmio (Usufruto)">Concessão de Licença-Prêmio por Assiduidade (Usufruto)</option>
              <option value="Conversão de Licença-Prêmio em Pecúnia">Conversão de Licença-Prêmio em Dinheiro (Pecúnia - STJ 1.086)</option>
              <option value="Abono de Permanência">Abono de Permanência (Isenção Previdenciária de 14%)</option>
              <option value="Averbação de Tempo de Contribuição (CTC)">Averbação de Tempo de Contribuição do INSS (CTC)</option>
              <option value="Adicional de Insalubridade e Laudo Técnico">Adicional de Insalubridade e Emissão de Laudo Técnico (LTCAT)</option>
              <option value="Progressão Funcional por Títulos">Progressão Funcional por Títulos e Pós-Graduação</option>
              <option value="Cópia Integral de Autos de PAD">Cópia Integral de Autos de Sindicância / PAD</option>
              <option value="Indenização de Férias Não Gozadas">Indenização de Períodos de Férias Não Gozadas com 1/3</option>
            </select>
          </div>

          {/* Botão de Envio */}
          <button 
            type="submit" 
            className="btn" 
            style={{ 
              width: '100%', 
              fontSize: '1.15rem', 
              padding: '1.15rem', 
              background: '#2b6cb0', 
              color: 'white', 
              fontWeight: 800, 
              borderRadius: '12px', 
              border: 'none',
              boxShadow: '0 8px 20px rgba(43,108,176,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Printer size={22} /> Gerar e Baixar Requerimento em PDF
          </button>

          {/* Selos de Confiança */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.8rem', marginTop: '1.5rem', color: '#718096', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} color="#38a169" /> Documento pronto para assinar
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={16} color="#38a169" /> 100% Gratuito e Seguro
            </span>
          </div>
        </form>

        {/* Card de Conversão para o Kit Completo Word (.docx) */}
        <div style={{ 
          marginTop: '3.5rem', 
          background: 'linear-gradient(135deg, #09182a 0%, #1a365d 100%)', 
          borderRadius: '20px', 
          padding: '2.5rem', 
          color: 'white', 
          display: 'flex', 
          flexWrap: 'wrap', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          gap: '2rem',
          border: '1px solid rgba(236,201,75,0.3)',
          boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
        }}>
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(236,201,75,0.15)', color: '#ecc94b', padding: '0.35rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.8rem' }}>
              <Sparkles size={16} /> QUER MODELOS COMPLETOS EM WORD EDITÁVEL?
            </div>
            <h3 style={{ fontSize: '1.7rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: 800 }}>
              Kits de Requerimentos com Citações do STF & STJ
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
              Enquanto o gerador gratuito cria um pedido simplificado, nosso Kit Master em formato Word (.docx) traz fundamentação jurídica aprofundada para evitar indeferimentos sumários pelo RH.
            </p>
          </div>
          <Link 
            href="/produtos/kit-requerimentos" 
            className="btn" 
            style={{ 
              background: '#ecc94b', 
              color: '#09182a', 
              padding: '0.95rem 1.8rem', 
              fontSize: '1rem', 
              fontWeight: 700, 
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 20px rgba(236,201,75,0.3)',
              textDecoration: 'none'
            }}
          >
            Ver Pacotes a partir de R$ 37,90 <ArrowRight size={18} />
          </Link>
        </div>

      </div>

      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSuccess={handleLeadSuccess} 
        title="Seu Requerimento em PDF está pronto!"
        description="Digite seus dados institucionais abaixo para autorizar o download imediato do seu documento oficial."
      />
    </div>
  )
}