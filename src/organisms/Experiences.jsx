import React from "react";
import ExperienceCard from "../molecules/ExperienceCard";
import { experiences } from "../data";
import { verifyExperiences } from "../utilities/verifyData";
import SubheaderText from "../atoms/SubheaderText";

// Component for the experiences list
const Experiences = () => {
  // Verifying data is as expected
  try {
    verifyExperiences(experiences);
  } catch (e) {
    // Would want to add some sort of error logging here to keep track of this
    console.log(e);

    return (
      <div className="m-5 flex gap-7 flex-col">
        <SubheaderText text={"Could not display experiences"} />
      </div>
    );
  }

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
