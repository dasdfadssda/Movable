import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 96%;
  align-items: center;
  justify-content: center;
  margin-top: -9px;
  flex-direction: column;
  background-color: gainsboro;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 96%;
  justify-content: flex-start;
  margin-bottom: 10.68px;
`;

const ChipButton = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.Web_fontSizes.Body6};
  font-weight: ${(props) => props.theme.fontWeights.Body6};
  line-height: ${(props) => props.theme.LineHeight.Body6};
  color: ${(props) =>
    props.isActive ? props.theme.colors.Primary_pink100 : "#A5A5A5"};
  background: ${(props) =>
    props.isActive ? "var(--Primary_pink30, #FFF7F5)" : "var(--White, #FFF)"};
  border: 1px solid
    ${(props) =>
      props.isActive
        ? "var(--Primary_pink100, #ED685A)"
        : "var(--black-30, #E3E3E3)"};
  margin-right: 8px;
`;

const AnswerComponent = ({ answer }) => {
  const [activeButton, setActiveButton] = useState("1");

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <ButtonDiv>
          <ChipButton
            isActive={activeButton === "1"}
            onClick={() => setActiveButton("1")}
          >
            1일차
          </ChipButton>
          <ChipButton
            isActive={activeButton === "2"}
            onClick={() => setActiveButton("2")}
          >
            2일차
          </ChipButton>
        </ButtonDiv>
      </Div>
    </ThemeProvider>
  );
};

export default AnswerComponent;
