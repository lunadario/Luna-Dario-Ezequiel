import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
const Home = () => {

  const { state, setTheme } = useContext(ContextGlobal);
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setDentists(data))
      .catch(error => console.log(error));
  }, []);

  const handleFavoriteClick = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.includes(id);

    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, id]));
    }
  };

  return (

  <>
  

    <div><h1>Home</h1> </div>
    <div className='card'>
   
  {/* <button className="theme-button" onClick={() => setTheme('dark')}>
    Cambiar tema
  </button> */}
  <ul className="dentist-list">
    {dentists.map(dentist => (
      <li key={dentist.id} className="dentist-item">
        <img className="dentist-image" src="/img/doctor.jpg" alt="" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
        <button
          className={`favorite-button ${
            localStorage.getItem('favorites')?.includes(dentist.id)
              ? 'favorited'
              : ''
          }`}
          onClick={() => handleFavoriteClick(dentist.id)}
        >
          {localStorage.getItem('favorites')?.includes(dentist.id)
            ? 'Eliminar de favoritos'
            : 'Agregar a favoritos'}
        </button>
        <Link to={`/dentist/${dentist.id}`} className="detail-link">
          Ver detalle
        </Link>
      </li>
    ))}
  </ul>
</div>
</>
  );
};

export default Home;
