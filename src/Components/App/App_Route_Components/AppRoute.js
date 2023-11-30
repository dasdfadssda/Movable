import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import AppBarComponent from "../Common/App_AppBar";
import ProgressComponent from "../Common/App_RouteTaskBar";
import AppQuestion from "../Common/App_RouteQuestion";

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
        <ProgressComponent step={1} />
        <AppQuestion num={1}/>
      </Div>
    </ThemeProvider>
  );
};

export default AppRoute;
