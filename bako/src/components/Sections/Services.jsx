import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Copy Write",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-note",
  },
  {
    id: 6,
    name: "Support",
    content: "Lorem ipsum dolor sit amet consectetuer elit.",
    icon: "icon-bubbles",
  },
];
// const servicesData = [
//   {
//     id: 1,
//     name: "JavaScript",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-globe",
//   },
//   {
//     id: 2,
//     name: "PHP",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-chemistry",
//   },
//   {
//     id: 3,
//     name: "Python",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-directions",
//   },
//   {
//     id: 4,
//     name: "React",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-rocket",
//   },
//   {
//     id: 5,
//     name: "Vue.j",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-note",
//   },
//   {
//     id: 6,
//     name: "Node",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-bubbles",
//   },{
//     id: 7,
//     name: "Laravel",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-rocket",
//   },
//   {
//     id: 8,
//     name: "Django",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-note",
//   },
//   {
//     id: 9,
//     name: "AWS",
//     content: "Lorem ipsum dolor sit amet consectetuer elit.",
//     icon: "icon-bubbles",
//   },
// ];
function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
