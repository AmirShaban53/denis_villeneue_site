import { useEffect, useRef, forwardRef } from "react";
import { Container, ContainerFluid } from "./layout";

const Characters = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

//   useEffect(()=>{
//     if(parentRef.current && childRef.current) {

//     }
//   },[])
  return (
    <div className="py-16">
      <Container>
        <div>
          <p>Characters</p>
        </div>
      </Container>
      <ContainerFluid>
        <div ref={parentRef} className="grid grid-cols-12">
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
          <CharacterCard ref={childRef} />
        </div>
      </ContainerFluid>
    </div>
  );
};

export default Characters;

const CharacterCard = forwardRef((props, ref) => {
  return (
    <div className="col-span-3 aspect-square group overflow-hidden relative" ref={ref}>
      <img
        src="/actor.jpg"
        className="duration-700 transition-all h-full object-cover relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute hidden top-0 left-0 z-20 d h-full w-full  group-hover:flex items-center justify-center duration-700 transition-all">
        <p className="opacity-0 group-hover:opacity-100 duration-700 transition-all">Aurora</p>
      </div>
    </div>
  );
});
