import React, { useState, useRef } from "react";
import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  Overlay,
  Marker,
  useMap,
  useListener,
} from "react-naver-maps";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";


const AppFindRoute = () => {
  const [naverMap, setNaverMap] = useState();
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const navermaps = window.naver.maps;

  return <ThemeProvider theme={theme}>
    <MapDiv
        style={{
          position: "relative",
          width: "100%",
          height: "730px",
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          overflow: "hidden",
        }}
        onInitialized={(map) => setNaverMap(map)}
      ></MapDiv>
  </ThemeProvider>;
};

export default AppFindRoute;
