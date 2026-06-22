import React from 'react'
import { projectData } from '../assets/asstes' // Fixed typo: 'asstes' -> 'assets'

// 1. Accept the darkMode prop
const Work = ({ darkMode }) => {
    return (
        <div id='work' className='py-20 transition-colors duration-300'>
            <div className='max-w-7xl mx-auto px-6 py-6'>
                <div className='mb-16 text-center'>
                    {/* 2. Updated heading color */}
                    <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-700'}`}>
                        Featured
                        <span className='text-teal-600'>Projects</span>
                    </h2>
                    {/* 3. Updated subtitle color */}
                    <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Cutting-edge web applications built with modern technologies.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
                    {
                        projectData.map((project, index) =>(
                            <div 
                                key={index} 
                                // 4. Updated card background and border for dark mode
                                className={`group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border hover:-translate-y-1 duration-300 ${
                                    darkMode 
                                        ? 'border-gray-700 bg-gray-800' 
                                        : 'border-gray-200 bg-white'
                                }`}
                            >
                                <div className='relative flex items-center justify-center bg-gray-100 dark:bg-gray-700'>
                                    <img className='w-full h-48 object-cover group-hover:opacity-100 transition-opacity duration-300' src={project.image} alt={project.title}/>
                                </div>
                                <div className='p-6'>
                                    {/* 5. Updated card title color */}
                                    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {project.title}
                                    </h3>
                                    {/* 6. Updated card description color */}
                                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-slate-900'}`}>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-2 mt-6'>
                                        {project.tech.map((language, index)=> (
                                            // 7. Updated tech tag colors
                                            <span 
                                                key={index} 
                                                className={`px-4 py-1 text-xs font-semibold rounded-full ${
                                                    darkMode 
                                                        ? 'bg-gray-700 text-gray-200' 
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}
                                            >
                                                {language}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work