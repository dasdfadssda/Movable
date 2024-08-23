import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
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


const AnswerComponent = ({ answer, selectedRoutes }) => {
  const [activeButton, setActiveButton] = useState("1");
  const [mainPlace, setMainPlace] = useState("강원도 태백시");
  const [duringTime, setDuringTime] = useState("2시간 30분");
  const daysToShow = 2;

  useEffect(() => {
if(selectedRoutes[0] === 3){
  if (activeButton === "1") {
    setMainPlace("제주도 제주시");
    setDuringTime("40분");
  } else if (activeButton === "2") {
    setMainPlace("제주 애월동");
    setDuringTime("30분");
  }
}else {
  if (activeButton === "2") {
    setMainPlace("강원도 원주시");
    setDuringTime("30분");
  } else if (activeButton === "1") {
    setMainPlace("강원도 태백시");
    setDuringTime("2시간 30분");
  }
}
  }, [activeButton]);

  const JejuPackage = [
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
      difficultynum: 2.22,
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
      difficultynum: 3.79,
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
      difficultynum: 3.4,
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
      difficultynum: 1.00,
    },
  ];
  
  const TravelPackage = [
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
    },
  ];

  const buttons = [];
  for (let i = 1; i <= daysToShow; i++) {
    buttons.push(
      <ChipButton
        key={i}
        isActive={activeButton === i.toString()}
        onClick={() => setActiveButton(i.toString())}
      >
        {i}일차
      </ChipButton>
    );
  }

  const currentPackage = selectedRoutes[0] === 3 ? JejuPackage : TravelPackage;

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <FlexDiv bottom={10.68}>{buttons}</FlexDiv>
        <FlexDiv bottom={8}>
          <ImageDiv
            src={require("../../../Assets/Route/vector_chip.png")}
            width={40}
            height={40}
          />
          <Body2>{mainPlace}</Body2>
        </FlexDiv>
        <FlexDiv flex={"flex-start"}>
          {activeButton === "1" ? (
            <ImageDiv
              src={require("../../../Assets/Route/colum_line.png")}
              width={24}
              height={638}
              left={8}
              right={8}
            />
          ) : (
            <ImageDiv
              src={require("../../../Assets/Route/ColumLine2.png")}
              width={24}
              height={524}
              left={8}
              right={8}
            />
          )}
          <ColumnDiv>
            <FlexDiv>
              <Body1 color={theme.colors.black_70} top={-5}>
                {selectedRoutes[0] === 3 && activeButton === "1" ? "비행기" : "자동차" }
              </Body1>
              <Body1 color={theme.colors.black_30} top={-5}>
                &nbsp;|&nbsp;
                <ColorfulText color="#A5A5A5">{duringTime}</ColorfulText>
              </Body1>
            </FlexDiv>
            <PackageDiv>
              {currentPackage.filter(
                (item) => item.day.toString() === activeButton
              ).map((item) => (
                <PackageItem key={item.id}>
                  <TravelCategory>{item.Category}</TravelCategory>
                  <FlexDiv flex={"flex-start"}>
                    <ImageDiv
                      src={item.Image}
                      alt={item.Title}
                      width={110}
                      height={70}
                      left={-5}
                    />
                    <PackageInfo>
                      <FlexDiv flex={"center"} bottom={5}>
                        <TravelTitle>{item.Title}</TravelTitle>
                        <TravelPosition> &nbsp;{item.position}</TravelPosition>
                      </FlexDiv>
                      <FlexDiv flex={"flex-start"}>
                        <Body1 color={theme.colors.black_50}>
                          난이도&nbsp;
                        </Body1>
                        <Body1 color={theme.colors.Primary_pink100}>
                          {item.difficulty}&nbsp;
                        </Body1>
                        <ImageDiv
                          src={require("../../../Assets/Route/travelLine.png")}
                          width={1.5}
                          height={13}
                          right={5}
                          top={1.2}
                        />
                        <ImageDiv
                          src={require("../../../Assets/Route/StarIcon.png")}
                          width={14}
                          height={14}
                          right={4}
                        />
                        <TravelDifficultyNum>
                          {item.difficultynum}
                        </TravelDifficultyNum>
                      </FlexDiv>
                      <FlexDiv flex={"center"}>
                        <TravelTime>
                          {" "}
                          <ColorfulText color="#5B5B5B">자동차</ColorfulText>
                          <ColorfulText color="#E3E3E3">
                            &nbsp;|&nbsp;
                          </ColorfulText>
                          <ColorfulText color="#A5A5A5">
                            {item.time}
                          </ColorfulText>
                        </TravelTime>
                      </FlexDiv>
                    </PackageInfo>
                  </FlexDiv>
                </PackageItem>
              ))}
            </PackageDiv>
          </ColumnDiv>
        </FlexDiv>
      </Div>
    </ThemeProvider>
  );
};

export default AnswerComponent;

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 93%;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.bottom}px;
  align-items: center;
  align-items: ${(props) => props.flex};
`;

const ChipButton = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  color: ${(props) =>
    props.isActive ? props.theme.colors.Primary_pink100 : "#A5A5A5"};
  background: ${(props) =>
    props.isActive ? "var(--Primary_pink30, #FFF7F5)" : "var(--White, #FFF)"};
  border: 1px solid
    ${(props) =>
      props.isActive
        ? "var(--Primary_pink100, #ED685A)"
        : "var(--black-30, #E3E3E3)"};
  margin-right: 6px;
`;

const ImageDiv = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-right: ${(props) => props.right}px;
  margin-left: ${(props) => props.left}px;
  margin-top: ${(props) => props.top}px;
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  line-height: ${(props) => props.theme.LineHeight.Body1};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: ${(props) => props.top}px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: ${(props) => props.theme.LineHeight.Body2};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
  margin-bottom: 5px;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const PackageDiv = styled.div`
  margin-top: 30px;
`;

const PackageItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const PackageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: flex-start;
  margin-left: 8px;
`;

const TravelCategory = styled.div`
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TravelTitle = styled.div`
  color: var(--Primary_pink100, #ed685a);
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-top: 5px;
`;

const TravelPosition = styled.div`
  color: var(--black-50, #a5a5a5);
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-top: 5px;
`;

const TravelDifficultyNum = styled.div`
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const TravelTime = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const ColorfulText = styled.span`
  color: ${(props) => props.color || "black"};
`;
