export default function PoliticaPrivacidade() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem' }}>Política de Privacidade</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-color)' }}>
        <p style={{ marginBottom: '2rem' }}>O <strong>ServGuia</strong> tem o compromisso fundamental com a privacidade e a segurança dos dados de nossos usuários. Esta Política de Privacidade foi elaborada em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD) do Brasil e descreve como coletamos, utilizamos, armazenamos e protegemos suas informações pessoais.</p>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>1. Base Legal para o Tratamento de Dados</h2>
        <p style={{ marginBottom: '1.5rem' }}>O processamento de dados pessoais pelo ServGuia ocorre sob as seguintes bases legais previstas na LGPD:</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Consentimento:</strong> Quando você nos fornece voluntariamente seus dados (ex: e-mail para download de kits, formulário de contato).</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Legítimo Interesse:</strong> Para melhorar a navegação, mensurar métricas de acesso (Analytics) e proteger a segurança do portal.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Cumprimento de Obrigação Legal:</strong> Retenção de registros de acesso (logs) exigidos pelo Marco Civil da Internet (Lei 12.965/2014).</li>
        </ul>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>2. Dados Coletados</h2>
        <p style={{ marginBottom: '1.5rem' }}>Podemos coletar os seguintes tipos de dados:</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}><strong>Dados de Contato:</strong> Nome, e-mail e número de telefone (WhatsApp) fornecidos ativamente por você.</li>
          <li style={{ marginBottom: '0.5rem' }}><strong>Dados de Navegação (Cookies):</strong> Endereço IP, tipo de navegador, tempo de permanência, páginas visitadas e dados de interação (Analytics).</li>
        </ul>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>3. Uso e Compartilhamento das Informações</h2>
        <p style={{ marginBottom: '1.5rem' }}>Seus dados são utilizados exclusivamente para:</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Fornecer os materiais, kits ou ferramentas solicitadas (como a Calculadora de Aposentadoria).</li>
          <li style={{ marginBottom: '0.5rem' }}>Direcionamento para Assessoria Jurídica: Se você expressamente solicitar contato com um advogado, seus dados serão repassados à nossa rede de parceiros jurídicos credenciados.</li>
          <li style={{ marginBottom: '0.5rem' }}>O ServGuia <strong>jamais vende, aluga ou cede</strong> seus dados pessoais a terceiros para fins de SPAM ou telemarketing.</li>
        </ul>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>4. Política de Cookies e Rastreamento</h2>
        <p style={{ marginBottom: '1.5rem' }}>Utilizamos tecnologias de rastreio (cookies, pixels) de provedores confiáveis (ex: Google Analytics, Google AdSense) para monetizar o site e gerar relatórios estatísticos anônimos. Você pode desabilitar os cookies a qualquer momento através das configurações do seu navegador ou limpando o consentimento através do nosso painel no rodapé.</p>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>5. Direitos do Titular (Seus Direitos)</h2>
        <p style={{ marginBottom: '1.5rem' }}>Segundo a LGPD, você possui o direito de solicitar a qualquer momento:</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Confirmação e acesso aos seus dados.</li>
          <li style={{ marginBottom: '0.5rem' }}>Retificação de dados incompletos, inexatos ou desatualizados.</li>
          <li style={{ marginBottom: '0.5rem' }}>Exclusão total (anonimização) dos seus dados das nossas bases, revogando o seu consentimento.</li>
        </ul>

        <p style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderRadius: '8px', borderLeft: '4px solid var(--primary-color)' }}>
          <strong>Contato do DPO (Encarregado de Dados):</strong> Para exercer seus direitos, entre em contato conosco enviando um e-mail para <em>privacidade@servguia.com.br</em>.
        </p>
      </div>
    </div>
  )
}
