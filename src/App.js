// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Horaires from './pages/Horaires';
import Alarme from './pages/Alarme';
import Chronometre from './pages/Chronometre';
import Minuteur from './pages/Minuteur';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/index.css';
import './styles/Home.css';
import './styles/Chronometre.css';
import './styles/Minuteur.css';
import './styles/Horaires.css';
import './styles/Alarme.css';

const styleDeFond = {
  backgroundColor: '#0074D9'
};
function App() {
  
  return (
    <div style={styleDeFond}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chronometre" element={<Chronometre />} />
            <Route path="/minuteur" element={<Minuteur />} />
            <Route path="/horaires" element={<Horaires />} />
            <Route path="/alarme" element={<Alarme />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;