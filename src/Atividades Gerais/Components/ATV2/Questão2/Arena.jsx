import React from "react";
import Hero from "./Hero";
import Enemy from "./Enemy";

import imgs from "./assets";
export default function Arena() {
  return (
    <div>
      <Hero nome=" Cassiano" img={imgs[1]} />
      <Enemy nome=" Ceará" img={imgs[2]} />
    </div>
  );
}
