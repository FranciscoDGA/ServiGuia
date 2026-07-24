'use client';
import { useState, useEffect } from 'react';
import { Bell, MessageCircle, Book, X } from 'lucide-react';
import Image from 'next/image';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Para Computador: Aparece quando tira o mouse da tela (para cima), apenas uma vez
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        if (!sessionStorage.getItem('exitIntentShown')) {
          setShow(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    // Para Celular: Aparece após 15 segundos na página, apenas uma vez
    const mobileTimer = setTimeout(() => {
      if (!sessionStorage.getItem('exitIntentShown')) {
        setShow(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    }, 15000); // 15 segundos

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
    }}>
      <div style={{
        backgroundColor: '#ffffff', borderRadius: '24px', padding: '2rem 1.5rem',
        maxWidth: '420px', width: '100%', position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        color: '#1a202c', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        {/* Botão Fechar */}
        <button 
          onClick={() => setShow(false)}
          style={{ position: 'absolute', top: '16px', right: '16px', background: '#f7fafc', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#a0aec0' }}
        >
          <X size={18} />
        </button>

        {/* Ícone do Topo */}
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '1rem', color: 'white'
        }}>
          <img src="/logo.png" alt="Logo" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
        </div>

        {/* Título e Subtítulo */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#1a202c' }}>
          Antes de ir...
        </h2>
        <p style={{ color: '#718096', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.5', padding: '0 10px' }}>
          Que tal receber conteúdo exclusivo sobre direitos do servidor direto no seu celular? <strong>Sem spam, prometemos.</strong>
        </p>

        {/* Lista de Benefícios */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '12px', textAlign: 'left' }}>
            <Bell size={24} color="#d69e2e" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#2d3748', margin: 0 }}>Notificações</h4>
              <p style={{ fontSize: '0.8rem', color: '#718096', margin: 0 }}>Receba alertas de novos artigos e dicas práticas</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '12px', textAlign: 'left' }}>
            <MessageCircle size={24} color="#4a5568" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#2d3748', margin: 0 }}>Grupo WhatsApp</h4>
              <p style={{ fontSize: '0.8rem', color: '#718096', margin: 0 }}>Comunidade ativa com centenas de servidores trocando ideias</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '12px', textAlign: 'left' }}>
            <Book size={24} color="#38a169" />
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#2d3748', margin: 0 }}>E-book Grátis</h4>
              <p style={{ fontSize: '0.8rem', color: '#718096', margin: 0 }}>Guia "Direitos Escondidos do Servidor" ao se inscrever</p>
            </div>
          </div>

        </div>

        {/* Botões */}
        <button 
          className="btn"
          style={{ backgroundColor: '#0f766e', color: 'white', width: '100%', padding: '0.8rem', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.75rem', border: 'none', cursor: 'pointer' }}
          onClick={() => {
            alert('Notificações ativadas! (Simulação)');
            setShow(false);
          }}
        >
          <Bell size={18} /> Ativar Notificações
        </button>

        <a 
          href="https://chat.whatsapp.com/SEULINKAQUI" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn"
          style={{ backgroundColor: '#22c55e', color: 'white', width: '100%', padding: '0.8rem', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem', textDecoration: 'none' }}
          onClick={() => setShow(false)}
        >
          <MessageCircle size={18} /> Entrar no Grupo WhatsApp
        </a>

        <button 
          onClick={() => setShow(false)} 
          style={{ background: 'none', border: 'none', color: '#718096', fontSize: '0.9rem', cursor: 'pointer', padding: '0.5rem' }}
        >
          Não, obrigado
        </button>
      </div>
    </div>
  );
}
