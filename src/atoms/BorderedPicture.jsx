import React from "react";

const BorderedPicture = (props) => {
  const imagePath = props.imagePath;

  const size = props.size;

  const styles = `border-solid border-white rounded-md border-2 ${size}`;

  return <img src={imagePath} alt={imagePath} className={styles}></img>;
};

export default BorderedPicture;
