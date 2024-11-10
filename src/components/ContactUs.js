import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-50 py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Phone Number */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Give us a call</h3>
              <p className="text-md">+8801840019826</p>
            </div>
          </div>

          {/* Email Address */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Email us</h3>
              <p className="text-md">contact@domain.com</p>
            </div>
          </div>

          {/* Physical Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Visit us</h3>
              <p className="text-md">
                121 King Street, Melbourne<br />
                Victoria 3000, Australia
              </p>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="flex items-center space-x-4">
            <FaWhatsapp className="text-green-500" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Chat on WhatsApp</h3>
              <a
                href="https://wa.me/61383766284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-md hover:text-green-400"
              >
               +8801840019826
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
