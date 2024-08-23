// api.js

export const sendQuestionToServer = async (question) => {
  try {
    const response = await fetch("http://api.movable.kro.kr/query", {
      // 여기에 실제 API 주소를 입력
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }), // question을 request body로 전송
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.answer; // 서버로부터의 응답에서 answer를 추출
  } catch (error) {
    console.error("API 요청에 실패했습니다:", error);
    return "답변에 실패하였습니다"; // 오류가 발생하면 기본 메시지 반환
  }
};
