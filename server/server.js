const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY,
});

// 대기 시간을 적용하는 함수
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// OpenAI API 호출을 처리하는 라우트
app.post('/ask', async (req, res) => {
  const { question } = req.body;

  try {
    let chatCompletion;
    let retryCount = 0;
    
    // Retry-After 헤더가 오지 않을 때까지 반복
    do {
      if (retryCount > 0) {
        // 대기 시간 추가 (초 단위)
        await sleep(3);
      }

      chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: question }],
      });

      // Retry-After 헤더 확인
      const retryAfter = chatCompletion.headers && chatCompletion.headers['retry-after'];
      if (retryAfter) {
        // 대기 시간 추가 (초 단위)
        await sleep(retryAfter * 1000);
      }

      retryCount++;
    } while (chatCompletion.headers && chatCompletion.headers['retry-after']);

    // chatCompletion.data 확인
    const choices = chatCompletion.choices;
    const answer = choices?.[0]?.message?.content;

    res.json({ answer, chatCompletion });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Naver 지도 API 호출을 처리하는 라우트
app.post('/calculateDistance', async (req, res) => {
  const { startLatitude, startLongitude, endLatitude, endLongitude } = req.body;

  try {
    const directionResponse = await axios.get(
      `https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start=${startLongitude},${startLatitude}&goal=${endLongitude},${endLatitude}&option=trafast`,
      {
        headers: {
          'X-NCP-APIGW-API-KEY-ID': process.env.REACT_APP_NAVER_ID,
          'X-NCP-APIGW-API-KEY': '08pJN0ezMAvmyi7R6pbw6KoXN0yTDvcZPd59tM5u',
        },
      }
    );

    const distance = directionResponse.data.route.trafast[0].summary.distance;
    const duration = directionResponse.data.route.trafast[0].summary.duration;
    const data = directionResponse.data.route.trafast[0];

    res.json({ distance, duration, data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: '검색 실패' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
