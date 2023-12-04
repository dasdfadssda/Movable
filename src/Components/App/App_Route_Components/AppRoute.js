import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import AppBarComponent from "./Common/App_AppBar";
import ProgressComponent from "./Common/App_RouteTaskBar";
import AppQuestion from "./Common/App_RouteQuestion";
import RouteTask1 from "./AppRoute_Task1";
import RouteTask2 from "./AppRoute_Task2";
import RouteTask3 from "./AppRoute_Task3";
import RouteTask4 from "./AppRoute_Task4";
import AppLoading from "./AppLoading";
import AnswerComponent from "./AppRoute_Result";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const PartDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NextButton = styled.button`
  display: flex;
  width: 94%;
  padding: 10px 150px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: ${(props) =>
    props.disabled
      ? props.theme.colors.black_30
      : "var(--Primary_pink30, #fff7f5)"};
  border: none;
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  color: ${(props) =>
    props.disabled
      ? props.theme.colors.black_50
      : props.theme.colors.Primary_pink100};
  margin-bottom: 32px;
`;

const AppRoute = () => {
  const [step, setStep] = useState(1);
  const [selectedRoutes, setSelectedRoutes] = useState([
    null,
    null,
    null,
    null,
  ]);
  const [answer, setAnswer] = useState(null);

  const handleRouteSelect = (route) => {
    setSelectedRoutes((prevRoutes) => {
      const newRoutes = [...prevRoutes];
      newRoutes[step - 1] = route;
      return newRoutes;
    });
    console.log("선택한 내용은 :", route);
    console.log("전체 선택 내용은 :", selectedRoutes);
  };

  useEffect(() => {
    if (answer) {
      setStep((prevStep) => prevStep + 1);
    }
  }, [answer]);

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <PartDiv>
          <AppBarComponent title="추천 코스" route="/" step={step} />
          {step < 6 && <ProgressComponent step={step} />}
          {step < 5 && <AppQuestion num={step} />}
          {step === 1 && (
            <RouteTask1
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoutes[0]}
            />
          )}
          {step === 2 && (
            <RouteTask2
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoutes[1]}
            />
          )}
          {step === 3 && (
            <RouteTask3
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoutes[2]}
            />
          )}
          {step === 4 && (
            <RouteTask4
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoutes[3]}
            />
          )}
          {step === 5 && <AppLoading />}
          {step === 6 && <AnswerComponent answer={answer} />}
        </PartDiv>
        {step < 5 && (
          <NextButton
            disabled={selectedRoutes[step - 1] === null}
            onClick={async () => {
              setStep((prevStep) => prevStep + 1);
              console.log("현재 step: ", step);
              if (step === 4) {
                // const response = await askOpenAI(selectedRoutes);
                // console.log("입력 받은 대답 : ", response);
                // setAnswer(response.answer);
                setTimeout(() => {
                  setAnswer("값들어감");
                  console.log("ai 연동: ", step);
                }, 5000);
              }
            }}
          >
            다음
          </NextButton>
        )}
      </Div>
    </ThemeProvider>
  );
};

export default AppRoute;
