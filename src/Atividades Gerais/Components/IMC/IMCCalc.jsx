import React from 'react'
//import IMC from './IMC'
import IMCMsg from './IMCMsg'

export default(props) =>{
    let Calc = props.peso/(props.altura*props.altura)
    return( 
            <div>        
            <h3> O IMC É {Calc} </h3>
            
            <IMCMsg IMC = {Calc}/>
            </div>
        )
}