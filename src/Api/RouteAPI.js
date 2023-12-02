import axios from 'axios';

export const askOpenAI = async (selectedRoutes) => {
  const place = ["부산", "강원", "제주", "인천", "전주", "대전"];
  const Schedule = ["당일치기", "1박2일", "2박3일"];
  const disable = ["시각장애", "청각장애", "지체장애", "노약자"];
  const active = ["문화시설", "축제공연", "자연휴양", "레저스포츠"];

  const question = `${place[selectedRoutes[0]-1]}에서 ${Schedule[selectedRoutes[1]-1]}로 ${disable[selectedRoutes[2]-1]}가 있는 사람이 ${active[selectedRoutes[3]-1]}를 경험할 수 있는 여행 일정을 짜주세요.`;

  try {
    console.log("서버 요청 start");
    const response = await axios.post('http://localhost:3001/ask', { question });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

