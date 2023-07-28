import { FC } from "react";
import { Container } from "./layout";

const Process = () => {
  return (
    <div  className="bg-zinc-900 py-16">
      <Container>
        <div>
          <p>Process</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="relative overflow-hidden h-[90vh]">
            <div className="absolute min-h-full bg-gradient-to-b from-zinc-900 from-5% via-transparent via-30% to-zinc-900 to-95% top-0 left-0 bottom-0 w-full z-20 pointer-events-none"></div>
          <div className="grid grid-cols-12 px-6 relative h-full overflow-y-scroll scroll- d  my-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
};

const Card = () => {
  return (
    <div className="col-span-6 d">
      <img
        src="/blade.webp"
        className="duration-700 transition-all h-full object-cover relative z-10"
      />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          laudantium maxime quo dolorem non velit pariatur vitae amet molestiae?
          Quaerat maiores accusamus ullam, dolores quod dicta error incidunt.
          Alias, consequatur.
        </p>
      </div>
    </div>
  );
};

export default Process;
