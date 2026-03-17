import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' });
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Ocorreu um erro ao enviar a mensagem.' });
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setStatus({ type: 'error', message: 'Erro de conexão com o servidor. Tente novamente mais tarde.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contato-page">
      <div className="contato-header">
        <div className="container">
          <h1>Fale Conosco</h1>
          <p>Envie sua dúvida ou agende uma consulta com nossos especialistas</p>
        </div>
      </div>
      
      <section className="section container">
        <div className="contato-content">
          <div className="contato-form-container">
            <h2 className="section-title" style={{textAlign: 'left', fontSize: '2rem'}}>Envie uma Mensagem</h2>
            
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="contato-form">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleChange} 
                  required 
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="telefone" 
                  name="telefone" 
                  value={formData.telefone} 
                  onChange={handleChange} 
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  rows="5" 
                  value={formData.mensagem} 
                  onChange={handleChange} 
                  required 
                  placeholder="Como podemos te ajudar?"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
          
          <div className="contato-sidebar">
            <div className="sidebar-card">
              <h3>Atendimento Rápido</h3>
              <p>Nossa equipe de triagem analisa novas mensagens em até <strong>2 horas úteis</strong>.</p>
              <hr />
              <h4>Ligue para nós</h4>
              <p className="highlight-text">(11) 99999-9999</p>
              <h4>E-mail direto</h4>
              <p className="highlight-text">contato@advocaciasilva.com.br</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
