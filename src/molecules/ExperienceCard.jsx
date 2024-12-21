import React from "react";
import HeaderText from "../atoms/HeaderText";
import BodyText from "../atoms/BodyText";
import SubheaderText from "../atoms/SubheaderText";

// Component for an experience card on the resume page
const ExperienceCard = ({ experience }) => {
  const getDates = () => {
    // Formatting the dates for output
    const startDate = new Date(experience.startDate);
    let dateText = `${startDate.toLocaleString("default", {
      month: "long",
    })} ${startDate.getFullYear()} - `;

    if (experience.endDate === "Current") return dateText + "Current";
    const endDate = new Date(experience.endDate);
    return (
      dateText +
      `${endDate.toLocaleString("default", {
        month: "long",
      })} ${endDate.getFullYear()}`
    );
  };

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
    let skills = "Skills Used: " + experience.skills.join(" | ");
    skillsComponent = <BodyText text={skills} />;
  }

  return (
    <div>
      <div className="flex sm:flex-row flex-col sm:items-end items-start gap-2">
        <HeaderText text={experience.title} textColor="text-slate-200" />
        <BodyText text=" at " />
        <HeaderText text={experience.company} textColor="text-slate-200" />
      </div>

      <div className="flex sm:flex-row flex-col justify-between mb-2">
        <SubheaderText text={experience.location} />
        <SubheaderText text={getDates()} />
      </div>

      <div className="m-2">
        {description}
        {skillsComponent}
      </div>
    </div>
  );
};

export default ExperienceCard;
