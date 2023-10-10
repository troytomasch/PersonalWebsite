import React from "react";

const BorderedPicture = ({ imagePath, size, styles, alt, srcset, sizes }) => {
  let altText = imagePath;
  if (alt) {
    altText = alt;
  }

  const style = `border-solid border-white rounded-md border-2 ${size} ${styles}`;

  return (
    <img
      src={imagePath}
      alt={altText}
      className={style}
      srcSet={srcset}
      sizes={sizes}
    ></img>
  );
};

export default BorderedPicture;
