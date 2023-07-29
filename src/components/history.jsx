import React from "react";
import { Container } from "./layout";

const History = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-4">
            <img src="/denis.webp" className="skew" />
          </div>
          <div className="col-span-8">
            <p>History of Denis Villeneue</p>
            <p>
              Denis Villeneuve born October 3, 1967, is a French-Canadian
              filmmaker. He is a four-time recipient of the Canadian Screen
              Award for Best Direction, winning for Maelström in 2001,
              Polytechnique in 2009, Incendies in 2010 and Enemy in 2013. The
              first three of these films also won the Canadian Screen Award for
              Best Motion Picture, while the latter was awarded the prize for
              best Canadian film of the year by the Toronto Film Critics
              Association. Internationally, he is known for directing several
              critically acclaimed films, including the thrillers Prisoners and
              Sicario, as well as the science fiction films Arrival and Blade
              Runner 2049. For his work on Arrival, he received his first
              Academy Award nomination for Best Director. He was awarded the
              prize of Director of the Decade by the Hollywood Critics
              Association in December 2019. His latest film, Dune , based on
              Frank Herbert's novel of the same name, premiered at the 78th
              Venice International Film Festival; the film received critical
              acclaim, was a commercial success at the box office
              internationally, and is his highest grossing film to date, and
              earned him Academy Award nominations for Best Adapted Screenplay
              and Best Picture, with the film itself winning a leading six
              Oscars at the 94th Academy Awards. In total, Villeneuve's films
              have grossed nearly $1.1 billion worldwide. His next film, Dune:
              Part Two, is set to be released on November 3, 2023, by Warner
              Bros. Pictures.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
