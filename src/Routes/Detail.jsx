import React, { useEffect, useState , useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { state, setTheme } = useContext(ContextGlobal);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div>
      <h1>Detalle</h1>
      {dentist ? (
        <div>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;
