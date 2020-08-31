import React, { Component } from "react";
import api from "../../service/api";
import Main from "../Main/Main";
import TableRow from "./TableRow";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = { disciplinas: [] };
    this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
  }
  componentDidMount() {
    api
      .get("/disciplinas")
      .then((res) => {
        this.setState({ disciplinas: res.data });
        console.log({ disciplinas: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  Table() {
    if (!this.state.disciplinas) return;
    return this.state.disciplinas.map((disciplinas, i) => {
      return (
        <TableRow
          disciplinas={disciplinas}
          key={i}
          apagarElementoPorId={this.apagarElementoPorId}
        />
      );
    });
  }

  apagarElementoPorId(id) {
    let disciplinaTemp = this.state.disciplinas;
    for (let i = 0; i < disciplinaTemp.length; i++) {
      if (disciplinaTemp[i]._id === id) {
        disciplinaTemp.splice(i, 1);
      }
    }
    this.setState({ disciplinas: disciplinaTemp });
  }

  render() {
    return (
      <div className="container">
        <Main />
        <table
          className="table table-striped"
          style={{ textAlign: "center", marginTop: 20 }}
        >
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
      </div>
    );
  }
}

export default List;
