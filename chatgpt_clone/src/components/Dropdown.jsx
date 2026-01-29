import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import LogandSign from "./LogandSign";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button onClick={toggleDropdown} className="inline-flex justify-center w-full rounded-full px-2 py-2 
                hover:bg-white/10 focus:outline-none text-md"> 
                ChatGPT
                    <ChevronDown className='flex self-end' />                    
                </button>
            </div>

            {isOpen && (
                <div className="origin-top-right absolute left-0 mt-2 w-96 rounded-2xl shadow-lg 
                focus:outline-none background-color" role="menu">
                    <div className="py-1" role="none">
                        <div className="rounded-t-lg">
                            <img className="h-30 w-full rounded-t-xl" alt="a gradient background"
                            src="/src/assets/bkimage.svg" 
                            />
                        </div>
                        <div className="block px-4 py-8 text-md" role="menuitem">
                            <h3>Try advanced features for free</h3>
                            <p className="text-sm py-2"> Get smarter responses, upload files, create images, and
                                more by logging in.
                            </p>
                            <div className='py-2'>
                                <LogandSign hideSignupOnMobile={false} />
                            </div>
                       
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;