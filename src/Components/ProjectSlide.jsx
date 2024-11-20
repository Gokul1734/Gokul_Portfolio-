import React, { useState } from "react";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import firebase from "../assets/firebase.png";
import expo from "../assets/expo.png";
import blockchain from "../assets/Blockchain.png";
import css from "../assets/css.png";
import mongo from "../assets/mongo.png";
import native from "../assets/native.png";

const ProjectSlide = (props) => {
  const [id, setid] = useState(props.id);
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const [Image, setImage] = useState(props.img);

  const svg = {
    react: react,
    tw: tailwind,
    js: js,
    html: html,
    firebase: firebase,
    expo: expo,
    blockchain: blockchain,
    css: css,
    mongo: mongo,
    native: native,
  };

  return (
    <>
      <input type="radio" name="slide" id={id} />
      <label htmlFor={id} className="card">
        <div className="row">
          <h2>{title}</h2>
          <div className="icon">{id}</div>
        </div>
        <div className="column">
          <div className="block4">
            {props.tech.length == 4 ? (
              props.tech.map((lang, index) => {
                return <img src={svg[lang]} alt={`${lang}`} key={index} />;
              })
            ) : (
              <></>
            )}
          </div>
          <div className="disp">
            <img src={Image} alt="Pig Game" />
          </div>
          <div className="sourcer">
            <button
              onClick={(e) => {
                if (title == "Javascript Games") {
                  props.url[1](!props.url[0]);
                } else if (props.url) {
                  window.open(props.url, "_blank");
                } else {
                  alert("Project needs Setup use the Source Code for setup");
                }
              }}
            >
              OPEN PROJECT
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://github.com${
                    props.star ? props.star : ""
                  }/Gokul1734/${props.gitlink}`,
                  "_blank"
                )
              }
            >
              SOURCE CODE
            </button>
          </div>
          <div className="description">
            <p className=" text-wrap w-b ">{desc}</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default ProjectSlide;
