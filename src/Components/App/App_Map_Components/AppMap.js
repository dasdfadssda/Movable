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
import InactivePicker from "../../../Assets/img/_Picker=_불가능.png";
import currentSpot from "../../../Assets/Map/currentLocation.png";
import Search from "../../../Assets/Map/fe_search.png";
import Restaurant from "../../../Assets/Map/restaurant.png";
import RestaurantActive from "../../../Assets/Map/restaurant_active.png";
import Cafe from "../../../Assets/Map/cafe.png";
import CafeActive from "../../../Assets/Map/cafe_active.png";
import Parking from "../../../Assets/Map/parking.png";
import ParkingActive from "../../../Assets/Map/parking_active.png";
import Hotel from "../../../Assets/Map/hotel.png";
import HotelActive from "../../../Assets/Map/hotel_active.png";
import Toilet from "../../../Assets/Map/toilet.png";
import ToiletActive from "../../../Assets/Map/toilet_active.png";
import FindRoute from "../../../Assets/Map/FindRoute.png";
import Recommendation from "../../../Assets/Map/recommendedCourse.png";
import ChannelTalk from "../../../Assets/Map/talk.png";
import ChannelInfo from "../../../Assets/Map/TalkInfoWindow.png";
import AudioService from "../../../Assets/Map/audioGuide_service.svg";
import ElevatorService from "../../../Assets/Map/elevator_service.svg";
import GuideDogService from "../../../Assets/Map/guideDog_service.svg";
import ParkingService from "../../../Assets/Map/parking_service.svg";
import ScopeService from "../../../Assets/Map/scope_service.svg";
import ToiletService from "../../../Assets/Map/toilet_service.svg";
import TransportService from "../../../Assets/Map/transport_service.svg";
import VideoSubService from "../../../Assets/Map/videoSub_service.svg";
import WheelChairService from "../../../Assets/Map/wheelchair_service.svg";

import AppFindRoute from "./AppFindRoute.js";
import { async } from "q";

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  border-radius: 8px;
  padding: 10px 40px 10px 16px;
  background-image: url(${Search});
  background-position: center;
  background-position-x: 16px;
  //background-position-y: 13px;
  background-repeat: no-repeat;
  text-indent: 28px;

  &::placeholder {
    font-size: ${(props) => props.theme.Web_fontSizes.Body5};
    font-weight: ${(props) => props.theme.fontWeights.Body5};
    line-height: ${(props) => props.theme.LineHeight.Body5};
    color: ${(props) => props.theme.colors.black_50};
    font-family: "Pretendard";
  }
  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
    width: calc(50% - 8px);
  }
