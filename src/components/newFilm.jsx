import React from "react";
import { Container } from "./layout";
const NewFilm = () => {
  return (
    <div className="py-16">
      <Container>
        <div>
          <p>Upcoming projects</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 d ">
            <video className="" controls src="/video.mp4" type="video/mp4" />
          </div>
          <div className="col-span-12 md:col-span-6">
            <p>title of new movie</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ratione? Et voluptatum esse possimus sequi deserunt voluptate
              vitae nulla quas sed porro debitis id eius nisi, error eos vel
              optio.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewFilm;
