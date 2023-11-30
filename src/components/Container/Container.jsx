import React, { useState } from "react";
import { TaskList } from "../TaskList";
import { Header } from '../Header/Header'
import './Container.css'

function Container({ children, modoNocturno }) {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      const newList = [...list, trimmedValue];
      setList(newList);
      setInputValue("");
    }
  };

  const eliminarTarea = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div className={`Container ${modoNocturno ? 'modo-nocturno' : ''}`}>
      <Header modoNocturno={modoNocturno} />
      {children}
      <TaskList list={list} eliminarTarea={eliminarTarea} />
      <div className="btn">
        <input
          className="input"
          placeholder="Type something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          type="text"
        />
        {inputValue.trim() && (
          <button className="add" onClick={addItem}>
            +
          </button>
        )}
      </div>
    </div>
  );
}

export { Container };
