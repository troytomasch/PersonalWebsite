import React from "react";
import { Link } from "react-router-dom";
import HeaderText from "../atoms/HeaderText";

// Component for the navigation bar
const NavBar = (props) => {
  // Currently selected heading
  let selected = props.selected;

  let homeColor = null;
  let resumeColor = null;
  let projectsColor = null;

  if (selected === "Home") {
    homeColor = "text-white";
  } else if (selected === "Resume") {
    resumeColor = "text-white";
  } else if (selected === "Projects") {
    projectsColor = "text-white";
  }

  // Added CSS for hovering over the links
  const linkTextCSS =
    "hover:text-white transition transform hover:-translate-y-0.5";

  // CSS for each link
  const linkCSS = "sm:m-5 m-1.5";

  return (
    <div className="flex h-16 flex-row items-center justify-center md:w-full">
      <Link className={linkCSS} to="/">
        <HeaderText text={"Home"} styles={linkTextCSS} textColor={homeColor} />
      </Link>

      <Link className={linkCSS} to="/resume">
        <HeaderText
          text={"Resume"}
          styles={linkTextCSS}
          textColor={resumeColor}
        />
      </Link>

      <Link className={linkCSS} to="/projects">
        <HeaderText
          text={"Projects"}
          styles={linkTextCSS}
          textColor={projectsColor}
        />
      </Link>
    </div>
  );
};

export default NavBar;
