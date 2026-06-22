import React from 'react'
import { FaCode } from 'react-icons/fa' 
import { assets, profileData } from '../assets/asstes' 

const About = ({ darkMode }) => {
    return (
        <div id='about' className={`py-20 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
            <div className='max-w-7xl mx-auto px-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='order-2 lg:order-1'>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
                            darkMode ? 'text-white' : 'text-zinc-900'
                        }`}>
                            <span className='text-teal-600'>About</span>
                            <span>Me</span>
                        </h2>
                        <p className={`text-md mb-2 leading-8 ${
                            darkMode ? 'text-gray-300' : 'text-zinc-700'
                        }`}>
                            I'm a frontend developer with a passion for creating immersive digital experience. I've strong skills in frontend for building responsive web applications.
                        </p>
                        <p className={`text-md mb-2 leading-8 ${
                            darkMode ? 'text-gray-300' : 'text-zinc-700'
                        }`}>
                            My approach combines technical expertise with creative design thinking to build applications that are only functional but also visually stunning.
                        </p>
                        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-6'>
                            {
                                profileData.map((data, index)=> (
                                    <div key={index} className={`w-full h-52 sm:w-48 p-6 border rounded cursor-pointer transition duration-300 hover:-translate-y-1 ${
                                        darkMode 
                                            ? 'border-gray-600 hover:border-gray-400 hover:border-b-4 hover:border-r-4 hover:border-b-gray-800 hover:border-r-gray-800' 
                                            : 'border-zinc-400 hover:border-zinc-600 hover:border-b-4 hover:border-r-4 hover:border-b-zinc-800 hover:border-r-zinc-800'
                                    }`}>
                                            <FaCode className={`text-3xl mb-4 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}/>
                                            <h1 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{data.title}</h1>
                                            
                                            <p className={darkMode ? 'text-gray-300' : 'text-zinc-600'}>
                                                {data.technologies ? data.technologies.join(', ') : data.tech.join(', ')}
                                            </p> 
                                    </div>
                                ))
                            }
                        </div>
                        <a
                            href="/haris.pdf"
                            download
                            className="inline-block px-8 py-4 bg-teal-600 text-white rounded-full cursor-pointer transition duration-300 hover:bg-teal-700"
                        >
                            Download Resume
                        </a>
                    </div>
                    
                    {/* Image Section with Border */}
                    <div className='order-1 lg:order-2 flex justify-center'>
                        <div className='relative w-full max-w-md'>
                            {/* Added border here */}
                            <div className={`rounded-2xl overflow-hidden border-4 transition-colors duration-300 ${
                                darkMode ? 'border-gray-600' : 'border-zinc-300'
                            }`}>
                                <img 
                                    className='w-full h-full object-cover' 
                                    src={assets.profileImg} 
                                    alt='Profile'
                                />
                            </div>
                            {/* Optional: Add a decorative shadow/glow effect */}
                            <div className={`absolute -z-10 inset-0 rounded-2xl blur-xl opacity-50 ${
                                darkMode ? 'bg-teal-900' : 'bg-teal-200'
                            }`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About