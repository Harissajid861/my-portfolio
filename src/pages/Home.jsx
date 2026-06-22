import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Skills from '../components/Skills';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  // 1. Theme State Management
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Save preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      
      {/* Pass theme props to Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* 2. Wrap each component in a section with matching ID for smooth scrolling */}
      <section id="home">
        <Hero darkMode={darkMode} />
      </section>

      <section id="work" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <Work darkMode={darkMode} />
      </section>

      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      <section id="about" className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-colors duration-300`}>
        <About darkMode={darkMode} />
      </section>

      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Home;