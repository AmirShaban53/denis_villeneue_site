import { useState } from "react";

import Hero from "./components/hero";
import History from "./components/history";
import ShowCase from "./components/showCase";
import Process from "./components/process";
import Characters from "./components/characters";
import NewFilm from "./components/newFilm";

function App() {

  return (
    <div className="text-white bg-zinc-900 ">
      <Hero/>
      <History/>
      <ShowCase/>
      <Process/>
      <Characters/>
      <NewFilm/>
    </div>
  );
}

export default App;
