import React, { useState } from "react";
import { FaPython } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "motion/react";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiPhone } from "react-icons/pi";
import { IoLanguage, IoMaleSharp } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import {
  MdEngineering,
  MdOutlineDeveloperMode,
  MdScience,
} from "react-icons/md";
import { TbBinaryTree, TbMathIntegralX } from "react-icons/tb";

const EducationSlide = (props) => {
  const [menu, setMenu] = useState("Profile");
  const CGPA = 9.37;

  const M = (menu) => {
    console.log(menu);
    if (menu == "Internships") {
      return (
        <motion.div className={`${props.screen}info`}>
          <h2>Internships</h2>
          <br />
          <p className=" text-justify px-5  self-center ">
            I am actively seeking internships to gain hands-on experience in
            software development and technology. With expertise in JavaScript,
            Tailwind CSS, Firebase, and Python, I aim to contribute to
            innovative projects, apply my skills, and learn from industry
            professionals. My goal is to grow professionally while delivering
            impactful, user-focused solutions.{" "}
          </p>
        </motion.div>
      );
    } else if (menu == "HigherEducation") {
      return (
        <motion.div className={`${props.screen}info`}>
          <h2>{`SRM University (CGPA: ${CGPA})`}</h2>
          <div className="flex-1 gap-5 justify-center p-3 ">
            <div className="flex  gap-3 m-4 ">
              <MdEngineering
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Developed a strong foundation in Technology
              </small>
            </div>
            <div className="flex  gap-3 m-4 ">
              <MdOutlineDeveloperMode
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Learned Web Development and Designing
              </small>
            </div>
            <div className="flex  gap-3 m-4 ">
              <TbBinaryTree
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Explored Problem Solving and Data Analytics
              </small>
            </div>
          </div>
        </motion.div>
      );
    } else if (menu == "SchoolEducation") {
      return (
        <motion.div className={`${props.screen}info`}>
          <h2>
            {props.screen == "mobile"
              ? `DAV School (12: 88% | 10: 89%)`
              : `DAV School  (12th : 88% | 10th : 89%)`}
          </h2>
          <div className="flex-1 gap-5 justify-center p-3 ">
            <div className="flex  gap-3 m-4 ">
              <MdScience
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Understanding Basic Science Concepts
              </small>
            </div>
            <div className="flex  gap-3 m-4 ">
              <TbMathIntegralX
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Gained Complex Mathematical Knowledge
              </small>
            </div>
            <div className="flex  gap-3 m-4 ">
              <FaPython
                color={"white"}
                size={40}
                className=" bg-primary rounded-full p-2"
              />
              <small className=" text-white mt-2 tracking-wide w-10/12 ">
                Understanding Computer Languages
              </small>
            </div>
          </div>
        </motion.div>
      );
    } else if (menu == "Profile") {
      return (
        <motion.div className={`${props.screen}info`}>
          <h2 className=" tracking-wide">Gokulpriyan Karthikeyan</h2>
          <div className={`flex ${props.screen}Flex gap-5`}>
            {props.screen == "mobile" ? (
              <div className="">
                <div className="flex gap-3 mx-4 my-2  ">
                  <LiaBirthdayCakeSolid
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full p-2"
                  />
                  <small className=" text-white mt-2 ">17/03/2004</small>
                </div>
                <div className="flex  gap-3 mx-4 my-2    ">
                  <PiPhone
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full p-2"
                  />
                  <small className=" text-white mt-2 ">7010871355</small>
                </div>
                <div className="flex  gap-3 mx-4 my-2    ">
                  <IoLanguage
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full  p-2"
                  />
                  <small className=" text-white  tracking-wide mt-2 flex gap-2 ">
                    <i>Tamil, </i>
                    <i>English</i>
                  </small>
                </div>
                <div className="flex  gap-3 mx-4 my-2  ">
                  <IoIosMail
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full p-2"
                  />
                  <small className=" text-white mt-2 tracking-wide ">
                    kgokulpriyan@gmail.com
                  </small>
                </div>
                <div className="flex  gap-3 mx-4 my-2    ">
                  <IoMaleSharp
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full p-2"
                  />
                  <small className=" text-white mt-2">Male</small>
                </div>
                <div className="flex  gap-3 mx-4 my-2    ">
                  <FaLocationCrosshairs
                    color={"white"}
                    size={40}
                    className=" bg-primary rounded-full p-2"
                  />
                  <small className=" text-white mt-2 tracking-wide ">
                    Chennai, India
                  </small>
                </div>
              </div>
            ) : (
              <div className="flex gap-5 ">
                <div className="flex-1 gap-5 justify-center p-3  ">
                  <div className="flex  gap-3 m-4 ">
                    <LiaBirthdayCakeSolid
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full p-2"
                    />
                    <small className=" text-white mt-2 ">17/03/2004</small>
                  </div>
                  <div className="flex  gap-3 m-4   ">
                    <PiPhone
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full p-2"
                    />
                    <small className=" text-white mt-2 ">7010871355</small>
                  </div>
                  <div className="flex  gap-3 m-4   ">
                    <IoLanguage
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full  p-2"
                    />
                    <small className=" text-white  tracking-wide mt-2 flex gap-2 ">
                      <i>Tamil, </i>
                      <i>English</i>
                    </small>
                  </div>
                </div>
                <div className="flex-1 gap-5 justify-center p-3  ">
                  <div className="flex  gap-3 m-4 ">
                    <IoIosMail
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full p-2"
                    />
                    <small className=" text-white mt-2 tracking-wide ">
                      kgokulpriyan@gmail.com
                    </small>
                  </div>
                  <div className="flex  gap-3 m-4   ">
                    <IoMaleSharp
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full p-2"
                    />
                    <small className=" text-white mt-2 ">Male</small>
                  </div>
                  <div className="flex  gap-3 m-4   ">
                    <FaLocationCrosshairs
                      color={"white"}
                      size={40}
                      className=" bg-primary rounded-full p-2"
                    />
                    <small className=" text-white mt-2 tracking-wide ">
                      Chennai, India
                    </small>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={` flex flex-col items-center`}>
      <div className={`flex gap-6 ${props.screen}Navbar `}>
        <motion.button
          onClick={() => setMenu("Internships")}
          onHoverStart={() => setMenu("Internships")}
          whileHover={{ scale: 1.1 }}
        >
          Internships
        </motion.button>
        <motion.button
          onClick={() => setMenu("HigherEducation")}
          onHoverStart={() => setMenu("HigherEducation")}
          whileHover={{ scale: 1.1 }}
        >
          University
        </motion.button>
        <motion.button
          onClick={() => setMenu("SchoolEducation")}
          onHoverStart={() => setMenu("SchoolEducation")}
          whileHover={{ scale: 1.1 }}
        >
          School
        </motion.button>
        <motion.button
          onClick={() => setMenu("Profile")}
          onHoverStart={() => setMenu("Profile")}
          whileHover={{ scale: 1.1 }}
        >
          {props.screen == "mobile" ? "Profile" : "Personal Profile"}
        </motion.button>
      </div>
      {M(menu)}
    </div>
  );
};

export default EducationSlide;
