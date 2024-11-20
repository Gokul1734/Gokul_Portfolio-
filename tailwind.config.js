/** @type {import('tailwindcss').Config} */

import { linearGradient } from "motion/react-client";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#06002e",
        primary: "#5d4ebf",
        contrast: "#a6a6a6",
        secondary: "#747bff",
      },
      fontFamily: {
        body: "open-sauce-one",
      },
      width: {
        160: "160px",
        244: "240px",
        a: "90%",
        b: "70%",
      },
      height: {
        244: "240px",
      },
    },
  },
  plugins: [],
};
