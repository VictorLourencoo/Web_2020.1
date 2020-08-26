import React, { Component } from "react";
import axios from "axios";
class Table extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }

  apagar() {
    axios
      .delete("http://localhost:3001/disciplinas/" + this.props.disciplinas.id)
      .then((res) => {
        console.log("registro apagado");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.disciplinas.id}</td>

        <td style={{ textAlign: "center" }}>
          {this.props.disciplinas.nome}
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
        <td style={{ textAlign: "center" }}>
          {this.props.disciplinas.curso}]{" "}
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
        <td style={{ textAlign: "center" }}>
          {this.props.disciplinas.capacidade}
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
        <td>
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
