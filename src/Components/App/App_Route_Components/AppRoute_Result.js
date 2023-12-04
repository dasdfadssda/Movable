import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import OneDay1Img from "../../../Assets/Route/비룡폭포.png";
import OneDay2Img from "../../../Assets/Route/도솔식당.png";
import OneDay3Img from "../../../Assets/Route/비밀공간.png";
import OneDay4Img from "../../../Assets/Route/카누체험.png";
import OneDay5Img from "../../../Assets/Route/소바카게.png";

const AnswerComponent = ({ answer }) => {
  const [activeButton, setActiveButton] = useState("1");
  const [mainPlace, setMainPlace] = useState("강원도 태백시");
  const [duringTime, setDuringTime] = useState("2시간 30분");
  const daysToShow = 2;

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
      Title: "소바카게",
      position: "일식",
      Image: OneDay5Img,
      time: "18분",
      difficulty: "상",
      difficultynum: 4.77,
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
          <ImageDiv
            src={require("../../../Assets/Route/colum_line.png")}
            width={24}
            height={638}
            left={8}
            right={8}
          />
          <ColumnDiv>
            <FlexDiv>
              <Body1 color={theme.colors.black_70}>자동차</Body1>
              <Body1 color={theme.colors.black_30}>
                &nbsp;|&nbsp;{duringTime}
              </Body1>
            </FlexDiv>
            <PackageDiv>
            {TravelPackage.map((item) => (
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
                    <FlexDiv>
                      <Body1 color={theme.colors.black_50}>
                        난이도&nbsp;
                      </Body1>
                      <Body1 color={theme.colors.Primary_pink100}>
                        {item.difficulty}&nbsp;
                      </Body1>
                      <Body1 color={"#E3E3E3"}>
                       |&nbsp;
                      </Body1>
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
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  line-height: ${(props) => props.theme.LineHeight.Body1};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: -5px;
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
  background-color: yellow;
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
`;

const TravelCategory = styled.div`
color: var(--black-70, #5B5B5B);
font-family: 'Pretendard';
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 140%; 
`

const TravelTitle = styled.div`
color: var(--Primary_pink100, #ED685A);
font-family: 'Pretendard';
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 140%;
margin-top: 5px;
`

const TravelPosition = styled.div`
color: var(--black-50, #A5A5A5);
font-family: 'Pretendard';
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 140%;
margin-top: 5px;
`