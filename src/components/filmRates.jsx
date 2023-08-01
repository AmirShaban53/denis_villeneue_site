import React from "react";

const FilmRates = ({ rates }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-6 md:gap-12">
        <div className="flex items-center gap-2">
          <div className="">
            <img className="h-4" src="/icons/imdb.png" alt="imdb logo" />
          </div>
          <div>
            <span className="font-bold md:text-lg">{rates.IMDb}</span>
            <span className="text-zinc-500 text-sm">/10</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <img
              className="h-6 aspect-square"
              src="/icons/Metacritic.png"
              alt="metacritic logo"
            />
          </div>
          <span className="font-bold md:text-lg">{rates.Metacritic}%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="">
            <img className="h-6" src="/icons/rotten.png" alt="rotten tomato logo" />
          </div>
          <span className="font-bold md:text-lg">
            {rates["Rotten Tomatoes"]}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilmRates;
