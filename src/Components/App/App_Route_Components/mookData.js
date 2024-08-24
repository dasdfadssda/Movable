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
      Title: "제주 국제공항",
      position: "공항",
      Image: OneJeju1Img,
      time: "0분",
      difficulty: "하",
      difficultynum: 1.00,
      Description : "설명이다.설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다",
      Icons: ["휠체어 이용", "장애인 화장실", "보조견 동반", "오디오 가이드"],
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ED685A", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ED685A", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ED685A", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ED685A", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#ED685A", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ED685A", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ED685A", value: 18 }] },
    ],
    },
    {
      id: 2,
      day: 1,
      Category: "점심",
      Title: "올래 국수 본점",
      position: "한식",
      Image: OneJejuDay2Img,
      time: "10분",
      difficulty: "하",
      difficultynum: 2.00,
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
       graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ED685A", value: 10 }, { type: "외지인", color: "#E9AE5F", value: 5 }, { type: "외국인", color: "#DC5C49", value: 17 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ED685A", value: 20 }, { type: "외지인", color: "#E9AE5F", value: 7 }, { type: "외국인", color: "#DC5C49", value: 17 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ED685A", value: 15 }, { type: "외지인", color: "#E9AE5F", value: 14 }, { type: "외국인", color: "#DC5C49", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ED685A", value: 12 }, { type: "외지인", color: "#E9AE5F", value: 4 }, { type: "외국인", color: "#DC5C49", value: 17 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ED685A", value: 0 }, { type: "외지인", color: "#E9AE5F", value: 20 }, { type: "외국인", color: "#DC5C49", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ED685A", value: 20 }, { type: "외지인", color: "#E9AE5F", value: 10 }, { type: "외국인", color: "#DC5C49", value: 20 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ED685A", value: 18 }, { type: "외지인", color: "#E9AE5F", value: 12 }, { type: "외국인", color: "#DC5C49", value: 29 }] },
    ],
       Description : "설명이다.설명이다설명이다설명이다설명이다설명이다설명이다.설명이다설명이다설명이다설명이이다설명이다설명이다설명이다설명이다.설명이다설명이다설명이다설명이다설명이다.설이다설명이다설명이다설명이다설명이다.설명\nm명이다설명이다설명이다설명이다설명이다.설명\n다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다"
    },
    {
      id: 3,
      day: 1,
      Category: "카페",
      Title: "몽상 드 애월",
      position: "카페",
      Image: OneJejuDay3Img,
      time: "15분",
      difficulty: "중",
      difficultynum: 3.00,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ED685A", value: 10 }, { type: "외지인", color: "#E9AE5F", value: 5 }, { type: "외국인", color: "#DC5C49", value: 0 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ED685A", value: 20 }, { type: "외지인", color: "#E9AE5F", value: 7 }, { type: "외국인", color: "#DC5C49", value: 0 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ED685A", value: 15 }, { type: "외지인", color: "#E9AE5F", value: 14 }, { type: "외국인", color: "#DC5C49", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ED685A", value: 12 }, { type: "외지인", color: "#E9AE5F", value: 4 }, { type: "외국인", color: "#DC5C49", value: 0 }] },
        { day: "금", crowd: [{ type: "현지인", color: "#ED685A", value: 0 }, { type: "외지인", color: "#E9AE5F", value: 20 }, { type: "외국인", color: "#DC5C49", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ED685A", value: 20 }, { type: "외지인", color: "#E9AE5F", value: 10 }, { type: "외국인", color: "#DC5C49", value: 20 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ED685A", value: 18 }, { type: "외지인", color: "#E9AE5F", value: 12 }, { type: "외국인", color: "#DC5C49", value: 29 }] },
    ],
      Icons: ["휠체어 이용", "접근로 낮음", "보조견 동반", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다"
    },
    {
      id: 4,
      day: 1,
      Category: "드라이브 코스",
      Title: "애월 해안 도로",
      position: "드라이브 코스",
      Image: OneJejuDay4Img,
      time: "25분",
      difficulty: "하",
      difficultynum: 1.00,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"
    },
    {
      id: 5,
      day: 1,
      Category: "저녁",
      Title: "흑돈가",
      position: "고기",
      Image: OneJejuDay5Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 3.77,
       graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"
    },
    {
      id: 6,
      day: 1,
      Category: "숙소",
      Title: "한림리조트",
      position: "숙소",
      Image: OneJejuDay6Img,
      time: "30분",
      difficulty: "중",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      difficultynum: 2.22,
      Icons: ["휠체어 이용", "접근로 낮음", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 8,
      day: 2,
      Category: "점심",
      Title: "서귀포 매일 올레 시장",
      position: "한식",
      Image: TwoJejuDay1Img,
      time: "10분",
      difficulty: "하",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
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
      Image: TwoJejuDay2Img,
      time: "1분",
      difficulty: "중",
      difficultynum: 4.66,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드", "접근로 낮음"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 10,
      day: 2,
      Category: "저녁",
      Title: "제갈양 제주협재점",
      position: "한식",
      Image: TwoJejuDay3Img,
      time: "23분",
      difficulty: "중",
      difficultynum: 2.32,
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 12,
      day: 2,
      Category: "관광 명소",
      Title: "선물고팡 공항점",
      position: "쇼핑몰",
      Image: TwoJejuDay4Img,
      time: "50분",
      difficulty: "중",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
    ],
      difficultynum: 3.4,
      Icons: ["휠체어 이용", "장애인 화장실", "주차시설", "오디오 가이드"],
      Description : "설명이다.설명이다설명이다설명이다설명이 다설명이다설 명이다설명이다설 명이다설명이다설명이다설명이다설명이다설명이다설명이다"

    },
    {
      id: 3,
      day: 2,
      Category: "공항",
      Title: "제주 국제공항",
      position: "공항",
      Image: OneJeju1Img,
      time: "10분",
      difficulty: "하",
      graph : [
        { day: "월", crowd: [{ type: "현지인", color: "#ed685a", value: 10 }, { type: "외지인", color: "#F3A953", value: 5 }] },
        { day: "화", crowd: [{ type: "현지인", color: "#ed685a", value: 8 }, { type: "외지인", color: "#F3A953", value: 7 }] },
        { day: "수", crowd: [{ type: "현지인", color: "#ed685a", value: 15 }, { type: "외국인", color: "#EB7D4B", value: 3 }] },
        { day: "목", crowd: [{ type: "현지인", color: "#ed685a", value: 12 }] },
        { day: "금", crowd: [{ type: "외국인", color: "#EB7D4B", value: 9 }] },
        { day: "토", crowd: [{ type: "현지인", color: "#ed685a", value: 20 }, { type: "외지인", color: "#F3A953", value: 10 }] },
        { day: "일", crowd: [{ type: "현지인", color: "#ed685a", value: 18 }] },
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