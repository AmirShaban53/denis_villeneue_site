import React from "react";
import { Container } from "./layout";
import { motion } from "framer-motion";
import { wordVar, staggerChildrenVar } from "../assets/animation";

const Hero = () => {
  return (
    <div
      id="home"
      className="overflow-hidden h-[75vh] md:h-screen relative z-10"
    >
      <div className="absolute top-0 h-full -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-zinc-900 to-transparent to-80% z-10"></div>
        <img
          src="/images/bg.webp"
          className="animate h-full md:h-auto object-bottom  object-cover"
        />
      </div>
      <Container>
        <div className="h-[75vh] md:h-screen flex flex-col justify-end md:justify-center text-white cursor-pointer">
          <div className="w-full md:w-2/3">
            <p className="text-4xl md:text-7xl uppercase font-semibold mb-3">
              <AnimateTitle title={"Film maker of the decade"} />
            </p>
            <p className="md:text-lg mb-6 w-full md:w-2/3">
              A biography on{" "}
              <span className="bg-rose-600 p-1 font-bold">Denis Villeneue</span>{" "}
              of one of the best film directors of our age.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

const AnimateTitle = ({ title }) => {
  return (
    <motion.span variants={staggerChildrenVar}>
      {title.split(" ").map((word, index) => {
        return (
          <div key={index} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block overflow-hidden"
              variants={wordVar}
            >
              {word + "\u00A0"}
            </motion.span>
          </div>
        );
      })}
    </motion.span>
  );
};
