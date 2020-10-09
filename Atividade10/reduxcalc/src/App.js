import React, { Component } from 'react'
import './App.css'
import Navigate from './Components/Navigate'

import Soma from './Components/Soma'
import Multiplicacao from './Components/Mult'
import Maior from './Components/Maior'

export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1>Calculadora</h1>
        <div className='line'>
          <Navigate />
        </div>
        <div className='line'>
          <Soma />
          <Multiplicacao />
          <Maior />
        </div>
      </div>
    )
  }
}
