import React, { Component } from "react";
import api from "../../service/api";
import Main from "../Main/Main";
import FirebaseContext from '../../Utils/FirebaseContext'
import firebaseService from '../../service/firebaseService'

const CreatePage = () => (
  <FirebaseContext.Consumer>
    {firebase => <Create firebase={firebase} />}
  </FirebaseContext.Consumer>
)


class Create extends Component {
  constructor(props) {
    super(props);

    this.state = { nome: "", curso: "", capacidade: "" };

    this.setNome = this.setNome.bind(this);
    this.setCurso = this.setCurso.bind(this);
    this.setCapacidade = this.setCapacidade.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  setCurso(e) {
    this.setState({ curso: e.target.value });
  }

  setCapacidade(e) {
    this.setState({ capacidade: e.target.value });
  }

  async onSubmit(e) {
    e.preventDefault();

    const novaDisciplina = {
      nome: this.state.nome,
      curso: this.state.curso,
      capacidade: this.state.capacidade,
    };

    /* await api
       .post("/criar", novaDisciplina) //express
       .then((res) => {
         console.log("ok");
         alert(" cadastrada com sucesso");
       })
       .catch((error) => {
         console.log("nao ok");
         console.log(error);
       });*/

    firebaseService.create(this.props.firebase.getFirestore(),
      (mensagem) => {
        console.log(mensagem)
      },
      novaDisciplina)


    this.setState({ nome: "", curso: "", capacidade: "" });
  }

  render() {
    return (
      <div
        className="container"
        style={{ marginTop: 10, alignItems: "center" }}
      >
        <Main />
        <h3>Criar Disciplina</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.nome}
              onChange={this.setNome}
            />
          </div>
          <div className="form-group">
            <label>Curso: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.curso}
              onChange={this.setCurso}
            />
          </div>
          <div className="form-group">
            <label>capacidade: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.capacidade}
              onChange={this.setCapacidade}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Criar Disciplina"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePage;