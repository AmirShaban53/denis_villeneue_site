import { useState } from "react";

import Hero from "./components/hero";
import History from "./components/history";
import ShowCase from "./components/showCase";
import Process from "./components/process";
import Characters from "./components/characters";

function App() {

  return (
    <div className="text-white">
      <Hero/>
      <History/>
      <ShowCase/>
      {/* <Process/> */}
      <Characters/>
    </div>
  );
}

export default App;
