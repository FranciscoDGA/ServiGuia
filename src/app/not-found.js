import Link from 'next/link'

export default function NotFound() {
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
      <h1 style={{ fontSize: '4rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Página Não Encontrada</h2>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem', maxWidth: '500px' }}>
        Parece que a página que você está procurando não existe ou foi movida. 
        Não se preocupe, você pode voltar para a página inicial ou acessar nossos recursos.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
          Voltar para Home
        </Link>
        <Link href="/blog" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', border: '1px solid var(--border-color)' }}>
          Ler o Blog
        </Link>
      </div>
    </div>
  )
}
