import React, { Component } from "react";
//import api from "../../service/api";
import Main from "../Main/Main";
import TableRow from "./TableRow";
import FirebaseContext from '../../Utils/FirebaseContext'
import FirebaseService from '../../service/firebaseService'


const ListPage = () => (
  <FirebaseContext.Consumer>
    {firebase => <List firebase={firebase} />}
  </FirebaseContext.Consumer>
)



class List extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false
    this.state = { disciplinas: [], loading: false }

    //this.state = { disciplinas: [] };
    //this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
  }
  componentDidMount() {
    /* api
       .get("/disciplinas")
       .then((res) => {
         this.setState({ disciplinas: res.data });
         console.log({ disciplinas: res.data });
       })
       .catch((error) => {
         console.log(error);
       });
       */

    this._isMounted = true
    this.setState({ loading: true })
    FirebaseService.list(this.props.firebase.getFirestore(),
      (disciplinas) => {
        this._isMounted && this.setState({ disciplinas: disciplinas, loading: false })
      })

  }

  componentWillUnmount() {
    this._isMounted = false
  }

  Table() {
    if (!this.state.disciplinas) return
    if (this.state.loading) return this.loadingSpinner()
    return this.state.disciplinas.map(
      (disciplina, i) => {
        return <TableRow disciplinas={disciplina}
          key={i}
          firebase={this.props.firebase} />
      }
    )
  }

  loadingSpinner() {
    return (
      <tr style={{ backgroundColor: '#fff' }}>
        <td colSpan='6'>
          <div className="text-center">
            <div className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
              style={{ width: '3rem', height: '3rem' }}></div><br />
            <strong>Loading...</strong>
          </div>
        </td>
      </tr>
    )
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

export default ListPage;
