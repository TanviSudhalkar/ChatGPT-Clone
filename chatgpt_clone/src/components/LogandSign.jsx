import React from 'react';
const LogandSign = ({ hideSignupOnMobile = false }) => {
    return (
        <div className="space-x-1 inline-flex">
            <button href="#" className="text-black w-30 p-2 bg-white rounded-full focus:outline-none 
            text-sm cursor-pointer "> 
                Log in                   
            </button>
            {/* Signup button - visibility controlled by prop */}
            <button href="#" className={`border-2 p-2 border-white rounded-full text-sm cursor-pointer
            hover:bg-white/40 ${ hideSignupOnMobile ? 'hidden md:block' : 'block'}`}>
                Sign up for free              
            </button>
        </div>
    );
};
export default LogandSign;