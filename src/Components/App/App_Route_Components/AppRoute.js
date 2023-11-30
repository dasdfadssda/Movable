import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { Link } from "react-router-dom";
import AppBarComponent from "../../Common/App_AppBar";
import ProgressComponent from "../../Common/App_RouteTaskBar";

const Body6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body6};
  font-weight: ${(props) => props.theme.fontWeights.Body6};
  line-height: ${(props) => props.theme.LineHeight.Body6};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  height: 100vh;
  width: 100%;
  align-items: center;
`;


const AppRoute = () => {
  return (
    <ThemeProvider theme={theme}>
      <Div>
        <AppBarComponent title="추천 코스" route="/" />
        <ProgressComponent step={2} />
      </Div>
    </ThemeProvider>
  );
};

export default AppRoute;
