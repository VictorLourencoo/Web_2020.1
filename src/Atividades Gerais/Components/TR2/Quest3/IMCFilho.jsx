import React from 'react'


export default (props) =>{
    
    
unction CalcularIMC(peso, altura){
    return peso/(altura*altura);

}f

    return (
    <div>
        <h4>Questao 3</h4>
        <button onClick={() => props.Notificar(CalcularIMC(props.peso, props.altura))}> CALCULAR IMC</button>
         </div>

    );

}
