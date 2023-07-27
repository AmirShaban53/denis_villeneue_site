import { useState } from "react";
import Hero from "./components/hero";
import History from "./components/history";
import ShowCase from "./components/showCase";

function App() {

  return (
    <div className="text-white">
      <Hero/>
      <History/>
      <ShowCase/>
    </div>
  );
}

export default App;
