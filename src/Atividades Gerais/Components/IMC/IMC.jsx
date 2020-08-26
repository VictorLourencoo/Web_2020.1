import React from 'react'
import IMCCalc from './IMCCalc'

let peso = 72
let altura = 1.89

class IMC extends React.Component {
       render(){
        return(
             <div>
               
             <h2>PESO: {peso} e ALTURA: {altura}</h2>
            <IMCCalc peso = {peso} altura = {altura}/>
            <h3>Victor emanuel - 429850</h3>
            </div>
            );
            }   
        }

export default IMC;