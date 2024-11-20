import React from "react";
import GameComponent from "./GameComponent";
import { motion } from "motion/react";

const Popup = (props) => {
  return (
    <motion.div whileInView={{ scale: 0.9 }} className="pops mx-20 h-auto">
      <div className="flex justify-between w-full">
        <h1 className="p-10">Games</h1>
        <button
          onClick={() => {
            props.status[1](!props.status[0]);
          }}
          className="m-10"
        >
          X
        </button>
      </div>
      <div className="flex">
        <GameComponent url="https://pig-game12345.netlify.app" />
        <GameComponent url="https://subtle-phoenix-0efb5d.netlify.app" />
      </div>
    </motion.div>
  );
};

export default Popup;
