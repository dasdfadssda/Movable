import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import { theme } from "../../../../Style/theme";
import backButtonImage from "../../../../Assets/Route/Cancel_Icon.png";
import mapButtonImage from "../../../../Assets/Route/map.png";
import shareButtonImage from "../../../../Assets/Route/share_Icon.png";

const AppBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 36px;
  width: 96%;
  margin-bottom: 29px;
  margin-top: 12px;
`;

const Body6 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body6};
  font-weight: ${(props) => props.theme.fontWeights.Body6};
  line-height: ${(props) => props.theme.LineHeight.Body6};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
`;

const BackButton = styled.button`
  background: url(${(props) => props.ButtonImage}) no-repeat center;
  border: none;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  cursor: pointer;
`;

const SizedBox = styled.div`
  width: 34px;
`;

const AppBarComponent = ({ title, route, step }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(route);
  };

  return (
    <ThemeProvider theme={theme}>
      {step > 5 ? (
        <>
          <AppBar>
            <BackButton
              onClick={goBack}
              ButtonImage={mapButtonImage}
              width={24}
              height={24}
            />
            <Body6>{title}</Body6>
            <BackButton
              onClick={goBack}
              ButtonImage={shareButtonImage}
              width={24}
              height={24}
            />
          </AppBar>
        </>
      ) : (
        <>
          <AppBar>
            <BackButton
              onClick={goBack}
              width={32}
              height={32}
              ButtonImage={backButtonImage}
            />
            <Body6>{title}</Body6>
            <SizedBox>ㅤㅤ</SizedBox>
          </AppBar>
        </>
      )}
    </ThemeProvider>
  );
};

export default AppBarComponent;
