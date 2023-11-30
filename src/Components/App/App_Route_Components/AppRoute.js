import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import AppBarComponent from "./Common/App_AppBar";
import ProgressComponent from "./Common/App_RouteTaskBar";
import AppQuestion from "./Common/App_RouteQuestion";
import RouteTask1 from "./AppRoute_Task1";
import RouteTask2 from "./AppRoute_Task2";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

const NextButton = styled.button`
  display: flex;
  width: 95%;
  padding: 10px 150px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${(props) =>
    props.disabled ? "gray" : "var(--Primary_pink30, #fff7f5)"};
  border: none;
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  color: ${(props) => props.theme.colors.Primary_pink100};
  margin-top: 278px;
`;

const AppRoute = () => {
  const [step, setStep] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState(null); // 추가

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
    console.log("선택한 내용은 :", route);
  };

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <AppBarComponent title="추천 코스" route="/" />
        <ProgressComponent step={step} />
        <AppQuestion num={step} />
        {step === 1 && <RouteTask1 onRouteSelect={handleRouteSelect} />}
        {step === 2 && <RouteTask2 onRouteSelect={handleRouteSelect} />}
        <NextButton
          disabled={selectedRoute === null}
          onClick={() => setStep((step) => step + 1)}
        >
          다음
        </NextButton>
      </Div>
    </ThemeProvider>
  );
};

export default AppRoute;