`;
const Slider = ({
  sliderPosition,
  handleSliderDragStart,
  handleSliderDragEnd,
  children,
}) => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "150px",
      backgroundColor: "white",
      padding: "20px",
      boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
    }}
    onMouseDown={handleSliderDragStart}
    onMouseUp={handleSliderDragEnd}
    onMouseLeave={handleSliderDragEnd}
  >
    {children}
  </div>
);
const AppMap = () => {
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const NAVER_ID = process.env.REACT_APP_NAVER_ID;
  const navermaps = window.naver.maps;
  const navigate = useNavigate();
  const [naverMap, setNaverMap] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [infoobstacle, setInfoobstacle] = useState(null);

  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`);
  }, []);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [sliderPosition, setSliderPosition] = useState("bottom");
  const [selectedMarkerInfo, setSelectedMarkerInfo] = useState(null);
  const [newPosition, setNewPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [introData, setIntroData] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [serviceData, setServiceData] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryToggle = async (category) => {
    setActiveCategories((prevActive) => {
      if (prevActive.includes(category)) {
        return [];
      } else {
        return [category];
      }
    });

    try {
      let apiUrl = "";
      let markerIcon = ActivePicker;

      switch (category) {
        case "restaurant":
          apiUrl = dataForbstacleApi;
          break;
        case "cafe":
          apiUrl = dataForbstacleApi;
          break;
        case "parking":
          // Uncomment the following lines if you have specific logic for parking
          // apiUrl = ServiceInfo;
          // markerIcon = parkingAvailable ? ActivePicker : InactivePicker;
          break;
        case "hotel":
          apiUrl = dataForbstacleApi;
          break;
        case "toilet":
          // Uncomment the following lines if you have specific logic for toilet
          // apiUrl = ServiceInfo;
          // markerIcon = restroomAvailable ? ActivePicker : InactivePicker;
          break;
        default:
          break;
      }

      if (apiUrl) {
        const response = await axios.get(apiUrl);
        const data = response.data.response.body.items.item;

        const newMarkers = data
          .filter((item) => activeCategories.includes(item.category))
          .map((item, index) => ({
            key: index,
            position: new navermaps.LatLng(item.mapy, item.mapx),
            title: item.title,
            address: item.addr1,
            contentid: item.contentid,
            contentTypeId: item.contenttypeid, // contenttypeid를 API 응답에서 가져옴
            icon: {
              url: markerIcon,
            },
          }));

        setMarkers(newMarkers);
      }
    } catch (error) {
      console.error(`Error fetching ${category} data from the API`, error);
    }
  };

  const handleSliderClose = () => {
    setSliderVisible(false);
    setIsSliderVisible(false);
  };
  const handleSliderDragStart = () => {
    setSliderPosition("visible");
  };

  const handleSliderDragEnd = () => {
    setSliderPosition("bottom");
  };
  const handleMarkerClick = async (marker) => {
    setSelectedMarkerInfo(marker);
    setSliderVisible(true);
    setIsSliderVisible(true);

    try {
      const contentid = marker.contentid;
      const contentTypeId = marker.contentTypeId;
      const dataset = `https://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?MobileOS=ETC&MobileApp=asdf&contentId=${contentid}&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D`;
      const ServiceInfo = `https://apis.data.go.kr/B551011/KorWithService1/detailIntro1?MobileOS=ETC&MobileApp=asdf&contentId=${contentid}&contentTypeId=${contentTypeId}&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D`;
      axios
        .get(dataset)
        .then((response) => {
          console.log(
            "무장애 관련 정보 ",
            contentid,
            "데이터 :",
            response.data
          );
          setIntroData(response.data);
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생: ", error);
        });
      axios
        .get(ServiceInfo)
        .then((response) => {
          console.log(
            "서비스 소개 데이터 ",
            contentid,
            "데이터 :",
            response.data
          );
          setIntroData(response.data);
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생: ", error);
        });
    } catch (error) {
      console.error("무장애 여행 정보를 불러오는 중 오류 발생:", error);
    }
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
        // const newMarkers = data.map((item, index) => ({
        //   key: index,
        //   position: new navermaps.LatLng(item.mapy, item.mapx),
        //   title: item.title,
        //   address: item.addr1,
        //   contentid: item.contentid,
        //   contentTypeId: item.contenttypeid,
        // }));
        //setMarkers(newMarkers);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  }, [handleCurrentLocation, navermaps, dataForbstacleApi]);

  const handleSearch = async () => {
    if (!searchQuery) {
      alert("검색어를 입력해주세요.");
      return;
    }
    try {
      const response = await axios.get("/v1/search/local.json", {
        params: {
          query: searchQuery,
          display: 5,
        },
        headers: {
          "X-Naver-Client-Id": NAVER_ID,
          "X-Naver-Client-Secret": NAVER_API_KEY,
        },
      });
      const { items } = response.data.response.body.items;
      items.forEach((item) => {
        console.log("Item Title:", item.title);
      });
    } catch (error) {
      console.error("Error fetching data from Naver Search API", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Status Code:", error.response.status);
        console.error("Response Data:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
      alert("검색 중 오류가 발생했습니다.");
    }
  };

  const handleRecommendationClick = () => {
    navigate("/Route");
  };

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
        }}
        onInitialized={(map) => setNaverMap(map)}
      >
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="어디로 가볼까요?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FindRouteButton onClick={handleSearch} />
        </SearchContainer>

        <ChipContainer>
          <ChipWrapper>
            <Chip onClick={() => handleCategoryToggle("restaurant")}>
              <img
                src={
                  activeCategories.includes("restaurant")
                    ? RestaurantActive
                    : Restaurant
                }
                alt="Restaurant"
              />
            </Chip>
            <Chip onClick={() => handleCategoryToggle("cafe")}>
              <img
                src={activeCategories.includes("cafe") ? CafeActive : Cafe}
                alt="Cafe"
              />
            </Chip>
            <Chip onClick={() => handleCategoryToggle("parking")}>
              <img
                src={
                  activeCategories.includes("parking") ? ParkingActive : Parking
                }
                alt="Parking"
              />
            </Chip>
            <Chip onClick={() => handleCategoryToggle("hotel")}>
              <img
                src={activeCategories.includes("hotel") ? HotelActive : Hotel}
                alt="Hotel"
              />
            </Chip>
            <Chip onClick={() => handleCategoryToggle("toilet")}>
              <img
                src={
                  activeCategories.includes("toilet") ? ToiletActive : Toilet
                }
                alt="Toilet"
              />
            </Chip>
          </ChipWrapper>
        </ChipContainer>
        <ChannelWindow
          style={{ bottom: isSliderVisible ? "284px" : "100px" }}
          src={ChannelInfo}
          alt="Channel Info"
        />
        <ChannelTalkBtn
          style={{ bottom: isSliderVisible ? "244px" : "60px" }}
          onClick={handleRecommendationClick}
        />
        <RecommendationButton
          style={{ bottom: isSliderVisible ? "200px" : "16px" }}
          onClick={handleRecommendationClick}
        />

        <div
          style={{
            position: "absolute",
            left: 10,
            bottom: isSliderVisible ? "190px" : "10px",
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
            draggable
            zoomControl={false}
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
          <Slider
            sliderPosition={sliderPosition}
            handleSliderDragStart={handleSliderDragStart}
            handleSliderDragEnd={handleSliderDragEnd}
          >
            <SliderContent>
              <div>
                <h3>{selectedMarkerInfo.title}</h3>
                <h5>{selectedMarkerInfo.address}</h5>
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
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=500&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";

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
const ChipContainer = styled.div`
  display: flex;
  position: fixed;
  position: absolute;
  align-items: center;
  width: calc(100% - 32px);
  top: 104px;
  margin-left: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 1000;
`;
const ChipWrapper = styled.div`
  display: flex;
`;
const Chip = styled.div`
  cursor: pointer;
`;
const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  padding: 44px 16px 12px 16px;
  display: flex;
  z-index: 1000;
`;
const FindRouteButton = styled.button`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: none;
  background-image: url(${FindRoute});
  background-size: cover;
  border: none;
  padding: 0;
  margin-left: 8px;
`;
const RecommendationButton = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 101px;
  height: 36px;
  cursor: pointer;
  background: none;
  background-image: url(${Recommendation});
  background-size: cover;
  border: none;
  padding: 0;
`;
const ChannelTalkBtn = styled.button`
  position: absolute;
  bottom: 60px;
  right: 16px;
  width: 101px;
  height: 36px;
  cursor: pointer;
  background: none;
  background-image: url(${ChannelTalk});
  background-size: cover;
  border: none;
  padding: 0;
`;
const ChannelWindow = styled.img`
  position: absolute;
  bottom: 100px;
  right: 13px;
  width: 143px;
  height: 45px;
`;
