import React from "react";
import { motion } from "motion/react";
import Resume from "../assets/Resume.pdf";

const SideBar = () => {
  return (
    <div className="flex header mb-20 w-11/12  items-center rounded-full p-2">
      <div className="w-full flex justify-between items-center bg-black h-20 p-4 rounded-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white rounded-full flex justify-between items-center"
        >
          <h1 className=" font-extrabold from-neutral-700 text-black text-5xl  flex items-center z-10">
            G
          </h1>
        </motion.button>
        <div className="flex gap-5">
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl mobileA rounded-full "
            onClick={() => {
              window.open(Resume, "_blank");
            }}
          >
            Resume
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl mobileA p-2 rounded-full "
            onClick={() => {
              window.open(
                "https://drive.google.com/drive/folders/1JZ_5bxCKXfsbHlhnaMqSpUTdOLnyw3Yv?usp=drive_link",
                "_blank"
              );
            }}
          >
            Certificates
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
