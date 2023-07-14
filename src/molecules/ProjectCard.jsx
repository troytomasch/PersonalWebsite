import React from "react";
import SubheaderText from "../atoms/SubheaderText";
import BodyText from "../atoms/BodyText";
import HeaderText from "../atoms/HeaderText";

const ProjectCard = (props) => {
  const project = props.project;

  // Formatting the dates for output
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);
  let dates;
  if (startDate === endDate) {
    dates = `${startDate.toLocaleString("default", {
      month: "long",
    })} ${startDate.getFullYear()}`;
  } else {
    dates = `${startDate.toLocaleString("default", {
      month: "long",
    })} ${startDate.getFullYear()} - ${endDate.toLocaleString("default", {
      month: "long",
    })} ${endDate.getFullYear()}`;
  }

  // List for description
  const description = (
    <ul className="list-disc marker:text-slate-700">
      {project.description.map((bullet) => {
        return (
          <li key={bullet}>
            <BodyText text={bullet} />
          </li>
        );
      })}
    </ul>
  );

  // List of links

  let linksComponent = null;
  if (Object.keys(project.links).length > 0) {
    linksComponent = (
      <div className="flex flex-row gap-2">
        <BodyText text="Project Links: " />
        {Object.keys(project.links).map((link) => {
          const externalLink = project.links[link];
          return (
            <a href={externalLink} target="_blank" rel="noreferrer">
              <BodyText text={link} styles={"underline hover:text-slate-200"} />
            </a>
          );
        })}
      </div>
    );
  }
  //   if (project.links.length > 0) {
  //     let links = "Project Links: |";
  //     for (let link of project.links) {
  //       links = links.concat(` ${link} |`);
  //     }
  //     skillsComponent = <BodyText text={skills} />;
  //   }

  return (
    <div>
      <div className="flex justify-between mb-2 items-end">
        <HeaderText text={project.title} />
        <SubheaderText text={dates} />
      </div>

      <div className="m-2">
        {description}
        {linksComponent}
      </div>
    </div>
  );
};

export default ProjectCard;
