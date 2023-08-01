import { useState } from "react";

import Hero from "./components/hero";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NewFilm from "./components/newFilm";
import History from "./components/history";
import Process from "./components/process";
import ShowCase from "./components/showCase";
import Characters from "./components/characters";

import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="text-zinc-100 bg-zinc-900 font-roboto overflow-x-hidden"
    >
      <NavBar />
      <Hero />
      <History />
      <div className="py-16">
        <p className="text-center">
          <blockquote className="text-xl md:text-3xl font-bold text-zinc-700 md:w-1/3 mx-auto text-center mb-3">
            "I was a sci-fi addict when I was a kid and a teenager. Novels,
            graphic novels, movies, it was my way to deal with reality."
          </blockquote>
          <span className="text-rose-500 my-6">- Denis Villeneue -</span>
        </p>
      </div>
      <ShowCase />
      <Process />
      <Characters />
      <div className="py-16">
        <p className="text-center">
          <blockquote className="text-xl md:text-3xl font-bold text-zinc-700 md:w-1/3 mx-auto text-center mb-3">
            "I'm not someone that loves dialogue - I love the movement, Action.
            If it's well done, can be very peotic and meaningful"
          </blockquote>
          <span className="text-rose-500 my-6">- Denis Villeneue -</span>
        </p>
      </div>
      <NewFilm />
      <Footer />
    </motion.div>
  );
}

export default App;
