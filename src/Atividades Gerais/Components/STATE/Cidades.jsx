import React from 'react'


class Cidades extends React.Component{
constructor(){
      super()
    
 
      this.state={fortaleza: 0, quixada: 0, jericoacora:0, limoeiro:0 };
}
        votaFor = ()=>{
        this.setState({fortaleza:this.state.fortaleza+1});

        }
        votaQuixa = ()=>{
        this.setState({quixada: this.state.quixada+1});
            
    }
        votaJeri = ()=>{
        this.setState({jericoacora:this.state.jericoacora+1});
        
}
        votalimoeiro = ()=>{
        this.setState({limoeiro:this.state.limoeiro+1});
    
}

    render(){
     return(
           <div>
              <h1>Fortaleza : {this.state.fortaleza} </h1>
               <button onClick={this.votaFor}>fortaleza: {this.state.fortaleza}</button>
               <button onClick={this.votaQuixa}>quixada: {this.state.quixada}</button>    
               <button onClick={this.votaJeri}>jericoacora: {this.state.jericoacora}</button>
               <button onClick={this.votalimoeiro}>limoeiro: {this.state.limoeiro}</button>

           </div> 
        )



}




}


export default Cidades;