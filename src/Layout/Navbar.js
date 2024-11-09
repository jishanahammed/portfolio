import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/jishan8.png";
import { Link } from 'react-scroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-gray-900  w-full fixed z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
           {/* Logo */}
           <div className="flex items-center">
          <img src={logo} alt="My Portfolio" className="h-10 w-auto cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "Services", "Project", "Pricing", "Testimonial", "Contact Us"].map((item, index) => (
            <li key={index} className="hover:text-blue-400 cursor-pointer">
              <Link
              to={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
               >{item}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-50 text-center py-4 space-y-4">
          {["Home", "Services", "Project", "Pricing", "Testimonial", "Contact Us"].map((item, index) => (
            <li key={index} className="hover:text-blue-400 cursor-pointer">
              <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
