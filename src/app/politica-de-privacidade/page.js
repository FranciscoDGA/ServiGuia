export default function PoliticaPrivacidade() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', fontFamily: 'var(--font-inter)' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Política de Privacidade</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      
      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>1. Coleta de Dados</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>O ServGuia coleta apenas as informações necessárias fornecidas voluntariamente pelo usuário, como nome e e-mail nos formulários de contato ou captação de leads, em conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
      
      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>2. Uso das Informações</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Seus dados de contato, quando inseridos na página de Assessoria Jurídica, serão repassados apenas aos parceiros jurídicos expressamente autorizados para o fim de prestação de serviços. Não vendemos suas informações para terceiros (spam).</p>

      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>3. Cookies e Rastreamento</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Utilizamos cookies de terceiros (como Google Analytics) apenas para mensurar o tráfego do site e melhorar a experiência de leitura.</p>
    </div>
  )
}
