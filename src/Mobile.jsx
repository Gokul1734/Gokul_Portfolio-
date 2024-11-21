import React from "react";
import { motion } from "motion/react";
import Bmw from "./Components/Bmw";
import Name from "./Components/Name";
import Slider from "./Components/Slider";
import SideBar from "./Components/SideBar";
import ProgressBar from "@ramonak/react-progress-bar";
import Skills from "./Components/Skills";
import Card from "./Components/MobileCarousal";
import gamer from "./assets/gamer.jpg";
import logistics from "./assets/Logistics.png";
import movie from "./assets/MovieRecommendation.png";
import bioheritage from "./assets/Eco.png";
import parq from "./assets/Parq.png";
import arbitrage from "./assets/Arbitrage.png";
import blockborrow from "./assets/BlockBorrow.png";
import { BiRightArrowCircle } from "react-icons/bi";
import Form from "./Components/Form";
import EducationSlide from "./Components/EducationSlide";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";

const Mobile = () => {
  return (
    <div className="body w-screen flex flex-col justify-center items-center h-full">
      <SideBar />
      <div className="h-full flex flex-col  justify-center w-full items-center ">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="img rounded-full w-244 h-244  items-center justify-center"
        ></motion.div>
        <div className="flex flex-col gap-10 justify-center items-center">
          <Bmw screen="mobile"/>
          <Name id="mobile" mb="5" />
          <motion.h2
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            id="carfade"
            style={{ zIndex: 2 }}
            onClick={() => {
              document.querySelector(".Carsvg").style.display = "flex";
              document.getElementById("carfade").classList.add("active");
              document.getElementById("carfade").classList.remove("carfade");
              document.getElementById("BMW").classList.add("play");
              document.getElementById("carfade").style.zIndex = 0;
            }}
            className="carfade text-2xl"
          >{``}</motion.h2>
          <Slider screen="mobile" />
        </div>
      </div>
      <h1 className="title align-middle justify-center flex text-5xl mt-20">
        SKILLS
      </h1>
      <div className="SkillTab  flex-col  h-max p-0 ">
        <div className="parentMobile w-1/2 h-auto mt-10 p-10 ">
          <Skills div={`1`} screen="mobile" skill={`MongoDB`} />
          <Skills div={`4`} screen="mobile" skill={`Express`} />
          <Skills div={`5`} screen="mobile" skill={`React`} />
          <Skills div={`10`} screen="mobile" skill={`NodeJs`} />
          <Skills div={`2`} screen="mobile" skill={`Python`} />
          <Skills div={`6`} screen="mobile" skill={`Autocad`} />
          <Skills div={`11`} screen="mobile" skill={`Figma`} />
          <Skills div={`8`} screen="mobile" skill={`Pandas`} />
          <Skills div={`9`} screen="mobile" skill={`Android`} />
          <Skills div={`3`} screen="mobile" skill={`Expo`} />
          <Skills div={`7`} screen="mobile" skill={`Firebase`} />
          <Skills div={`12`} screen="mobile" skill={`Blender`} />
        </div>
        <div className="flex flex-col grid-containerMobile justify-center my-0">
          <div className="grid-item item1 ">
            <section>
              <div className="mb-3">
                <label>HTML • CSS :</label>
              </div>
              <ProgressBar
                animateOnRender
                height={25}
                completed={90}
                bgColor="#5d4ebf"
              />
              <div className="my-3">
                <label>REACT JS: {` 90%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
              />
            </section>
          </div>
          <div className="grid-item item2">
            <section>
              <div className="my-3">
                <label>MICROSOFT DATA TOOLS: {` 70%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={70}
                customLabel={`70%`}
              />
              <div className="my-3">
                <label>DATABASE • MYSQL • FIREBASE: {` 80%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={80}
                customLabel={`80%`}
              />
            </section>
          </div>
          <div className="grid-item item4">
            <section>
              <div className="my-3">
                <label>MACHINE LEARNING: {` 75%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
                customLabel={`90%`}
              />
              <div className="my-3">
                <label>AI • PROMPT : {` 60%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
                customLabel={`90%`}
              />
            </section>
          </div>
          <div className="grid-item item3">
            <section>
              <div className="my-3">
                <label>PYTHON: {` 90%`}</label>
              </div>
              <ProgressBar
                color="red"
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
                customLabell={`90%`}
              />
              <div className="my-3">
                <label>JAVA • C# • C++ : {` 75%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={75}
                customLabell={` 75%`}
              />
            </section>
          </div>
          <div className="grid-item item5">
            <section>
              <div className="my-3">
                <label>GITHUB: {` 90%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
                customLabel={`90%`}
              />
              <div className="my-3">
                <label>VERCEL: {` 90%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={90}
                customLabel={`90%`}
              />
            </section>
          </div>
          <div className="grid-item item6">
            <section>
              <div className="my-3">
                <label>BLENDER: {` 60%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={60}
                customLabel={`60%`}
              />
              <div className="my-3">
                <label>AUTOCAD: {` 50%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={50}
                customLabel={`50%`}
              />
            </section>
          </div>
          <div className="grid-item item7">
            <section>
              <div className="my-3">
                <label>REACT - NATIVE: {` 75%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={75}
                customLabel={`75%`}
              />
              <div className="my-3">
                <label>FLUTTER: {` 70%`}</label>
              </div>
              <ProgressBar
                animateOnRender
                bgColor={`#5d4ebf`}
                height={25}
                completed={70}
                customLabel={`70%`}
              />
            </section>
          </div>
        </div>
      </div>
      <h1 className="title align-middle justify-center flex text-5xl">
        PROJECTS
      </h1>
      <div
        id="Card"
        className="cardScroll w-screen justify-center items-center flex  m-5 mt-10 gap-10"
      >
        <h1 className="sliderspace flex justify-center items-center gap-4">
          Slide{" "}
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => {
              document.getElementById("Card").scrollTo(300, 0);
            }}
            className="bg-none p-0"
          >
            <BiRightArrowCircle className="mt-1" size={50} />
          </motion.button>
        </h1>
        <Card title="PARQ Application" link="Parq" photo={parq} />
        <Card
          title="Moview Application"
          link="Movie-Review-React-Application"
          photo={movie}
        />
        <Card title="Logistics Website" link="Logistics" photo={logistics} />
        <Card
          title="Bio Heritage WEB3"
          link="Bio-Heritage-BHT"
          photo={bioheritage}
        />
        <Card title="Arbitrage Platform" link="Arbitrage" photo={arbitrage} />
        <Card title="Block Borrow WEB3" link="goFlow" photo={blockborrow} />
        <Card title="Javascript Games" link="Pig-game" photo={gamer} />
        <motion.button
          onClick={() => {
            window.open("http://github.com/Gokul1734", "_blank");
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.5 }}
        >
          Visit Github
        </motion.button>
        <br />
        <br />
      </div>
      <h1 className="title align-middle justify-center flex text-3xl my-7 mt-20">
        EDUCATION AND EXPERIENCE
      </h1>
      <div className="flex flex-col justify-center items-start m-10">
        <h2 className="text-3xl mb-4 text-primary  ">Testimonial</h2>
        <p className="w-full text-justify ">
          I am a Computer Science and Engineering graduate from SRM University
          with expertise in JavaScript, Tailwind CSS, Firebase, and Python. I
          specialize in creating responsive, user-centric web and application
          solutions, blending functionality with aesthetics to deliver impactful
          results and exceed expectations in web development and data analytics.
        </p>
        <br />
      </div>
      <EducationSlide screen="mobile" />
      <h1 className="title align-middle justify-center flex text-5xl my-20">
        CONTACT
      </h1>
      <Form screen="mobile" />
      <div className="footer my-10 flex justify-evenly items-center gap-7">
        <FaGithub
          className="bg-primary rounded-full p-2 mobileIcons"
          size={10}
          color="white"
          onClick={() => {
            window.open("https://github.com/Gokul1734", "_blank");
          }}
        />
        <RiInstagramFill
          className="bg-primary rounded-full p-2 mobileIcons"
          size={10}
          color="white"
          onClick={() => {
            window.open(
              "https://www.instagram.com/Gokulpriyan_Karthikeyan/",
              "_blank"
            );
          }}
        />
        <GrLinkedin
          className="bg-primary rounded-full p-2 mobileIcons"
          size={10}
          color="white"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/gokulpriyan-karthikeyan-078652200/",
              "_blank"
            );
          }}
        />
        <BsTwitter
          className="bg-primary rounded-full p-2 mobileIcons"
          size={10}
          color="white"
          onClick={() => {
            window.open("https://x.com/kgokulpriyan1", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Mobile;
