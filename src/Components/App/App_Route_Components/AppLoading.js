import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import Lottie from "lottie-react";
import animationData from "../../../Assets/Route/lodinggif.json";

const Div = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const StyledLottie = styled(Lottie)`
  width: 80%;
  height: auto;
  margin-top: 60px;
`;

const Body6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body6};
  font-weight: ${(props) => props.theme.fontWeights.Body6};
  line-height: ${(props) => props.theme.LineHeight.Body6};
  color: ${(props) => props.theme.colors.Primary_pink100};
  font-family: "Pretendard";
  margin-top: 16px;
`;

const AppLoading = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <StyledLottie animationData={animationData} />
        <Body6>추천 코스를 짜고 있어요</Body6>
      </Div>
    </ThemeProvider>
  );
};

export default AppLoading;
