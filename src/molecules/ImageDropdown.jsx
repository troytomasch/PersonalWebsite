import React, { useState } from "react";
import BodyText from "../atoms/BodyText";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import BorderedPicture from "../atoms/BorderedPicture";

const ImageDropdown = ({ imagePaths }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  let images = null;
  if (Object.keys(imagePaths).length > 0) {
    images = (
      <div>
        {Object.keys(imagePaths).map((image) => {
          const externalLink = imagePaths[image];
          return (
            <BorderedPicture
              key={image}
              alt={image}
              size={"h-50 w-60"}
              imagePath={externalLink}
            />
          );
        })}
      </div>
    );
  }

  let dropdown = null;
  if (dropdownOpen) {
    dropdown = (
      <div className="flex row gap-2">
        <BodyText text={"Hide Images"} styles={"font-bold"} />
        <button
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <FaCaretUp size="25" color="#475569"></FaCaretUp>
        </button>
      </div>
    );
  } else {
    images = null;
    dropdown = (
      <div className="flex row gap-2">
        <BodyText text={"Show Images"} styles={"font-bold"} />
        <button
          onClick={() => {
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <FaCaretDown size="25" color="#475569"></FaCaretDown>
        </button>
      </div>
    );
  }

  return (
    <div>
      {images}
      {dropdown}
    </div>
  );
};

export default ImageDropdown;
