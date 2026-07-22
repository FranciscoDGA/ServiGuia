"use client"
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const whatsappUrl = "https://wa.me/5594984478168?text=Olá, venho pelo ServGuia e preciso de assessoria jurídica administrativa."

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="ServGuia Logo" style={{ height: '40px', width: 'auto', borderRadius: '4px' }} />
        </Link>
        
        {/* Mobile Hamburger Icon */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link href="/sobre" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Sobre</Link>
          <Link href="/blog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          
          <div className="dropdown">
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              Guias <span style={{ fontSize: '0.7em' }}>▼</span>
            </span>
            <div className="dropdown-content">
              <Link href="/evolucao-carreira" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Carreira</Link>
              <Link href="/direitos-licencas" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Direitos</Link>
              <Link href="/previdencia" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Previdência</Link>
            </div>
          </div>

          <div className="dropdown">
            <span className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-color)' }}>
              Recursos <span style={{ fontSize: '0.7em' }}>▼</span>
            </span>
            <div className="dropdown-content">
              <Link href="/ferramentas" className="dropdown-item" onClick={() => setIsMobileMenuOpen(false)}>Ferramentas Grátis</Link>
              <Link href="/produtos/kit-requerimentos" className="dropdown-item" style={{ color: '#d97706' }} onClick={() => setIsMobileMenuOpen(false)}>Kits Premium</Link>
              <Link href="/cursos-parceiros" className="dropdown-item" style={{ color: '#059669' }} onClick={() => setIsMobileMenuOpen(false)}>Cursos Parceiros</Link>
            </div>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="nav-link btn-advogado" onClick={() => setIsMobileMenuOpen(false)}>
            Falar com Advogado
          </a>
        </nav>
      </div>
    </header>
  )
}
