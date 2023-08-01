import React from "react";
import { Container } from "./layout";

const History = () => {
  return (
    <div className="py-16" id="history">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 ">
            <video
              controls
              src="https://res.cloudinary.com/dfhaybv2w/video/upload/v1690887321/denis%20villeneue/intro_qyz0ut.mp4"
              className="h-full object-contain"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="mb-3 text-2xl md:text-4xl font-semibold">
              Who is Denis Villeneue?
            </p>
            <p className="text-zinc-400 text-">
              Born October 3, 1967, Denis is a French-Canadian filmmaker. He is
              a four-time recipient of the Canadian Screen Award for Best
              Direction. Internationally, he is known for directing several
              critically acclaimed films, including the thrillers Prisoners and
              Sicario, as well as the science fiction films Arrival and Blade
              Runner 2049. For his work on Arrival, he received his first
              Academy Award nomination for Best Director. He was awarded the
              prize of Director of the Decade by the Hollywood Critics
              Association in December 2019. His latest film, Dune , based on
              Frank Herbert's novel of the same name, premiered at the 78th
              Venice International Film Festival; the film received critical
              acclaim, was a commercial success at the box office
              internationally, and is his highest grossing film to date.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
