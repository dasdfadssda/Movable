import axios from "axios";

export const kakaoResponse = async (access_token) => {
  const response = await axios.post("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = response.data;
  console.log("읽은 데이터 :",data);


  return data;
};