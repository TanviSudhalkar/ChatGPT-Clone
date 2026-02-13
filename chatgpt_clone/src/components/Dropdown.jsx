import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import LogandSign from "./LogandSign";
import useClickOutside from './useClickOutside';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, () =>setIsOpen(false));

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="relative inline-block text-left z-50" ref={ref}>
            <div>
                <button onClick={()=> setIsOpen(prev => !prev)} className="inline-flex justify-center w-full rounded-full 
                px-2 py-2 
                hover:bg-white/10 focus:outline-none text-md"> 
                ChatGPT 
                    <ChevronDown className='flex self-end' />                    
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/30 z-40" onClick={() => setIsOpen(false)}/>
            )}
            
             {/* Dropdown */}
            {isOpen && (
                <div className="origin-top-right absolute z-50 left-0 mt-2 w-[320px] max-w-[90vw] rounded-2xl shadow-lg 
                focus:outline-none bg-neutral-900" role="menu">
                    <div className="py-1" role="none">
                        <div className="w-full bg-neutral-800">
                            <img className="h-24 w-full object-cover rounded-t-xl" alt="a gradient background"
                            src="/src/assets/bkimage.svg"/>
                        </div>
                        <div className="px-2 py-2" role="menuitem">
                            <h3 className="text-xl">Try advanced features for free</h3>
                            <p className="text-sm text-gray-400 py-2"> Get smarter responses, upload files, create images, 
                                and more by logging in.
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