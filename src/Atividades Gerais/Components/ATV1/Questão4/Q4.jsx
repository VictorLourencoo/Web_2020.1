import React from "react";
import { Card } from "reactstrap";
class Dados extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card color="danger">
          <h2>Nome:{this.props.nome}</h2>
          <h2>Curso: {this.props.curso}</h2>
          <h2>Cidade: {this.props.cidade}</h2>
        </Card>
      </div>
    );
  }
}

export default Dados;
