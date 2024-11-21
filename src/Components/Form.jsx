import React, { useState } from "react";
import { motion } from "motion/react";
import { PiPerson } from "react-icons/pi";
import { BiSend } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { ref, set } from "firebase/database";
import db from "../../firbase";

const Form = (props) => {
  const [sendButton, setSendButton] = useState(
    <BiSend id="sendIcon" size={30} />
  );
  const [colour, setColour] = useState("");
  const [msg, setMsg] = useState("Send Message");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      className={`w-1/2 flex justify-center items-center ${props.screen}Form`}
    >
      <form className="w-full flex flex-col justify-center items-center">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="username"
          className={`flex  name `}
          placeholder={`Name`}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="Email"
          className="flex mail"
          placeholder="Email ID"
          onChange={(e) => setMail(e.target.value)}
          value={mail}
        />

        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          type="textbox"
          name="username"
          className="flex message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className={`sent flex justify-center items-center gap-3 ${colour}`}
          id="sendButton"
          onClick={(e) => {
            e.preventDefault();
            if (name == "" || mail == "" || message == "") {
              alert("Please fill all the fields");
            } else {
              try {
                set(ref(db, `/Viewers/${mail}`), {
                  Name: name,
                  Email: mail,
                  Message: message,
                });

                setSendButton(<SiTicktick id="sendIcon" size={30} />);
                setColour("bg-none bg-green-600");
                setMsg("Sent");
              } catch (error) {
                alert(error);
              }
            }
          }}
        >
          <i id="done">{sendButton}</i>
          <span>{msg}</span>
        </motion.button>
      </form>
    </div>
  );
};

export default Form;
