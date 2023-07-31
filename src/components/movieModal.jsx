import React from "react";
import FilmRates from "./filmRates";
import ModalHeader from "./modalHeader";

const MovieModal = ({
  video,
  title,
  rates,
  images,
  year,
  handleCloseModal,
}) => {
  return (
    <div className="fixed w-full h-screen top-0 left-0 z-40 bg-black/50 overflow-hidden pointer-events-none">
      <div className="flex justify-center items-center h-full pointer-events-auto">
        <div className="bg-zinc-800 h-fit border border-zinc-700 overflow-hidden w-1/2 rounded-xl mb-6 max-h-[90vh] overflow-y-auto no-scrollbar relative">
          <button
            onClick={handleCloseModal}
            className="absolute top-0 right-0 z-50 font-bold p-4 text-xl cursor-pointer"
          >
            X
          </button>
          <div className=" relative z-10">
            <div className="absolute w-full h-full bg-gradient-to-t from-zinc-800 to-transparent to-25% z-40 pointer-events-none"></div>
            <video
              controls
              className="top-0 left-0 group-hover:z-20 w-full object-contain relative"
              src={video ? video : "/video.mp4"}
              poster={images[0]}
              muted
            />
          </div>
          <div className="p-6">
            <ModalHeader title={title} year={year} link={"/"} />
            <FilmRates rates={rates} />

            <div>
              <p className="font-bold mb-1 text-xl uppercase">plot</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis velit corporis ducimus saepe atque dignissimos eveniet
                quo cum voluptatibus! Qui ut saepe ipsam ab. Delectus reiciendis
                assumenda quam commodi facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;