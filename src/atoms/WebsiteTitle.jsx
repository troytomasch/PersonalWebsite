import React from "react";
import longlogo from "../images/longlogo.png";

// Component for the main title of the website
const WebsiteTitle = () => {
  return (
    <div className="m-2">
      <img src={longlogo} alt="Troy Tomasch Logo" className="w-96 h-36"></img>
    </div>
  );
};

export default WebsiteTitle;
