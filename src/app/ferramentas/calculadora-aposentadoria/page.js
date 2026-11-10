'use client'
import { useState } from 'react'
import Link from 'next/link'
import LeadCaptureModal from '@/components/LeadCaptureModal'
import { 
  Calculator, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle, 
  GraduationCap, 
  Award, 
  Calendar, 
  Clock, 
  FileText, 
  ArrowRight,
  ArrowLeft,
  ShieldAlert,
  ChevronDown,
  Sparkles
} from 'lucide-react'

export default function CalculadoraAposentadoria() {
  const [gender, setGender] = useState('mulher')
  const [category, setCategory] = useState('professor')
  const [entryDate, setEntryDate] = useState('pre_2003')
  const [age, setAge] = useState('48')
  const [contribution, setContribution] = useState('22')
  const [publicServiceTime, setPublicServiceTime] = useState('15')
  const [cargoTime, setCargoTime] = useState('8')

  const [result, setResult] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const handleCalculate = (e) => {
    e.preventDefault()

    const ageNum = parseInt(age, 10) || 0
    const contNum = parseInt(contribution, 10) || 0
    const pubNum = parseInt(publicServiceTime, 10) || 0
    const carNum = parseInt(cargoTime, 10) || 0

    // Regras Constitucionais RPPS (EC 103/2019)
    let minAgeRegular = 62
    let minContRegular = 25
    let minPointsTarget = 93 // em 2026
    let minPedagioAge = 57
    let minPedagioCont = 30
    let isTeacher = category === 'professor'
    let isSpecial = category === 'especial'
    let isPolice = category === 'seguranca'

    if (gender === 'homem') {
      minAgeRegular = 65
      minContRegular = 25
      minPointsTarget = 103 // em 2026
      minPedagioAge = 60
      minPedagioCont = 35
    }

    if (isTeacher) {
      // Redução constitucional de 5 anos para professores da Educação Básica
      minAgeRegular -= 5
      minPointsTarget -= 5
      minPedagioAge -= 5
      minPedagioCont -= 5
    } else if (isSpecial) {
      minAgeRegular = 60
      minContRegular = 25
      minPointsTarget = 86
    } else if (isPolice) {
      minAgeRegular = 55
      minContRegular = gender === 'homem' ? 30 : 25
      minPedagioAge = 55
    }

    // Cálculos
    const currentPoints = ageNum + contNum
    const yearsToAge = Math.max(0, minAgeRegular - ageNum)
    const yearsToCont = Math.max(0, minContRegular - contNum)
    const yearsToPublic = Math.max(0, 10 - pubNum)
    const yearsToCargo = Math.max(0, 5 - carNum)
    const yearsRegular = Math.max(yearsToAge, yearsToCont, yearsToPublic, yearsToCargo)

    // Regra de Pontos
    const pointsNeeded = Math.max(0, minPointsTarget - currentPoints)
    // Cada ano que passa adiciona 2 pontos (1 de idade + 1 de contribuição)
    const yearsToPoints = Math.ceil(pointsNeeded / 2)
    const yearsByPointsRule = Math.max(yearsToPoints, yearsToCont, yearsToPublic, yearsToCargo)

    // Regra do Pedágio 100%
    const yearsToPedagioAge = Math.max(0, minPedagioAge - ageNum)
    // Estimando pedágio restante proporcional
    const baseDiff = Math.max(0, minPedagioCont - contNum)
    const yearsPedagioTotal = baseDiff * 2
    const yearsPedagioRule = Math.max(yearsToPedagioAge, yearsPedagioTotal, yearsToPublic, yearsToCargo)

    // Menor tempo viável entre as regras elegíveis
    let bestYears = yearsRegular
    let bestRule = 'Regra Permanente (Idade e Contribuição)'

    if (entryDate !== 'pos_reforma') {
      if (yearsByPointsRule <= bestYears) {
        bestYears = yearsByPointsRule
        bestRule = 'Regra de Transição por Pontos (Art. 4º da EC 103)'
      }
      if (yearsPedagioRule <= bestYears) {
        bestYears = yearsPedagioRule
        bestRule = 'Regra de Transição do Pedágio de 100% (Art. 20 da EC 103)'
      }
    }

    const currentYear = new Date().getFullYear()

    setResult({
      ageNum,
      contNum,
      pubNum,
      carNum,
      gender,
      category,
      entryDate,
      currentPoints,
      targetPoints: minPointsTarget,
      yearsRegular,
      yearsByPointsRule,
      yearsPedagioRule,
      bestYears,
      bestRule,
      estimatedYear: currentYear + bestYears,
      eligibleNow: bestYears === 0,
      hasParityPotential: entryDate === 'pre_2003'
    })

    // Rola suavemente até o resultado
    setTimeout(() => {
      const el = document.getElementById('resultado-calculo')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleLeadSuccess = () => {
    setLeadCaptured(true)
    setShowModal(false)
  }

  const faqs = [
    {
      q: 'Qual é a regra de aposentadoria para professor municipal e estadual?',
      a: 'Professores da Educação Básica têm direito a 5 anos de redução nas exigências. Na regra geral pós-reforma (EC 103/2019), a professora se aposenta com 57 anos de idade e 25 anos de contribuição exclusiva no magistério; o professor homem se aposenta com 60 anos de idade e 25 de magistério, com 10 anos de serviço público e 5 no cargo.'
    },
    {
      q: 'Quem tem direito à Integralidade e Paridade?',
      a: 'Apenas os servidores públicos que ingressaram até 31 de dezembro de 2003 (EC 41/2003). Para ter direito real a se aposentar com o salário integral da ativa e ter os mesmos reajustes, é necessário cumprir a Regra de Transição do Pedágio de 100% ou a Regra de Pontos com a idade mínima exigida.'
    },
    {
      q: 'O que é o Abono de Permanência e como requerer?',
      a: 'O abono de permanência é a devolução da contribuição previdenciária descontada em folha para o servidor que já cumpriu todos os requisitos para se aposentar, mas escolhe continuar na ativa. Ele pode dobrar sua margem financeira enquanto decide o momento certo de sair.'
    },
    {
      q: 'Como funciona a regra do Pedágio 100%?',
      a: 'Exige idade mínima de 57 anos para mulheres (52 para professoras) e 60 anos para homens (55 para professores). Além disso, o servidor precisa cumprir 100% do tempo de contribuição que faltava no dia 13 de novembro de 2019. É a regra mais vantajosa para quem ingressou antes de 2003, pois garante a integralidade.'
    },
    {
      q: 'Municípios que não fizeram reforma da previdência seguem qual regra?',
      a: 'Municípios com RPPS que ainda não aprovaram reforma estatutária própria continuam aplicando as regras anteriores à EC 103/2019 ou normas transitórias da Constituição Estadual/Federal. Fique atento, pois você pode se aposentar pelas regras antigas se o seu município não votou a adequação!'
    }
  ]

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section Premium Oficial */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #09182a 0%, #102a45 60%, #1a365d 100%)', 
        color: 'white', 
        padding: '4.5rem 1.5rem 5.5rem', 
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Glow de fundo */}
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236,201,75,0.12) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '860px', textAlign: 'center' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.2rem' }}>
            <Link 
              href="/ferramentas" 
              style={{ 
                color: 'rgba(255,255,255,0.7)', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.4rem', 
                fontSize: '0.85rem',
                backgroundColor: 'rgba(255,255,255,0.08)',
                padding: '0.35rem 0.9rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.15)'
              }}
            >
              <ArrowLeft size={14} /> Voltar para Central de Ferramentas
            </Link>
          </div>

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
            <Sparkles size={16} /> ATUALIZADA PARA EMENDA CONSTITUCIONAL 103/2019 (RPPS)
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)', marginBottom: '1rem', fontWeight: '800', lineHeight: 1.15, letterSpacing: '-0.5px' }}>
            Calculadora de Aposentadoria do <span style={{ color: '#ecc94b' }}>Servidor Público</span>
          </h1>

          <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '720px', margin: '0 auto' }}>
            Simule gratuitamente quanto tempo falta para se aposentar no RPPS municipal ou estadual, comparando regras de transição por pontos, pedágio de 100% e a redução de 5 anos para professores.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '960px', margin: '0 auto', marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>

        {/* Formulário Interativo */}
        <div style={{ 
          background: 'white', 
          padding: '2.5rem', 
          borderRadius: '20px', 
          boxShadow: '0 12px 30px -5px rgba(0,0,0,0.08)', 
          border: '1px solid #e2e8f0',
          marginBottom: '3rem'
        }}>
          <form onSubmit={handleCalculate}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              
              {/* Gênero */}
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Gênero Biológico
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setGender('mulher')}
                    style={{
                      flex: 1,
                      padding: '0.8rem',
                      borderRadius: '8px',
                      border: `2px solid ${gender === 'mulher' ? 'var(--secondary-color)' : 'var(--border-color)'}`,
                      backgroundColor: gender === 'mulher' ? 'rgba(49, 130, 206, 0.1)' : 'var(--card-bg)',
                      fontWeight: gender === 'mulher' ? 'bold' : 'normal',
                      cursor: 'pointer',
                      color: 'var(--text-color)'
                    }}
                  >
                    Mulher
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('homem')}
                    style={{
                      flex: 1,
                      padding: '0.8rem',
                      borderRadius: '8px',
                      border: `2px solid ${gender === 'homem' ? 'var(--secondary-color)' : 'var(--border-color)'}`,
                      backgroundColor: gender === 'homem' ? 'rgba(49, 130, 206, 0.1)' : 'var(--card-bg)',
                      fontWeight: gender === 'homem' ? 'bold' : 'normal',
                      cursor: 'pointer',
                      color: 'var(--text-color)'
                    }}
                  >
                    Homem
                  </button>
                </div>
              </div>

              {/* Cargo / Categoria */}
              <div>
                <label htmlFor="select-category" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Cargo / Categoria Funcional
                </label>
                <select
                  id="select-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="professor">🎓 Professor(a) da Educação Básica</option>
                  <option value="geral">🏛️ Servidor Geral (Administrativo, Técnico, Fiscal)</option>
                  <option value="especial">🏥 Saúde / Agente Nocivo (Aposentadoria Especial)</option>
                  <option value="seguranca">🛡️ Segurança Pública / Guarda Municipal</option>
                </select>
              </div>

              {/* Data de Ingresso */}
              <div>
                <label htmlFor="select-entry" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Quando você ingressou no Serviço Público?
                </label>
                <select
                  id="select-entry"
                  value={entryDate}
                  onChange={(e) => setEntryDate(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    fontSize: '0.95rem'
                  }}
                >
                  <option value="pre_2003">Até 31/12/2003 (Direito a Paridade e Integralidade)</option>
                  <option value="transicao_2019">Entre 2004 e 12/11/2019 (Pré-Reforma EC 103)</option>
                  <option value="pos_reforma">A partir de 13/11/2019 (Nova Regra Permanente)</option>
                </select>
              </div>

            </div>

            {/* Tempos em Anos */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <label htmlFor="input-age" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Sua Idade Atual (anos)
                </label>
                <input
                  id="input-age"
                  type="number"
                  min="18"
                  max="85"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
              </div>

              <div>
                <label htmlFor="input-contribution" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Tempo de Contribuição Total
                </label>
                <input
                  id="input-contribution"
                  type="number"
                  min="0"
                  max="60"
                  value={contribution}
                  onChange={(e) => setContribution(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Soma INSS averbado + RPPS</span>
              </div>

              <div>
                <label htmlFor="input-public" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Tempo no Serviço Público
                </label>
                <input
                  id="input-public"
                  type="number"
                  min="0"
                  max="50"
                  value={publicServiceTime}
                  onChange={(e) => setPublicServiceTime(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Mínimo de 10 anos exigido</span>
              </div>

              <div>
                <label htmlFor="input-cargo" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  Tempo no Cargo Atual
                </label>
                <input
                  id="input-cargo"
                  type="number"
                  min="0"
                  max="40"
                  value={cargoTime}
                  onChange={(e) => setCargoTime(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)'
                  }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Mínimo de 5 anos no cargo</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1.1rem',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <Calculator size={22} />
              Simular Minha Aposentadoria Agora
            </button>
          </form>
        </div>

        {/* Bloco de Resultado Imediato */}
        {result && (
          <div id="resultado-calculo" style={{ 
            background: 'var(--card-bg)', 
            padding: '2.5rem', 
            borderRadius: '16px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)', 
            border: '2px solid var(--secondary-color)',
            marginBottom: '3.5rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span style={{ 
                backgroundColor: result.eligibleNow ? '#c6f6d5' : '#feebc8', 
                color: result.eligibleNow ? '#22543d' : '#744210', 
                padding: '0.4rem 1.2rem', 
                borderRadius: '999px', 
                fontWeight: 'bold',
                fontSize: '0.9rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                {result.eligibleNow ? <CheckCircle2 size={18} /> : <Clock size={18} />}
                {result.eligibleNow ? 'Direito Preenchido!' : 'Estimativa de Tempo'}
              </span>

              <h2 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginTop: '1rem', fontWeight: '800' }}>
                {result.eligibleNow ? (
                  'Você já pode requerer sua Aposentadoria!'
                ) : (
                  <>Faltam aproximadamente <span style={{ color: 'var(--secondary-color)' }}>{result.bestYears} anos</span></>
                )}
              </h2>

              <p style={{ color: 'var(--text-light)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
                {result.eligibleNow ? (
                  'Pelos critérios simulados, você atingiu os requisitos mínimos para dar entrada no RPPS ou pedir Abono de Permanência.'
                ) : (
                  <>Ano estimado de elegibilidade: <strong>{result.estimatedYear}</strong> (pela melhor regra disponível).</>
                )}
              </p>
            </div>

            {/* Grid de Regras Comparadas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Card Regra Permanente */}
              <div style={{ 
                padding: '1.5rem', 
                borderRadius: '12px', 
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)' 
              }}>
                <h4 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Regra Permanente
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Idade Mínima + 25 anos de contribuição (10 público / 5 cargo).
                </p>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: result.yearsRegular === 0 ? '#38a169' : 'var(--text-color)' }}>
                  {result.yearsRegular === 0 ? 'Apto Agora' : `Faltam ${result.yearsRegular} anos`}
                </div>
              </div>

              {/* Card Regra de Pontos */}
              <div style={{ 
                padding: '1.5rem', 
                borderRadius: '12px', 
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)' 
              }}>
                <h4 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Regra por Pontos
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  Você soma <strong>{result.currentPoints} pontos</strong> (Meta: {result.targetPoints} pts).
                </p>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: result.yearsByPointsRule === 0 ? '#38a169' : 'var(--text-color)' }}>
                  {result.yearsByPointsRule === 0 ? 'Apto Agora' : `Faltam ${result.yearsByPointsRule} anos`}
                </div>
              </div>

              {/* Card Regra do Pedágio 100% */}
              <div style={{ 
                padding: '1.5rem', 
                borderRadius: '12px', 
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)' 
              }}>
                <h4 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Pedágio 100% (Integralidade)
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
                  {result.hasParityPotential ? '🌟 Dá direito à Paridade e Salário Integral' : 'Idade + Dobro do tempo restante em 2019'}
                </p>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: result.yearsPedagioRule === 0 ? '#38a169' : 'var(--text-color)' }}>
                  {result.yearsPedagioRule === 0 ? 'Apto Agora' : `Faltam ${result.yearsPedagioRule} anos`}
                </div>
              </div>
            </div>

            {/* Alerta de Integralidade e Paridade */}
            {result.hasParityPotential && (
              <div style={{ 
                backgroundColor: '#fefcbf', 
                border: '1px solid #d69e2e', 
                color: '#744210', 
                padding: '1.25rem', 
                borderRadius: '10px', 
                marginBottom: '2rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <Award size={28} style={{ flexShrink: 0 }} />
                <div>
                  <strong>Atenção ao seu Direito de Paridade:</strong> Como você ingressou até 31/12/2003, você tem a oportunidade de se aposentar com a <em>última remuneração integral</em> e paridade salarial pela Regra do Pedágio de 100%. Cuidado para não aceitar cálculos pela média salarial do RH!
                </div>
              </div>
            )}

            {/* Chamada para Diagnóstico Completo em PDF (Lead Capture Suave) */}
            <div style={{ 
              background: 'linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '14px', 
              textAlign: 'center' 
            }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Quer o Diagnóstico Previdenciário Detalhado em PDF?
              </h3>
              <p style={{ fontSize: '0.95rem', opacity: 0.9, maxWidth: '640px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                Receba o resumo oficial dos seus direitos, análise da EC 103/2019, dicas de averbação de tempo do INSS e modelo de requerimento administrativo.
              </p>
              
              {!leadCaptured ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="btn"
                  style={{
                    backgroundColor: '#ecc94b',
                    color: '#1a202c',
                    fontWeight: 'bold',
                    padding: '0.9rem 2rem',
                    fontSize: '1.05rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  📄 Enviar Meu Diagnóstico em PDF
                </button>
              ) : (
                <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.8rem', borderRadius: '8px', display: 'inline-block' }}>
                  ✅ Diagnóstico solicitado com sucesso! Em breve você receberá as diretrizes por e-mail/WhatsApp.
                </div>
              )}
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button 
                onClick={() => setResult(null)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-light)', 
                  cursor: 'pointer', 
                  textDecoration: 'underline',
                  fontSize: '0.9rem' 
                }}
              >
                Refazer a simulação com outros dados
              </button>
            </div>
          </div>
        )}

        {/* Seção Educacional SEO Completa (Para Rankear Top 1) */}
        <section style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '2.5rem', 
          borderRadius: '16px', 
          border: '1px solid var(--border-color)',
          marginBottom: '3rem',
          lineHeight: '1.8'
        }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Como funciona a Aposentadoria no RPPS após a Reforma da Previdência?
          </h2>

          <p style={{ color: 'var(--text-color)', marginBottom: '1.25rem' }}>
            A <strong>Emenda Constitucional nº 103/2019</strong> trouxe as mudanças mais profundas da história para os servidores públicos estatutários vinculados a Regimes Próprios de Previdência Social (RPPS). Antes da reforma, bastava cumprir a idade mínima de 60 anos (homens) ou 55 anos (mulheres) com 35/30 de contribuição para se aposentar com tranquilidade.
          </p>

          <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Regra Especial para Professores Municipais e Estaduais
          </h3>
          <p style={{ color: 'var(--text-color)', marginBottom: '1.25rem' }}>
            A Constituição Federal protege a penosidade da carreira do magistério. Professores que comprovem tempo exclusivo em funções de magistério na educação infantil, ensino fundamental ou médio possuem uma redução expressa de <strong>5 anos na idade e no tempo de contribuição</strong>.
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-color)', marginBottom: '1.5rem' }}>
            <li><strong>Professora Mulher:</strong> 57 anos de idade e 25 anos de magistério (em vez de 62 anos).</li>
            <li><strong>Professor Homem:</strong> 60 anos de idade e 25 anos de magistério (em vez de 65 anos).</li>
            <li><strong>Exigências concomitantes:</strong> Mínimo de 10 anos de efetivo exercício no serviço público e 5 anos no cargo em que se dará a aposentadoria.</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', color: 'var(--secondary-color)', marginTop: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Aposentadoria Proporcional: Ainda Existe?
          </h3>
          <p style={{ color: 'var(--text-color)', marginBottom: '1.25rem' }}>
            Uma das dúvidas mais comuns é sobre o <strong>cálculo da aposentadoria proporcional</strong>. A EC 103/2019 extinguiu a aposentadoria voluntária proporcional por idade e tempo de contribuição para novos pedidos. Hoje, a proporcionalidade só é aplicada em:
          </p>
          <ol style={{ paddingLeft: '1.5rem', color: 'var(--text-color)', marginBottom: '1.5rem' }}>
            <li><strong>Direito Adquirido:</strong> Servidores que preencheram todos os requisitos da aposentadoria proporcional até o dia 12 de novembro de 2019.</li>
            <li><strong>Aposentadoria por Incapacidade Permanente (Invalidez):</strong> Quando não decorrente de acidente de trabalho ou doença profissional.</li>
            <li><strong>Aposentadoria Compulsória aos 75 anos:</strong> Calculada proporcionalmente ao tempo de contribuição efetivo.</li>
          </ol>

          {/* Banner Interno para Kit de Requerimentos */}
          <div style={{ 
            backgroundColor: '#f7fafc', 
            border: '2px dashed var(--secondary-color)', 
            padding: '1.75rem', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginTop: '2.5rem'
          }}>
            <h4 style={{ color: 'var(--primary-color)', fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Vai dar entrada na aposentadoria ou pedir averbação de tempo?
            </h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              Não deixe o RH indeferir seu pedido por falta de fundamentação legal. Use nossos modelos jurídicos prontos para protocolo.
            </p>
            <Link 
              href="/produtos/kit-requerimentos" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem' }}
            >
              Conhecer o Kit de Requerimentos <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* FAQ - Perguntas Frequentes (SEO Rich Snippets) */}
        <section style={{ 
          backgroundColor: 'var(--card-bg)', 
          padding: '2.5rem', 
          borderRadius: '16px', 
          border: '1px solid var(--border-color)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '1.75rem', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <HelpCircle size={26} color="var(--secondary-color)" /> Dúvidas Frequentes sobre Aposentadoria RPPS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                style={{ 
                  border: '1px solid var(--border-color)', 
                  borderRadius: '10px', 
                  overflow: 'hidden',
                  backgroundColor: openFaqIndex === index ? 'var(--bg-color)' : 'transparent' 
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.05rem',
                    color: 'var(--primary-color)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  {faq.q}
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: openFaqIndex === index ? 'rotate(180deg)' : 'rotate(0)', 
                      transition: 'transform 0.2s ease' 
                    }} 
                  />
                </button>
                {openFaqIndex === index && (
                  <div style={{ padding: '0 1.2rem 1.2rem', color: 'var(--text-color)', lineHeight: '1.7', fontSize: '0.98rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Modal de Captura de Lead Não-Bloqueante */}
      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSuccess={handleLeadSuccess} 
        title="Receba seu Diagnóstico em PDF"
        description="Informe seus dados para gerarmos o PDF oficial com as projeções de paridade, regras de transição e checklist de averbação para o seu RH."
      />
    </div>
  )
}
