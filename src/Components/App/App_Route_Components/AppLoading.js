import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const AppLoading = () => {
  return <Div>로딩중</Div>;
};

export default AppLoading;
