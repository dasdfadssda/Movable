import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
// import { Link } from "react-router-dom";
import backgroundImage from "../../../Assets/Splash/SplashScreen.png";

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
  height: 100vh;
  overflow-y: hidden;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 50%;
  height: auto;
`;

const LogoDiv = styled.div`
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  height: auto;
`;

const AppSpash = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <LogoDiv>
          <Logo
            src={require("../../../Assets/Splash/Splash_Logo.png")}
            alt="로고"
          />
        </LogoDiv>
      </Div>
    </ThemeProvider>
  );
};

export default AppSpash;
