import React from "react";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="overflow-hidden h-screen relative z-[7]">
      <div className="absolute top-0 h-full w-full -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-zinc-900 to-transparent to-50% z-10"></div>
        <img src="/arrival.jpg" className="animate object-bottom z-[5]" />
      </div>
      <p className="z-50">this and that</p>
      <Container>
        <div className="h-screen flex flex-col justify-center text-white cursor-pointer">
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
    </div>
  );
};

export default Hero;
