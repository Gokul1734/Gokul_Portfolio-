import React from "react";
import Resume from "../assets/Resume.pdf";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="w-a flex justify-between items-center h-24 rounded-full p-2 header">
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
        <div className="flex gap-20 items-center">
          <div className="link flex gap-10 justify-evenly items-center">
            <a href="#">Home</a>
            <a href="" onClick={() => window.open(Resume, "_blank")}>
              Resume
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/drive/folders/1JZ_5bxCKXfsbHlhnaMqSpUTdOLnyw3Yv?usp=drive_link"
            >
              Certificates
            </a>
            <div className="animation start-home"></div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="w-160 h-16 text-xl"
            onClick={() => {
              window.open("mailto:kgokulpriyan@gmail.com");
            }}
          >
            HIRE ME
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Header;
