'use client'
import { useState } from 'react'
import { Search } from 'lucide-react'

export default function HomeSearchBar() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/blog?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <form onSubmit={handleSearch} className="search-form" style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--card-bg)',
      borderRadius: '50px',
      padding: '0.4rem 0.5rem 0.4rem 1.25rem',
      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
      border: '1px solid var(--border-color)',
      maxWidth: '680px',
      margin: '0 auto 2rem'
    }}>
      <Search size={22} color="var(--secondary-color)" style={{ flexShrink: 0, marginRight: '0.75rem' }} />
      <input 
        type="text" 
        placeholder="Qual é a sua dúvida? (Ex: Aposentadoria de professor, licença-prêmio, PAD...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ 
          flex: 1, 
          padding: '0.8rem 0', 
          border: 'none', 
          background: 'transparent', 
          color: 'var(--text-color)', 
          fontSize: '1.05rem', 
          outline: 'none',
          minWidth: 0
        }}
      />
      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{ 
          borderRadius: '50px', 
          padding: '0.75rem 1.75rem',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          whiteSpace: 'nowrap',
          cursor: 'pointer'
        }}
      >
        Buscar Resposta
      </button>
    </form>
  )
}
