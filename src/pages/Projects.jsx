import React, { useEffect } from "react";
import Header from "../organisms/Header";
import TitleText from "../atoms/TitleText";
import ProjectsLayout from "../organisms/ProjectsLayout";

// Component for the projects page to feature projects and other sites
const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Troy Tomasch";
  }, []);

  return (
    <div>
      <Header page={"Projects"} />

      <div className="flex flex-col items-center">
        <div className="max-w-screen-lg">
          <TitleText text={"Projects"} />
          <ProjectsLayout />
        </div>
      </div>
    </div>
  );
};

export default Projects;
