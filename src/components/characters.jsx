import { useEffect, useState, useRef } from "react";
import { Container, ContainerFluid } from "./layout";
import actorsData from "../../actorsData.json";
const Characters = () => {
  const [childHeight, setChildHeight] = useState(0);
  const [viewRows, setViewRows] = useState(1);

  

  const handleSetHeight = (height) => {
    setChildHeight(height);
  };
  const handleViewMore = () => setViewRows(2);
  const handleViewLess = () => setViewRows(1);
  return (
    <div className="py-16">
      <Container>
        <div>
          <p>Characters</p>
        </div>
      </Container>
      <ContainerFluid>
        <div
          className={`flex flex-wrap duration-500 transition-all actor-container`}
          style={{ "--child-h": `${childHeight}px`, "--rows": `${viewRows}` }}
        >
          {actorsData.map((data, index) => {
            return (
              <CharacterCard
                key={index}
                {...data}
                handleSetHeight={handleSetHeight}
              />
            );
          })}
        </div>
      </ContainerFluid>
      <Container>
        <div className="text-center ">
          {viewRows == 1 ? (
            <button onClick={handleViewMore}>view more</button>
          ) : (
            <button onClick={handleViewLess}>view Less</button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Characters;

const CharacterCard = (props) => {
  const cardRef = useRef(null);

  const setHeight = () => {
    if (!cardRef.current) return;
    const height = cardRef.current.getBoundingClientRect().height;
    props.handleSetHeight(height);
  };

  useEffect(() => {
    setHeight();
  }, []);
  return (
    <div
      ref={cardRef}
      className="col-span-3 basis-1/2 md:basis-1/4 aspect-square group overflow-hidden relative"
    >
      <img
        src={props.image ? props.image : "/actor.jpg"}
        className="duration-700 transition-all h-full w-full d object-cover relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute hidden top-0 left-0 z-20 d h-full w-full  group-hover:flex items-center justify-center duration-700 transition-all">
        <p className="opacity-0 group-hover:opacity-100 duration-700 transition-all">
          {props.name}
        </p>
      </div>
    </div>
  );
};
