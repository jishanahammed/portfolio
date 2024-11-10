import React from 'react';

const ProjectCard = ({ project }) => {
  return (
<div className="bg-white h-[500px] dark:bg-gray-800 p-6 border border-blue-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
  <h3 className="text-2xl font-bold text-blue-400 dark:text-gray-200 mb-4 text-center">{project.title}</h3>
  <p className="text-gray-600 dark:text-gray-300 mb-2">
    <strong>Description:</strong> {project.description}
  </p>
  <p className="text-gray-600 dark:text-gray-300 mb-2">
    <strong>Technologies:</strong> {project.technologies}
  </p>
  <div className="text-center mt-10 mb-8">
    <a
      href={project.liveSite}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-blue-400 text-white font-bold py-3 px-8 rounded-md border border-blue-400 transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-500 hover:border-blue-500"
    >
      Live Site
    </a>
  </div>
</div>

  );
};

export default ProjectCard;
