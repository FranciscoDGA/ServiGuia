'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShieldCheck, FileText, Star, AlertTriangle, CheckCircle2, Crown, HelpCircle, Gift } from 'lucide-react'

export default function KitRequerimentos() {
  const allForms = [
    { cat: "Direitos Financeiros", items: ["Adicional por Tempo de Serviço (Anuênio/Quinquênio)", "Progressão/Promoção Funcional", "Adicional de Insalubridade/Periculosidade", "Pagamento de Férias Não Gozadas (Indenização)", "Restituição de Descontos Indevidos"] },
    { cat: "Licenças e Afastamentos", items: ["Concessão de Licença-Prêmio", "Conversão de Licença-Prêmio em Pecúnia", "Licença para Capacitação / Mestrado", "Licença para Tratamento de Saúde (Prorrogação)", "Licença para Acompanhar Pessoa da Família Doente"] },
    { cat: "Sindicância e PAD", items: ["Defesa Prévia (Sindicância / PAD)", "Cópia Integral de Processo Administrativo", "Recurso Administrativo contra Punição", "Pedido de Reconsideração de Ato Administrativo"] },
    { cat: "Aposentadoria e Previdência", items: ["Averbação de Tempo de Contribuição", "Certidão de Tempo de Contribuição (CTC)", "Abono de Permanência", "Aposentadoria Voluntária por Idade/Tempo"] },
    { cat: "Dia a Dia e Jornada", items: ["Redução de Jornada (Filho com Deficiência)", "Alteração de Lotação / Remoção"] }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '0', fontFamily: 'var(--font-inter)' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', color: 'white', padding: '5rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1200px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', position: 'relative', zIndex: 2 }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
              <AlertTriangle size={18} color="#ecc94b" />
              <span>Atenção Servidor Público: Pare de perder dinheiro!</span>
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1', fontWeight: '800' }}>
              Não pague <span style={{ color: '#ecc94b' }}>R$ 1.500</span> para um advogado protocolar um pedido simples.
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2.5rem', maxWidth: '800px' }}>
              Os <strong>Kits de Requerimentos ServGuia</strong> te dão o poder de exigir seus direitos de forma autônoma. 100% em <strong>formato Word editável</strong> para você trocar o nome da prefeitura, imprimir e protocolar.
            </p>
            <a href="#planos" className="btn" style={{ backgroundColor: '#ecc94b', color: '#1a202c', fontSize: '1.2rem', padding: '1.2rem 3rem', textTransform: 'uppercase', fontWeight: 'bold', borderRadius: '50px', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', transition: 'all 0.3s', display: 'inline-block' }}>
              Ver Todos os Pacotes
            </a>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/ferramentas/amostra-gratis" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'underline', fontSize: '0.95rem' }}>
                Ainda não tem certeza? Baixe uma amostra grátis primeiro.
              </Link>
            </div>
          </div>
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1/1' }}>
              <Image 
                src="/kit_mockup.png" 
                alt="Kit Premium de Requerimentos" 
                fill
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.4))' }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dores */}
      <section className="container" style={{ padding: '5rem 2rem', maxWidth: '1000px' }}>
        <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
          Por que você não acha isso no Google?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #e53e3e', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#e53e3e', marginBottom: '1rem' }}>Prefeituras Escondem o Jogo</h3>
            <p style={{ color: 'var(--text-light)' }}>Cada RH tem sua regra, mas a Constituição é uma só. Requerimentos sem a devida fundamentação legal são automaticamente indeferidos ou ignorados por meses.</p>
          </div>
          <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', borderTop: '4px solid #ecc94b', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#d69e2e', marginBottom: '1rem' }}>Modelos Genéricos Falham</h3>
            <p style={{ color: 'var(--text-light)' }}>O que você acha solto na internet serve para empresas privadas. No Direito Administrativo, se você não citar a lei e o STF, seu direito é negado.</p>
          </div>
        </div>
      </section>

      {/* Como Funciona & Bônus */}
      <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2.5rem', fontWeight: '700' }}>
            Fácil como Preencher Lacunas
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 400px' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#ebf8ff', padding: '0.8rem', borderRadius: '50%' }}><FileText color="#2b6cb0" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.3rem' }}>1. Arquivos em Word (.docx)</h4>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>Nada de PDFs travados. Você abre os arquivos no seu computador e pode alterar tudo o que quiser.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#ebf8ff', padding: '0.8rem', borderRadius: '50%' }}><CheckCircle2 color="#2b6cb0" /></div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '0.3rem' }}>2. Adapte para a sua Cidade</h4>
                    <p style={{ color: 'var(--text-light)', margin: 0 }}>Deixamos marcações claras como [NOME DA PREFEITURA] para você preencher em segundos, sem mexer nas citações das leis que importam.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Box Bônus */}
            <div style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, #fdf6e3 0%, #fff 100%)', padding: '2.5rem', borderRadius: '20px', border: '2px dashed #ecc94b', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Gift size={32} color="#d69e2e" />
                <h3 style={{ color: '#d69e2e', fontSize: '1.5rem', margin: 0 }}>Super Bônus Incluso</h3>
              </div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>Guia Prático de Preenchimento</h4>
              <p style={{ color: 'var(--text-light)', marginBottom: 0 }}>
                Não sabe qual lei citar? Com medo de preencher errado? Ao garantir o seu kit hoje, você leva de presente um <strong>Manual de Instruções Passo a Passo</strong> te ensinando a preencher, assinar e onde protocolar no RH, mesmo que você nunca tenha feito isso na vida!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Documentos */}
      <section style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>
            O Que Tem no Kit Master (VIP)?
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Veja o arsenal jurídico que você terá à sua disposição para o resto da carreira.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {allForms.map((category, idx) => (
              <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginBottom: '1.5rem', borderBottom: '2px solid var(--secondary-color)', paddingBottom: '0.5rem' }}>
                  {category.cat}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-color)' }}>
                      <FileText size={18} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.95rem' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container" style={{ padding: '5rem 2rem', maxWidth: '900px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2rem', marginBottom: '3rem', fontWeight: '800' }}>Quem comprou, recomenda:</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { name: 'Marcos T., Guarda Municipal', text: 'Eu ia pagar 2 mil pro advogado fazer minha defesa no PAD. O modelo do kit salvou meu emprego.' },
            { name: 'Ana P., Enfermeira', text: 'Usei o modelo de insalubridade, troquei o nome da cidade no Word, protocolei e no mês seguinte a portaria já saiu!' },
            { name: 'Roberto S., Analista', text: 'O manual ensina tudo. Foi só baixar, preencher as lacunas e entregar no RH. A fundamentação legal é absurda de boa.' }
          ].map((test, i) => (
            <div key={i} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', textAlign: 'left', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="#ecc94b" color="#ecc94b" />)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: '1rem', fontSize: '0.95rem' }}>"{test.text}"</p>
              <p style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{test.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Planos */}
      <section id="planos" style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '800' }}>
            Escolha o Pacote Ideal para Você
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '4rem', fontSize: '1.2rem' }}>
            Todos os planos incluem Acesso Vitalício + Guia Bônus de Preenchimento.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
            {/* Plano 1 */}
            <div style={{ background: 'var(--bg-color)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#4a5568', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Básico</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Focado no dia a dia, férias e licenças comuns.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary-color)' }}>R$ 37</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,90</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#38a169" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>5 Formulários de Licenças</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#38a169" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Guia Bônus Incluso</span></li>
              </ul>
              <a href="#link-hotmart-basico" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#e2e8f0', color: '#4a5568', fontWeight: 'bold' }}>Quero o Básico</a>
            </div>

            {/* Plano 2 */}
            <div style={{ background: 'var(--bg-color)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#2b6cb0', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Financeiro</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Retorno imediato: Insalubridade, Quinquênio e Atrasados.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#2b6cb0' }}>R$ 97</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>7 Formulários Financeiros</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#2b6cb0" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Guia Bônus Incluso</span></li>
              </ul>
              <a href="#link-hotmart-financeiro" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#ebf8ff', color: '#2b6cb0', fontWeight: 'bold' }}>Quero o Financeiro</a>
            </div>

            {/* Plano 3 */}
            <div style={{ background: 'var(--bg-color)', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ color: '#e53e3e', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Kit Defesa PAD</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>Sindicância e Processos Administrativos. Salve seu emprego.</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#e53e3e' }}>R$ 147</span><span style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#e53e3e" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Defesa Prévia, Recursos e Mais</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#e53e3e" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#4a5568' }}>Guia Bônus Incluso</span></li>
              </ul>
              <a href="#link-hotmart-pad" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#fff5f5', color: '#e53e3e', fontWeight: 'bold' }}>Quero o de Defesa</a>
            </div>

            {/* Plano VIP */}
            <div style={{ background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)', padding: '2.5rem 2rem', borderRadius: '20px', border: '2px solid #ecc94b', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)', display: 'flex', flexDirection: 'column', height: '100%', transform: 'scale(1.05)', position: 'relative', zIndex: 10 }}>
              <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#ecc94b', color: '#1a202c', padding: '0.2rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Crown size={14} /> MAIS VENDIDO
              </div>
              <h3 style={{ color: 'white', fontSize: '1.6rem', marginBottom: '0.5rem' }}>Kit Master VIP</h3>
              <p style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '45px' }}>O Arsenal Completo. Todos os 20 documentos por um valor único.</p>
              <div style={{ marginBottom: '2rem' }}>
                <p style={{ textDecoration: 'line-through', color: '#718096', fontSize: '0.9rem', margin: 0 }}>Se comprados separados: R$ 281,90</p>
                <span style={{ fontSize: '3rem', fontWeight: '900', color: '#ecc94b' }}>R$ 197</span><span style={{ fontSize: '1.2rem', color: '#a0aec0' }}>,00</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: 'white' }}><strong>Todos os 20 Formulários</strong></span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>Kit Básico + Financeiro + PAD</span></li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}><CheckCircle2 size={18} color="#ecc94b" style={{ flexShrink: 0, marginTop: '2px' }} /> <span style={{ fontSize: '0.95rem', color: '#e2e8f0' }}>Guia Bônus Incluso</span></li>
              </ul>
              <a href="#link-hotmart-vip" className="btn" style={{ width: '100%', textAlign: 'center', backgroundColor: '#ecc94b', color: '#1a202c', fontWeight: 'bold', fontSize: '1.2rem', padding: '1rem' }}>
                COMPRAR KIT COMPLETO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Selo de Garantia Premium */}
      <section style={{ backgroundColor: '#1a202c', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', border: '1px solid rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '20px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.05) 0%, transparent 100%)' }}>
          <ShieldCheck size={80} color="#ecc94b" style={{ margin: '0 auto 1.5rem' }} />
          <h2 style={{ color: '#ecc94b', fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: '800' }}>Risco Absolutamente Zero</h2>
          <p style={{ fontSize: '1.2rem', color: '#e2e8f0', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Confiamos tanto na qualidade e embasamento jurídico dos nossos requerimentos que oferecemos uma <strong>Garantia Incondicional de 7 Dias</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', color: '#a0aec0' }}>
            Baixe os arquivos, leia, tente preencher. Se por qualquer motivo (qualquer mesmo) você achar que não serve para o seu caso na sua prefeitura, basta apertar um botão na Hotmart e devolveremos 100% do seu dinheiro. Sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 2rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem', fontSize: '2.2rem', fontWeight: '700' }}>
            Perguntas Frequentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { q: 'Isso serve para servidores de qual cidade/estado?', a: 'Para todos do Brasil! A estrutura jurídica dos documentos é baseada na Constituição Federal e em decisões do STF, que estão acima de qualquer lei municipal. Você só precisará trocar o nome da sua prefeitura no Word.' },
              { q: 'Vou conseguir editar os documentos?', a: 'Sim! Ao contrário de modelos em PDF que você não consegue mexer, todos os nossos arquivos estão no formato Microsoft Word (.docx). É só baixar, abrir no seu computador e digitar os seus dados nas marcações que deixamos.' },
              { q: 'Nunca preenchi um requerimento. Alguém vai me ajudar?', a: 'Sim. Ao comprar qualquer um dos planos, você ganha de bônus o nosso Guia de Preenchimento Passo a Passo, que ensina como preencher as lacunas, como assinar e como protocolar no RH.' },
              { q: 'Como vou receber o acesso?', a: 'Imediatamente após a confirmação do pagamento. Como a transação é processada pela Hotmart, o sistema enviará um link para o seu e-mail na mesma hora. Pagamentos via PIX e Cartão liberam em segundos.' }
            ].map((faq, i) => (
              <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <HelpCircle size={20} color="var(--secondary-color)" /> {faq.q}
                </h4>
                <p style={{ color: 'var(--text-light)', margin: 0, lineHeight: '1.6', paddingLeft: '1.8rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
