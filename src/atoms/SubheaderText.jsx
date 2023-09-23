import React from "react";

// Component for subheaders to be used for subtitles
const SubheaderText = ({ text, textColor, styles }) => {
  // Default non highlighted text color is black
  if (!textColor) {
    textColor = "text-slate-700";
  }

  const cssClass = `text-2xl font-raleway font-normal ${textColor} ${styles}`;

  return <p className={cssClass}>{text}</p>;
};

export default SubheaderText;
