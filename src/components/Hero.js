import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GoArrowRight } from "react-icons/go";
import profileImage from '../assets/deployment.png'; 
import Social from './Social';

const Hero = () => {
  return (
    <section className=" text-gray-900 bg-gray-100 dark:bg-gray-900 dark:text-gray-100 pt-28 pb-20 md:pt-44 md:pb-28" id="Home">
      <div className="max-w-7xl mx-auto  px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Introduction */}
        <div className="flex flex-col items-start space-y-6 md:w-1/2">
        <h1 className="text-2xl md:text-2xl font-bold">
            Hi, I'm <span className="text-blue-400">Jishan Ahammed</span>
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold">
            Full-Stack ASP.NET Developer
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Experienced Software Engineer specializing in <span className="text-blue-400">Web Application </span>,{' '}
            <span className="text-blue-400">REST APIs</span>,{' '}
            <span className="text-blue-400">React</span>, and{' '}
            <span className="text-blue-400">Next.js</span>.
          </p>
          <p>
            Over 5 years of expertise in web application development, database management, and ERP software. Proficient in <span className="text-blue-400">C#</span>, <span className="text-blue-400">ASP.NET MVC</span>, <span className="text-blue-400">ASP.NET Core</span>, <span className="text-blue-400">Web API</span>, <span className="text-blue-400">MSSQL</span>, <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Next.js ,Tailwind CSS</span> and <span className="text-blue-400">Redux Toolkit</span>.
          </p>
          <div className="flex space-x-10 mt-6">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-500 text-white py-2 px-4 rounded-lg shadow"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className=" flex items-center text-blue-500 font-bold"
            >
              View My Work <GoArrowRight className='ml-3'/>
            </a>
          </div>
     
        </div>

        {/* Right Side: Profile Image */}
        <div className="mt-12 md:mt-0 flex justify-center">
          <img
            src={profileImage}
            alt="Full-Stack Developer"
            className="w-full max-w-xs md:max-w-full "
          />
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
