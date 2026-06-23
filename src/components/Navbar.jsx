import React, { useState, useEffect } from "react";
import { navMenu } from '../assets/asstes';
import { FaArrowRight, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const sections = navMenu.map(item => item.toLowerCase());
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => window.removeEventListener("scroll", handleScrollPosition);
  }, []);

  return (
    <div className={`fixed w-full py-4 z-50 backdrop-blur-3xl transition-colors duration-300 ${
      darkMode ? 'bg-gray-900/80' : 'bg-white/80'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-bold cursor-pointer transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-zinc-800'
          }`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span>Haris-</span>
            <span className="text-teal-600 font-orbitron">Sajid</span>
          </div>

          {/* Menu */}
          <div className={`hidden md:flex space-x-8 rounded-full px-10 py-4 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            {navMenu.map((item, index) => {
              const itemId = item.toLowerCase();
              const isActive = activeSection === itemId;

              return (
                <a
                  key={index}
                  href={`#${itemId}`}
                  onClick={(e) => handleScroll(e, itemId)}
                  className={`transition-colors duration-300 ${
                    isActive 
                      ? "text-teal-600 font-semibold" 
                      : darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-zinc-600 hover:text-teal-600'
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>

            {/* Resume Button - NOW FUNCTIONAL */}
            <a
              href="/haris.pdf"
              download="Haris_Sajid_Resume.pdf"
              className={`px-10 py-4 border rounded-full flex items-center gap-2 cursor-pointer transition-all duration-300 hover:translate-y-1 ${
                darkMode 
                  ? 'border-gray-600 text-gray-300 hover:text-white hover:border-gray-500' 
                  : 'border-zinc-800 text-slate-500 hover:text-slate-800 hover:border-zinc-900'
              }`}
            >
              Resume
              <FaArrowRight className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;