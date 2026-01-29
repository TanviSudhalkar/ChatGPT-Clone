import { useState } from "react";
import {
  Paperclip,
  Globe,
  BookOpen,
  Images,
  CircleArrowUp,
} from "lucide-react";

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    async function fetchReply(useMessage){
        const response = await fetch("http://localhost:3001/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: useMessage }),
        });

        const data = await response.json();
        return data.reply;
    }

    const handleSend = async () => {
        if(!input.trim()) return;

        setMessages((prev) => [
            ...prev, {role: "user", content: input }
        ]);

        const reply = await sendMessage(input);
        setMessages((prev) => [
            ...prev, {role: "assistant", content: reply }
        ]);

        setInput("");
    }

    return (
    <div className="flex flex-col justify-center h-48 grow">

      {/* Chat messages */}
      <div className="flex flex-col h-48 grow flex-1 border-transparent">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 ${
              msg.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <span className="flex flex-col flex-1 justify-center px-4">
              {msg.content}
            </span>
          </div>
        ))}
      

      {/* Input area (YOUR UI) */}
      <div className="max-w-3xl mx-auto w-full">
        <div className="max-w-3xl mx-auto">
        <h1 className='flex justify-center text-3xl'>What's on the agenda today?</h1>
          <div className="relative w-full">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={4}
              placeholder="Ask anything"
              className="bg-transparent border border-default-medium rounded-3xl h-28
                         resize-none block w-full px-4 py-3 pr-16
                         placeholder:text-body focus:ring-brand focus:border-brand"
            />

            <div className="absolute bottom-3 left-0 flex gap-2 w-full items-center">
              <button
                type="button"
                className="ml-4 flex items-center rounded-3xl border border-white
                           px-2 py-1.5 text-white hover:bg-white/30"
              >
                <Paperclip className="h-4 w-4" />
                <span className="pl-2 pr-2 text-sm">Attach</span>
              </button>

              <button
                type="button"
                className="flex items-center rounded-3xl border border-white
                           px-2 py-1.5 text-white hover:bg-white/30"
              >
                <Globe className="h-4 w-4" />
                <span className="pl-2 pr-2 text-sm">Search</span>
              </button>

              <button
                type="button"
                className="flex items-center rounded-3xl border border-white
                           px-2 py-1.5 text-white hover:bg-white/30"
              >
                <BookOpen className="h-4 w-4" />
                <span className="pl-2 pr-2 text-sm">Study</span>
              </button>

              <button
                type="button"
                className="flex items-center rounded-3xl border border-white
                           px-2 py-1.5 text-white hover:bg-white/30"
              >
                <Images className="h-4 w-4" />
                <span className="pl-2 pr-2 text-sm">Create image</span>
              </button>

              {/* Send button */}
              <button
                type="button"
                onClick={handleSend}
                className="ml-auto mr-4"
              >
                <CircleArrowUp className="w-8 h-8 text-white hover:opacity-80" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="text-center text-sm text-gray-400 h-4 justify-end mb-2">
        By messaging ChatGPT, an AI chatbot, you agree to our Terms and have read our Privacy Policy.
      </div>
    </div>
  );
}