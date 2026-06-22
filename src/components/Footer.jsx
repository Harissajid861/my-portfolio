import React from "react";
import { FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa";

// 1. Accept the darkMode prop
const Footer = ({ darkMode }) => {
  return (
    // 2. Updated background and border for dark mode
    <footer className={`py-12 border-t transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-zinc-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          
          {/* Name */}
          <div className="text-center md:text-left">
            <span className={`uppercase text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-zinc-800'
            }`}>
              Haris-Sajid
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 hover:scale-110 ${
                darkMode ? 'text-teal-500 hover:text-teal-400' : 'text-teal-800 hover:text-teal-900'
              }`}
            >
              <FaWhatsapp size={40} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Harissajid861"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 hover:scale-110 ${
                darkMode ? 'text-teal-500 hover:text-teal-400' : 'text-teal-800 hover:text-teal-900'
              }`}
            >
              <FaGithub size={40} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1HzpKGmvBb/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition duration-300 hover:scale-110 ${
                darkMode ? 'text-teal-500 hover:text-teal-400' : 'text-teal-800 hover:text-teal-900'
              }`}
            >
              <FaFacebook size={40} />
            </a>
          </div>

          {/* Copyright */}
          <div className={`text-center md:text-right text-sm ${
            darkMode ? 'text-gray-400' : 'text-zinc-900'
          }`}>
            © {new Date().getFullYear()} Haris Sajid. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;