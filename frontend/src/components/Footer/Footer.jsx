import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Advocacia<span>Silva</span></h3>
          <p>Defendendo seus direitos com excelência, ética e dedicação.</p>
        </div>
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/localizacao">Localização</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contato</h4>
          <p>Email: contato@advocaciasilva.com.br</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Advocacia Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
