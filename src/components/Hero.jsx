import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { assets } from '../assets/asstes' // Fixed typo: 'asstes' -> 'assets'

// 1. Accept the darkMode prop here
const Hero = ({ darkMode }) => {
    
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
                            {/* 2. Updated heading colors for dark mode */}
                            <span className={darkMode ? 'text-zinc-400' : 'text-zinc-700'}>React Developer</span>
                            <br />
                            <span className={darkMode ? 'text-cyan-500' : 'text-cyan-700'}>Javascript</span>
                        </h1>
                        
                        {/* 3. Fixed paragraph color (zinc-900 was too dark for dark mode) */}
                        <p className={`text-xl mb-6 transition-colors duration-300 ${
                            darkMode ? 'text-zinc-300' : 'text-zinc-900'
                        }`}>
                            I craft immersive web experience at the intersection of design and technology.
                        </p>
                        
                        <div className='flex flex-col md:flex-row items-center gap-4 justify-center lg:justify-start'>
                            {/* 4. Updated Primary Button - NOW WITH onClick */}
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
                            
                            {/* 5. Updated Secondary Button - NOW WITH onClick */}
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