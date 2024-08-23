import React from "react";
import styled from "styled-components";

const ChipButton = ({ isActive, onClick, children }) => {
  return (
    <Button isActive={isActive} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ChipButton;

const Button = styled.button`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  color: ${(props) =>
    props.isActive ? props.theme.colors.Primary_pink100 : "#A5A5A5"};
  background: ${(props) =>
    props.isActive ? "var(--Primary_pink30, #FFF7F5)" : "var(--White, #FFF)"};
  border: 1px solid
    ${(props) =>
    props.isActive
      ? "var(--Primary_pink100, #ED685A)"
      : "var(--black-30, #E3E3E3)"};
  margin-right: 6px;
`;
