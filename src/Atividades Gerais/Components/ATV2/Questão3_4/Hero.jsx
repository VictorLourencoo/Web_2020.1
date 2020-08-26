import React from "react";
import { Card } from "reactstrap";
export default function Hero(props) {
  return (
    <div>
      <Card color="card text-white bg-info mb-3">
        <div className="card-title">
          <h1>HEROI</h1>
        </div>
      </Card>
      <Card className='card text-white bg-info mb-3 card-img-top "'>
        <img src={props.img} alt="Hero" width="320" height="205" />
        <div className="card-body">
          <h2>Nome: {props.nome} </h2>
        </div>
      </Card>
    </div>
  );
}
