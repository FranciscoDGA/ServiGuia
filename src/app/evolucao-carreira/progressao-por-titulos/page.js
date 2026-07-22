import ArticleLayout from '@/components/ArticleLayout'

export const metadata = {
  title: 'Como funciona a progressão funcional por títulos e pós-graduação no serviço público | ServGuia',
  description: 'Aprenda como usar sua pós-graduação ou mestrado para acelerar sua evolução funcional e subir na tabela salarial.',
}

export default function Article() {
  return (
    <ArticleLayout 
      title="Como funciona a progressão funcional por títulos e pós-graduação no serviço público"
      date="22 de Julho de 2026"
      readTime="6"
    >
      <p style={{ marginBottom: '1.5rem' }}>
        A <strong>progressão funcional por títulos</strong> é um dos direitos mais valiosos (e muitas vezes ignorados) do servidor público. Se você é concursado, entender como converter sua qualificação educacional em aumento real no vencimento base é essencial para o planejamento da sua carreira a longo prazo.
      </p>
      
      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>1. O que é a Progressão por Títulos?</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Diferente da progressão por antiguidade, que ocorre naturalmente com o passar dos anos (geralmente triênios, quinquênios ou anuênios), a progressão por titulação recompensa o servidor pelo aprimoramento profissional. Ao concluir cursos de pós-graduação (<i>lato sensu</i>), mestrado ou doutorado, o estatuto do servidor prevê um salto para níveis superiores da tabela salarial ou a concessão de um percentual fixo de acréscimo.
      </p>
      
      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>2. O curso precisa ser na área de atuação?</h2>
      <p style={{ marginBottom: '1.5rem' }}>
        Na grande maioria dos estatutos municipais e estaduais, sim. O curso de especialização deve ter <strong>afinidade direta ou indireta</strong> com as atribuições do seu cargo. Por exemplo, um Guarda Municipal que faz pós-graduação em Segurança Pública ou Direito Administrativo terá facilidade no deferimento. Já uma pós-graduação totalmente desvinculada das atribuições do cargo tem alta chance de ser indeferida pelo RH.
      </p>

      <h2 style={{ marginTop: '2.5rem', marginBottom: '1.2rem', color: 'var(--secondary-color)', fontSize: '1.8rem' }}>3. Como agir na prática junto ao RH/Prefeitura</h2>
      <ul style={{ marginLeft: '1.5rem', marginBottom: '2rem' }}>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 1: Consulte o Plano de Cargos e Carreiras (PCCS).</strong> Antes de matricular-se em qualquer curso, verifique na lei do seu município qual é a carga horária mínima exigida (geralmente 360 horas para especialização).</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 2: Verifique o reconhecimento do MEC.</strong> O diploma ou certificado deve ser expedido por instituição devidamente credenciada e reconhecida pelo Ministério da Educação.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 3: Monte o processo administrativo.</strong> Protocole o requerimento no Setor de Recursos Humanos anexando cópia autenticada (ou simples, desde que conferida com o original pelo servidor que a recebe) do certificado e do histórico escolar.</li>
        <li style={{ marginBottom: '0.8rem' }}><strong>Passo 4: Acompanhe o protocolo.</strong> A administração tem o dever legal de responder. Caso demore mais de 30 a 60 dias (conforme o estatuto local), é possível impetrar recurso administrativo ou acionar a via judicial para garantir o pagamento dos retroativos.</li>
      </ul>

      <div style={{ padding: '1.5rem', backgroundColor: 'rgba(43, 108, 176, 0.05)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary-color)', marginTop: '2.5rem' }}>
        <strong>Dica do Especialista:</strong> O aumento decorrente da progressão por títulos tem impacto direto em todos os reflexos salariais, como o cálculo da sua futura aposentadoria, 1/3 de férias, gratificações e 13º salário. Não atrase sua qualificação!
      </div>
    </ArticleLayout>
  )
}
