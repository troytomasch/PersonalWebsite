import React from "react";
import SubheaderText from "../atoms/SubheaderText";
import TitleText from "../atoms/TitleText";

const NewHomeLayout = () => {
  return (
    <div className="flex flex-col align-middle items-center justify-center content-center gap-6 my-4 p-4">
      <TitleText text={"Welcome to my website!"} />
      <SubheaderText text={"Feel free to explore and learn more about me."} />
    </div>
  );
};

export default NewHomeLayout;
