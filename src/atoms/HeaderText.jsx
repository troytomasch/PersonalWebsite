import React from "react";

// Component for headers to be used for secondary titles, navbar options, etc
const HeaderText = ({ text, textColor, styles }) => {
  // Default non highlighted text color is black
  if (textColor == null) {
    textColor = "text-slate-700";
  }

  const cssClass = `text-3xl font-raleway font-medium ${textColor} ${styles}`;

  return <p className={cssClass}>{text}</p>;
};

export default HeaderText;
