import React from "react";

export default (props) => {
  return (
    <div>
      <h3>
        {" "}
        Estudante {props.nome} do curso {props.curso}
      </h3>
    </div>
  );
};
