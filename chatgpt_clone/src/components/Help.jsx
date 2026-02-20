import React, { useState, useRef } from 'react'
import { CircleQuestionMark } from "lucide-react";
import { MoveUpRight } from 'lucide-react';
import useClickOutside from './useClickOutside';

const Help = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useClickOutside(ref, () =>setIsOpen(false));
        
    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

  return (
    <div className="relative inline-block text-left" ref={ref}>
        <div>
            <button onClick={()=> setIsOpen(prev => !prev)} className="inline-flex justify-center w-full rounded-full px-2 py-2 
            hover:bg-white/10 focus:outline-none"> 
                <CircleQuestionMark className='flex self-end' />                    
            </button>
        </div>

        {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-[14rem] block rounded-2xl shadow-lg 
            focus:outline-none bg-neutral-900 justify-right" role="menu">
                <div className="py-1" role="none">
                    <div href="https://chatgpt.com/c/695eeabd-c6a0-832e-936d-c5d24d96cf12#pricing" type="button" 
                    className="flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 group" role="menuitem">                        
                        <span>See plans and pricing</span>
                        <MoveUpRight className='flex self-end w-4 h-4 opacity-0 mx-1 group-hover:opacity-100' />
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 group" role="menuitem"> 
                        Settings                        
                    </div>
                    <hr className='m-3'/>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 group" role="menuitem">  
                        Help center
                        <MoveUpRight className='flex self-end w-4 h-4 opacity-0 mx-1 group-hover:opacity-100' />
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 group" role="menuitem"> 
                        Release note
                        <MoveUpRight className='flex self-end w-4 h-4 opacity-0 mx-1 group-hover:opacity-100' />
                    </div>
                    <div className="flex items-center justify-between w-full px-4 py-2 text-sm cursor-pointer hover:bg-white/10 group" role="menuitem"> 
                        Terms and policies
                        <MoveUpRight className='flex self-end w-4 h-4 opacity-0 mx-1 group-hover:opacity-100' />
                    </div>
                </div>
            </div>
        )}
    </div>
    )
}

export default Help
