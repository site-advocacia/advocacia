import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ServicosTrabalhistas from './pages/Servicos/ServicosTrabalhistas';
import Localizacao from './pages/Localizacao/Localizacao';
import Contato from './pages/Contato/Contato';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicosTrabalhistas />} />
            <Route path="/localizacao" element={<Localizacao />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
