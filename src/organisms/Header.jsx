import React from "react";
import WebsiteTitle from "../atoms/WebsiteTitle";
import NavBar from "../molecules/NavBar";

// Component for the website header to be included in all pages
const Header = ({ page }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <WebsiteTitle />
      <NavBar selected={page} />
      <div className="h-0 border-2 w-full rounded-sm m-2 border-slate-300"></div>
    </div>
  );
};

export default Header;
