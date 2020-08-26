import React from 'react'
//import Estudante from './Estudante'


export default (props) =>{
    return (
        <div>
      <h3>Turmas: {props.turma}</h3>
     
       {React.Children.map(props.children, 
            estudante =>{
                    return React.cloneElement(estudante,{...props});
            }) }
            </div>


    );


}