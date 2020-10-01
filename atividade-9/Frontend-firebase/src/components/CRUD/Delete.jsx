import React, { Component } from "react";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.apagar = this.apagar.bind(this);
  }
  render() {
    return <p>Deletando uma entidade</p>;
  }
}

export default Delete;
