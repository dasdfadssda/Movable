import React from "react";
import styled from "styled-components";

const Dialog = ({ item, onClose }) => {
  return (
    <DialogOverlay onClick={onClose}>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <img src={item.Image} alt={item.Title} />
        <h2>{item.Title}</h2>
        <p>{item.Description}</p>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </DialogContent>
    </DialogOverlay>
  );
};

export default Dialog;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  border-radius: 16px 16px 0 0;
  padding: 24px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.Primary_pink100};
    margin-bottom: 16px;
  }

  p {
    font-size: 1rem;
    color: #5b5b5b;
    line-height: 1.5;
    margin-bottom: 16px;
  }
`;

const CloseButton = styled.button`
  background-color: ${(props) => props.theme.colors.Primary_pink100};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  align-self: flex-end;
`;
