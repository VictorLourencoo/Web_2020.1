import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'



class Soma extends Component {
  render() {
    return (
      <Card title='soma' blue>
        <h1>
          {this.props.num1 + this.props.num2}
        </h1>
      </Card>
    )
  }
}
function mapStateToProps(state) {
  return {
    num1: state.num1.num1,
    num2: state.num2.num2,
    soma: state.soma.soma
  }
}

export default connect(mapStateToProps)(Soma)