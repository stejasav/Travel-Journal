import React from "react";
import Navbar from "./components/Navbar";

import Card from "./components/Card";
import data from "./data";

export default function App(){

  const card = data.map((item)=>{
    return(
      <Card
        item = {item}
      />
    )
  })

  return(
    <div>
      <Navbar/>
      <section>
         {card}
      </section>
    </div>
  )
}