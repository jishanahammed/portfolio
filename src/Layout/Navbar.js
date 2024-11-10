import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/jishanbd460.png";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Toggle dark mode
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  // Apply dark mode changes to the body and store theme in localStorage
  useEffect(() => {
    const bodyClass = isDarkMode ? 'dark' : 'light';
    document.body.className = bodyClass;
    localStorage.setItem('theme', bodyClass);
  }, [isDarkMode]);

  // Add scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed  z-10 transition-all duration-300 ${
        navBg ? "bg-white dark:bg-gray-700 shadow-md" : "bg-slate-50 dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="My Portfolio"
            className="h-10 w-auto cursor-pointer"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {["Home", "Services", "Project", "Pricing", "Testimonial", "Contact Us"].map((item, index) => (
            <li key={index} className="hover:text-blue-400 dark:text-gray-100 cursor-pointer">
              <Link
                to={item.toLowerCase().replace(/\s+/g, "-")}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Dark Mode & Fullscreen */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="p-2 text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="w-5 h-5" />
          </button>

          {/* Fullscreen Toggle */}
          <button onClick={toggleFullscreen} className="p-2 text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} className="w-5 h-5" />
          </button>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-50 dark:bg-gray-800 text-center py-4 space-y-4">
          {["Home", "Services", "Project", "Pricing", "Testimonial", "Contact Us"].map((item, index) => (
            <li key={index} className="hover:text-blue-400 cursor-pointer">
              <Link
                to={item.toLowerCase().replace(/\s+/g, "-")}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
