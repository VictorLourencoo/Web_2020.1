import React from "react";
//import Personagem from './Personagem';

export default (props) => {
  return (
    <div>
      <h1> Game of thrones</h1>

      {React.Children.map(props.children, (personagem) => {
        return React.cloneElement(personagem, {
          casa: props.casa,
          regiao: props.regiao,
        });
      })}
    </div>
  );
};
