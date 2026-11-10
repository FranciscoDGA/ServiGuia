import Link from 'next/link'
import { 
  Briefcase, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Download, 
  GraduationCap, 
  ChevronRight, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Scale, 
  Users 
} from 'lucide-react'

export const metadata = {
  title: 'Sobre o ServGuia | Nossa Missão, Equipe e Metodologia E-E-A-T',
  description: 'Conheça o ServGuia, portal independente criado por servidores para democratizar o conhecimento estatutário, aposentadoria RPPS e defesa da carreira pública.'
}

export default function Sobre() {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium Oficial */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #102a45 60%, #1a365d 100%)', 
        color: 'white', 
        padding: '5rem 1.5rem 6rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236,201,75,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '860px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            backgroundColor: 'rgba(236,201,75,0.12)', 
            border: '1px solid rgba(236,201,75,0.3)', 
            padding: '0.45rem 1.2rem', 
            borderRadius: '50px', 
            marginBottom: '1.2rem',
            color: '#ecc94b',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            <Sparkles size={16} /> PORTAL INDEPENDENTE DE APOIO AO SERVIDOR PÚBLICO
          </div>

          <h1 style={{ fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', marginBottom: '1.1rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Quem Somos & O Que é o <span style={{ color: '#ecc94b' }}>ServGuia</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Criado por servidores públicos estatutários para descomplicar direitos, combater a desinformação no RH e dar segurança jurídica ao funcionalismo municipal, estadual e federal em todo o Brasil.
          </p>
        </div>
      </section>

      {/* A História Real */}
      <section className="container" style={{ maxWidth: '900px', marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: 'white', padding: '3rem 2.5rem', borderRadius: '20px', boxShadow: '0 12px 30px -5px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.8rem', fontWeight: 800 }}>
            A Realidade que Ninguém Conta no Balcão do RH
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontSize: '1.05rem', color: '#4a5568', lineHeight: '1.8' }}>
            <p>
              Quem é servidor público conhece a rotina: você estuda anos para passar no concurso, assume o cargo com dedicação, mas no primeiro momento em que precisa de uma informação no setor de Recursos Humanos ou Instituto de Previdência, se depara com respostas vagas, má vontade ou o famoso "aqui a gente nunca fez assim".
            </p>
            <p>
              Milhares de servidores perdem <strong>quinquênios, triênios, licença-prêmio em dinheiro, adicionais de insalubridade e até anos de aposentadoria</strong> simplesmente porque não sabem redigir o pedido da forma correta ou desconhecem que o STF e o STJ já deram ganho de causa para casos idênticos.
            </p>
            <p>
              O <strong>ServGuia</strong> nasceu para ser o seu escudo: um portal didático, prático e independente que traduz o "juridiquês" em soluções imediatas, calculadoras transparentes e requerimentos oficiais prontos.
            </p>
          </div>
        </div>
      </section>

      {/* Seção E-E-A-T: Metodologia e Critérios Editoriais */}
      <section className="container" style={{ maxWidth: '900px', marginTop: '4rem' }}>
        <div style={{ backgroundColor: 'white', padding: '3rem 2.5rem', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <Award size={32} color="#2b6cb0" />
            <h2 style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.7rem', fontWeight: 800 }}>
              Metodologia Editorial & Rigor Jurídico (E-E-A-T)
            </h2>
          </div>
          <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Como os temas tratados pelo <strong>ServGuia</strong> envolvem aposentadoria, patrimônio salarial e processos disciplinares (categorizados pelo Google como temas <em>Your Money or Your Life - YMYL</em>), mantemos uma política de checagem estrita:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #2b6cb0' }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800, fontSize: '1.05rem' }}>1. Fontes Primárias</h4>
              <p style={{ color: '#4a5568', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                Todos os nossos guias fundamentam-se diretamente na Constituição Federal de 1988, na Emenda Constitucional nº 103/2019 e nos estatutos vigentes.
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #38a169' }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800, fontSize: '1.05rem' }}>2. Precedentes do STF e STJ</h4>
              <p style={{ color: '#4a5568', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                Acompanhamos ativamente Temas de Repercussão Geral e Recursos Repetitivos (como Temas 1.075 e 1.086 do STJ e Tema 1.097 do STF).
              </p>
            </div>

            <div style={{ padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '12px', borderLeft: '4px solid #d69e2e' }}>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem', fontWeight: 800, fontSize: '1.05rem' }}>3. Independência Total</h4>
              <p style={{ color: '#4a5568', fontSize: '0.88rem', lineHeight: '1.6', margin: 0 }}>
                Não possuímos qualquer vínculo partidário, governamental ou com prefeituras. Nossa atuação é 100% voltada à defesa do servidor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparência e Disclaimer Institucional */}
      <section className="container" style={{ maxWidth: '900px', marginTop: '4rem', textAlign: 'center' }}>
        <div style={{ padding: '2.5rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <Scale color="#2b6cb0" size={36} style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.8rem', fontWeight: 800 }}>Aviso Legal e Transparência</h3>
          <p style={{ color: '#718096', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            O ServGuia é um portal educativo e informativo. Nossos simuladores, calculadoras e modelos visam conferir autonomia ao servidor na esfera administrativa. Casos judiciais contenciosos devem ser sempre acompanhados por advogado regularmente inscrito na OAB.
          </p>
          <Link href="/contato" className="btn" style={{ background: '#2b6cb0', color: 'white', padding: '0.85rem 1.8rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.92rem' }}>
            Entrar em Contato com a Equipe
          </Link>
        </div>
      </section>

    </div>
  )
}