import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    year: "Aug 2021 - Apr 2023",
    degree: "Senior Software Engineer",
    content: "Camber Creative · Full-time",
  },
  {
    id: 2,
    year: "Apr 2018 - Jul 2021",
    degree: "Full Stack Developer",
    content: "Biz4Group LLC · Full-time",
  },
  {
    id: 3,
    year: "Jul 2015 - Mar 2018",
    degree: "Frontend Developer",
    content: "Boldist · Full-time",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
