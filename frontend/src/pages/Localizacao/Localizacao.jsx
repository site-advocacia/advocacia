import React from 'react';
import './Localizacao.css';

const Localizacao = () => {
  return (
    <div className="localizacao-page">
      <div className="localizacao-header">
        <div className="container">
          <h1>Nossa Localização</h1>
          <p>Venha nos fazer uma visita ou agende uma reunião virtual</p>
        </div>
      </div>
      
      <section className="section container">
        <div className="localizacao-content">
          <div className="localizacao-info">
            <h2 className="section-title" style={{textAlign: 'left'}}>Onde Estamos</h2>
            
            <div className="info-item">
              <h3>📍 Endereço</h3>
              <p>Av. Paulista, 1000, Conjunto 500<br/>Cerqueira César, São Paulo - SP<br/>CEP: 01310-100</p>
            </div>
            
            <div className="info-item mt-2">
              <h3>🕒 Horário de Atendimento</h3>
              <p>Segunda a Sexta-feira<br/>Das 09:00 às 18:00</p>
            </div>

            <div className="info-item mt-2">
              <h3>🚗 Estacionamento</h3>
              <p>Possuímos estacionamento conveniado no subsolo do edifício (Entrada pela Alameda Santos).</p>
            </div>
          </div>
          
          <div className="localizacao-map">
            {/* Como não temos chave de api do google maps agora, usaremos um placeholder estético */}
            <div className="mapa-placeholder">
              <p>Mapa da Região</p>
              <span>(Av. Paulista)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Localizacao;
