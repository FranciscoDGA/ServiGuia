'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download } from 'lucide-react'
import LeadCaptureModal from '@/components/LeadCaptureModal'

export default function AmostraGratis() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleSuccess = () => {
    setIsUnlocked(true)
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', minHeight: '80vh' }}>
      <Link href="/ferramentas" style={{ color: 'var(--text-light)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Voltar para Ferramentas
      </Link>
      
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '800' }}>
        Amostra Grátis: Formulários Administrativos
      </h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Baixe agora 2 modelos totalmente gratuitos e editáveis em Word para testar a qualidade do nosso material. 
        Evite dores de cabeça e exija seus direitos da forma correta.
      </p>

      {!isUnlocked ? (
        <div style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Formulários Inclusos na Amostra:</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 2rem', maxWidth: '400px', textAlign: 'left' }}>
            <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--text-color)' }}>
              <FileText size={20} color="var(--secondary-color)" /> Requerimento de Férias
            </li>
            <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-color)' }}>
              <FileText size={20} color="var(--secondary-color)" /> Requerimento de Averbação
            </li>
          </ul>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary" 
            style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}
          >
            Baixar Modelos Grátis Agora
          </button>
        </div>
      ) : (
        <div style={{ background: '#f0fdf4', padding: '3rem', borderRadius: 'var(--radius)', border: '1px solid #86efac', textAlign: 'center' }}>
          <h2 style={{ color: '#166534', marginBottom: '1rem' }}>Acesso Liberado com Sucesso! 🎉</h2>
          <p style={{ color: '#15803d', marginBottom: '2rem' }}>Clique nos botões abaixo para fazer o download dos seus arquivos Word (.docx).</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <a href="#" className="btn" style={{ background: '#2563eb', color: 'white', padding: '1rem 2rem', display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '350px', justifyContent: 'center' }}>
              <Download size={20} /> Requerimento de Férias.docx
            </a>
            <a href="#" className="btn" style={{ background: '#2563eb', color: 'white', padding: '1rem 2rem', display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '350px', justifyContent: 'center' }}>
              <Download size={20} /> Requerimento de Averbação.docx
            </a>
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #bbf7d0' }}>
            <p style={{ color: '#166534', fontWeight: 'bold', marginBottom: '1rem' }}>Gostou da qualidade?</p>
            <Link href="/produtos/kit-requerimentos" className="btn btn-secondary">
              Conhecer o Kit Completo (20 Formulários)
            </Link>
          </div>
        </div>
      )}

      <LeadCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleSuccess}
        title="Para onde enviamos?"
        description="Preencha seus dados rápidos para liberar o download dos seus formulários na hora."
      />
    </div>
  )
}
