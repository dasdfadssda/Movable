import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const AnswerComponent = ({ answer }) => { 

  return (
    <Div>
      결과  : 
      {answer}
    </Div>
  );
};

export default AnswerComponent;
