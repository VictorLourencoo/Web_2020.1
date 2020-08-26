import React from "react";

export default function Hero(props) {
  return (
    <div>
      <h1>HEROI</h1>

      <h2>Nome: {props.nome} </h2>
      <img src={props.img} alt="Hero" />
    </div>
  );
}
