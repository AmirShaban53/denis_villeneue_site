import { useRef } from "react";
import { ContainerFluid } from "./layout";

const ShowCase = () => {
  return (
    <div className="py-16">
      <ContainerFluid>
        <div>
          <p>Showcase</p>
        </div>

        <div className="grid grid-cols-12">
          <CaseCard src={"/blade.jpg"} title={"blade runner"} />
          <CaseCard src={"/dune.jpg"} title={"dune"} />
          <CaseCard src={"/prisoners.png"} title={"prisoners"} />
          <CaseCard src={"/arrival.jpg"} title={"arrival"} />
          <CaseCard src={"/enemy.jpg"} title={"enemy"} />
          <CaseCard src={"/sicario.jpg"} title={"sicario"} />
        </div>
      </ContainerFluid>
    </div>
  );
};

export default ShowCase;

const CaseCard = ({ src, title }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video to the beginning when stopped
  };
  return (
    <div className="col-span-4 overflow-hidden relative group cursor-pointer">
      <div className="hidden pointer-events-none group-hover:flex justify-center items-center absolute h-full w-full top-0 left-0 z-40 bg-black/40 duration-700 transition-all">
        <p className="capitalize">{title}</p>
      </div>
      <img
        src={src ? src : "/blade.webp"}
        className="duration-700 transition-all h-full object-cover relative z-10"
      />
      <video
        className="absolute top-0 left-0 z-0 group-hover:z-20 h-full object-cover"
        ref={videoRef}
        src="/video.mp4"
        type="video/mp4"
        poster={src}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
      />
    </div>
  );
};
