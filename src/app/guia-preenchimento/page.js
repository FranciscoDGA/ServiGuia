import Link from 'next/link'
import { FileText, CheckCircle2, AlertTriangle, Printer } from 'lucide-react'

export const metadata = {
  title: 'Guia Prático de Preenchimento de Requerimentos | ServGuia',
  description: 'Aprenda o passo a passo de como preencher, adaptar e protocolar requerimentos administrativos na sua prefeitura sem precisar de advogado.',
}

export default function GuiaPreenchimento() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px', lineHeight: '1.8' }}>
      <Link href="/" style={{ color: 'var(--text-light)', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
        &larr; Voltar para a Home
      </Link>
      
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2.5rem', fontWeight: '800' }}>
        Guia Prático de Preenchimento (Requerimentos Administrativos)
      </h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.2rem' }}>
        Sabemos que lidar com a burocracia do RH pode ser intimidador. Siga este guia passo a passo para preencher, adaptar e protocolar qualquer um dos nossos modelos sem precisar de advogado.
      </p>

      <div style={{ background: '#ebf8ff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #3182ce', marginBottom: '3rem' }}>
        <h3 style={{ color: '#2b6cb0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <FileText size={24} /> Passo 1: Como Editar os Arquivos Word
        </h3>
        <p style={{ color: 'var(--text-color)' }}>
          Todos os documentos do <strong>Kit Premium</strong> estão no formato <code>.docx</code> (Microsoft Word) e são 100% editáveis. 
          Ao abrir um arquivo, você notará que deixamos <strong>espaços em destaque (entre colchetes)</strong> para você preencher com os seus dados reais.
        </p>
        
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '1.5rem 0' }}>
          <p style={{ margin: '0 0 0.5rem', fontWeight: 'bold', color: 'var(--text-light)' }}>Exemplo no documento:</p>
          <p style={{ fontStyle: 'italic', margin: 0 }}>"Ao Ilmº Sr. Secretário de Recursos Humanos do Município de <strong>[NOME DA SUA CIDADE]</strong>..."</p>
        </div>

        <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Basta apagar a parte <code>[NOME DA SUA CIDADE]</code> e escrever o nome do seu município, ficando assim:</p>
        
        <div style={{ background: '#f0fff4', padding: '1.5rem', borderRadius: '8px', border: '1px solid #9ae6b4' }}>
          <p style={{ fontStyle: 'italic', margin: 0, color: '#276749' }}>"Ao Ilmº Sr. Secretário de Recursos Humanos do Município de <strong>São Paulo</strong>..."</p>
        </div>

        <h4 style={{ color: '#2b6cb0', marginTop: '2rem', marginBottom: '1rem' }}>Dados que você sempre precisará preencher:</h4>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={18} color="#3182ce" /> Seu Nome Completo, CPF e RG.</li>
          <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={18} color="#3182ce" /> Sua Matrícula (RF / Registro Funcional).</li>
          <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={18} color="#3182ce" /> O Cargo que você ocupa (Ex: Professor, Enfermeiro).</li>
          <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><CheckCircle2 size={18} color="#3182ce" /> A sua Lotação atual.</li>
        </ul>
      </div>

      <div style={{ background: '#fffaf0', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #dd6b20', marginBottom: '3rem' }}>
        <h3 style={{ color: '#c05621', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <AlertTriangle size={24} /> Passo 2: A Base Legal (Atenção!)
        </h3>
        <p style={{ color: 'var(--text-color)', marginBottom: '1.5rem' }}>
          Você vai reparar que nossos requerimentos citam leis federais e a Constituição (ex: Art. 37, Art. 39). <strong>NÃO APAGUE essas citações!</strong> 
          São elas que garantem que o RH não poderá recusar o seu pedido. O Direito Administrativo obriga que os municípios sigam o que diz a Constituição e o STF.
        </p>
        
        <p style={{ color: 'var(--text-color)', marginBottom: '1rem' }}>Em alguns formulários, haverá um espaço assim:</p>
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', margin: '1rem 0' }}>
          <p style={{ fontStyle: 'italic', margin: 0 }}>"...conforme previsto no Estatuto dos Servidores, Lei Municipal nº <strong>[COLOQUE O NÚMERO DA LEI DA SUA CIDADE]</strong>..."</p>
        </div>
        
        <p style={{ color: 'var(--text-color)', margin: 0 }}>
          <strong>Dica de Ouro:</strong> Se você não souber o número da lei do seu município, basta jogar no Google: <em>"Estatuto dos servidores de [Sua Cidade]"</em> e colocar o número lá. Se não achar de jeito nenhum, você pode simplesmente apagar esse espaço e deixar apenas a fundamentação constitucional que já vem no modelo.
        </p>
      </div>

      <div style={{ background: '#f0fdf4', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #38a169', marginBottom: '3rem' }}>
        <h3 style={{ color: '#2f855a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Printer size={24} /> Passo 3: Como Protocolar
        </h3>
        <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-color)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
          <li>Depois de preencher tudo no Word, salve o documento no seu computador.</li>
          <li>Imprima <strong>duas cópias</strong> e assine ambas com caneta azul ou preta.</li>
          <li>Leve as duas cópias ao setor de Protocolo ou Recursos Humanos da sua lotação.</li>
          <li>Entregue uma cópia para o atendente e peça para ele <strong>carimbar, datar e assinar a sua cópia</strong> (esta será a sua prova legal de que o pedido foi feito e o prazo da prefeitura começou a contar).</li>
          <li><strong>Se a prefeitura for digital:</strong> Caso usem sistema eletrônico (como o SEI), basta salvar o arquivo Word como PDF e anexar no sistema.</li>
        </ol>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--card-bg)', borderRadius: '20px', border: '2px dashed var(--border-color)' }}>
        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Ainda não tem os formulários?</h3>
        <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
          Adquira agora o Kit Premium com 20 requerimentos jurídicos editáveis e faça valer os seus direitos.
        </p>
        <Link href="/produtos/kit-requerimentos" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
          Conhecer o Kit Premium
        </Link>
      </div>
    </div>
  )
}
