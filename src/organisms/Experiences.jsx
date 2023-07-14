import React from "react";
import ExperienceCard from "../molecules/ExperienceCard";
import { experiences } from "../data";

// Component for the experiences list
const Experiences = () => {
  return (
    <div className="m-5 flex gap-7 flex-col">
      {experiences.map((experience) => {
        return (
          <ExperienceCard key={experience.company} experience={experience} />
        );
      })}
    </div>
  );
};

export default Experiences;
