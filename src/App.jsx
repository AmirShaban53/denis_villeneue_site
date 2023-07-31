import { useState } from "react";

import Hero from "./components/hero";
import History from "./components/history";
import ShowCase from "./components/showCase";
import Process from "./components/process";
import Characters from "./components/characters";
import NewFilm from "./components/newFilm";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="text-zinc-100 bg-zinc-900 font-roboto"
    >
      <Hero />
      <History />
      <ShowCase />
      <Process />
      <Characters />
      <NewFilm />
    </motion.div>
  );
}

export default App;
