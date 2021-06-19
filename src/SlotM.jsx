import React from "react";
import "./styles.css";

export default function SlotM() {
  const item = [123, 907, 365];
  let x = item[Math.floor(Math.random() * item.length)];
  let y = item[Math.floor(Math.random() * item.length)];
  let z = item[Math.floor(Math.random() * item.length)];
  let s;
  if (x === y && y === z) {
    s = "You Win!!";
  } else {
    s = "You lost :(";
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="slot">
      <div className="value">
        <h1 className="values"> {x} </h1>
        <h1 className="values"> {y} </h1>
        <h1 className="values"> {z} </h1>
      </div>

      <h1 className="output">{s}</h1>
      <p>
        <button onClick={refreshPage}>Play Again</button>
      </p>
    </div>
  );
}
