export const metadata = {
  title: 'Política de Privacidade | ServGuia',
  description: 'Nossa política de privacidade e proteção de dados de acordo com a LGPD.',
};

export default function PoliticaPrivacidade() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '800' }}>
          Política de Privacidade
        </h1>
        <div style={{ color: 'var(--text-color)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1rem' }}>
            <strong>Última atualização: Julho de 2026</strong>
          </p>
          <p style={{ marginBottom: '1rem' }}>
            A sua privacidade é importante para nós. É política do <strong>ServGuia</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site ServGuia, e outros sites que possuímos e operamos.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>1. Coleta de Informações Pessoais</h2>
          <p style={{ marginBottom: '1rem' }}>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço, como no momento da compra de nossos Kits de Requerimentos ou ao se inscrever para receber nossos materiais gratuitos. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento, de acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>2. Compartilhamento de Dados</h2>
          <p style={{ marginBottom: '1rem' }}>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou com os nossos parceiros de processamento de pagamentos essenciais para a entrega do serviço (como a plataforma <strong>Hotmart</strong>, que processa de forma segura as suas compras).
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>3. Armazenamento e Segurança</h2>
          <p style={{ marginBottom: '1rem' }}>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>4. Uso de Cookies (Pixel e Analytics)</h2>
          <p style={{ marginBottom: '1rem' }}>
            Nosso site pode utilizar cookies (incluindo cookies de terceiros, como Google Analytics e Pixel da Meta) para entender o comportamento de navegação dos usuários, melhorar a sua experiência e veicular anúncios mais relevantes. Você é livre para recusar a nossa solicitação de informações pessoais ou desativar os cookies no seu navegador, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>5. Direitos do Usuário (LGPD)</h2>
          <p style={{ marginBottom: '1rem' }}>
            Você, como titular dos dados, possui os seguintes direitos em relação às suas informações pessoais: confirmar a existência de tratamento, acessar os dados, corrigir dados incompletos ou desatualizados, solicitar anonimização, bloqueio ou eliminação de dados desnecessários, e a portabilidade.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>6. Contato</h2>
          <p style={{ marginBottom: '1rem' }}>
            Se você tiver alguma dúvida sobre como lidamos com os seus dados ou quiser exercer seus direitos previstos na LGPD, entre em contato conosco através do e-mail oficial disponível na aba "Contato".
          </p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais.
          </p>
        </div>
      </div>
    </div>
  );
}
