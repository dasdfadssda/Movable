import {
  Container as MapDiv,
  NaverMap,
  useNavermaps,
  Overlay,
  Marker,
  useMap,
  useListener,
} from "react-naver-maps";

import React, { useState, useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import axios from "axios";
import currentLocation from "../../../Assets/img/currentPosition.svg";
import ActivePicker from "../../../Assets/img/_Picker=장애인 가능.png";
import currentSpot from "../../../Assets/Map/currentLocation.png";
import CancelIcon from "../../../Assets/Map/FindRoute/Cancel_Icon.png";

const AppFindRoute = () => {
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const navermaps = window.naver.maps;
  const [naverMap, setNaverMap] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`);
  }, []);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const [newPosition, setNewPosition] = useState(null);

  // 검색어 관련 코드 
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValue2, setSearchValue2] = useState("");

  const handleSearchChange1 = (event) => {
    setSearchValue1(event.target.value);
  };
  const handleSearchChange2 = (event) => {
    setSearchValue2(event.target.value);
  };
  
  const handleSliderClose = () => {
    setSliderVisible(false);
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarkerInfo(marker);
    setSliderVisible(true);
  };
  // 현재 위치 받아오기
  const handleCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const newPosition = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          setCurrentPosition(newPosition);
          setNewPosition(newPosition);
          console.log("My current location: ", newPosition);  
          // 위도와 경도를 주소로 변환하는 API 호출
          try {
            const reverseGeocodeResponse = await axios.post(
              `http://localhost:3001/reverseGeocoding`, // 서버 URL에 맞게 수정해주세요.
              { latitude: position.coords.latitude, longitude: position.coords.longitude }
            );
  
            const address = reverseGeocodeResponse.data.address;
            setSearchValue1(address); // 주소를 검색 값으로 설정
          } catch (error) {
            console.error("Error getting address from coordinates:", error);
          }
        },
        (error) => {
          console.error("Error getting current position:", error);
          window.alert("현재 위치를 찾을 수 없습니다.");
        }
      );
    } else {
      window.alert("브라우저가 위치 정보를 지원하지 않습니다.");
    }
  }, [navermaps, setCurrentPosition, setSearchValue1]);
  

  const handleToCurrentPosition = () => {
    console.log("Trying to pan to current position", newPosition);

    if (naverMap) {
      naverMap.panTo(newPosition);
    } else {
      console.log("NaverMap is not initialized yet.");
    }
  };

  useEffect(() => {
    // 페이지 로딩 시에 현재 위치 받아오기
    handleCurrentLocation();
    // 무장애 여행 정보 API 호출
    axios
      .get(dataForbstacleApi)
      .then((response) => {
        console.log("무장애 여행정보 동기화 관광 데이터 :", response.data);
        const data = response.data.response.body.items.item;
        const newMarkers = data.map((item, index) => ({
          key: index,
          position: new navermaps.LatLng(item.mapy, item.mapx),
          title: item.title,
        }));
        setMarkers(newMarkers);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  }, [handleCurrentLocation, navermaps, dataForbstacleApi]);


  return (
    <ThemeProvider theme={theme}>
      <MapDiv
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          backgroundColor: "#fff",
          alignItems: "center",
          overflow: "hidden",
        }}
        onInitialized={(map) => setNaverMap(map)}
      >
        <SearchContainer>
          <FlexDiv bottom={8}>
            <ImageDiv
              src={require("../../../Assets/Map/FindRoute/Frame1.png")}
              right={10}
              width={16}
              height={16}
            />
            <SearchInput />
            <CancelButton ButtonImage={CancelIcon} />
          </FlexDiv>
          <FlexDiv>
            <ImageDiv
              src={require("../../../Assets/Map/FindRoute/Frame1.png")}
              right={10}
              width={16}
              height={16}
            />
            <SearchInput />
            <CancelButton ButtonImage={CancelIcon} />
          </FlexDiv>
        </SearchContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            // position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            left: 10,
            bottom: 10,
            zIndex: 500,
          }}
        >
          <img
            id="current"
            src={currentLocation}
            onClick={handleToCurrentPosition}
            alt="Current Location"
            style={{ cursor: "pointer" }}
          />
        </div>
        {currentPosition && (
          <NaverMap
            // draggable
            defaultCenter={currentPosition}
            defaultZoom={13}
            onZoomChanged={handleZoomChanged}
          >
            <Marker
              position={currentPosition}
              icon={{
                url: currentSpot,
                scaledSize: new navermaps.Size(40, 40),
              }}
            />
            {markers.map((marker) => (
              <Marker
                key={marker.key}
                position={marker.position}
                title={marker.title}
                icon={{
                  url: ActivePicker,
                }}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}
          </NaverMap>
        )}
      </MapDiv>
    </ThemeProvider>
  );
};

export default AppFindRoute;

const dataForbstacleApi =
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=500&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  z-index: 1000;
  background-color: white;
  height: auto;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 96%;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.bottom}px;
  align-items: center;
  align-items: ${(props) => props.flex};
`;

const ImageDiv = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  margin-right: ${(props) => props.right}px;
  margin-left: ${(props) => props.left}px;
  margin-top: ${(props) => props.top}px;
`;

const SearchInput = styled.input`
  width: calc(90%);
  border: 1px solid var(--black-30, #e3e3e3);
  border-radius: 4px;
  background-position: 13px center;
  background-repeat: no-repeat;
  text-indent: 20px;
  height: 32px;

  &::placeholder {
    color: #a5a5a5;
  }
  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
    width: calc(90%);
  }
`;

const CancelButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${(props) => props.ButtonImage}) no-repeat center/contain;
  margin-left: 24px;
  border: none;
`;
