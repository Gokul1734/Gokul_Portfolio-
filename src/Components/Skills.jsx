import React, { useState } from "react";
import { SiExpress } from "react-icons/si";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";
import expo from "../assets/expo.png";
import mongo from "../assets/mongo.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import pandas from "../assets/pandas.png";
import Autocad from "../assets/autocad.png";
import figma from "../assets/figma.png";
import android from "../assets/android.png";
import blender from "../assets/blender.png";
import { motion } from "motion/react";

const Skills = (props) => {
  const [icons, setIcons] = useState({
    MongoDB: mongo,
    Express: express,
    React: react,
    NodeJs: node,
    Python: python,
    Pandas: pandas,
    Autocad: Autocad,
    Figma: figma,
    Android: android,
    Expo: expo,
    Firebase: firebase,
    Blender: blender,
  });
  return (
    <>
      {props.screen == "mobile" ? (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className={`div${props.div} flex-col p-6 `}
        >
          <img src={icons[props.skill]} className={`mobileSkills`} />
          <h2 className="text-xl p-0">{props.skill}</h2>
        </motion.div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className={`div${props.div} flex-col p-3 `}
        >
          <img src={icons[props.skill]} className="skills mt-5" />
          <h2 className=" text-2xl">{props.skill}</h2>
        </motion.div>
      )}
    </>
  );
};

export default Skills;
