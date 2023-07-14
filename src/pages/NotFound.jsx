import React, { useEffect } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";

// Not found page 404
const NotFound = () => {
  useEffect(() => {
    document.title = "Not found | Troy Tomasch";
  }, []);

  return (
    <div>
      <Header />

      <TitleText text="Sorry this page was not found" />
    </div>
  );
};

export default NotFound;
