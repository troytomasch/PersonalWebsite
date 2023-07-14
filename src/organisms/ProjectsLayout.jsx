import React from "react";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="m-5 flex gap-7 flex-col">
      {projects.map((project) => {
        return <ProjectCard key={project.title} project={project} />;
      })}
    </div>
  );
};

export default Projects;
