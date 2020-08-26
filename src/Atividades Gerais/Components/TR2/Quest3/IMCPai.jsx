import React from 'react'

import IMCFilho from './IMCFilho'



export default props => {
    const Menssage = imc => alert(`O IMC É ${imc}`);
    
    return (<div>
            <IMCFilho peso ={80} altura = {1.80} Notificar= {Menssage}/>
    </div>
    );   
}