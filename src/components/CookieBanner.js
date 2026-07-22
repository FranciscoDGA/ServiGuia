"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'var(--card-bg)',
      borderTop: '1px solid var(--border-color)',
      padding: '1.5rem 2rem',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 9999,
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ maxWidth: '800px', flex: 1 }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-color)', lineHeight: '1.5', margin: 0 }}>
          <strong>Proteção de Dados (LGPD):</strong> Utilizamos cookies para melhorar sua experiência no ServGuia, personalizar anúncios e analisar nosso tráfego. 
          Ao continuar navegando, você concorda com a nossa <Link href="/politica-de-privacidade" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>Política de Privacidade</Link> e o uso de cookies.
        </p>
      </div>
      <button 
        onClick={handleAccept}
        className="btn btn-primary"
        style={{ padding: '0.8rem 2.5rem', whiteSpace: 'nowrap' }}
      >
        Entendi e Aceito
      </button>
      <style jsx>{`
        @media (min-width: 768px) {
          div {
            flex-direction: row !important;
          }
        }
      `}</style>
    </div>
  )
}
