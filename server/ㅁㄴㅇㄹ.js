const express = require("express");
const { OpenAI } = require("openai");
require("dotenv").config();
const cors = require("cors"); 

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); 

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.post("/ask", async (req, res) => {
  const { question } = req.body;

  try {
    let chatCompletion;
    let retryCount = 0;

    do {
      if (retryCount > 0) {
        await sleep(3);
      }

      chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: question },
        ],
      });

      const retryAfter =
        chatCompletion.headers && chatCompletion.headers["retry-after"];
      if (retryAfter) {
        await sleep(retryAfter * 1000);
      }

      retryCount++;
    } while (chatCompletion.headers && chatCompletion.headers["retry-after"]);

    const choices = chatCompletion.choices;
    const answer = choices?.[0]?.message?.content;

    res.json({ answer, chatCompletion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
