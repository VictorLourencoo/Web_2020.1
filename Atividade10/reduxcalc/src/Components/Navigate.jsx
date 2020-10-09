import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import '../Style/Navigate.css'
import alterarNum from '../store/Actions/createAction'

class Navigate extends Component {

  maior() {
    const maior = this.props.num1 < this.props.num2 ? this.props.num2 : this.props.num1
    this.props.alterarNum(maior)
  }

  mult() {
    const mult = (this.props.num1 < 0) ? 0 : this.props.num2 * this.props.num1
    this.props.alterarNum(mult)
  }
  soma() {
    const soma = this.props.num1 + this.props.num2
    this.props.alterarNum(soma)
  }


  render() {
    return (
      <Card className='numeros' dark>
        <div className='navigate'>
          <input value={this.props.num1} />
          <input value={this.props.num2} />
        </div>
      </Card>

    )
  }

}
function mapStateToProps(state) {
  return {
    num1: state.num1.num1,
    num2: state.num2.num2,


    mult: state.mult.mutiplica,
    soma: state.soma.soma,
    maior: state.maior.maior
  }


}

function mapActionCreatorToProps(dispatch) {
  return {
    alterarNum(num) {
      const action = alterarNum(num)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate)