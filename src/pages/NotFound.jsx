import React, { useEffect } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import Footer from "../organisms/Footer";

// Not found page 404
const NotFound = () => {
  useEffect(() => {
    document.title = "Not found | Troy Tomasch";
  }, []);

  return (
    <div className="m-10">
      <Header />

      <div className={"m-5 flex gap-7 flex-col"}>
        <TitleText text="Sorry this page was not found" />
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
