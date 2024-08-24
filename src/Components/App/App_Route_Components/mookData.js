import OneDay1Img from "../../../Assets/Route/비룡폭포.png";
import OneDay2Img from "../../../Assets/Route/도솔식당.png";
import OneDay3Img from "../../../Assets/Route/비밀공간.png";
import OneDay4Img from "../../../Assets/Route/카누체험.png";
import OneDay5Img from "../../../Assets/Route/소바카게.png";
import OneDay6Img from "../../../Assets/Route/숙소.png";
import TwoDay1Img from "../../../Assets/Route/강원식물원.png";
import TwoDay2Img from "../../../Assets/Route/왕가수라청.png";
import TwoDay3Img from "../../../Assets/Route/갤러리오스.png";
import TwoDay4Img from "../../../Assets/Route/알펜시아 리조트.png";
import TwoDay5Img from "../../../Assets/Route/까치둥지.png";
import OneJeju1Img from "../../../Assets/Route/jejuairport.jpeg";
import OneJejuDay2Img from "../../../Assets/Route/ollenoodle.webp";
import OneJejuDay3Img from "../../../Assets/Route/Mongsangd.jpeg";
import OneJejuDay4Img from "../../../Assets/Route/awolsea.png";
import OneJejuDay5Img from "../../../Assets/Route/blackpig.jpeg";
import OneJejuDay6Img from "../../../Assets/Route/숙소.png";
import TwoJejuDay1Img from "../../../Assets/Route/jejumarket.jpeg";
import TwoJejuDay2Img from "../../../Assets/Route/osulluck.jpeg";
import TwoJejuDay3Img from "../../../Assets/Route/fishshop.jpeg";
import TwoJejuDay4Img from "../../../Assets/Route/jejushop.jpeg";

