import React from 'react';
import profileImage from '../assets/heroImage.jpg'; 
import { Element } from "react-scroll";
const AboutMe = () => {
  const skills = [
    { name: 'Asp.Net', level: '80%' },
    { name: 'MSSQL', level: '70%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React,Next.js', level: '85%' },
    { name: 'HTML,CSS', level: '90%' },
  ];

  const education = [
    { id: 1, date: '2010', title: 'Secondary School Certificate' },
    { id: 2, date: '2010 - 2012', title: 'Higher Secondary Certificate' },
    { id: 3, date: '2013 - 2018', title: 'BSC in computer science and engineering' },
    { id: 3, date: '2018 - 2019', title: 'Software development training' },
  ];

  const experience = [
    { id: 1, date: '01 February 2024 -Continue….', company: 'MF Consult·' },
    { id: 2, date: '01 February 2022 – 31 January 2024', company: 'Krishibid Group.' },
    { id: 3, date: '01 August 2021 – 31 January 2022', company: 'Bluebay IT Limited.' },
    { id: 4, date: 'January 2019 – July 2021', company: 'Minisoft Park.' }
  ];

  return (
    <Element name="about">
    <section className="about-me pt-28  dark:bg-gray-900 dark:text-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-left mb-16 section-title">
          <span className="text-lg ">About <span className='text-blue-800'> Me</span></span>
          <h2 className="text-3xl font-bold mt-4">
            Described Briefly My Professional Background <br />
            Skills and Accomplishments
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* About Image */}
          <div className=" relative ">
            <img src={profileImage} alt="about" className="w-full rounded-lg border" />
            <a
              href="/Md.Jishan_Ahammed_Resume.pdf"
               download="Md.Jishan_Ahammed_Resume.pdf"
              className="absolute left-[2px] md:left-[-26px] top-[-10px] w-20 h-20 flex items-center justify-center rounded-full bg-blue-500 text-white font-semibold text-lg border-2 border-blue-500"
            >
              Hire Me
            </a>
          </div>

          {/* About Content */}
          <div className="">
            <p className="text-lg font-semibold">
            Full-Stack ASP.NET Developer
            Experienced Software Engineer specializing in Web Application , REST APIs, jQuery, Ajax, React, and Next.js.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-400">
            Experienced Software Engineer with over 5+ years of expertise in web application development,
             database management, testing, server configuration, and ERP software. Proficient in C#, ASP.NET MVC,
              ASP.NET Core, Web API, MSSQL Server, stored procedures, React.js, Next.js, Redux Toolkit. Skilled in utilizing RDLC,
               version control (Git), and project management tools (Trello, Jira). Known for problem-solving, meticulous attention to detail,
                and delivering high-quality solutions.
             A collaborative team player who consistently meets project deadlines and ensures client satisfaction.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Skills</h4>
            {skills.map((skill, index) => (
              <div key={index} className="mb-2">
                <h5 className="text-md font-medium">{skill.name}</h5>
                <div className="w-full bg-gray-300 rounded h-2 mt-2">
                  <div
                    className="bg-blue-500 h-2 rounded"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <span className="text-sm">{skill.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20">
          {/* Education */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Education</h4>
            {education.map((edu) => (
              <div key={edu.id} className="mb-6 flex items-center border-t border-b py-6">
                <span className="text-2xl bg-gray-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full mr-4">
                  {edu.id}
                </span>
                <div>
                  <span className="block text-sm text-gray-500">{edu.date}</span>
                  <h5 className="text-lg font-semibold">{edu.title}</h5>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-2xl font-semibold mb-6">Experience</h4>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-6 flex items-center border-t border-b py-6">
                <span className="text-2xl bg-gray-600 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full mr-4">
                  {exp.id}
                </span>
                <div>
                  <span className="block text-sm text-gray-500">{exp.date}</span>
                  <h5 className="text-lg font-semibold">{exp.company}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default AboutMe;
