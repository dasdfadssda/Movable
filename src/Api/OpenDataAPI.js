import axios from "axios";

async function searchKeyword(keyword) {
  try {
    const encodedKeyword = encodeURIComponent(keyword);
    const apiUrl = `https://apis.data.go.kr/B551011/KorWithService1/searchKeyword1?MobileOS=ETC&MobileApp=asdf&keyword=${encodedKeyword}&_type=json&serviceKey=${process.env.REACT_APP_OPEN_DATA_KEY}`;

    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default searchKeyword;
