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
  <div className='flex flex-col justify-center min-h-screen bg-cover bg-center bg-no-repeat'> 
    <div className='flex flex-col flex-1 border-transparent'> 
      <div className='flex flex-col flex-1 justify-center items-center px-4 min-h-0 overflow-y-auto'> 
        <div className='max-w-3xl mx-auto w-full '> 
          
          {messages.length === 0 && (
            <h1 className='flex justify-center text-3xl py-10'>
              {/* Shown on Mobile, hidden on Desktop (md and up) */}
              <span className="md:hidden">What can I help with?</span>
              
              {/* Hidden on Mobile, shown on Desktop (md and up) */}
              <span className="hidden md:inline">What's on the agenda today?</span>
            </h1>
          )}

          {/* CHAT MESSAGES */}
          {messages.length > 0 && (
            <div className='flex flex-col flex-1 max-w-3xl mx-auto w-full mt-6 mb-32 px-4 overflow-y-auto'>
              {messages.map((msg, index) => (
                <div key={index} className={`mb-4 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
                >
                  <div className={`inline-block px-4 py-2 rounded-lg ${
                    msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-800 text-white"
                  }`}
                  > 
                  {msg.content}
                  </div>
              </div>
            ))}
            </div>               
          )}

          <div className="w-full max-w-3xl mx-auto px-4 pb-2">
          <form action="" className='border-zinc-500 rounded-lg flex flex-col mb-4 overflow-x-auto'> 
            <div className='relative w-full'> 

            <textarea id="main-input" className='bg-transparent h-28 resize-none block w-full px-4 py-3 shadow-xs 
            rounded-3xl border-2 border-zinc-500 outline-none outline-0 ring-0 focus:ring-0 focus:outline-none 
            focus:border-zinc-300 placeholder:text-body' placeholder='Ask anything' rows={4} value={input} 
            onChange={(e) => setInput(e.target.value)}> 
            </textarea> 
            
              <div className='absolute flex bottom-3 gap-2 w-full'>
                <button type='button' className="flex items-center rounded-3xl ml-4 border border-white px-2 py-1.5 
                text-white hover:bg-white/30 focus:ring-2 focus:ring-brand focus:border-brand aria-label='Attach a 
                file'"> 
                  <Paperclip className='h-4 w-4'/> 
                  <span className='hidden md:inline pl-2 pr-2 text-sm'>Attach</span> 
                </button>                
                <button type='button' className="flex items-center rounded-3xl border border-white px-2 py-1.5 
                text-white hover:bg-white/30 focus:ring-2 focus:ring-brand focus:border-brand"> 
                  <Globe className='h-4 w-4'/> 
                  <span className='hidden md:inline pl-2 pr-2 text-sm'>Search</span>
                </button>                  
                <button type='button' className="flex items-center rounded-3xl border border-white px-2 py-1.5 
                text-white hover:bg-white/30 focus:ring-2 focus:ring-brand focus:border-brand"> 
                  <BookOpen className='h-4 w-4'/> 
                  <span className='hidden md:inline pl-2 pr-2 text-sm'>Study</span> 
                </button> 
                <button type='button' className="flex items-center rounded-3xl border border-white px-2 py-1.5 
                text-white  hover:bg-white/30 focus:ring-2 focus:ring-brand focus:border-brand"> 
                  <Images className='h-4 w-4'/> 
                  <span className='hidden md:inline pl-2 pr-2 text-sm'>Create image</span> 
                </button> 
                <button type='button' onClick={handleSend} className="ml-auto mr-4 self-center">
                  <CircleArrowUp className='w-8 h-8'/> 
                </button>         
              </div> 

            </div> 
          </form>
          </div>

        </div> 
      </div> 
    </div> 
    
    <div className='absolute bottom-0 left-0 w-full bg-black z-10 border-t border-white/5'>
      <div className='text-center text-sm text-gray-400 mb-2 flex-none'>
      By messaging ChatGPT, an AI chatbot, you agree to our Terms and have read our Privacy Policy. 
      See Cookie Preferences. 
      </div>
    </div> 
    
  </div> 
  );
};
export default Main
