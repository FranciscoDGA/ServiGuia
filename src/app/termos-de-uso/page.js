export const metadata = {
  title: 'Termos de Uso | ServGuia',
  description: 'Termos e Condições de Uso dos serviços e produtos do site ServGuia.',
};

export default function TermosDeUso() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '4rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '12px', boxShadow: 'var(--shadow)' }}>
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '800' }}>
          Termos de Uso
        </h1>
        <div style={{ color: 'var(--text-color)', lineHeight: '1.8' }}>
          
          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>1. Aceitação dos Termos</h2>
          <p style={{ marginBottom: '1rem' }}>
            Ao acessar o site <strong>ServGuia</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>2. Uso da Licença e Direitos Autorais</h2>
          <p style={{ marginBottom: '1rem' }}>
            Ao adquirir nossos <strong>Kits de Requerimentos</strong>, é concedida a você uma licença pessoal, intransferível e não exclusiva para baixar e usar os documentos (.docx) exclusivamente para o seu uso pessoal e de defesa dos seus próprios direitos funcionais.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Sob esta licença, você <strong>NÃO</strong> pode:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1rem' }}>
            <li>Modificar os materiais para revendê-los ou redistribuí-los gratuitamente em grupos de WhatsApp, Telegram ou fóruns;</li>
            <li>Usar os materiais para fins de comercialização em larga escala (ex: vender os modelos para terceiros);</li>
            <li>Tentar remover quaisquer avisos de direitos autorais ou outras notações de propriedade dos materiais.</li>
          </ul>
          <p style={{ marginBottom: '1rem' }}>
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser encerrada pelo ServGuia a qualquer momento.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>3. Isenção de Responsabilidade Profissional (Aviso Legal)</h2>
          <p style={{ marginBottom: '1rem' }}>
            O ServGuia fornece modelos de requerimentos e formulários administrativos baseados na legislação vigente (Constituição Federal, STF, etc.). No entanto, <strong>não prestamos serviços de advocacia, consultoria jurídica ou representação processual</strong> na venda destes kits básicos.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Os resultados da aplicação dos requerimentos variam de acordo com as leis orgânicas de cada município/estado e da interpretação do RH local. Não garantimos que a administração pública deferirá o seu pedido administrativo, visto que a decisão final cabe à autoridade competente do seu órgão.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>4. Garantia de Devolução</h2>
          <p style={{ marginBottom: '1rem' }}>
            Confiamos na qualidade do nosso material. Conforme o Código de Defesa do Consumidor e as políticas da Hotmart, oferecemos uma <strong>Garantia Incondicional de 7 dias</strong>. Se dentro deste período (a contar da data da compra) você não estiver satisfeito com o material, poderá solicitar o reembolso integral diretamente pela plataforma da Hotmart, sem burocracia.
          </p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem' }}>5. Modificações dos Termos</h2>
          <p style={{ marginBottom: '1rem' }}>
            O ServGuia pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <p style={{ marginTop: '3rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            <strong>Última atualização: Julho de 2026</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
