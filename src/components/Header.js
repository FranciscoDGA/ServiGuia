"use client"
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const whatsappUrl = "https://wa.me/5594984478168?text=[SERVGUIA-ADV]%20Ol%C3%A1!%20Vim%20pelo%20site%20ServGuia%20e%20preciso%20falar%20com%20um%20advogado%20administrativista."

  return (
    <header className="header" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.65rem 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
    }}>
      <div className="container header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        
        {/* Logotipo Redondo Oficial + Tipografia de Autoridade */}
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            border: '2px solid var(--secondary-color)',
            flexShrink: 0,
            backgroundColor: '#ffffff'
          }}>
            <Image 
              src="/logo-round.png" 
              alt="ServGuia" 
              width={40} 
              height={40} 
              style={{ objectFit: 'cover' }} 
              priority 
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '1.35rem', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1.1', letterSpacing: '-0.3px' }}>
              Serv<span style={{ color: 'var(--secondary-color)' }}>Guia</span>
            </span>
            <span style={{ fontSize: '0.62rem', fontWeight: '700', color: 'var(--text-light)', letterSpacing: '0.4px', textTransform: 'uppercase' }}>
              Defesa & Carreira
            </span>
          </div>
        </Link>
        
        {/* Mobile Hamburger Icon */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
          style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--primary-color)', padding: '0.25rem' }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <Link 
            href="/sobre" 
            className="nav-link" 
            style={{ fontSize: '0.88rem', fontWeight: '600', whiteSpace: 'nowrap' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre
          </Link>

          <Link 
            href="/blog" 
            className="nav-link" 
            style={{ fontSize: '0.88rem', fontWeight: '600', whiteSpace: 'nowrap' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Artigos & Guias
          </Link>
          
          <div className="dropdown">
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600', whiteSpace: 'nowrap' }}>
              Categorias <span style={{ fontSize: '0.65em' }}>▼</span>
            </span>
            <div className="dropdown-content">
              <Link href="/previdencia" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Aposentadoria & RPPS</Link>
              <Link href="/direitos-licencas" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Licenças & Direitos</Link>
              <Link href="/evolucao-carreira" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Progressão & Salário</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontSize: '0.88rem', fontWeight: '600', whiteSpace: 'nowrap' }}>
              Ferramentas <span style={{ fontSize: '0.65em' }}>▼</span>
            </span>
            <div className="dropdown-content">
              <Link href="/ferramentas/calculadora-aposentadoria" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Calculadora RPPS</Link>
              <Link href="/ferramentas/gerador-requerimento" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Gerador de Requerimento</Link>
              <Link href="/ferramentas/amostra-gratis" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Amostra Grátis (.docx)</Link>
              <Link href="/cursos-parceiros" className="dropdown-item" style={{ color: '#059669' }} onClick={() => setIsMobileMenuOpen(false)}>Pós-graduações Reconhecidas</Link>
            </div>
          </div>

          {/* Botões de Ação Rápidos Compactos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <Link 
              href="/produtos/kit-requerimentos"
              className="btn"
              style={{ 
                backgroundColor: '#ecc94b', 
                color: '#1a202c', 
                fontWeight: '700', 
                padding: '0.45rem 0.85rem', 
                borderRadius: '8px',
                fontSize: '0.82rem',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kits de Requerimentos
            </Link>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-link btn-advogado" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                backgroundColor: '#e53e3e',
                color: 'white',
                padding: '0.45rem 0.85rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.82rem',
                whiteSpace: 'nowrap',
                textDecoration: 'none'
              }}
            >
              Falar com Advogado
            </a>
          </div>

        </nav>
      </div>
    </header>
  )
}
