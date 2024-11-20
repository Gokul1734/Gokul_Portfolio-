import React from "react";
import github from "../assets/github.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillRightCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  TiSocialInstagramCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { PiLinkedinLogo } from "react-icons/pi";
import { RxLinkedinLogo } from "react-icons/rx";
import { motion } from "motion/react";
const Media = () => {
  return (
    <div className="media">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="https://x.com/kgokulpriyan1"
        target="_blank"
      >
        <AiFillTwitterCircle size={50} color="#5d4ebf" opacity={"40%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="https://www.instagram.com/Gokulpriyan_Karthikeyan/"
        target="_blank"
      >
        <AiFillInstagram size={50} color="#5d4ebf" opacity={"40%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        target="_blank"
        href="https://github.com/Gokul1734"
      >
        <AiFillGithub size={50} color="#5d4ebf" opacity={"40%"} />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        href="https://www.linkedin.com/in/gokulpriyan-karthikeyan-078652200/"
        target="_blank"
      >
        <AiFillLinkedin size={50} color="#5d4ebf" opacity={"40%"} />
      </motion.a>
    </div>
  );
};

export default Media;
