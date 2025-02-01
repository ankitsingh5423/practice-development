import React from "react";
import { useState } from "react";

function Cards({ name, description }) {
  let [color, setColor] = useState("red");
  return (
    <div style={{ width: "300px", background: color }}>
      <img
        src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        alt=""
        style={{ width: "200px", height: "100px" }}
      />
      <h2>{name}</h2>
      <div>{description}</div>
      <button onClick={()=>setColor("olive")}>olive</button>
      <button onClick={()=>setColor("green")}>green</button>
      <button onClick={()=>setColor("yellow")}>yellow</button>
      <button onClick={()=>setColor("grey")}>grey</button>
      <button onClick={()=>setColor("pink")}>pink</button>
    </div>
  );
}

export default Cards;
