import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaSkype
} from 'react-icons/fa';
import Social from './Social';
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <Element name="contact-us">
    <section className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-50 pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Phone Number */}
          <div className="flex items-start md:items-center space-x-4">
            <FaPhoneAlt className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Give us a call</h3>
              <p className="text-md">+8801840019826</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex items-start md:items-center space-x-4">
            <FaEnvelope className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Email us</h3>
              <p className="text-md">jishan.bd46@gmail.com</p>
            </div>
          </div>

          {/* Physical Address */}
          <div className="flex items-start md:items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Visit us</h3>
              <p className="text-md">
                Baish Bari Rd, West Kazipara <br />
                Mirpur, Dhaka 1216
              </p>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-start md:items-center space-x-4">
            <FaWhatsapp className="text-green-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
              <a
                href="https://wa.me/8801840019826"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md hover:text-green-400"
              >
                +8801840019826
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='pt-14'>
        <Social/>
        </div>
     
      </div>
    </section>
    </Element>
  );
};

export default Contact;
