import { useState } from "react";
import { TaskList } from "./TaskList";
function Container() {
  const [list, setList] = useState([]);

  function addItem() {
    const item = document.getElementById("texto");
    const newList = [...list, item.value];
    setList(newList);
    item.value = "";
  }

  return (
    <div className="Container">
      <TaskList list={list} />

      <button onClick={() => addItem()}>ADD</button>
      <input placeholder="Type something" id="texto" type="text" />
    </div>
  );
}

export { Container };
