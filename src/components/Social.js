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

const Social = () => {
  return (
    <section className=" dark:bg-gray-900 text-gray-700 dark:text-gray-50 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className=" flex flex-wrap justify-center gap-8 ">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jishan-ahammed-64077a214/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 "
          >
            <div className="rounded-full bg-blue-600 p-3 hover:bg-blue-700 transition-colors">
              <FaLinkedin size={24} className="text-white" />
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/m1z5RNVrJfDJ9xpQ/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700"
          >
      <div className="rounded-full bg-blue-800 p-3 hover:bg-blue-900 transition-colors">
              <FaFacebook size={24} className="text-white" />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/jishanahammed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-800 dark:hover:text-gray-200"
          >
      <div className="rounded-full bg-gray-800 p-3 hover:bg-gray-900 transition-colors">
              <FaGithub size={24} className="text-white" />
            </div>
          </a>

          {/* Skype */}
          <a
            href="skype:live:yourSkypeID?chat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Skype"
            className="hover:text-blue-500"
          >
            <div className="rounded-full bg-blue-500 p-3 hover:bg-blue-600 transition-colors">
              <FaSkype size={24} className="text-white" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
