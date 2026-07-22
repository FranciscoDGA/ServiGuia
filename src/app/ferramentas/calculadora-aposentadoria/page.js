'use client'
import { useState } from 'react'
import LeadCaptureModal from '@/components/LeadCaptureModal'

export default function CalculadoraAposentadoria() {
  const [age, setAge] = useState('')
  const [contribution, setContribution] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [result, setResult] = useState(null)

  const handleCalculate = (e) => {
    e.preventDefault()
    if (!age || !contribution) return
    // Require lead capture before showing result
    setShowModal(true)
  }

  const handleLeadSuccess = () => {
    const ageNum = parseInt(age, 10)
    const contNum = parseInt(contribution, 10)
    
    // Simplistic simulation based on a generic rule of 60 years age / 35 contribution
    const yearsToRetireByAge = Math.max(0, 60 - ageNum)
    const yearsToRetireByCont = Math.max(0, 35 - contNum)
    const yearsLeft = Math.max(yearsToRetireByAge, yearsToRetireByCont)

    setResult({
      yearsLeft,
      estimatedYear: new Date().getFullYear() + yearsLeft,
      points: ageNum + contNum
    })
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>
        Calculadora de Aposentadoria (RPPS)
      </h1>
      <p style={{ color: 'var(--text-light)', textAlign: 'center', marginBottom: '3rem' }}>
        Descubra quanto tempo falta para você pendurar as chuteiras usando as regras de transição.
      </p>

      {!result ? (
        <form onSubmit={handleCalculate} style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Sua Idade Atual</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              required
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
              placeholder="Ex: 45"
            />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Tempo de Contribuição (em anos)</label>
            <input 
              type="number" 
              value={contribution} 
              onChange={(e) => setContribution(e.target.value)} 
              required
              style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
              placeholder="Ex: 20"
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
            Calcular Estimativa Grátis
          </button>
        </form>
      ) : (
        <div style={{ background: 'var(--card-bg)', padding: '3rem 2rem', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--secondary-color)', marginBottom: '1rem' }}>Resultado Simulado</h2>
          <div style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Você soma atualmente <strong>{result.points} pontos</strong>.
          </div>
          {result.yearsLeft === 0 ? (
            <div style={{ fontSize: '1.5rem', color: '#38a169', fontWeight: 'bold' }}>
              Parabéns! Você já atingiu os requisitos mínimos genéricos.
            </div>
          ) : (
            <div style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>
              Faltam aproximadamente <strong>{result.yearsLeft} anos</strong> para a sua aposentadoria.<br/>
              Ano estimado: <strong>{result.estimatedYear}</strong>
            </div>
          )}
          <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-light)' }}>
            * Esta é uma simulação genérica. Procure o seu instituto de previdência para o cálculo exato incluindo averbações.
          </p>
          <button onClick={() => setResult(null)} className="btn btn-primary" style={{ marginTop: '2rem' }}>Refazer Cálculo</button>
        </div>
      )}

      <LeadCaptureModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        onSuccess={handleLeadSuccess} 
        title="Receba o Relatório Completo"
        description="Para visualizar o resultado da sua simulação, preencha os dados abaixo."
      />
    </div>
  )
}
