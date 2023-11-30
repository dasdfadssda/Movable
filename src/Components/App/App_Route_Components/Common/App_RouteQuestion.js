import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../../Style/theme";

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 94%;
  align-items: center;
  justify-items: flex-start;
  margin-top: 40px;
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  line-height: ${(props) => props.theme.LineHeight.Header2};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
`;

const LocationIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

const AppQuestion = ({ num }) => {
  const questions = [
    "어디로 여행을 떠나고 싶나요?",
    "여행 일정은 어떻게 되나요?",
    "어떤 장애를 갖고 계신가요?",
    "어떤 유형의 액티비티를 원하세요?",
  ];

  const title = questions[num - 1];

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <LocationIcon
          src={require("../../../../Assets/Route/Location_Icon.png")}
        />
        <Header2>{title}</Header2>
      </Div>
    </ThemeProvider>
  );
};

export default AppQuestion;
