import React from "react";
import BodyText from "../atoms/BodyText";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Component for the website footer to be included in all pages
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div className="h-0 border-2 w-full rounded-sm m-2 border-slate-300"></div>
      <BodyText text="© Troy Tomasch" />

      <div className="flex flex-row gap-3 m-2">
        <a
          href={"https://github.com/troytomasch"}
          target="_blank"
          rel="noreferrer"
          className="hover:drop-shadow-lg hover:text-slate-200"
        >
          <FaGithub size="25" />
        </a>

        <a
          href={"https://www.linkedin.com/in/troy-tomasch-a50a371b5/"}
          target="_blank"
          rel="noreferrer"
          className="hover:drop-shadow-lg hover:text-slate-200"
        >
          <FaLinkedin size="25" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
