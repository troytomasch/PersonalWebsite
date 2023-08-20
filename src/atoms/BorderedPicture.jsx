import React from "react";

const BorderedPicture = (props) => {
  const imagePath = props.imagePath;

  const size = props.size;

  let alt = props.imagePath;
  if (props.alt) {
    alt = props.alt;
  }

  const styles = `border-solid border-white rounded-md border-2 ${size}`;

  return <img src={imagePath} alt={alt} className={styles}></img>;
};

export default BorderedPicture;
