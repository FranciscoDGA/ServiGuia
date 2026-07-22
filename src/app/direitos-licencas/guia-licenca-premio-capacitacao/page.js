import ArticleLayout from '@/components/ArticleLayout'

export const metadata = {
  title: 'Guia da Licença-Prêmio / Capacitação: Como requerer e o que fazer se for negada | ServGuia',
  description: 'Entenda os requisitos legais para gozar sua licença-prêmio, convertê-la em dinheiro e como recorrer em caso de negativa da prefeitura.',
}

export default function Article() {
  return (
    <ArticleLayout 
      title="Guia da Licença-Prêmio e Capacitação: Como requerer e evitar negativas"
      date="23 de Julho de 2026"
      readTime="8"
    >
      <p style={{ marginBottom: '1.5rem' }}>
        A licença-prêmio por assiduidade (ou licença-capacitação, em esferas que atualizaram o estatuto) é um período de descanso remunerado concedido ao servidor público que mantém frequência exemplar durante um quinquênio (5 anos) ininterrupto.
      </p>
      
      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>1. Posso converter a Licença-Prêmio em dinheiro?</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Esta é a dúvida mais comum. Se você está na ativa, a conversão em pecúnia (dinheiro) geralmente não é permitida, a menos que haja previsão expressa na legislação municipal/estadual ou se o próprio ente público propuser a compra da licença por "necessidade do serviço".
        <br/><br/>
        <strong>Atenção:</strong> Ao se aposentar, se houver licenças não gozadas, a jurisprudência é pacífica no sentido de que elas DEVEM ser convertidas em indenização em dinheiro, para evitar enriquecimento ilícito da Administração Pública.
      </p>

      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>2. Interrupções do Quinquênio</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        O período aquisitivo de 5 anos pode ser interrompido se o servidor:
      </p>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.8rem' }}>Sofrer penalidade disciplinar de suspensão.</li>
        <li style={{ marginBottom: '0.8rem' }}>Faltar ao serviço injustificadamente acima do limite tolerado pelo estatuto (ex: mais de 30 faltas no quinquênio).</li>
        <li style={{ marginBottom: '0.8rem' }}>Gozar de licença para tratar de interesses particulares (LTI).</li>
      </ul>

      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>3. Como agir na prática junto ao RH/Prefeitura</h2>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 1: Confirme seu extrato funcional.</strong> Solicite no RH a sua certidão de tempo de serviço constando as faltas e afastamentos para confirmar se o quinquênio já foi completado.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 2: Faça o requerimento por escrito.</strong> Nunca peça verbalmente. Preencha o requerimento padrão do órgão solicitando o gozo da licença, sugerindo os meses de sua preferência.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 3: Argumente com antecedência.</strong> O gozo da licença atende ao "critério de conveniência e oportunidade" da administração. Logo, pedir com meses de antecedência aumenta suas chances de deferimento.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 4: Recurso em caso de negativa.</strong> Se a chefia negar sistematicamente o gozo por "falta de efetivo", guarde as negativas. Na aposentadoria, isso provará que você não gozou a licença por culpa da administração, facilitando o recebimento em dinheiro.</li>
      </ul>
      
      <div style={{ padding: '1.5rem', backgroundColor: 'rgba(214, 158, 46, 0.1)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent-color)', marginTop: '2.5rem' }}>
        <strong>Importante:</strong> Muitas prefeituras exigem que o servidor participe de cursos para gozar a "Licença Capacitação" (que substituiu a Licença-Prêmio federal). Verifique a legislação local para confirmar as regras atuais do seu município.
      </div>
    </ArticleLayout>
  )
}
