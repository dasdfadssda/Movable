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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import currentLocation from "../../../Assets/img/currentPosition.svg";
import ActivePicker from "../../../Assets/img/_Picker=장애인 가능.png";
import currentSpot from "../../../Assets/Map/currentLocation.png";
import Search from "../../../Assets/Map/fe_search.png";
import Restaurant from "../../../Assets/Map/restaurant.png";
import Cafe from "../../../Assets/Map/cafe.png";
import Parking from "../../../Assets/Map/parking.png";
import Hotel from "../../../Assets/Map/hotel.png";
import Toilet from "../../../Assets/Map/toilet.png";
import AppFindRoute from "./AppFindRoute.js";

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;

const SearchInput = styled.input`
  width: 100%;
  margin-right: 10px;
  border: none;
  font-style: #a5a5a5;
  border-radius: 8px;
  padding: 10px 40px 10px 16px;
  background-image: url(${Search});
  background-position: 13px center;
  background-repeat: no-repeat;
  text-indent: 20px;

  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
    width: 50%;
  }
`;
const AppMap = () => {
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const navermaps = window.naver.maps;
  const navigate = useNavigate();
  const [naverMap, setNaverMap] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`);
  }, []);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const [newPosition, setNewPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryToggle = (category) => {
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter((item) => item !== category);
      } else {
        return [...prevSelected, category];
      }
    });
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
        (position) => {
          const newPosition = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );
          setCurrentPosition(newPosition);
          setNewPosition(newPosition);
          console.log("My current location: ", newPosition);
        },
        (error) => {
          console.error("Error getting current position:", error);
          window.alert("현재 위치를 찾을 수 없습니다.");
        }
      );
    } else {
      window.alert("브라우저가 위치 정보를 지원하지 않습니다.");
    }
    axios
      .get(naverMapApi, {
        headers: {
          "X-Naver-Client-Id": NAVER_ID,
          "X-Naver-Client-Secret": NAVER_API_KEY,
        },
      })
      .then((response) => {
        console.log("Search Results:", response.data.items);

        // Here you can process the response data and extract the information you need
        // For example, you can loop through response.data.items and print details like title, address, etc.
      })
      .catch((error) => {
        console.error("Error fetching data from Naver Search API", error);
      });
  }, [navermaps, setCurrentPosition]);

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
  const handleNavigateToFindRoute = () => {
    navigate({ AppFindRoute });
  };

  return (
    <ThemeProvider theme={theme}>
      <Link to="/">홈 페이지</Link>
      <MapDiv
        style={{
          position: "relative",
          width: "100%",
          height: "600px",
        }}
        onInitialized={(map) => setNaverMap(map)}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "48px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SearchInput
            type="text"
            placeholder="어디로 가볼까요?"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              width: "100%",
              marginRight: "10px",
              border: "none",
              fontStyle: "#A5A5A5",
              borderRadius: "8px",
              padding: "10px 40px 10px 16px",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 10,
            bottom: 10,
            zIndex: 1000,
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
        <div
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            zIndex: 1000,
          }}
        >
          <button onClick={handleNavigateToFindRoute}>경로 설정</button>
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
        {sliderVisible && selectedMarkerInfo && (
          <Slider>
            <SliderContent>
              <div>
                <h3>{selectedMarkerInfo.title}</h3>
                {/* Add more details or components as needed */}
              </div>
              <CloseButton onClick={handleSliderClose}>Close</CloseButton>
            </SliderContent>
          </Slider>
        )}
      </MapDiv>
    </ThemeProvider>
  );
};

export default AppMap;
const dataForbstacleApi =
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=1000&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";
const naverMapApi = "https://openapi.naver.com/v1/search/local.json";

const Slider = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 20px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
`;

const SliderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
