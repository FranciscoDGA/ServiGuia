import ArticleLayout from '@/components/ArticleLayout'

export const metadata = {
  title: 'Abono de Permanência: Quando vale a pena continuar trabalhando? | ServGuia',
  description: 'Saiba o que é o abono de permanência, como calcular o valor exato no seu contracheque e descubra se financeiramente vale a pena postergar a aposentadoria.',
}

export default function Article() {
  return (
    <ArticleLayout 
      title="Abono de Permanência: Quando vale a pena continuar trabalhando após atingir o tempo?"
      date="24 de Julho de 2026"
      readTime="6"
    >
      <p style={{ marginBottom: '1.5rem' }}>
        Chegar ao momento de preencher todos os requisitos para a aposentadoria voluntária é um marco na vida de qualquer servidor público. Porém, existe um incentivo financeiro para quem decide continuar na ativa: o famoso <strong>Abono de Permanência</strong>.
      </p>
      
      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>1. O que é o Abono de Permanência?</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        O abono de permanência é um benefício pago ao servidor que já cumpriu os requisitos para se aposentar, mas opta por continuar trabalhando. Na prática, ele funciona como um reembolso da contribuição previdenciária. 
        Ou seja, você continua descontando a previdência (ex: 14%), mas recebe no mesmo contracheque um abono no exato valor desse desconto, anulando-o. O seu salário líquido aumenta!
      </p>
      
      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>2. Quando vale a pena financeiramente?</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Decidir entre a aposentadoria imediata ou continuar pelo abono depende de alguns fatores matemáticos:
      </p>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.8rem' }}><strong>Seu salário líquido aumenta:</strong> Sem o desconto da previdência, você ganha "um aumento" de 11% a 14% de imediato.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Perda de benefícios na inatividade:</strong> Muitos servidores recebem auxílio-alimentação e auxílio-transporte que são cortados na aposentadoria. Ficar na ativa mantém esses benefícios.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Regra de transição sem integralidade:</strong> Se você se aposentar agora e não tiver direito a paridade/integralidade, o valor da sua aposentadoria cairá drasticamente. O abono permite continuar até atingir uma regra mais vantajosa (ex: regra do pedágio 100%).</li>
      </ul>

      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>3. Como agir na prática junto ao RH/Prefeitura</h2>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 1: Solicite a simulação de aposentadoria.</strong> Peça ao instituto de previdência (RPPS) ou ao RH a contagem oficial do seu tempo de contribuição.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 2: Protocole o requerimento do abono.</strong> Ao confirmar que atingiu os requisitos de tempo e idade, não espere a prefeitura te avisar. Protocole imediatamente o requerimento de Abono de Permanência, pois os efeitos financeiros costumam valer a partir da data do protocolo.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 3: Acompanhe no contracheque.</strong> Após deferido, verifique o seu holerite: deve constar a rubrica de desconto do RPPS e, logo abaixo, a rubrica de crédito "Abono de Permanência" com o exato mesmo valor.</li>
      </ul>
      
      <div style={{ padding: '1.5rem', backgroundColor: 'rgba(43, 108, 176, 0.05)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary-color)', marginTop: '2.5rem' }}>
        <strong>Dica do Especialista:</strong> O abono de permanência sofre incidência de Imposto de Renda. Fique atento a isso quando fizer a sua simulação financeira para ver se realmente compensa adiar o descanso!
      </div>
    </ArticleLayout>
  )
}
