import React from 'react';
import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';
import { Element } from "react-scroll";
const projects = [
  {
    title: 'Clienty System',
    description:
"Developed a subscription-based software solution for a European company to streamline accounting client and task management. Implemented secure payment gateways and ensured compliance with CVR integration. Utilized ASP.NET microservices, React.js, Next.js, Redux Toolkit, Thunk, and MS SQL to build a scalable system that enhances user experience and optimizes accounting workflows.",
    technologies: 'ASP.NET, React.js, Next.js, Redux Toolkit, MS SQL',
    liveSite: 'https://clienty.dk/',
  },
  {
    title: 'Plan365',
    description:
     "Developed Plan365 for a European software company—an all-in-one solution for employee management, HR, payroll, and task workflows. Integrated Google Maps for task management and ensured compliance with CVR. Leveraged ASP.NET microservices, React.js, Next.js, Redux Toolkit, Thunk, and MS SQL to create a scalable, efficient system that streamlines operations and enhances user experience.",
    technologies: 'ASP.NET, React.js, Next.js, Redux Toolkit, MS SQL',
    liveSite: 'https://plan365.dk/',
  },
  {
    title: 'Taleco',
    description:
      'Taleco is a dynamic web portal built with ASP.NET and Next.js, leveraging server-side rendering (SSR) for optimal SEO. It focuses on budget preparation and real-time price calculations, offering seamless updates based on user inputs. The platform is fully optimized for search engines, ensuring high discoverability and a responsive, user-friendly experience.',
    technologies: 'ASP.NET, React.js, Next.js, Tailwind CSS, MS SQL',
    liveSite: 'https://www.taleco.dk/',
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
  {
    title: 'Bill Collection Management System',
    description:
      'Developed a system for managing bill collection and sales for GPS tracking devices. It includes features like monthly bill generation, bill collection, customer management, SMS notifications, and a store management system.',
    technologies: 'ASP.NET Core, MSSQL, jQuery, Ajax',
    liveSite: 'http://trackingbdgps.net/',
  },
  {
    title: 'Integrated Seed Software (ISS) Lite',
    description:
      'ISS Lite is a comprehensive software solution for managing inventory, sales, suppliers, and payments. It includes modules for customer collection, purchase and return management, sales and stock management, and MIS reports.',
    technologies: 'ASP.NET Core, HTML, CSS, jQuery, Ajax, MSSQL',
    liveSite: 'http://103.132.94.84:133/',
  },
  {
    title: 'Digital Pharmacy Management System',
    description:
     "Developed a multi-user Pharmacy Management System for medicine purchase, inventory, and sales tracking, with modules for supplier, customer, and payment management. Implemented due payment tracking, expiry management, and advanced reporting with server-side pagination, filters, and search functionality.",
    technologies: 'ASP.NET Core, MSSQL, React.js',
    liveSite: 'https://digitalpharmacy.xyz/',
  },
  {
    title: 'E-Dormitory Management System',
    description:
      'The E-Dormitory Management System for LACT streamlines dormitory operations, allowing users to book rooms, order snacks, and reserve equipment efficiently. Built with ASP.NET Core, it offers seamless admin control over bookings, orders, and analytics. The system is scalable, secure, and accessible 24/7, reducing manual tasks and ensuring data privacy.',
    technologies: 'ASP.NET Core, HTML, CSS, jQuery, Ajax, MSSQL',
    liveSite: 'https://edrom.minisoftpark.com/',
  }
];

const ProjectList = () => {
  return (
    <Element name="projects">
    <section className="pt-20 pb-32 bg-gray-100 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-6">
        <SectionTitle title="Showcase Your Talent with our Latest Works" subtitle="My Projects" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
    </Element>
  );
};

export default ProjectList;
