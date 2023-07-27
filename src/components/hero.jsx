import React from "react";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="overflow-hidden h-screen relative bg-gradient-to-t from-zinc-900 to-transparent to-55%">
      <Container>
        <div className="h-screen flex flex-col justify-center text-white">
          <div>
            <p className="text-5xl uppercase font-bold">
              Filmmaker of the decade
            </p>
            <p>
              A biography of one of the best film directors of our age, Denis
              Villeneue.
            </p>
          </div>
          <div>
            <button>Read more</button>
          </div>
        </div>
      </Container>
      <div className="absolute top-0 -z-30 h-full w-full">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-black/50 z-10"></div>
        <img src="/arrival.jpg" className="animate object-bottom "/>
      </div>
    </div>
  );
};

export default Hero;
