import React, { useState } from "react";

function Checkbox({ item }) {
  const [isChecked, setIschecked] = useState(false);

  function handleChcked() {
    setIschecked(!isChecked);
  }
  

  return (
    <>
      {isChecked ? (
        <p style={{ textDecorationLine: "line-through" }}>{item}</p>
      ) : (
        <p>{item}</p>
      )}
      <input
        checked={isChecked}
        className="checkbox"
        type="checkbox"
        onChange={() => handleChcked()}
      />
    </>
  );
}

export { Checkbox };
