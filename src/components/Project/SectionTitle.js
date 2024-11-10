import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <span className="text-xl text-blue-500">{subtitle}</span>
      <h2 className="text-4xl font-bold mt-2 text-gray-800 dark:text-gray-200">{title}</h2>
    </div>
  );
};

export default SectionTitle;
