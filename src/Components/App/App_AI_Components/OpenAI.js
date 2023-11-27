import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { Link } from "react-router-dom";

const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: green;
  height: 100vh;
  width: 100%;
`;

const AppOpenAI = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <Header1>AppOpenAI 모바일 페이지</Header1>
        <Link to="/">홈 페이지</Link>
        asdf
      </Div>
    </ThemeProvider>
  );
};

export default AppOpenAI;
