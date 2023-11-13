import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";

// theme 파일 폰트 적용 방법
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;

const AppAbout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header1>소개 모바일 페이지</Header1>
    </ThemeProvider>
  );
};

export default AppAbout;
