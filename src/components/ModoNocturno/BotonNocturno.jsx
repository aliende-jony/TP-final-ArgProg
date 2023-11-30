import React from 'react';
import './ModoNocturno.css';

const BotonNocturno = ({ modoNocturno, toggleModoNocturno }) => {
  return (
    <button
      className={`boton-nocturno ${modoNocturno ? 'modo-nocturno' : ''}`}
      onClick={toggleModoNocturno}
    >
      {modoNocturno ? '☀️' : '🌒'}
    </button>
  );
};

export { BotonNocturno };
