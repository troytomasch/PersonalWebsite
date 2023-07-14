import React from "react";

// Component for headers to be used for main titles
const TitleText = (props) => {
  // This is the text that will be in the header
  const text = props.text;

  // Default non highlighted text color is white
  let textColor;
  props.textColor ? (textColor = props.textColor) : (textColor = "text-white");

  const cssClass = `text-4xl font-raleway ${textColor}`;

  return <h1 className={cssClass}>{text}</h1>;
};

export default TitleText;
