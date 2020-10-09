import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'

class Maior extends Component {
  render() {
    return (
      <Card title='maior' green>
        <h1>
          {(this.props.num1 < this.props.num2) ? this.props.num2 : this.props.num1}
        </h1>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    num1: state.num1.num1,
    num2: state.num2.num2,
    maior: state.maior.maior,
  }
}

export default connect(mapStateToProps)(Maior)