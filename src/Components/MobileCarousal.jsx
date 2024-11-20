import { MdOpenInNew } from "react-icons/md";
import { motion } from "motion/react";

function Card(props) {
  return (
    <div className="mobileCard">
      <img className="rounded-md w-96 h-56" src={props.photo} />
      <div className="flex w-full justify-between items-center p-2  mt-4 ">
        <h2 className="mx-10">{props.title}</h2>
        <button
          onClick={() => {
            window.open(`https://github.com/Gokul1734/${props.link}`, "_blank");
          }}
          className="text-sm rounded-full p-3 "
        >
          <MdOpenInNew size={20} />
        </button>
      </div>
    </div>
  );
}

export default Card;
