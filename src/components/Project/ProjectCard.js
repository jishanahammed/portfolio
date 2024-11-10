import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        <strong>Description:</strong> {project.description}
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        <strong>Technologies:</strong> {project.technologies}
      </p>
      <a
        href={project.liveSite}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Live Site: {project.liveSite}
      </a>
    </div>
  );
};

export default ProjectCard;
