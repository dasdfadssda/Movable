import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { Link } from "react-router-dom";
import AppSpash from "../App_Splash_Components/AppSplash";

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Pretendard";
`;

const AppHome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2초 후 스플래시 화면 사라짐
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <AppSpash/>
      ) : (
        <div>
          <Header1>홈 모바일 페이지</Header1>
          <div>
            <Link to="/Map">지도 페이지</Link>
          </div>
          <Link to="/Route">경로 페이지</Link>
        </div>
      )}
    </ThemeProvider>
  );
};

export default AppHome;
