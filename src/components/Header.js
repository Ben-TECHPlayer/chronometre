import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation(); // détecte la route active

  return (
    <header>
      <div className="header-container">
        <h1>Ben.</h1>
        <div className="menu">
          <button className={location.pathname === '/' ? 'green' : ''}>
            <Link to="/">Accueil</Link>
          </button>
          <button className={location.pathname === '/chronometre' ? 'green' : ''}>
            <Link to="/chronometre">Chronomètre</Link>
          </button>
          <button className={location.pathname === '/alarme' ? 'green' : ''}>
            <Link to="/alarme">Alarme</Link>
          </button>
          <button className={location.pathname === '/minuteur' ? 'green' : ''}>
            <Link to="/minuteur">Minuteur</Link>
          </button>
          <button className={location.pathname === '/horaires' ? 'green' : ''}>
            <Link to="/horaires">Horaires</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
