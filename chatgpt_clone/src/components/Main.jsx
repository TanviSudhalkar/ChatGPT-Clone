import React from 'react' 
import { Paperclip } from 'lucide-react'; 
import { Globe } from 'lucide-react'; 
import { BookOpen } from 'lucide-react'; 
import { Images } from 'lucide-react'; 
import {CircleArrowUp} from 'lucide-react'; 
import {useState} from 'react';
 
const Main = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessages = { role: "user", content: input };

  const updatedMessages = [...messages, userMessages];
  setMessages([...messages, userMessages]);
  setInput("");
  setLoading(true);

  try {
    const res = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //body: JSON.stringify({ messages: updatedMessages }),
      body: JSON.stringify({ messages: updatedMessages }),
    });
    
    const data = await res.json();

    //if (!res.ok) throw new Error("Server error");
    
    console.log("SERVER RESPONSE:", data);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: data.reply },
    ]);
  } catch (error) {
    console.error("FETCH ERROR:", error);
  } finally {
    setLoading(false);
  }
};

  return ( 
  <div className='relative flex flex-col h-dvh w-full bg-black overflow-hidden'> 
    
    {/* 1. MAIN CONTENT AREA */}
    {/* 'justify-end' for mobile (bottom) | 'md:justify-center' for desktop (center) */}
    <div className='flex-1 flex flex-col justify-end md:justify-center min-h-0 overflow-y-auto px-4 pb-20 md:pb-0'> 
      
      <div className='max-w-3xl mx-auto w-full md:-mt-20'> 
        
        {/* HEADER TEXT */}
        {messages.length === 0 && (
          <h1 className='flex justify-center text-3xl py-10 text-white text-center'>
            <span className="md:hidden">What can I help with?</span>
            <span className="hidden md:inline">What's on the agenda today?</span>
          </h1>
        )}

        {/* CHAT MESSAGES (If any exist) */}
        {messages.length > 0 && (
          <div className='flex flex-col w-full mt-6 mb-4'>
            {messages.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.role === "user" ? "text-right" : "text-left"}`}>
                <div className={`inline-block px-4 py-2 rounded-lg ${msg.role === "user" ? "bg-blue-600" : "bg-gray-800"} text-white`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. THE FORM SECTION */}
        {/* Stays inside the flexible container so it follows the 'justify' logic */}
        <form className='flex flex-col mb-4'> 
          <div className='relative w-full group'> 
            <textarea 
              id="main-input" 
              className='bg-transparent h-28 resize-none block w-full px-4 py-3 rounded-3xl border-2 border-zinc-500 outline-none focus:border-zinc-300 text-white placeholder:text-gray-500' 
              placeholder='Ask anything' 
              rows={4} 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
            /> 
            
            <div className='absolute flex bottom-3 gap-2 w-full px-2 overflow-x-auto no-scrollbar'>
              <button type='button' className="flex-shrink-0 flex items-center rounded-3xl ml-2 border border-white px-3 py-1.5 text-white hover:bg-white/10"> 
                <Paperclip className='h-4 w-4'/> 
                <span className='hidden md:inline pl-2 text-sm'>Attach</span> 
              </button> 
              <button type='button' className="flex-shrink-0 flex items-center rounded-3xl border border-white px-3 py-1.5 text-white hover:bg-white/10"> 
                <Globe className='h-4 w-4'/> 
                <span className='hidden md:inline pl-2 text-sm'>Search</span>
              </button>
              <button type='button' className="flex-shrink-0 flex items-center rounded-3xl border border-white px-3 py-1.5 text-white hover:bg-white/10"> 
                <BookOpen className='h-4 w-4'/> 
                <span className='hidden md:inline pl-2 text-sm'>Study</span>
              </button>
              <button type='button' className="flex-shrink-0 flex items-center rounded-3xl border border-white px-3 py-1.5 text-white hover:bg-white/10"> 
                <Images className='h-4 w-4'/> 
                <span className='hidden md:inline pl-2 text-sm'>Create image</span>
              </button>
              <button type='button' onClick={handleSend} className="ml-auto mr-4 self-center">
                <CircleArrowUp className='w-8 h-8 text-white hover:opacity-70 transition-opacity'/> 
              </button> 
            </div> 
          </div> 
        </form>
      </div>
    </div>

    {/* 3. THE FOOTER */}
    <div className='absolute bottom-0 left-0 w-full bg-black z-10 border-t border-white/5'>
      <div className='text-center text-[10px] sm:text-xs text-gray-500 py-3 px-6'>
        By messaging ChatGPT, an AI chatbot, you agree to our Terms and have read our Privacy Policy. 
        See Cookie Preferences. 
      </div>
    </div> 
    
  </div> 
);
}

export default Main
