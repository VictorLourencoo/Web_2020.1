import React from "react";
import Hero from "./Hero";
import Enemy from "./Enemy";

import Cassiano from "../../../assets/Cassiano.jpeg";
import Ceara from "../../../assets/siara.jpg";
export default function Arena() {
  return (
    <div>
      <Hero nome=" Cassiano" img={Cassiano} />
      <Enemy nome=" Ceará" img={Ceara} />
    </div>
  );
}
