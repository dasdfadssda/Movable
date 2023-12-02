import axios from 'axios';

const getPlaceData = async (areaCode) => {
  try {
    const response = await axios.get(`https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1?numOfRows=10&MobileOS=ETC&MobileApp=asdf&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D&_type=json&areaCode=${areaCode}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getDisableData = async (contentId) => {
  try {
    const response = await axios.get(`https://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?MobileOS=ETC&MobileApp=asdf&contentId=${contentId}&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const askOpenAI = async (selectedRoutes) => {
  const place = ["부산", "강원", "제주", "인천", "전주", "대전"];
  const Schedule = ["당일치기", "1박2일", "2박3일"];
  const disable = ["시각장애", "청각장애", "지체장애", "노약자"];
  const active = ["문화시설", "축제공연", "자연휴양", "레저스포츠"];
  const areaId = [6, 32, 39, 2, 37, 3]

  const placeData = await getPlaceData(areaId[selectedRoutes[0]-1]);
  const disableData = await getDisableData(placeData.contentid);

  const question = `${place[selectedRoutes[0]-1]}에서 ${Schedule[selectedRoutes[1]-1]}로 ${disable[selectedRoutes[2]-1]}가 있는 사람이 ${active[selectedRoutes[3]-1]}를 경험할 수 있는 여행 일정을 짜주세요. 이 때, 장소 정보는 다음과 같습니다: ${JSON.stringify(placeData)}. 또한 무장애 정보는 다음과 같습니다: ${disableData}.`;

  try {
    console.log("서버 요청 start");
    console.log('예상 질문 :', question);
    const response = await axios.post('http://localhost:3001/ask', { question });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
