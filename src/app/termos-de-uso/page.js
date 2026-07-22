export default function TermosDeUso() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', fontFamily: 'var(--font-inter)' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Termos de Uso</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      
      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>1. Aceitação dos Termos</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Ao acessar e utilizar o portal ServGuia, você concorda com estes Termos de Uso. Este site tem finalidade estritamente informativa e educativa.</p>
      
      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>2. Isenção de Responsabilidade</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Os conteúdos jurídicos e administrativos publicados neste portal não substituem a consulta a um advogado ou ao setor de Recursos Humanos (RH) do seu município ou estado. As legislações sofrem alterações constantes, e o ServGuia não se responsabiliza por decisões tomadas exclusivamente com base em nossos artigos.</p>

      <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem' }}>3. Uso dos Modelos</h2>
      <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>Os modelos de requerimentos gratuitos e pagos são fornecidos "no estado em que se encontram". O usuário é o único responsável por preenchê-los e adaptá-los à legislação do seu ente federativo específico.</p>
    </div>
  )
}
