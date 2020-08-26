import React from "react";
import Arena from "./Arena";
import Hero from "./Hero";
import Enemy from "./Enemy";
import Cassiano from "../../../assets/Cassiano.jpeg";
import Ceara from "../../../assets/siara.jpg";
import Homem_ferro from "../../../assets/HF.jpg";
import Capitao from "../../../assets/CP.jpg";
import { Card } from "reactstrap";
function World(props) {
  return (
    <div>
      <Card color="danger" className="container clearfix text-center">
        <h1> World </h1>
      </Card>

      <Arena arena="Castelão ">
        <Hero nome=" Cassiano" img={Cassiano} />
        <Enemy nome=" Ceará" img={Ceara} />
      </Arena>
      <Arena arena="Vingadores Guerra infinita">
        <Hero nome=" Homem de ferro" img={Homem_ferro} />
        <Enemy nome="Capitão america" img={Capitao} />
      </Arena>
      <Arena arena="DC COMICS">
        <Hero nome=" Batman " img={Homem_ferro} />
        <Enemy nome="Coringa" img={Capitao} />
      </Arena>
    </div>
  );
}

export default World;
