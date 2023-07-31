import { useRef, useState } from "react";
import { ContainerFluid } from "./layout";
import MovieModal from "./movieModal";
import FilmData from "../../filmData.json";

const ShowCase = () => {
  const [films, setFilms] = useState(FilmData);
  const [openModal, setOpenModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(films[0]);

  const handleSelectFilm = (index) => {
    const targetFilm = films[index];
    setSelectedFilm(targetFilm);
  };

  const handleOpenModal = (index) => {
    const targetIndex = index ? index : 0;
    handleSelectFilm(targetIndex);
    setOpenModal(true);
    document.documentElement.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setSelectedFilm({});
    setOpenModal(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  return (
    <div className="py-16">
      <ContainerFluid>
        <div>
          <p>Showcase</p>
        </div>

        <div className="grid grid-cols-12">
          {films.map((film, index) => {
            return (
              <CaseCard
                key={index}
                title={film.title}
                image={film.images[0]}
                video={film.video}
                target={index}
                handleOpenModal={handleOpenModal}
              />
            );
          })}
        </div>
        {openModal && (
          <MovieModal {...selectedFilm} handleCloseModal={handleCloseModal} />
        )}
      </ContainerFluid>
    </div>
  );
};

export default ShowCase;

const CaseCard = ({ image, video, title, handleOpenModal, target }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };
  const handleMouseLeave = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0; // Reset video to the beginning when stopped
  };
  return (
    <div
      onClick={() => handleOpenModal(target)}
      className="col-span-12 md:col-span-4 overflow-hidden relative group cursor-pointer"
    >
      <div className="hidden pointer-events-none group-hover:flex justify-center items-center absolute h-full w-full top-0 left-0 z-40 bg-black/40 duration-700 transition-all">
        <p className="capitalize">{title}</p>
      </div>
      <img
        src={image ? image : "/blade.webp"}
        className="duration-700 transition-all h-full object-cover relative z-10"
      />
      <video
        className="absolute top-0 left-0 z-0 group-hover:z-20 h-full object-cover"
        ref={videoRef}
        src={video ? video : "/video.mp4"}
        poster={image}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        muted
      />
    </div>
  );
};
