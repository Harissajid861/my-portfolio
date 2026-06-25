import React, { useState, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes'

const Hero = ({ darkMode }) => {
    
    // State for the animated text
    const fullText = "I craft immersive web experience at the intersection of design and technology.";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Smooth typing animation effect (character by character)
    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + fullText[currentIndex]);
                setCurrentIndex(currentIndex + 1);
            }, 80); // Speed: 80ms per character (smooth and slow)
            
            return () => clearTimeout(timer);
        }
    }, [currentIndex, fullText]);

    // Function to scroll to Work section
    const scrollToWork = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to scroll to Contact section
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return(
        <div id='home' className='min-h-screen flex items-center pt-16 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-6 py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    <div className='text-center lg:text-left'>
                        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
                            <span className={darkMode ? 'text-zinc-400' : 'text-zinc-700'}>React Developer</span>
                            <br />
                            <span className={darkMode ? 'text-cyan-500' : 'text-cyan-700'}>Javascript</span>
                        </h1>
                        
                        {/* Animated Paragraph with Cursor */}
                        <p className={`text-xl mb-6 transition-colors duration-300 min-h-[60px] ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-900'
                        }`}>
                            {displayedText}
                            {currentIndex < fullText.length && (
                                <span className='inline-block w-0.5 h-5 bg-teal-600 ml-1 animate-pulse'></span>
                            )}
                        </p>
                        
                        <div className='flex flex-col md:flex-row items-center gap-4 justify-center lg:justify-start'>
                            <button 
                                onClick={scrollToWork}
                                className={`flex gap-2 items-center px-10 py-4 rounded-full cursor-pointer transition-all duration-300 ${
                                    darkMode 
                                        ? 'bg-white text-black hover:bg-zinc-200' 
                                        : 'bg-black text-slate-200 hover:text-white'
                                }`}
                            >
                                View My Work
                                <FaArrowRight/>
                            </button>
                            
                            <button 
                                onClick={scrollToContact}
                                className={`flex items-center gap-2 border rounded-full px-10 py-4 transition-all duration-300 cursor-pointer ${
                                    darkMode 
                                        ? 'border-zinc-500 text-zinc-300 hover:border-white hover:text-white' 
                                        : 'border-slate-400 text-zinc-900 hover:border-slate-800'
                                }`}
                            >
                                Contact Me
                                <FaArrowRight/>
                            </button>
                        </div>
                    </div>

                    {/* image section right side */}
                    <div className='flex justify-center'>
                        <div className='relative w-72 h-72 sm:w-80 sm:h-80 floating'>
                            <div className={`absolute inset-0 rounded-2xl overflow-hidden border-4 transition-colors duration-300 ${
                                darkMode ? 'border-zinc-600/30' : 'border-slate-600/30'
                            } glow`}>
                                <img className='w-full h-full object-cover' src={assets.profileImg} alt='Profile' />
                            </div>
                            
                            <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-xl overflow-hidden p-3 transition-colors duration-300 ${
                                darkMode ? 'bg-cyan-900 border border-zinc-600/20' : 'bg-cyan-700 border border-slate-600/20'
                            }`}>
                                <div className='w-full h-full flex items-center justify-center'>
                                    <div className='text-center'>
                                        <div className='text-3xl font-bold text-white'>1+</div>
                                        <div className='text-sm text-white'>years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero