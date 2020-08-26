import React from "react";
import { Card } from "reactstrap";
export default function Enemy(props) {
  return (
    <div>
      <Card color="card text-white bg-danger mb-3">
        <div clccccassName="card-title">
          <h1>Enemy</h1>
        </div>
      </Card>
      <Card className='card text-white bg-danger mb-3 card-img-top "'>
        <img src={props.img} alt="Enemy" width="320" height="205" />
        <div className="card-body">
          <h2>Nome: {props.nome} </h2>
        </div>
      </Card>
    </div>
  );
}
