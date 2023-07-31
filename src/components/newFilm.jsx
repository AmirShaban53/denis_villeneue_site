import React from "react";
import { Container } from "./layout";
const NewFilm = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="mb-4">
          <p className="text-3xl font-bold">Latest <span className="text-rose-600">Upcoming</span> films</p>
          <p className="text-zinc-500">by Denis Villeneue.</p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 rounded-lg overflow-hidden  ">
            <iframe
            className="w-full aspect-video"
              src="https://www.youtube.com/embed/Way9Dexny3w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="mb-4 text-xl font-semibold">Dune: Part 2</p>
            <p className="text-zinc-400 text-lg">This follow-up film will explore the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewFilm;
