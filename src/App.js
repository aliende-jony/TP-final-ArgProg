import React, { useState } from "react";
import './App.css';
import { BotonNocturno } from './components/ModoNocturno/BotonNocturno';
import { Container } from './components/Container/Container';

function App() {
  const [modoNocturno, setModoNocturno] = useState(false);

  const toggleModoNocturno = () => {
    setModoNocturno(!modoNocturno);
  };

  return (
    <div className={`App ${modoNocturno ? 'modo-nocturno' : ''}`}>
      <BotonNocturno modoNocturno={modoNocturno} toggleModoNocturno={toggleModoNocturno} />
      <Container modoNocturno={modoNocturno}>
      </Container>
    </div>
  );
}

export default App;
