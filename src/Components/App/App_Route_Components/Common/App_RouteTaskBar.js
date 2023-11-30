import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { theme } from "../../../../Style/theme";

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.Primary_pink50};

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors.Primary_pink100};
    `}
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  border-top: 2px dashed ${(props) => props.theme.colors.Primary_pink50};
  margin-left: 5px;
  margin-right: 5px;

  ${(props) =>
    props.active &&
    css`
      border-color: ${(props) => props.theme.colors.Primary_pink100};
    `}
`;


const ProgressComponent = ({ step }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProgressBar>
        <Circle active={step > 0} />
        <Line active={step > 1} />
        <Circle active={step > 1} />
        <Line active={step > 2} />
        <Circle active={step > 2} />
        <Line active={step > 3} />
        <Circle active={step > 3} />
      </ProgressBar>
    </ThemeProvider>
  );
};

export default ProgressComponent;
