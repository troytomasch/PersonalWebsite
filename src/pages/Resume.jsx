import React, { useEffect } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import Experiences from "../organisms/Experiences";
import Education from "../organisms/Education";
import ProjectsReroute from "../molecules/ProjectsReroute";

// Component for resume page to feature my experience and technologies I've worked with
const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Troy Tomasch";
  }, []);

  return (
    <div>
      <Header />

      <div className="flex flex-col items-center">
        <div className="max-w-screen-lg">
          <TitleText text={"Education"} styles={"decoration-wavy"} />
          <Education />

          <TitleText text={"Work Experience"} />
          <Experiences />

          <TitleText text={"Projects"} />
          <ProjectsReroute />
        </div>
      </div>
    </div>
  );
};

export default Resume;
