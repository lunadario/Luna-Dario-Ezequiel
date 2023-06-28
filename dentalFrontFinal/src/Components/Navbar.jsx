import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';


const Navbar = () => {
  const { state, setTheme } = useContext(ContextGlobal);

  return (
    <nav >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Destacados</Link>
        </li>
      </ul>
      <button >Cambiar tema</button>
    </nav>
  );
};

export default Navbar;
