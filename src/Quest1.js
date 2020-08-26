import React from 'react'

//import Campeonato from './Components/Relacao_PaiFilho/Campeonato'
   // import Times from './Components/Relacao_PaiFilho/Times'
import Turma from './Components/TR2/Quest1/Turma'
import Curso from './Components/TR2/Quest1/Curso'
import Estudante from './Components/TR2/Quest1/Estudante'
function Quest1() {
return (
        <div>
            
            <Curso curso='Sistemas de Informação'>
            <Turma turma='Fundamentos de Programação' curso ='Sistemas de informção'>
            <Estudante nome='Victor Emanuel Bernardino' matricula ='0429850'/>
            <Estudante nome=' Joao Fancisco jr' matricula = '090929'/>
            <Estudante nome=' Fancisco Matheus oliveira' matricula = '202021'/>
            </Turma>
            <Turma turma='Introdução a Banco de Dados' curso = 'Engenharia de Software'>
            <Estudante nome='Marcelo de oliveira' matricula =' 656565'/>
            <Estudante nome='Victor de Sousa' matricula ='648939'/>
            <Estudante nome='Breno carlos de abreu' matricula =' 101020'/>
            </Turma>
            </Curso>

        </div>



)


}
export default Quest1;