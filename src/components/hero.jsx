import React from "react";
import Denis from "../assets/denis.jpg";
import { Container } from "./layout";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute h-full w-full bg-gradient-to-r -z-10 from-black to-transparent"></div>
      {/* <img src='/src/assets/denis.jpg' className='w-full h-full object-cover' alt="denis doing work" /> */}
      <Container>
        <p className="text-white d">this is a container ADSA</p>
      </Container>
    </div>
  );
};

export default Hero;
