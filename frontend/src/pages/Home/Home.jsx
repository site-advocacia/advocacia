import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container hero-content">
          <h1>Especialistas em Direito Trabalhista</h1>
          <p>Protegendo os direitos dos trabalhadores com experiência e dedicação há mais de 15 anos.</p>
          <div className="hero-buttons">
            <Link to="/contato">
              <Button variant="primary">Agendar Consulta</Button>
            </Link>
            <Link to="/servicos">
              <Button variant="outline" className="btn-light">Nossos Serviços</Button>
            </Link>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="section about">
        <div className="container about-container">
          <div className="about-text">
            <h2 className="section-title">Sobre o Escritório</h2>
            <p>
              O escritório Advocacia Silva é referência nacional em processos e causas trabalhistas. 
              Nossa missão é equilibrar a balança da justiça, garantindo que nenhum trabalhador seja lesado 
              em seus direitos fundamentais.
            </p>
            <p className="mt-2">
              Contamos com uma equipe de advogados altamente qualificados e em constante atualização.
            </p>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>Escritório Advocacia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
