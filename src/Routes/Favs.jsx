import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
      } catch (error) {
        console.error('Error al obtener los favoritos:', error);
      }
    };

    fetchFavorites();
  }, []);

  const handleFavoriteRemove = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favsContainer">
      <h1>Tus dentistas favoritos...</h1>
      
      <ul className="dentist-list">

      <div className="cardsFavs">
        {favorites.length === 0 ? (
          <p>No existen favoritos.</p>
        ) : (
          favorites.map((favorite) => (
            
            <Card
              key={favorite.id}
              name={favorite.name}
              username={favorite.username}
              id={favorite.id}
              onFavoriteRemove={handleFavoriteRemove}
            />
          ))
        )}
      </div>
      </ul>
    </div>
  );
};

export default Favs;
