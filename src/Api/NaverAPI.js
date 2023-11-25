import axios from "axios";

async function calculateDistance(startLatitude, startLongitude, endLatitude, endLongitude) {
  try {
    const response = await axios.post("/calculateDistance", {
      startLatitude,
      startLongitude,
      endLatitude,
      endLongitude,
    });

    const { distance, duration, data } = response.data;
    const result = `이동 거리: ${distance}m, 예상 소요 시간: ${convertMillisecondsToTime(duration)}, 택시비 : ${data.summary.taxiFare}원, 톨비 : ${data.summary.tollFare}원`;
    console.log("읽은 데이터 :", response.data);
    
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function convertMillisecondsToTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}시간 ${minutes}분`;
}

export default calculateDistance;
