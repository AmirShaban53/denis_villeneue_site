import { useEffect, useState, useRef } from "react";
import { Container, ContainerFluid } from "./layout";
import actorsData from "../../actorsData.json";
import { ExpandMore, Launch } from "@mui/icons-material";

const Characters = () => {
  const [childHeight, setChildHeight] = useState(0);
  const [viewRows, setViewRows] = useState(1);

  const handleSetHeight = (height) => {
    setChildHeight(height);
  };
  const handleViewMore = () => setViewRows(2);
  const handleViewLess = () => setViewRows(1);
  return (
    <div className="py-16" id="actors">
      <Container>
        <div className="mb-6">
          <p className="text-3xl font-bold">
            {" "}
            Collaborating <span className="text-rose-600">Actors</span>
          </p>
          <p className="text-zinc-500 text-sm">
            Meet some of the people that have worked with Villeneue.
          </p>
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
        <div className="text-center -translate-y-1/2">
          {viewRows == 1 ? (
            <button
              onClick={handleViewMore}
              className="bg-rose-600 rounded-full shadow-lg shadow-rose-600/50 animate-pulse p-2 aspect-square"
            >
              <ExpandMore />
              <span className="block">More</span>
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="bg-rose-600 rounded-full shadow-lg shadow-rose-600/50 animate-pulse p-2 aspect-square"
            >
              {" "}
              <ExpandMore className="rotate-180" />{" "}
              <span className="block">less</span>
            </button>
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
        alt={`image of actor`}
        className="duration-700 transition-all h-full w-full d object-cover relative z-10 grayscale group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute hidden top-0 left-0 z-20 d h-full w-full  group-hover:flex items-end p-2 duration-700 transition-all">
        <a
          href={props.wiki}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b"
        >
          <p className="opacity-0 group-hover:opacity-100 duration-700 transition-all font-bold text-lg ">
            {props.name}
            <Launch className="text-sm" />
          </p>
        </a>
      </div>
    </div>
  );
};
