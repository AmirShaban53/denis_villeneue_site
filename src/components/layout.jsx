import React from "react";

const Container = (props) => {
  return <div className="mx-3 sm:mx-6 md:mx-12 lg:mx-28">{props.children}</div>;
};

const ContainerFluid = (props) => {
  return (
    <div className="w-full p-0 m-0 overflow-hidden">
      <div>{props.children}</div>
    </div>
  );
};
export { Container, ContainerFluid };
