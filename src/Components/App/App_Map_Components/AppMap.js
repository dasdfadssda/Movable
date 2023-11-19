import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  Overlay,
  Marker,
  useMap,
} from "react-naver-maps";
import React, { useState, useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { Link } from "react-router-dom";
import axios from "axios";
import currentLocation from "../../../Assets/img/currentPosition.svg";
import ActivePicker from "../../../Assets/img/_Picker=장애인 가능.png";

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;

const AppMap = () => {
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const navermaps = useNavermaps();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [myLocation, setMyLocation] = useState("");
  const naverMap = useMap();
  const [markers, setMarkers] = useState([]);

  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`);
  }, []);

  // 현재 위치 받아오기
  const handleCurrentLocationClick = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = new navermaps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        setCurrentPosition(newPosition);
        setMyLocation("");
      });
    } else {
      window.alert("현재 위치를 찾을 수 없습니다.");
    }
  }, [navermaps]);

  useEffect(() => {
    // 페이지 로딩 시에 현재 위치 받아오기
    handleCurrentLocationClick();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 함

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = new navermaps.LatLng(
        myLocation.latitude,
        myLocation.longitude
      );
      setCurrentPosition(currentPosition);
    }
  }, [myLocation]);

  // 현재 위치 업데이트
  const updateCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = new navermaps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        setCurrentPosition(newPosition);
        setMyLocation("");
      });
    } else {
      window.alert("현재 위치를 찾을 수 없습니다.");
    }
    // 무장애 여행 정보 API 호출
    axios
      .get(dataForbstacleApi)
      .then((response) => {
        console.log("무장애 여행정보 동기화 관광 데이터 :", response.data);
        const data = response.data.response.body.items.item;
        const newMarkers = data.map((item, index) => ({
          key: index,
          position: new navermaps.LatLng(item.mapy, item.mapx), // 위도와 경도 사용
          title: item.title,
        }));
        setMarkers(newMarkers);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Header1>지도 모바일 페이지</Header1>
      <Link to="/">홈 페이지</Link>
      <MapDiv
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            padding: 16,
          }}
        >
          <img
            src={currentLocation}
            alt="Current Location"
            onClick={updateCurrentLocation}
            style={{ cursor: "pointer" }}
          />
        </div>
        {currentPosition && (
          <NaverMap
            zoomControl
            zoomControlOptions={{
              position: navermaps.Position.TOP_RIGHT,
            }}
            defaultCenter={currentPosition}
            defaultZoom={13}
            onZoomChanged={handleZoomChanged}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.key}
                position={marker.position}
                title={marker.title}
                icon={{
                  url: ActivePicker,
                }}
              />
            ))}
          </NaverMap>
        )}
      </MapDiv>
    </ThemeProvider>
  );
};

export default AppMap;
const dataForbstacleApi =
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=1000&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";
