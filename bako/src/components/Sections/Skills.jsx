import React, { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks grove right at the coast of the Semantics",
  progressData: [
    {
      id: 1,
      name: "jQuery",
      percentage: 85,
    },
    {
      id: 2,
      name: "Bootstrap",
      percentage: 90,
    },
    {
      id: 3,
      name: "Tailwind CSS",
      percentage: 60,
    },
    {
      id: 4,
      name: "Laravel",
      percentage: 70,
    },
    {
      id: 5,
      name: "PHP",
      percentage: 85,
    },
    {
      id: 6,
      name: "Django",
      percentage: 90,
    },
    {
      id: 7,
      name: "Django REST Framework",
      percentage: 85,
    },
    {
      id: 8,
      name: "HTML",
      percentage: 90,
    },
    {
      id: 9,
      name: "Cascading Style Sheets (CSS)",
      percentage: 60,
    },
    {
      id: 10,
      name: "Docker Products",
      percentage: 70,
    },
    {
      id: 11,
      name: "Python (Programming Language)",
      percentage: 85,
    },
    {
      id: 12,
      name: "React Native",
      percentage: 90,
    },
    {
      id: 13,
      name: "MySQL",
      percentage: 85,
    },
    {
      id: 14,
      name: "REST APIs",
      percentage: 90,
    },
    {
      id: 15,
      name: "SQL",
      percentage: 70,
    },
    {
      id: 16,
      name: "Vue.js",
      percentage: 85,
    },
    {
      id: 17,
      name: "Git",
      percentage: 90,
    },
    {
      id: 18,
      name: "Google Cloud Platform (GCP)",
      percentage: 85,
    },
    {
      id: 19,
      name: "MongoDB",
      percentage: 90,
    },
    {
      id: 20,
      name: "PostgreSQL",
      percentage: 85,
    },
    {
      id: 21,
      name: "Angular Material",
      percentage: 90,
    },
    {
      id: 22,
      name: "GraphQL",
      percentage: 60,
    },
    {
      id: 23,
      name: "HTML5",
      percentage: 70,
    },
    {
      id: 24,
      name: "Redux.js",
      percentage: 85,
    },
    {
      id: 25,
      name: "AngularJS",
      percentage: 90,
    },
    {
      id: 26,
      name: "Node.js",
      percentage: 90,
    },
    {
      id: 27,
      name: "Amazon Web Services (AWS)",
      percentage: 60,
    },
    {
      id: 28,
      name: "React.js",
      percentage: 70,
    },
    {
      id: 29,
      name: "TypeScript",
      percentage: 85,
    },
    {
      id: 30,
      name: "JavaScript",
      percentage: 90,
    },
  ],
};

function Skills() {
  const [getAllItems] = useState(skillData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(4);
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);
  useEffect(() => {
    setVisibleItems(getAllItems.progressData?.filter((item) => item?.id <= 6));
  }, [getAllItems]);

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.progressData.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      setVisibleItems(
        getAllItems.progressData.filter((data) => data.id <= tempCount)
      );
    }
  };
  return (
    <>
      <p className="mb-0">{getAllItems?.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {visibleItems?.map((progress) => (
            <div className="col-md-6 mt-50" key={progress?.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
          <div className={"load-more-skill"}>
            {noMorePost ? null : (
              <div className="load-more text-center mt-4">
                <a
                  href="#!"
                  className="btn btn-default"
                  onClick={(e) => handleLoadmore(e)}
                >
                  <i className="fas fa-circle-notch"></i> Load more
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
