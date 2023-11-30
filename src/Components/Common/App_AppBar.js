import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Style/theme";
import backButtonImage from "../../Assets/Route/Cancel_Icon.png";

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 36px;
  width: 100%;
  margin-bottom: 29px;
  margin-top: 12px;
`;

const Body6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body6};
  font-weight: ${(props) => props.theme.fontWeights.Body6};
  line-height: ${(props) => props.theme.LineHeight.Body6};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
`;

const BackButton = styled.button`
  background: url(${backButtonImage}) no-repeat center;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const SizedBox = styled.div`
  width: 34px;
`;

const AppBarComponent = ({ title, route }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(route);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar>
        <BackButton onClick={goBack} />
        <Body6>{title}</Body6>
        <SizedBox>ㅤㅤ</SizedBox>
      </AppBar>
    </ThemeProvider>
  );
};

export default AppBarComponent;
