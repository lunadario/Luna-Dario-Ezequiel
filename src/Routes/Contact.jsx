import React, { useState } from 'react';

const Contact = ({ theme }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 6 || !validateEmail(email)) {
      setMessage('Por favor, ingresa un nombre válido y un email válido.');
      return;
    }

    setMessage(`Gracias ${name}, te contactaremos por ${email}`);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className={`contact-form ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
};

export default Contact;
