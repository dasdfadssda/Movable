import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { Link } from "react-router-dom";

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;

const Div = styled.div`
  width: 100%;
  background-color: red;
  height: 100vh;
  overflow-y: hidden;
`;

const AppSpash = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
          스플레쉬 하면
      </Div>
    </ThemeProvider>
  );
};

export default AppSpash;
