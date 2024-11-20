import React from "react";
import Marquee from "react-fast-marquee";
import { BsFiletypeSql } from "react-icons/bs";
import {
  FaCss3,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNode,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { LuFileJson } from "react-icons/lu";
import { PiFileCpp, PiShareNetworkFill } from "react-icons/pi";
import { SiDjango, SiExpress, SiJavascript, SiMongodb } from "react-icons/si";

const Slider = (props) => {
  return (
    <>
      {props.screen == "mobile" ? (
        <Marquee
          speed={200}
          className="slider bg-transparent h-10 py-3 flex  justify-evenly items-center"
        >
          <span className="flex justify-evenly items-center gap-20 text-contrast">
            <h1>SERVER</h1>
            <section className="flex gap-8 ">
              <FaNodeJs size={60} color={"green"} />
              <SiExpress size={60} color={"gray"} />
              <PiShareNetworkFill size={60} color="blue" />
            </section>
            <h1>WEBFLOW</h1>
            <section className="flex gap-8 ">
              <LuFileJson size={60} color={"white"} />
              <FaPython size={60} color={"yellow"} />
              <PiFileCpp size={60} color="navy" />
            </section>
            <h1>FULLSTACK</h1>
            <section className="flex gap-8 ">
              <FaHtml5 size={60} color={"red"} />
              <FaCss3 size={60} color={"orange"} />
              <FaReact size={60} color="skyblue" />
            </section>
            <h1>DATABASE</h1>
            <section className="flex gap-8 ">
              <FaDatabase size={60} color={"black"} />
              <SiMongodb size={60} color={"green"} />
              <IoLogoFirebase size={60} color="yellow" />
            </section>
          </span>
        </Marquee>
      ) : (
        <Marquee
          speed={200}
          className="slider bg-transparent h-48 py-10 flex justify-evenly items-center"
        >
          <span className="flex justify-evenly items-center gap-20 text-contrast">
            <h1>SERVER</h1>
            <section className="flex gap-8 ">
              <FaNodeJs size={60} color={"green"} />
              <SiExpress size={60} color={"gray"} />
              <PiShareNetworkFill size={60} color="blue" />
            </section>
            <h1>WEBFLOW</h1>
            <section className="flex gap-8 ">
              <LuFileJson size={60} color={"white"} />
              <FaPython size={60} color={"yellow"} />
              <PiFileCpp size={60} color="navy" />
            </section>
            <h1>FULLSTACK</h1>
            <section className="flex gap-8 ">
              <FaHtml5 size={60} color={"red"} />
              <FaCss3 size={60} color={"orange"} />
              <FaReact size={60} color="skyblue" />
            </section>
            <h1>DATABASE</h1>
            <section className="flex gap-8 ">
              <FaDatabase size={60} color={"black"} />
              <SiMongodb size={60} color={"green"} />
              <IoLogoFirebase size={60} color="yellow" />
            </section>
          </span>
          <div className="bg-transparent">
            <h1 className="text-transparent">----</h1>
          </div>
        </Marquee>
      )}
    </>
  );
};

export default Slider;
