import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faJs,
  faMicrosoft,
  faNodeJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faAtom } from "@fortawesome/free-solid-svg-icons";

const technologies = [
  { name: "ASP.NET", icon: faMicrosoft },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "jQuery", icon: faJs },
  { name: "Ajax", icon: faAtom },
  { name: "MSSQL", icon: faDatabase },
  { name: "React.js", icon: faReact },
  { name: "Next.js", icon: faReact },
  { name: "Redux Toolkit", icon: faReact },
  { name: "Tailwind CSS", icon: faSass },
];

const Technologies = () => {
  return (
    <div className="pt-20 pb-28 bg-gray-50 dark:bg-gray-900 dark:text-gray-50">
        <div className="container max-w-7xl mx-auto px-4"> 
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-gray-200 text-gray-800">
        Technologies  Use
      </h2>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg shadow-md dark:bg-gray-800 dark:text-gray-200 bg-white"
          >
            <FontAwesomeIcon icon={tech.icon} className="text-4xl mb-3 text-blue-500" />
            <span className="text-lg font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Technologies;
