import React from "react";

// Component for text used in the body of articles or cards
const BodyText = (props) => {
  // This is the text that will be in the component
  const text = props.text;

  // Default non highlighted text color is slate-700
  let textColor;
  props.textColor
    ? (textColor = props.textColor)
    : (textColor = "text-slate-700");

  // Any additional styles to the text. Default additional styles are none
  let styles;
  props.styles ? (styles = props.styles) : (styles = "");

  const cssClass = `text-xl font-raleway font-light ${textColor} ${styles}`;

  return <h2 className={cssClass}>{text}</h2>;
};

export default BodyText;
