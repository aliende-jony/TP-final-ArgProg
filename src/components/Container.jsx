import React, { useState } from "react";
import { TaskList } from "./TaskList";

function Container() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    const newList = [...list, inputValue];
    setList(newList);
    setInputValue("");
  };

  return (
    <div className="Container">
      <TaskList list={list} />

      <button onClick={addItem}>ADD</button>
      <input
        placeholder="Type something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
    </div>
  );
}

export { Container };
