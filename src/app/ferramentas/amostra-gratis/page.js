'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download, CheckCircle2, ShieldCheck, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react'
import LeadCaptureModal from '@/components/LeadCaptureModal'

export default function AmostraGratis() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleSuccess = () => {
    setIsUnlocked(true)
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
            AMOSTRA 100% GRATUITA
          </span>
        </div>
      </div>

      <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '800px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#ebf8ff', color: '#2b6cb0', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.2rem' }}>
            <Sparkles size={16} /> ARQUIVOS EDITÁVEIS NO WORD (.DOCX)
          </div>
          
          <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', fontWeight: '800', lineHeight: 1.2 }}>
            Amostra Grátis de Requerimentos Estatutários
          </h1>
          
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Baixe gratuitamente 2 modelos de requerimentos oficiais em formato Word para conferir o padrão jurídico e a fundamentação técnica do ServGuia.
          </p>
        </div>

        {!isUnlocked ? (
          <div style={{ 
            background: 'white', 
            padding: '3rem 2.5rem', 
            borderRadius: '20px', 
            border: '1px solid #e2e8f0', 
            textAlign: 'center', 
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' 
          }}>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.4rem', fontWeight: 700 }}>
              Modelos Inclusos para Download Imediato:
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', margin: '0 auto 2.5rem', textAlign: 'left', maxWidth: '600px' }}>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <FileText size={22} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Requerimento de Indenização de Férias</strong>
                  <span style={{ fontSize: '0.82rem', color: '#718096' }}>Com base no STF, sem incidência de IR.</span>
                </div>
              </div>

              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '0.8rem', alignItems: 'flex-start' }}>
                <FileText size={22} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ display: 'block', color: 'var(--primary-color)', fontSize: '0.95rem' }}>Requerimento de Averbação de Tempo (CTC)</strong>
                  <span style={{ fontSize: '0.82rem', color: '#718096' }}>Para levar tempo do INSS para o RPPS.</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', color: '#4a5568', fontSize: '0.9rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#38a169" /> 100% Editável no Word
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#38a169" /> Citações da CF/88
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#38a169" /> Sem cobrança
              </span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn" 
              style={{ 
                background: '#ecc94b', 
                color: '#09182a', 
                padding: '1.1rem 2.8rem', 
                fontSize: '1.15rem', 
                fontWeight: 700, 
                borderRadius: '50px',
                border: 'none',
                boxShadow: '0 8px 20px rgba(236,201,75,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer'
              }}
            >
              <Download size={20} /> Baixar Meus Modelos Grátis Agora
            </button>
          </div>
        ) : (
          <div style={{ background: '#f0fdf4', padding: '3.5rem 2.5rem', borderRadius: '20px', border: '2px solid #86efac', textAlign: 'center', boxShadow: '0 15px 30px rgba(34,197,94,0.1)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#dcfce7', width: '64px', height: '64px', borderRadius: '50%', marginBottom: '1.5rem' }}>
              <Download size={32} color="#16a34a" />
            </div>
            
            <h2 style={{ color: '#166534', marginBottom: '0.8rem', fontSize: '1.8rem', fontWeight: 800 }}>
              Acesso Liberado com Sucesso! 🎉
            </h2>
            <p style={{ color: '#15803d', marginBottom: '2.5rem', fontSize: '1.05rem', maxWidth: '550px', margin: '0 auto 2.5rem' }}>
              Seus arquivos Word (.docx) editáveis estão prontos para download. Clique no botão abaixo para baixar o pacote compactado.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
              <a 
                href="/Kit-Requerimentos-Premium.zip" 
                download="Kit-Requerimentos-Amostra.zip" 
                className="btn" 
                style={{ 
                  background: '#16a34a', 
                  color: 'white', 
                  padding: '1.1rem 2.5rem', 
                  display: 'inline-flex', 
                  gap: '0.6rem', 
                  alignItems: 'center',
                  textDecoration: 'none', 
                  fontWeight: 700, 
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  boxShadow: '0 8px 20px rgba(22,163,74,0.3)'
                }}
              >
                <Download size={20} /> Baixar Pacote de Amostra (.ZIP)
              </a>
              <span style={{ fontSize: '0.85rem', color: '#166534', marginTop: '0.5rem' }}>
                Contém arquivos formatados em Microsoft Word prontos para uso.
              </span>
            </div>

            {/* Upsell do Kit Completo */}
            <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid #bbf7d0', textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#166534', fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <Sparkles size={16} /> GOSTOU DA ESTRUTURA DOS DOCUMENTOS?
              </div>
              <h3 style={{ color: '#14532d', fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                Garanta o Arsenal Completo com 20 Requerimentos Administrativos
              </h3>
              <p style={{ color: '#15803d', fontSize: '0.92rem', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
                Inclui defesas de PAD, licença-prêmio em dinheiro, adicional de insalubridade, abono de permanência e recursos hierárquicos.
              </p>
              <Link 
                href="/produtos/kit-requerimentos" 
                className="btn" 
                style={{ 
                  background: '#09182a', 
                  color: '#ecc94b', 
                  padding: '0.85rem 1.8rem', 
                  fontWeight: 700, 
                  borderRadius: '50px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem'
                }}
              >
                Ver Kit Completo a partir de R$ 37,90 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        <LeadCaptureModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={handleSuccess}
          title="Para onde enviamos seus modelos?"
          description="Digite seus dados rápidos para liberar o download imediato dos seus formulários em Word (.docx)."
        />
      </div>
    </div>
  )
}