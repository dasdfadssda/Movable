import axios from 'axios';

const getPlaceData = async (areaCode) => {
  try {
    const response = await axios.get(`https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1?numOfRows=15&MobileOS=ETC&MobileApp=asdf&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D&_type=json&areaCode=${areaCode}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getEveningData = async (areaCode, contentTypeId) => {
  try {
    const response = await axios.get(`https://apis.data.go.kr/B551011/KorWithService1/areaBasedList1?numOfRows=100&MobileOS=ETC&MobileApp=asdf&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D&_type=json&contentTypeId=${contentTypeId}&areaCode=${areaCode}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// const getDisableData = async (contentId) => {
//   try {
//     const response = await axios.get(`https://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?MobileOS=ETC&MobileApp=asdf&contentId=${contentId}&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

export const askOpenAI = async (selectedRoutes) => {
  const place = ["부산", "강원", "제주", "인천", "전주", "대전"];
  const Schedule = ["당일치기", "1박2일", "2박3일"];
  const disable = ["시각장애", "청각장애", "지체장애", "노약자"];
  const active = ["문화시설", "축제공연", "자연휴양", "레저스포츠"];
  const areaId = [6, 32, 39, 2, 37, 3]
  const contentTypeId = [14, 15, 12, 28];

  const placeData = await getPlaceData(areaId[selectedRoutes[0]-1]);
  console.log('읽은 데이터 :',placeData);
  // const disableData = await getDisableData(placeData.contentid); 
  const afternoonData = await getEveningData(areaId[selectedRoutes[0]-1], contentTypeId[selectedRoutes[3]-1]);

  const question = `${place[selectedRoutes[0]-1]}에서 ${Schedule[selectedRoutes[1]-1]}로 ${disable[selectedRoutes[2]-1]}가 있는 사람이 ${active[selectedRoutes[3]-1]}를 경험할 수 있는 여행 일정을 짜주세요. 일정은 아침 일정 - 점심 식사 - 저녁 일정 - 저녁 식사 - 숙소 순으로 clientid만을 list로 만들어서 짜주세요. 이 때, 저녁 일정 정보는 ${afternoonData}을 기반으로 짜줘. 또한 여행 정보는 다음과 같습니다: ${placeData}.`;

  try {
    console.log("서버 요청 start");
    console.log('예상 질문 :', question);
    const response = await axios.post('http://localhost:3001/ask', { question });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
