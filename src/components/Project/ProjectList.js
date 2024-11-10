import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
    {
      title: 'Clienty System',
      description:
        'Worked on a project for a European-based software company, developing a subscription-based software solution designed to manage accounting clients and tasks efficiently.',
      technologies: 'ASP.NET, React.js, Next.js, Redux Toolkit, Thunk, MS SQL',
      liveSite: 'https://clienty.dk/',
    },
    {
      title: 'Plan365',
      description:
        'Developed Plan365, an all-in-one software solution designed to manage employees in one place, integrating employee management, HR, payroll, and task management solutions.',
      technologies: 'ASP.NET, React.js, Next.js, Redux Toolkit, Thunk, MS SQL',
      liveSite: 'https://plan365.dk/',
    },
    {
      title: 'Uapp - Education Consultancy Management System',
      description:
        'Uapp is a comprehensive management system for Education Consultancy firms to manage students, applications, consultants, and financial transactions. It includes modules for Student, Programs, Applications, Consultants, and Accounts.',
      technologies: 'ASP.NET Core, MSSQL, React.js',
      liveSite: 'https://uapp.uk/#/',
    },
    {
      title: 'Krishibid Group ERP System',
      description:
        'Developed and maintained an ERP system for all the sister concerns of Krishibid Group, covering modules like HRMS, Sales, Booking, Scheduling, Payroll, Procurement, Inventory, Stock, and Packaging. The project involved designing, testing, and deploying solutions to streamline business operations.',
      technologies: 'ASP.NET MVC5, RDLC, MSSQL, jQuery',
      liveSite: 'https://www.krishibidgroup.com/',
    },
  ];

const ProjectList = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" subtitle="My Work" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
