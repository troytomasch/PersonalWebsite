import React, { useEffect } from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import NewHomeLayout from "../organisms/NewHomeLayout";

// Component for the home page
const Home = () => {
  useEffect(() => {
    document.title = "Troy Tomasch";
  }, []);

  return (
    <div className="bg-slate-400 m-10">
      <Header page={"Home"} />

      <div className="flex items-center justify-center">
        {/* <HomeLayout /> */}
        <NewHomeLayout />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
