'use client';
import { useState, useEffect } from 'react';

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        if (!sessionStorage.getItem('exitIntentShown')) {
          setShow(true);
          sessionStorage.setItem('exitIntentShown', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
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
        backgroundColor: 'var(--card-bg)', padding: '3rem 2rem', borderRadius: 'var(--radius)',
        maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <button 
          onClick={() => setShow(false)}
          style={{ position: 'absolute', top: '15px', right: '20px', background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-light)' }}
        >
          &times;
        </button>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 'bold' }}>Espere! Não saia ainda...</h2>
        <p style={{ color: 'var(--text-color)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Temos um material exclusivo para você! Entre no nosso grupo VIP do WhatsApp e receba alertas sobre direitos que os órgãos públicos tentam esconder.
        </p>
        <a href="https://chat.whatsapp.com/SEULINKAQUI" target="_blank" rel="noopener noreferrer" 
           className="btn btn-primary" 
           style={{ backgroundColor: '#25D366', color: 'white', padding: '1rem 2rem', width: '100%', fontSize: '1.2rem', display: 'block', marginBottom: '1rem' }}
           onClick={() => setShow(false)}
        >
          Quero Acessar o Grupo VIP
        </a>
        <button onClick={() => setShow(false)} style={{ background: 'none', border: 'none', color: 'var(--text-light)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>
          Não, obrigado. Não quero receber as dicas.
        </button>
      </div>
    </div>
  );
}
