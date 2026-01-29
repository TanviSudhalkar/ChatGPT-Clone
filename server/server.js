const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// ✅ Chat endpoint
app.post("/chat", async (req, res) => {
    try{
      const { messages } = req.body;

      const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",   // Fast and cheap for development
            messages: req.body.messages,    // Passing the whole history gives the AI "memory"
      });
    
      res.json({ reply: "You said: " + messages });
    } 
    catch (error) {
    console.error("OPENAI ERROR:", error);
    res.status(500).json({ error: "Failed to fetch from OpenAI" });
    }
});

// ✅ Start server
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});