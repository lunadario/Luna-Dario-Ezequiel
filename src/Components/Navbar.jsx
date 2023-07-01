import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        
      </ul>
      <button className="theme-button" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️' : '🌑'}
      </button>
    </nav>
  );
};

export default Navbar;
