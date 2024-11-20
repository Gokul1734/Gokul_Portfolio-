import { Fragment, useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Media from "./Components/Media";
import Slider from "./Components/Slider";
import ProgressBar from "@ramonak/react-progress-bar";
import Skills from "./Components/Skills";

import gamer from "./assets/gamer.jpg";
import logistics from "./assets/Logistics.png";
import movie from "./assets/MovieRecommendation.png";
import bioheritage from "./assets/Eco.png";
import parq from "./assets/Parq.png";
import arbitrage from "./assets/Arbitrage.png";
import blockborrow from "./assets/BlockBorrow.png";
import ProjectSlide from "./Components/ProjectSlide";
import { motion } from "motion/react";
import Popup from "./Components/Popup";
import Bmw from "./Components/Bmw";
import Form from "./Components/Form";
import Coder from "./Components/Coder";
import EducationSlide from "./Components/EducationSlide";
import Name from "./Components/Name";
import { useMediaQuery } from "react-responsive";
import Mobile from "./Mobile";
import { BiUpArrowCircle } from "react-icons/bi";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const isMobile = useMediaQuery({ query: "(min-width: 1000px)" });
  return (
    <>
      {isMobile ? (
        <Fragment>
          <div className="h-full flex gap-40 justify-end w-full items-center mb-24 ">
            <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
              <Header />
              <div className="h-full flex flex-col gap-10 justify-center w-full items-center ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="img rounded-full w-244 h-244  items-center justify-center"
                ></motion.div>
                <div className="flex flex-col gap-7 justify-center items-center">
                  <Bmw />
                  <Name />
                  <motion.h2
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    id="carfade"
                    style={{ zIndex: 2 }}
                    onClick={() => {
                      document.querySelector(".Carsvg").style.display = "flex";
                      document
                        .getElementById("carfade")
                        .classList.add("active");
                      document
                        .getElementById("carfade")
                        .classList.remove("carfade");
                      document.getElementById("BMW").classList.add("play");
                      document.getElementById("carfade").style.zIndex = 0;
                    }}
                    className="carfade text-5xl"
                  >{``}</motion.h2>
                </div>
              </div>
            </div>
            <Media />
          </div>
          <Slider />
          <h1 className="title align-middle justify-center flex text-7xl mt-20">
            SKILLS
          </h1>
          <div className="SkillTab w-full  flex items-center justify-center h-max p-0 ">
            <div className="parent w-1/2 h-auto mt-10 p-20 ">
              <Skills div={`1`} skill={`MongoDB`} />
              <Skills div={`4`} skill={`Express`} />
              <Skills div={`5`} skill={`React`} />
              <Skills div={`10`} skill={`NodeJs`} />
              <Skills div={`2`} skill={`Python`} />
              <Skills div={`6`} skill={`Autocad`} />
              <Skills div={`11`} skill={`Figma`} />
              <Skills div={`8`} skill={`Pandas`} />
              <Skills div={`9`} skill={`Android`} />
              <Skills div={`3`} skill={`Expo`} />
              <Skills div={`7`} skill={`Firebase`} />
              <Skills div={`12`} skill={`Blender`} />
            </div>
            <div className="w-1/2 grid-container justify-center">
              <div className="grid-item item1 ">
                <section>
                  <div>
                    <label>HTML • CSS :</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    height={25}
                    completed={90}
                    bgColor="#5d4ebf"
                  />
                  <div>
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
                  <div>
                    <label>MICROSOFT DATA TOOLS: {` 70%`}</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    bgColor={`#5d4ebf`}
                    height={25}
                    completed={70}
                    customLabel={`70%`}
                  />
                  <div>
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
                  <div>
                    <label>MACHINE LEARNING: {` 75%`}</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    bgColor={`#5d4ebf`}
                    height={25}
                    completed={90}
                    customLabel={`90%`}
                  />
                  <div>
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
                  <div>
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
                  <div>
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
                  <div>
                    <label>GITHUB: {` 90%`}</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    bgColor={`#5d4ebf`}
                    height={25}
                    completed={90}
                    customLabel={`90%`}
                  />
                  <div>
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
                  <div>
                    <label>BLENDER: {` 60%`}</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    bgColor={`#5d4ebf`}
                    height={25}
                    completed={60}
                    customLabel={`60%`}
                  />
                  <div>
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
                  <div>
                    <label>REACT - NATIVE: {` 75%`}</label>
                  </div>
                  <ProgressBar
                    animateOnRender
                    bgColor={`#5d4ebf`}
                    height={25}
                    completed={75}
                    customLabel={`75%`}
                  />
                  <div>
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
          <h1 className="title align-middle justify-center flex text-7xl">
            PROJECTS
          </h1>
          <div className="wrapper">
            <div className="box">
              <ProjectSlide
                id="1"
                title="Supply Chain Logistics"
                desc="Supply Chain Management Web Application"
                img={logistics}
                tech={["js", "mongo", "react", "firebase"]}
                url="https://logistics-ruby.vercel.app/login"
                gitlink="Logistics"
              />
              <ProjectSlide
                id="2"
                title="PARQ"
                img={parq}
                desc="Online Parking Slot Booking Applicaiton"
                tech={["native", "firebase", "react", "css"]}
                url=""
                gitlink="Parq"
              />
              <ProjectSlide
                id="3"
                title="Movie Recommadation"
                img={movie}
                desc="Movie Review Application with Advanced UI"
                tech={["expo", "html", "react", "css"]}
                url=""
                gitlink="Movie-Review-React-Application"
              />
              <ProjectSlide
                id="4"
                title="Javascript Games"
                img={gamer}
                desc="Various Interactive Mini Games"
                tech={["js", "html", "css", "tw"]}
                url={[showPopup, setShowPopup]}
                gitlink="lists/games"
                star="/stars"
              />
              <ProjectSlide
                id="5"
                title="Bio-Heritage"
                img={bioheritage}
                desc="Blockchain Project providing Eco reward NFT's for Social Services"
                tech={["blockchain", "firebase", "react", "html"]}
                url="https://bio-heritage-iw348r9ne-adribvs-projects.vercel.app/#/"
                gitlink="Bio-Heritage-BHT"
              />
              <ProjectSlide
                id="6"
                title="Arbitrage"
                img={arbitrage}
                desc="A peer to peer Lending Blockchain Web Application"
                tech={["js", "html", "css", "firebase"]}
                url="https://arbitragedev.netlify.app"
                gitlink="Arbitrage"
              />
              <ProjectSlide
                id="7"
                title="Block-Borrow WEB3"
                img={blockborrow}
                desc="A peer to peer Lending Blockchain Web Application"
                tech={["blockchain", "tw", "react", "firebase"]}
                url=""
                gitlink="goFlow"
              />
            </div>
          </div>
          {showPopup ? <Popup status={[showPopup, setShowPopup]} /> : <></>}
          <h1 className="title align-middle justify-center flex text-7xl">
            EDUCATION AND EXPERIENCE
          </h1>
          <div className="education w-full h-dvh  flex justify-center items-start">
            <div className="w-4/6 flex justify-center items-center m-20">
              <EducationSlide screen="" />
            </div>
            <div className="testimonial w-3/6  flex flex-col justify-center items-start m-20">
              <h2 className="text-5xl mb-10  ">Testimonial</h2>
              <p className="para text-justify ">
                I am a Computer Science and Engineering graduate from SRM
                University with expertise in JavaScript, Tailwind CSS, Firebase,
                and Python. I specialize in creating responsive, user-centric
                web and application solutions, blending functionality with
                aesthetics to deliver impactful results and exceed expectations
                in web development and data analytics.
              </p>
              <br />
            </div>
          </div>
          <h1 className="title align-middle justify-center flex text-7xl">
            CONTACT
          </h1>
          <div className="contact flex justify-between w-full m-20">
            <Form screen="" />
            <Coder />
          </div>
          <motion.button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="top m-10 bg-none p-2 bg-primary text-black text-2xl opacity-60"
          >
            <BiUpArrowCircle size={50} color="white" />
          </motion.button>
        </Fragment>
      ) : (
        <Mobile />
      )}
    </>
  );
}

export default App;
