import React, { Component } from 'react'
import '../Style/Card.css'

export default class Card extends Component {

  getColor() {
    if (this.props.green) return 'bg-success'
    if (this.props.red) return 'bg-danger'
    if (this.props.blue) return 'bg-primary'
    if (this.props.dark) return 'bg-dark'
    return 'bg-secondary'
  }

  render() {
    return (
      <div className='container'>
        <div className={`card text-white ${this.getColor()}`}>
          <div className='card-header'>
            {this.props.title}
          </div>
          <div className='card-body'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}