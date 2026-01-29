import React from 'react'
import chatgptIcon from '../assets/chatgpt.png'
import Dropdown from './DropDown.jsx';
import LogandSign from './LogandSign.jsx';
import Help from './help.jsx';
import { ChevronDown } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';

const Header = () => {
  return (
    
    <header className='flex items-center text-2xl m-3 space-x-3'>
      <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">        
        <img src={chatgptIcon} alt="chatgpt-icon" width={25} height={25} className='hover:bg-white/50'/>
      </a>
      <Dropdown />
      <div className='flex items-center space-x-3 grow justify-end'>
        <LogandSign hideSignupOnMobile={true} />
        <Help />
      </div>
    </header>
    
  )
}

export default Header
