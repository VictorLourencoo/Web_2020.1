import React from "react";
import Estudante2 from "./Estudante2";
import Turma2 from "./Turma2";
export default (props) => {
  return (
    <div>
      <h2>Questao 2</h2>
      <Turma2 turma="Desenvolvimento WEB" />
      <Estudante2 nome="Victor Emanuel" curso="Sistemas de informação" />
      <Estudante2 nome="Vitoria gomes" curso="Sistemas de informação" />
      <Estudante2 nome="victor sousa" curso="Sistemas de informação" />
      <Estudante2 nome="breno nobre" curso="Sistemas de informação" />
      <Turma2 turma="Arquitetura de computadores" />
      <Estudante2 nome="Victor Emanuel" curso="Sistemas de informação" />
      <Estudante2 nome="Diney sousa" curso="Engenharia da computação" />
      <Estudante2 nome="Leandro silva" curso="Sistemas de informação" />
    </div>
  );
};
