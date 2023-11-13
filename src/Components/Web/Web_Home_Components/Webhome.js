import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";

// theme 파일 폰트 적용 방법
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.text};
  font-family: "Pretendard";
`;

const WebHome = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header1>홈 웹 페이지</Header1>
    </ThemeProvider>
  );
};


export default WebHome;
