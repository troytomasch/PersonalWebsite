import React from "react";
import SubheaderText from "../atoms/SubheaderText";
import { Link } from "react-router-dom";

const ProjectsReroute = () => {
  return (
    <div className="flex sm:flex-row gap-1 m-5 flex-col">
      <SubheaderText text={"See the"} />
      <Link to="/projects">
        <SubheaderText
          text={"Projects"}
          styles={"underline hover:text-slate-200"}
        />
      </Link>
      <SubheaderText
        text={"tab for a description of projects I've worked on."}
      />
    </div>
  );
};

export default ProjectsReroute;
