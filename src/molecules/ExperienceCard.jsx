import React from "react";
import HeaderText from "../atoms/HeaderText";
import BodyText from "../atoms/BodyText";
import SubheaderText from "../atoms/SubheaderText";

// Component for an experience card on the resume page
const ExperienceCard = (props) => {
  // The prop that contains the experience object
  const experience = props.experience;

  // Formatting the dates for output
  const startDate = new Date(experience.startDate);
  const endDate = new Date(experience.endDate);
  const dates = `${startDate.toLocaleString("default", {
    month: "long",
  })} ${startDate.getFullYear()} - ${endDate.toLocaleString("default", {
    month: "long",
  })} ${endDate.getFullYear()}`;

  // List for description
  const description = (
    <ul className="list-disc marker:text-slate-700">
      {experience.description.map((bullet) => {
        return (
          <li key={bullet}>
            <BodyText text={bullet} />
          </li>
        );
      })}
    </ul>
  );

  // List of skills used
  let skillsComponent = null;
  if (experience.skills.length > 0) {
    let skills = "Skills Used: |";
    for (let skill of experience.skills) {
      skills = skills.concat(` ${skill} |`);
    }
    skillsComponent = <BodyText text={skills} />;
  }

  return (
    <div>
      <div className="flex flex-row items-end gap-2">
        <HeaderText text={experience.title} textColor="text-slate-200" />
        <BodyText text=" at " />
        <HeaderText text={experience.company} textColor="text-slate-200" />
      </div>

      <div className="flex justify-between mb-2">
        <SubheaderText text={experience.location} />
        <SubheaderText text={dates} />
      </div>

      <div className="m-2">
        {description}
        {skillsComponent}
      </div>
    </div>
  );
};

export default ExperienceCard;