export const JejuPackage = [
    {
      id: 1,
      day: 1,
      Category: "공항",
      price : 20000,
      Title: "제주 국제공항",
      position: "공항",
      Image: OneJeju1Img,
      time: "0분",
      difficulty: "하",
      difficultynum: 1.00,
      Description : "제주 국제공항은 제주도의 관문으로, 전 세계 여행객들이 제주도를 방문하는 주요 관문입니다.\n현대적인 시설과 다양한 편의시설을 제공하며, 제주도를 여행하는 시작점이 됩니다.",
      Icons: ["휠체어 이용", "장애인 화장실", "보조견 동반", "오디오 가이드"],
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
    },
    {
      id: 2,
      day: 1,
      Category: "점심",
      Title: "올래 국수 본점",
      price : 10000,
      position: "한식",
      Image: OneJejuDay2Img,
      time: "10분",
      difficulty: "하",
      difficultynum: 2.00,
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
       Description : "올래 국수 본점은 제주도에서 가장 유명한 국수집 중 하나로, 정통 제주 국수를 맛볼 수 있는 곳입니다.\n신선한 재료와 깊은 맛으로 많은 관광객과 현지인들에게 사랑받고 있습니다."
    },
    {
      id: 3,
      day: 1,
      Category: "카페",
      Title: "몽상 드 애월",
      position: "카페",
      Image: OneJejuDay3Img,
      price : 8000,
      time: "15분",
      difficulty: "중",
      difficultynum: 3.00,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      Icons: ["휠체어 이용", "접근로 낮음", "보조견 동반", "오디오 가이드"],
      Description : "몽상 드 애월은 제주도의 아름다운 해안 경관을 감상할 수 있는 인기 있는 카페입니다.\n고급스러운 인테리어와 다양한 음료 메뉴로, 여유로운 시간을 보내기에 완벽한 장소입니다."
    },
    {
      id: 4,
      day: 1,
      Category: "드라이브 코스",
      Title: "애월 해안 도로",
      position: "드라이브 코스",
      Image: OneJejuDay4Img,
      time: "25분",
      price : 20000,
      difficulty: "하",
      difficultynum: 1.00,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "애월 해안 도로는 제주도의 해안을 따라 이어지는 아름다운 드라이브 코스로, 바다와 산을 함께 즐길 수 있는 멋진 경관을 자랑합니다.\n제주 여행 중 꼭 경험해볼 만한 코스입니다."
    },
    {
      id: 5,
      day: 1,
      Category: "저녁",
      Title: "흑돈가",
      price : 50000,
      position: "고기",
      Image: OneJejuDay5Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 3.77,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "흑돈가는 제주도의 특산물인 흑돼지를 맛볼 수 있는 고기 전문점입니다.\n고소하고 부드러운 흑돼지 고기는 제주도 여행의 특별한 미식 경험을 제공합니다."
    },
    {
      id: 6,
      day: 1,
      Category: "숙소",
      Title: "한림리조트",
      position: "숙소",
      price : 20000,
      Image: OneJejuDay6Img,
      time: "30분",
      difficulty: "중",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      difficultynum: 2.22,
      Icons: ["휠체어 이용", "접근로 낮음", "주차시설", "오디오 가이드"],
      Description : "한림리조트는 제주도에서 편안한 휴식을 취할 수 있는 숙소로, 아름다운 자연 경관과 다양한 편의시설을 제공합니다.\n제주 여행의 피로를 풀기에 완벽한 장소입니다."

    },
    {
      id: 8,
      day: 2,
      Category: "점심",
      price : 15000,
      Title: "서귀포 매일 올레 시장",
      position: "한식",
      Image: TwoJejuDay1Img,
      time: "10분",
      difficulty: "하",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      difficultynum: 3.79,
      Icons: ["휠체어 이용", "장애인 화장실", "접근로 낮음", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 9,
      day: 2,
      Category: "관광 명소",
      Title: "오설록 티 뮤지엄",
      position: "박물관",
      price : 20000,
      Image: TwoJejuDay2Img,
      time: "1분",
      difficulty: "중",
      difficultynum: 4.66,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드", "접근로 낮음"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 10,
      day: 2,
      Category: "저녁",
      price : 20000,
      Title: "제갈양 제주협재점",
      position: "한식",
      Image: TwoJejuDay3Img,
      time: "23분",
      difficulty: "중",
      difficultynum: 2.32,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 12,
      price : 20000,
      day: 2,
      Category: "관광 명소",
      Title: "선물고팡 공항점",
      position: "쇼핑몰",
      Image: TwoJejuDay4Img,
      time: "50분",
      difficulty: "중",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      difficultynum: 3.4,
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 3,
      day: 2,
      Category: "공항",
      price : 100000,
      Title: "제주 국제공항",
      position: "공항",
      Image: OneJeju1Img,
      time: "10분",
      difficulty: "하",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1838 }, { type: "외지인", color: "#F3A953", value: 0.1357 }, { type: "외국인", color: "#EB7D4B", value: 0.4582 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0715 }, { type: "외지인", color: "#F3A953", value: 0.0752 }, { type: "외국인", color: "#EB7D4B", value: 0.0000 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 0.3018 }, { type: "외지인", color: "#F3A953", value: 0.1924 }, { type: "외국인", color: "#EB7D4B", value: 1.0000 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 0.0000 }, { type: "외지인", color: "#F3A953", value: 0.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.0238 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ed685a", value: 0.1677 }, { type: "외지인", color: "#F3A953", value: 0.1663 }, { type: "외국인", color: "#EB7D4B", value: 0.0547 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 1.0000 }, { type: "외지인", color: "#F3A953", value: 1.0000 }, { type: "외국인", color: "#EB7D4B", value: 0.1370 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 0.7517 }, { type: "외지인", color: "#F3A953", value: 0.7009 }, { type: "외국인", color: "#EB7D4B", value: 0.5463 }] },
    ],
      difficultynum: 1.00,
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
  ];
  
  export  const TravelPackage = [
    {
      id: 1,
      day: 1,
      Category: "관광 명소",
      Title: "비룡폭포",
      position: "자연휴양",
      Image: OneDay1Img,
      time: "20분",
      difficulty: "중",
      difficultynum: 4.25,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 2,
      day: 1,
      Category: "점심",
      Title: "도솔마을",
      position: "한식",
      Image: OneDay2Img,
      time: "5분",
      difficulty: "하",
      difficultynum: 3.93,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 3,
      day: 1,
      Category: "카페",
      Title: "비밀공간",
      position: "카페",
      Image: OneDay3Img,
      time: "1분",
      difficulty: "중",
      difficultynum: 4.43,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 4,
      day: 1,
      Category: "액티비티",
      Title: "카누체험",
      position: "레저 스포츠",
      Image: OneDay4Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 4.03,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 5,
      day: 1,
      Category: "저녁",
      Title: "초막고갈두",
      position: "일식",
      Image: OneDay5Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 4.77,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 6,
      day: 1,
      Category: "숙소",
      Title: "라마다 태백호텔",
      position: "숙소",
      Image: OneDay6Img,
      time: "18분",
      difficulty: "중",
      difficultynum: 3.22,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 7,
      day: 2,
      Category: "관광 명소",
      Title: "강원식물원",
      position: "자연휴양",
      Image: TwoDay1Img,
      time: "15분",
      difficulty: "하",
      difficultynum: 4.8,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 8,
      day: 2,
      Category: "점심",
      Title: "왕가수라청",
      position: "한식",
      Image: TwoDay2Img,
      time: "10분",
      difficulty: "하",
      difficultynum: 3.79,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 9,
      day: 2,
      Category: "카페",
      Title: "갤러리오스",
      position: "카페",
      Image: TwoDay3Img,
      time: "1분",
      difficulty: "중",
      difficultynum: 4.66,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 10,
      day: 2,
      Category: "액티비티",
      Title: "알펜시아 리조트",
      position: "레저 스포츠",
      Image: TwoDay4Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 3.59,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 11,
      day: 2,
      Category: "저녁",
      Title: "까치둥지",
      position: "한식",
      Image: TwoDay5Img,
      time: "23분",
      difficulty: "중",
      difficultynum: 4.32,
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
  ];