import React, { useState, useEffect } from "react";
import './FechaActual.css'

function FechaActual() {
  const [fecha, setFecha] = useState(obtenerFechaActual());

  function obtenerFechaActual() {
    const fecha = new Date();

    const diaSemana = fecha.toLocaleString('en-US', { weekday: 'long' });
    const diaMes = fecha.toLocaleString('en-US', { day: 'numeric' });
    const nombreMes = fecha.toLocaleString('en-US', { month: 'short' });
    const año = fecha.toLocaleString('en-US', { year: 'numeric' });
    const horaMinutos = fecha.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });

    return { diaSemana, diaMes, nombreMes, año, horaMinutos };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(obtenerFechaActual());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="info-izq">
        <p className="numero-mes">{fecha.diaMes}</p>
        <div className="info">
          <p className="nombre-mes">{fecha.nombreMes}</p>
          <p className="anio">{fecha.año}</p>
        </div>
      </div>
      <div className="info-derecha">
        <p className="hora">{fecha.horaMinutos}</p>
        <p className="nombre-dia">{fecha.diaSemana}</p>
      </div>
    </div>
  );
}



export  {FechaActual};
