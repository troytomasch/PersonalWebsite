import React from "react";

// Component for headers to be used for main titles
const TitleText = ({ text, textColor }) => {
  // Default non highlighted text color is white
  if (!textColor) {
    textColor = "text-white";
  }

  const cssClass = `text-4xl font-raleway ${textColor}`;

  return <h2 className={cssClass}>{text}</h2>;
};

export default TitleText;
