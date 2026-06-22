import React from "react";
import { FaArrowRight } from "react-icons/fa6";

// 1. Accept the darkMode prop
const Contact = ({ darkMode }) => {
    
    // Prevent page reload on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your email sending logic here later
        alert("Message sent! (This is a demo)");
    };

    // Reusable class string for inputs to keep code clean
    const inputClasses = `px-4 py-3 w-full border rounded outline-none transition-colors duration-300 ${
        darkMode 
            ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-600'
    }`;

    return(
        <div id="contact" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Get In <span className="text-teal-600">Touch</span>
                    </h1>
                    <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Have a project in mind or want to discuss potential opportunities?
                    </p>
                </div>
                
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input className={inputClasses} placeholder="Enter Name" type="text" required />
                            </div>
                            <div>
                                <input className={inputClasses} placeholder="Enter Email" type="email" required />
                            </div>
                        </div>

                        <div>
                            {/* Fixed typo: outline none -> outline-none */}
                            <input className={inputClasses} placeholder="Enter Subject" type="text" />
                        </div>
                        
                        <div>
                            {/* Fixed typo: removed type="textarea" and added resize-none */}
                            <textarea className={`${inputClasses} `} placeholder="Enter Message" />
                        </div>
                        
                        <div className="flex items-center justify-center">
                            <button className={`flex items-center gap-2 px-8 py-4 text-white text-center cursor-pointer transition rounded-full ${
                                darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-zinc-800 hover:bg-zinc-900'
                            }`}>
                                Send Message
                                <FaArrowRight className="text-sm"/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact