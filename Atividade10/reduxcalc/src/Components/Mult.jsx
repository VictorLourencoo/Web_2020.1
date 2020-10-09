import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'

class Mult extends Component {
  render() {
    return (
      <Card title='mult' red>
        <div>
          <h1>
            {this.props.num2 * this.props.num1}
          </h1>
        </div>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    num1: state.num1.num1,
    num2: state.num2.num2,
    mult: state.mult.mutiplica
  }
}

export default connect(mapStateToProps)(Mult)