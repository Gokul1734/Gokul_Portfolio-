import React from "react";

const GameComponent = (props) => {
  return (
    <div className="gametab bg-transparent m-10 ">
      <iframe className="w-full h-full" src={props.url}></iframe>
    </div>
  );
};

export default GameComponent;
