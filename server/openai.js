const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/ask', async (req, res) => {
  const { question } = req.body;

  // OpenAI API 호출
  const openaiApiKey = '';
  const apiUrl = 'https://api.openai.com/v1/answers'; // OpenAI API 엔드포인트에 따라 변경 필요

  try {
    const response = await axios.post(apiUrl, {
      question,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    });

    const answer = response.data.answer;

    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
