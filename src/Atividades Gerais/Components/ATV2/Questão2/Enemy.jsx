import React from "react";

export default function Enemy(props) {
  return (
    <div>
      <h1>Inimigo</h1>

      <h2>Nome: {props.nome} </h2>
      <img src={props.img} alt="Enemy" />
    </div>
  );
}
