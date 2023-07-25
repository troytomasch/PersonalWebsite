import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import SubheaderText from "../atoms/SubheaderText";
import { projects } from "../data";
import { verifyProjects } from "../utilities/verifyData";

// Component for the layout of the projects tab
const Projects = () => {
  // Verifying data is as expected
  try {
    verifyProjects(projects);
  } catch (e) {
    // Would want to add some sort of error logging here to keep track of this
    console.log(e);

    return (
      <div className="m-5 flex gap-7 flex-col">
        <SubheaderText text={"Could not display projects"} />
      </div>
    );
  }

  return (
    <div className="m-5 flex gap-7 flex-col">
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
