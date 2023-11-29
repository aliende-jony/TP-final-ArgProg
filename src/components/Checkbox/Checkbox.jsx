import React, { useState } from "react";
import './Checkbox.css'

function Checkbox({ item }) {
  const [isChecked, setIschecked] = useState(false);

  function handleChecked() {
    setIschecked(!isChecked);
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
        onClick={() => handleChecked()}
      >
        {isChecked ? '✔' : '✔'}
      </button>
    </div>
  );
}

export { Checkbox };
