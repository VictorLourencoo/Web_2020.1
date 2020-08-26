import React from 'react'


export default (props) =>{
        if(props.IMC < 19){
           return <div> Abaixo do peso</div>
            
        }else if(props.IMC>19 && props.IMC <= 25){
            return <div>PESO IDEAL.</div>
            
        }else if(props.IMC>25){
            return  <div>ACIMA DO PESO.</div>
            
        }
      


    }
