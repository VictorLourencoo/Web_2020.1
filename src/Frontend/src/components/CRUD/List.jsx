import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { disciplinas: [] };
    this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/disciplinas")
      .then((res) => {
        console.log({ disciplinas: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  Table() {
    if (this.state.disciplinas) return;
    return this.state.disciplinas.map((disciplinas, i) => {
      return <TableRow disciplinas={disciplinas} key={i} />;
    });
  }

  apagarElementoPorId(id) {
    let disciplinaTemp = this.state.disciplinas;
    for (let i = 0; i < disciplinaTemp.length; i++) {
      if (disciplinaTemp[i] === id) {
        disciplinaTemp.splice(i, 1);
      }
    }
  }

  render() {
    return (
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Capacidade</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Ação
            </th>
          </tr>
        </thead>
        <tbody>{this.Table()}</tbody>
      </table>
    );
  }
}

export default List;
