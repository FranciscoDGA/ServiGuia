export default function Contato() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Fale Conosco</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-color)', marginBottom: '2rem' }}>
        Tem alguma dúvida, encontrou algum erro ou deseja enviar um modelo de formulário da sua prefeitura para adicionarmos à nossa base? Entre em contato!
      </p>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-color)' }}>
        <div>
          <label style={{ fontWeight: 'bold' }}>Nome</label>
          <input type="text" style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>E-mail</label>
          <input type="email" style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }} />
        </div>
        <div>
          <label style={{ fontWeight: 'bold' }}>Mensagem (Anexe links para os PDFs da sua prefeitura se desejar)</label>
          <textarea rows="5" style={{ width: '100%', padding: '0.8rem', marginTop: '0.5rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}></textarea>
        </div>
        <button type="button" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem' }}>Enviar Mensagem</button>
      </form>
    </div>
  )
}
