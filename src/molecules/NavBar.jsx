import React from "react";
import { Link } from "react-router-dom";
import HeaderText from "../atoms/HeaderText";

// Component for the navigation bar
const NavBar = () => {
  // Added CSS for hovering over the links
  const linkTextCSS = "hover:text-white";

  // CSS for each link
  const linkCSS = "m-5";

  return (
    <div className="flex h-16 flex-row items-center justify-center w-full">
      <Link className={linkCSS} to="/">
        <HeaderText text={"Home"} styles={linkTextCSS} />
      </Link>

      <Link className={linkCSS} to="/resume">
        <HeaderText text={"Resume"} styles={linkTextCSS} />
      </Link>

      <Link className={linkCSS} to="/projects">
        <HeaderText text={"Projects"} styles={linkTextCSS} />
      </Link>
    </div>
  );
};

export default NavBar;
