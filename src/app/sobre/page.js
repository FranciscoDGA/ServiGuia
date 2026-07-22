export default function Sobre() {
  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '2rem' }}>Sobre o ServGuia</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
        O <strong>ServGuia</strong> nasceu de uma dor real: servidores públicos concursados de prefeituras e governos estaduais ficam perdidos nas teias da burocracia.
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-color)', marginTop: '1rem' }}>
        Nossa missão é ser o seu <strong>RH Digital Descomplicado</strong>. Queremos ser o lugar onde você entra, encontra o formulário exato, entende o seu direito mastigadinho e sai com o problema resolvido, sem depender da boa vontade do departamento pessoal e sem gastar fortunas com advogados administrativistas.
      </p>
    </div>
  )
}
