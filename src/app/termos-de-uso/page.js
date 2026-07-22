export default function TermosUso() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '900px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem' }}>Termos de Uso</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.1rem' }}>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
      
      <div style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-color)' }}>
        <h2 style={{ color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>1. Aceitação dos Termos</h2>
        <p style={{ marginBottom: '1.5rem' }}>Ao acessar e utilizar o portal ServGuia (doravante "Site"), você expressamente concorda com estes Termos de Uso. Este portal destina-se a fornecer informações educacionais, calculadoras e modelos administrativos focados nas rotinas do serviço público municipal, estadual e federal no Brasil.</p>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>2. Isenção de Responsabilidade Profissional (Disclaimer Jurídico)</h2>
        <p style={{ marginBottom: '1.5rem' }}>Aviso crítico: <strong>O conteúdo deste site não substitui aconselhamento jurídico ou contábil profissional.</strong></p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Embora nossos artigos sejam redigidos com base nas legislações e jurisprudências mais atuais (STF/STJ/TCU), o direito administrativo varia drasticamente dependendo do Estatuto local de cada Município ou Estado.</li>
          <li style={{ marginBottom: '0.5rem' }}>O ServGuia e seus criadores isentam-se de qualquer responsabilidade por indeferimentos, perdas, sanções disciplinares (PAD) ou danos decorrentes da aplicação prática das informações ou modelos de requerimentos baixados no site.</li>
          <li style={{ marginBottom: '0.5rem' }}>Sempre consulte o setor de Recursos Humanos (RH) do seu ente federativo ou contrate um advogado especialista antes de tomar decisões drásticas em sua carreira.</li>
        </ul>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>3. Uso das Ferramentas e Modelos (Kits)</h2>
        <p style={{ marginBottom: '1.5rem' }}>Disponibilizamos calculadoras (como a de aposentadoria) e modelos de requerimentos (gratuitos e pagos). Estes recursos são fornecidos "no estado em que se encontram" (as is).</p>
        <ul style={{ marginLeft: '2rem', marginBottom: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Os modelos servem como base estrutural e devem ser imperativamente adaptados aos artigos da lei orgânica ou estatuto do seu município.</li>
          <li style={{ marginBottom: '0.5rem' }}>A exatidão das calculadoras de aposentadoria depende dos dados inseridos e não substitui a contagem de tempo oficial (Certidão de Tempo de Contribuição - CTC) emitida pelo INSS ou RPPS.</li>
        </ul>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>4. Propriedade Intelectual (Direitos Autorais)</h2>
        <p style={{ marginBottom: '1.5rem' }}>Todo o conteúdo deste site, incluindo mas não se limitando a artigos de blog, textos jurídicos, logotipos, ferramentas em código e e-books estruturados, constitui propriedade intelectual do ServGuia, protegida pela Lei de Direitos Autorais (Lei 9.610/98).</p>
        <p style={{ marginBottom: '1.5rem' }}><strong>É expressamente proibida</strong> a cópia, reprodução, republicação em outros sites, venda ou distribuição do conteúdo gratuito ou pago (Kits Premium) sem prévia autorização por escrito.</p>

        <h2 style={{ color: 'var(--secondary-color)', marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.8rem' }}>5. Modificações dos Termos</h2>
        <p style={{ marginBottom: '1.5rem' }}>O ServGuia reserva-se o direito de alterar estes Termos de Uso a qualquer momento. O uso contínuo do site após as alterações constitui aceitação dos novos termos. Recomendamos a visita periódica a esta página.</p>
      </div>
    </div>
  )
}
