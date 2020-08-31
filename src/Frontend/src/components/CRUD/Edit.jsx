import React, { Component } from 'react';
import Main from '../Main/Main';
import api from '../../service/api';
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { nome: '', curso: '', capacidade: '' };
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
  onSubmit(e) {
    e.preventDefault();
    const disciplinaAtualizada = {
      nome: this.state.nome,
      curso: this.state.curso,
      capacidade: this.state.capacidade,
    };
    api
      .put(
        '/disciplinas/atualizar/' +
          this.props.match.params.id +
          disciplinaAtualizada
      )
      .then((res) => {
        //console.log(res.data.id);
        this.props.history.push('/list');
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({ nome: '', curso: '', capacidade: '' });
  }

  componentDidMount() {
    api
      .get(`/disciplinas/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          nome: res.data.nome,
          curso: res.data.curso,
          capacidade: res.data.capacidade,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: 10 }}>
        <Main />
        <h3>Editar Disciplina</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label> Nome: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.nome}
              onChange={this.setNome}
            />
          </div>

          <div className="form-group">
            <label> Curso: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.curso}
              onChange={this.setCurso}
            />
          </div>

          <div className="form-group">
            <label> Capacidade: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.capacidade}
              onChange={this.setCapacidade}
            />
          </div>

          <div className="form-group">
            <input
              type="Submit"
              value="Adicionar Disciplina"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Edit;
