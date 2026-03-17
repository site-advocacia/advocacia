import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          Advocacia<span>Silva</span>
        </Link>
        <div className={`nav-elements ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/servicos" onClick={toggleMenu}>Serviços Trabalhistas</Link>
            </li>
            <li>
              <Link to="/localizacao" onClick={toggleMenu}>Localização</Link>
            </li>
            <li>
              <Link to="/contato" className="nav-contact-btn" onClick={toggleMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
