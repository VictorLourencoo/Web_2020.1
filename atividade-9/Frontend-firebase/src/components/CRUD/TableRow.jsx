import React, { Component } from 'react';
//import api from "../../service/api";
import { Link } from 'react-router-dom';

import FirebaseContext from './Utils/FirebaseContext';
import firebaseService from '../../service/firebaseService';

class Table extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }

  apagar(id, nome) {
    /* api
       .delete(`/disciplinas/delete/${this.props.disciplinas._id}`)
       .then((res) => {
         this.props.apagarElementoPorId(this.props.disciplinas._id);
         alert("registro apagado");
       })
       .catch((error) => {
         console.log(error);
       });*/
    let res = window.confirm(`Deseja apagar ${nome}?`);
    if (res) {
      FirebaseService.delete(
        this.props.firebase.getFirestore(),
        (message) => {
          console.log(message);
        },
        id
      );
    }
  }
  render() {
    return (
      <tr>
        <td>{this.props.disciplinas._id}</td>

        <td style={{ textAlign: 'center' }}>{this.props.disciplinas.nome}</td>
        <td style={{ textAlign: 'center' }}>{this.props.disciplinas.curso} </td>
        <td style={{ textAlign: 'center' }}>
          {this.props.disciplinas.capacidade}
        </td>
        <td style={{ textAlign: 'center' }}>
          <Link
            to={'/edit/' + this.props.disciplinas._id}
            className="btn btn-primary"
          >
            Editar
          </Link>
        </td>
        <td style={{ textAlign: 'center' }}>
          <button
            onClick={() =>
              this.apagar(
                this.props.disciplinas._id,
                this.props.disciplinas.nome
              )
            }
            className="btn btn-danger"
          >
            Apagar
          </button>
        </td>
      </tr>
    );
  }
}

export default Table;
