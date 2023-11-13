import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { useTheme } from "../../../contexts/ThemeContext.js"; // Context APi 적용

// theme 파일 폰트 적용 방법
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.text};
  font-family: "Pretendard";
`;

const Header2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header2};
  font-weight: ${(props) => props.theme.fontWeights.Header2};
  line-height: ${(props) => props.theme.LineHeight.Header2};
  color: ${(props) => props.theme.colors.accent};
  font-family: "Pretendard";
`;

const WebHome = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header1>홈 웹 페이지</Header1>
      <Header2>
        이 화면에서는 context api를 통해 theme data를 전달하였습니다.
      </Header2>
      <Link to="/about">소개 페이지</Link>
    </ThemeProvider>
  );
};

export default WebHome;
