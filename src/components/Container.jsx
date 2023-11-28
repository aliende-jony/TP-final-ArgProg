import React, { useState } from "react";
import { TaskList } from "./TaskList";
import './Container.css'

function Container(props) {
  const {children} = props
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const newList = [...list, inputValue];
    setList(newList);
    setInputValue("");
  };

  return (
    <div className="Container">
      {children}
      <TaskList list={list} />
      <div className="btn">
      <input
      className="input"
        placeholder ="Type something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button className="add" onClick={addItem}>+</button>
      </div>
    </div>
  );
}

export { Container };
