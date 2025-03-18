import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card';

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
      <div>
        <h1>Home</h1>
      </div>
     
      <div className="card">
        {/* <button className="theme-button" onClick={() => setTheme('dark')}>
          Cambiar tema
        </button> */}
       <ul className="dentist-list">
           {dentists.map(dentist => (
          
              
          
              <Card
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
                onClick={handleFavoriteClick}
              />
          
            
          ))}
        </ul>
      </div>
      
    </>
  );
};

export default Home;
