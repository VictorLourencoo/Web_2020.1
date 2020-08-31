import React, { Component } from "react";
import api from "../../service/api";
import { Link } from "react-router-dom";
class Table extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }

  apagar() {
    api
      .delete(`/disciplinas/delete/${this.props.disciplinas._id}`)
      .then((res) => {
        this.props.apagarElementoPorId(this.props.disciplinas._id);
        alert("registro apagado");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <tr>
        <td>{this.props.disciplinas._id}</td>

        <td style={{ textAlign: "center" }}>{this.props.disciplinas.nome}</td>
        <td style={{ textAlign: "center" }}>{this.props.disciplinas.curso} </td>
        <td style={{ textAlign: "center" }}>
          {this.props.disciplinas.capacidade}
        </td>
        <td style={{ textAlign: "center" }}>
          <Link
            to={"/edit/" + this.props.disciplinas._id}
            className="btn btn-primary"
          >
            Editar
          </Link>
        </td>
        <td style={{ textAlign: "center" }}>
          <button onClick={this.apagar} className="btn btn-danger">
            Apagar
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
