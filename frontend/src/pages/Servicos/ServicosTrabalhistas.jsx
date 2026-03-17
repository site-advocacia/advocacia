import React from 'react';
import './ServicosTrabalhistas.css';

const ServicosTrabalhistas = () => {
  const servicos = [
    {
      titulo: 'Rescisão Indireta',
      descricao: 'Quando o empregador comete falta grave, o trabalhador pode rescindir o contrato com direitos integrais.'
    },
    {
      titulo: 'Horas Extras e Adicional Noturno',
      descricao: 'Cálculo e cobrança judicial de jornadas de trabalho não remuneradas corretamente.'
    },
    {
      titulo: 'Assédio Moral no Trabalho',
      descricao: 'Defesa e indenização contra situações humilhantes e constrangedoras no ambiente laboral.'
    },
    {
      titulo: 'Acidente de Trabalho',
      descricao: 'Indenização financeira, estabilidade e custeio de tratamento médico em caso de acidentes.'
    },
    {
      titulo: 'Verbas Rescisórias',
      descricao: 'Cobrança de saldo de salário, aviso prévio, férias proporcionais, 13º e multa do FGTS não pagos.'
    },
    {
      titulo: 'Reconhecimento de Vínculo Empregatício',
      descricao: 'Para trabalhadores "PJs", autônomos ou sem registro que possuem características de empregados celetistas.'
    }
  ];

  return (
    <div className="servicos-page">
      <div className="servicos-header">
        <div className="container">
          <h1>Nossos Serviços Trabalhistas</h1>
          <p>Atuação focada na defesa intransigente dos direitos do trabalhador</p>
        </div>
      </div>
      
      <section className="section container">
        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div className="servico-card" key={index}>
              <div className="servico-icon">
                {/* Placeholder para ícone */}
                <span className="icon-placeholder">⚖️</span>
              </div>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicosTrabalhistas;
