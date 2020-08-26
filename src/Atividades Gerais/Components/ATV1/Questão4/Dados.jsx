import React from "react";
import Q4 from "./Q4";
class Dados extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Q4
        nome="Victor Emanuel Lourenço"
        curso="Sistemas de informação"
        cidade="Capistrano"
      />
    );
  }
}

export default Dados;
