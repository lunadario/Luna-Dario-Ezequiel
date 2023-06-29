import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ name, username, id, onClick }) => {
 

  return (
    
   <>
   
   
  <div> </div>
    <div>

      <h3>{name}</h3>

      <p>{username}</p>
      <button onClick={() => onClick(id)}>
        {localStorage.getItem('favorites')?.includes(id)
          ? 'Eliminar de favoritos'
          : 'Agregar a favoritos'}
      </button>
      <Link to={`/dentist/${id}`}>Ver detalle</Link>
    </div>
   </>
  );
};

export default Card;

