import React, { useState } from "react";
import './Checkbox.css'

function Checkbox({ item, eliminarTarea }) {
  const [isChecked, setIschecked] = useState(false);

  function handleChecked() {
    setIschecked(!isChecked);
  }

  function handleEliminarTarea() {
    eliminarTarea();
  }

  return (
    <div className="tarea-check">
      {isChecked ? (
        <p className="text-tarea" style={{ textDecorationLine: "line-through", textDecorationColor: "#FF1F5B", color: '#B9B9B9'  }}>{item}</p>
      ) : (
        <p className="text-tarea">{item}</p>
      )}
      <button
        className={`checkbox ${isChecked ? 'checked' : ''}`}
        onClick={handleChecked}
      >
        {isChecked ? '✔' : '✔'}
      </button>
      <button className="eliminar" onClick={handleEliminarTarea}>
      🗑️
      </button>
    </div>
  );
}

export { Checkbox };