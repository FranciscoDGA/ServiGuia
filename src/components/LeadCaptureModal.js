'use client'
import { useState } from 'react'

export default function LeadCaptureModal({ isOpen, onClose, onSuccess, title, description }) {
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here we would normally send the data to a backend or CRM (like ActiveCampaign or RD Station)
    console.log('Lead Capturado:', formData)
    
    // Trigger success callback to release the tool result
    onSuccess()
    onClose()
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        
        <div style={styles.header}>
          <h3 style={styles.title}>{title || 'Quase lá!'}</h3>
          <p style={styles.description}>
            {description || 'Preencha os dados abaixo para liberar seu resultado gratuitamente.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome Completo</label>
            <input 
              type="text" 
              required 
              style={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Digite seu nome"
            />
          </div>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>E-mail</label>
            <input 
              type="email" 
              required 
              style={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Seu melhor e-mail"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>WhatsApp</label>
            <input 
              type="tel" 
              required 
              style={styles.input}
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              placeholder="(00) 00000-0000"
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
            Liberar Meu Acesso
          </button>
        </form>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', textAlign: 'center', marginTop: '1rem' }}>
          Prometemos não enviar spam. Seus dados estão seguros conosco.
        </p>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'var(--card-bg)',
    borderRadius: 'var(--radius)',
    padding: '2.5rem',
    width: '90%',
    maxWidth: '450px',
    boxShadow: 'var(--shadow)',
    position: 'relative',
    border: '1px solid var(--border-color)',
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1.5rem',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    color: 'var(--text-light)',
    cursor: 'pointer',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '1.8rem',
    color: 'var(--primary-color)',
    marginBottom: '0.5rem',
  },
  description: {
    color: 'var(--text-light)',
    fontSize: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    textAlign: 'left',
  },
  label: {
    fontWeight: '600',
    fontSize: '0.9rem',
    color: 'var(--text-color)',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-color)',
    color: 'var(--text-color)',
    fontSize: '1rem',
    outline: 'none',
  }
}
