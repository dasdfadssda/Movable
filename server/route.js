const axios = require('axios');
const { OpenAIAPIKey, OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY, // OpenAI API Key
});

// 무장애 여행 경로 3개를 가져오는 함수
async function getAccessibleTravelRoutes() {
  try {
    // 첫 번째 API로부터 데이터 가져오기
    const response = await axios.get(
      'https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1',
      {
        params: {
          numOfRows: 20,
          MobileOS: 'ETC',
          MobileApp: 'asdf',
          serviceKey: 'jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3+iJXkviw+B8J1yRS+fNP/H7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA==', // Replace with your service key
          _type: 'json',
          areaCode: 38,
        },
      }
    );

    // 첫 번째 API로부터 받아온 데이터 처리
    const clientIdList = response.data.response.body.items.item.map((item) => item.contentid);

    // 무장애 여행 경로 상세정보를 저장할 배열
    const travelRoutes = [];
    for (let i = 0; i < clientIdList.length; i++) {
      const detailResponse = await axios.get(
        `https://apis.data.go.kr/B551011/KorWithService1/detailWithTour1`,
        {
          params: {
            MobileOS: 'ETC',
            MobileApp: 'asdf',
            contentId: clientIdList[i],
            _type: 'json',
            serviceKey: 'jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3+iJXkviw+B8J1yRS+fNP/H7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA==' ,// Replace with your service key
          },
        }
      );

      // 두 번째 API로부터 받아온 데이터 처리
      const detailData = detailResponse.data.response.body.items.item;
      const route = {
        clientId: clientIdList[i],
        details: detailData,
      };
      travelRoutes.push(route);
    }

    // OpenAI에 질문을 제공하여 여행지 3개 추천받기
    const descriptions = travelRoutes.map((route) => {
      const descriptions = route.details.map((detail) => detail.overview);
      console.log("사용한 데이터 :" + descriptions)
      return descriptions.join(''); // 각 여행지의 설명 텍스트를 결합하여 배열 생성
    });

    // OpenAI에 전달할 데이터 형식 설정 (질문에 "여행지 3개를 추천해줘!" 추가)
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: descriptions.map((description) => ({ role: 'user', content: `${description}를 기반으로 여행지 3개를 추천해줘!`})),
      max_tokens: 50, // 생성되는 답변의 최대 토큰 수
      n: 3, // 원하는 여행지 개수
      stop: ['여행지1:', '여행지2:', '여행지3:'], // 여행지 추천 결과를 구분하기 위한 기준
    });

    const suggestedDestinations = chatCompletion.choices.map((choice) => choice.message.content);
    console.log(suggestedDestinations); // 여행지 추천 결과 출력

    return suggestedDestinations;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// 무장애 여행 경로 가져오기
getAccessibleTravelRoutes();
