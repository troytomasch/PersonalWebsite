import React, { useEffect } from "react";
import Header from "../organisms/Header";
import HomeLayout from "../organisms/HomeLayout";

// Component for the home page
const Home = () => {
  useEffect(() => {
    document.title = "Troy Tomasch";
  }, []);

  return (
    <div>
      <div className="bg-slate-400 ">
        <Header />

        <div className="flex items-center justify-center">
          <HomeLayout />
        </div>
      </div>
    </div>
  );
};

export default Home;
