import React from 'react'
import { skillsData } from '../assets/asstes'

const Skills = () => {
    return (
        <div id='skills' className='py-24 md:py-32'> {/* Increased vertical padding */}
            <div className='max-w-7xl mx-auto px-6'>
                {/* Added more bottom margin to heading section */}
                <div className='text-center mb-20'>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                        <span className='text-teal-600'>Technical</span>
                        Skills
                    </h2>
                    <p className='text-xl mb-6 max-w-3xl mx-auto'>Mastering the tools that power modern web experiences</p>
                </div>
                
                {/* Added top margin to grid */}
                <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mt-12'>
                    {
                        skillsData.map((skills, index)=> (
                            <div key={index} className='p-6 border bg-teal-50/10 border-teal-700 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 hover:border-r-4 hover:border-r-teal-800 hover:-translate-y-1 transition-all duration-300 '>
                                <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-4'>
                                    <skills.icon  className='w-8 h-8 text-teal-800'/>
                                </div>
                                <h3 className='text-xl mb-2 font-bold text-zinc-600'>{skills.title}</h3>
                                <p className='text-sm text-zinc-500'>
                                    {skills.technologies.join(', ')}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills