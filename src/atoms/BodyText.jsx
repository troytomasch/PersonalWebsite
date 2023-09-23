import React from "react";

// Component for text used in the body of articles or cards
const BodyText = ({ text, textColor, styles }) => {
  // Default non highlighted text color is slate-700
  if (!textColor) {
    textColor = "text-slate-700";
  }

  const cssClass = `text-xl font-raleway font-light ${textColor} ${styles}`;

  return <h2 className={cssClass}>{text}</h2>;
};

export default BodyText;
