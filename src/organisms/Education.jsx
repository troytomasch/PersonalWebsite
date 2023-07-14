import React from "react";
import HeaderText from "../atoms/HeaderText";
import SubheaderText from "../atoms/SubheaderText";

// Component for the education section of my resume
const Education = () => {
  return (
    <div className="m-5">
      <div className="flex flex-col">
        <HeaderText
          text={"Bachelor of Science in Computer Science"}
          textColor="text-slate-200"
        />

        <div className="flex flex-row items-end gap-2">
          <HeaderText
            text={"Stevens Institute of Technology"}
            textColor="text-slate-600"
          />
          <HeaderText text={"Hoboken, New Jersey"} textColor="text-slate-600" />
        </div>

        <SubheaderText text={"September 2019 - May 2023"} />
        <SubheaderText text={"GPA: 3.8"} />
        <SubheaderText
          text={
            "Awards: MAC Academic Honor Roll, President’s List, John Mihalasky Award"
          }
        />
      </div>
    </div>
  );
};

export default Education;
