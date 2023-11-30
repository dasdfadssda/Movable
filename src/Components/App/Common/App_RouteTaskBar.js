import React from "react";
import styled, { css , ThemeProvider} from "styled-components";
import { theme } from "../../../Style/theme";

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
  background-color: ${(props) => props.theme.colors.Primary_pink100};

  ${props => props.active && 
  css`
    background-color: ${(props) => props.theme.colors.Primary_pink50};
  `}
`;

const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  border-Top: 2px dashed ${(props) => props.theme.colors.Primary_pink50};
  margin-left: 5px;
  margin-right: 5px;
`;


const ProgressComponent = ({ step }) => {
  return (
    <ThemeProvider theme={theme}>
    <ProgressBar>
      <Circle active={step !== 1} />
      <Line />
      <Circle active={step !== 2} />
      <Line />
      <Circle active={step !== 3} />
      <Line />
      <Circle active={step !== 4} />
    </ProgressBar>
    </ThemeProvider>
  );
};

export default ProgressComponent;
