import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";

const AnswerComponent = ({ answer }) => {
  const [activeButton, setActiveButton] = useState("1");
  const [mainPlace, setMainPlace] = useState("강원도 태백시");
  const daysToShow = 2;
  
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
          <ImageDiv src={require('../../../Assets/Route/vector_chip.png')} width={40} height={40}/>
          <Body2>{mainPlace}</Body2>
        </FlexDiv>
        <FlexDiv>
          <ImageDiv src={require('../../../Assets/Route/colum_line.png')}  width={24} height={638}/>
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
  margin-top: -9px;
  flex-direction: column;
  background-color: gainsboro;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-bottom:  ${(props) => props.bottom}px;
  align-items: center;
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
  margin-right:  ${(props) => props.right}px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: ${(props) => props.theme.LineHeight.Body2};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
  margin-bottom: 5px;
`;