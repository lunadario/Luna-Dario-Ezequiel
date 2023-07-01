import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Detail from '../Routes/Detail';


const initialState = {
  isFavorite: false,
};
const Card = ({ name, username, id }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const existingFavs = await localStorage.getItem('favorites');
        if (existingFavs) {
          const favorites = JSON.parse(existingFavs);
          const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
          setIsFavorite(isAlreadyFavorite);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleFavoriteToggle = async () => {
    const cardData = {
      id,
      name,
      username,
    };

    try {
      const existingFavs = await localStorage.getItem('favorites');
      let favorites = existingFavs ? JSON.parse(existingFavs) : [];

      const isAlreadyFavorite = favorites.some((favorite) => favorite.id === cardData.id);

      if (!isAlreadyFavorite) {
        favorites.push(cardData);
        await localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(true);
      } else {
        const updatedFavorites = favorites.filter((favorite) => favorite.id !== cardData.id);
        favorites = updatedFavorites;
        await localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='carde'>   
      <div className='card'>
        <Link to={`/dentist/${id}`}>
        <img className="dentist-image" src="/img/doc.jpg" alt="" />
          <h3>{name}</h3>
          <p>{username}</p>
        
        </Link>
        <button onClick={handleFavoriteToggle}>
          {isFavorite ? '⭐️' : '☆'}
        </button>
        <Link to="/detail">detalles</Link>
        
      </div>
    </div>
  );
};

export default Card;
