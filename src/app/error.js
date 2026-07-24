'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Pode logar o erro num serviço como Sentry ou no próprio GA
    console.error('Erro na aplicação:', error)
  }, [error])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ef4444' }}>
        Ops! Algo deu errado.
      </h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem', maxWidth: '500px' }}>
        Nossos servidores encontraram um problema inesperado ao processar sua solicitação.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={() => reset()}
          className="btn btn-primary"
          style={{ padding: '0.8rem 2rem' }}
        >
          Tentar Novamente
        </button>
        <Link href="/" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', border: '1px solid var(--border-color)' }}>
          Voltar para Home
        </Link>
      </div>
    </div>
  )
}
