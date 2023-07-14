import React from "react";

// Component for headers to be used for secondary titles, navbar options, etc
const HeaderText = (props) => {
  // This is the text that will be in the header
  const text = props.text;

  // Default non highlighted text color is black
  let textColor;
  props.textColor
    ? (textColor = props.textColor)
    : (textColor = "text-slate-700");

  // Any additional styles to the text. Default additional styles are none
  let styles;
  props.styles ? (styles = props.styles) : (styles = "");

  const cssClass = `text-3xl font-raleway font-medium ${textColor} ${styles}`;

  return <h2 className={cssClass}>{text}</h2>;
};

export default HeaderText;
