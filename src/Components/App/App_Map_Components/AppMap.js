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
import ActivePicker from "../../../Assets/Map/Makers.png";
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
import AudioService from "../../../Assets/Map/audioGuide_service.png";
import ElevatorService from "../../../Assets/Map/elevator_service.png";
import GuideDogService from "../../../Assets/Map/guideDog_service.png";
import ParkingService from "../../../Assets/Map/parking_service.png";
import ScopeService from "../../../Assets/Map/scope_service.png";
import ToiletService from "../../../Assets/Map/toilet_service.png";
import TransportService from "../../../Assets/Map/transport_service.png";
import VideoSubService from "../../../Assets/Map/videoSub_service.png";
import WheelChairService from "../../../Assets/Map/wheelchair_service.png";
import SliderUp from "../../../Assets/Map/sliderUp.png";
import LocationDetail from "../../../Assets/Map/locationDetail.png";
import PhoneShare from "../../../Assets/Map/phoneShare.png";
import ObstacleInfo from "../../../Assets/Map/ObstacleInfo.png";
import Divider from "../../../Assets/Map/divider.png";
import Review from "../../../Assets/Map/Review.png";
import RegisterReview from "../../../Assets/Map/ReviewWriting.png";
import Review1 from "../../../Assets/Map/review1.png";
import Review2 from "../../../Assets/Map/review2.png";
import Review3 from "../../../Assets/Map/review3.png";
import Review4 from "../../../Assets/Map/review4.png";
import AppSpash from "../App_Splash_Components/AppSplash";

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  border-radius: 8px;
  padding: 10px 50px 10px 16px;
  background-image: url(${Search});
  background-position: center;
  background-position-x: 16px;
  //background-position-y: 13px;
  background-repeat: no-repeat;
  text-indent: 28px;
  background-size: 22px;

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
  const [sliderHeight, setSliderHeight] = useState("167px");
  const [isContainersVisible, setIsContainersVisible] = useState(true);
  const [contentsType, setIsContentsType] = useState();

  const toggleContainersVisibility = () => {
    setIsContainersVisible(false);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSliderUpClick = async () => {
    toggleSliderHeight();
    toggleContainersVisibility();
    await loadServiceData();
  };
  useEffect(() => {
    setIsContainersVisible(true);
    return () => {
      setIsContainersVisible(false);
    };
  }, [sliderHeight]);

  const handleChipClick = (category) => {
    setActiveCategories([category]);

    switch (category) {
      case "restaurant":
        setIsContentsType("39");
        break;
      case "cafe":
        setIsContentsType("14");
        break;
      case "parking":
        setIsContentsType("12");
        break;
      case "hotel":
        setIsContentsType("28");
        break;
      case "toilet":
        setIsContentsType("38");
        break;
      default:
        setIsContentsType(null);
    }
  };
  const loadServiceData = async () => {
    try {
      const response = await axios.get(
        "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=10000&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D"
      );
      const data = response.data;
      const services = data.map((service) => ({
        name: service.name,
        image: service.image,
      }));
      setServiceData(services);
    } catch (error) {
      console.error("Error loading service data:", error);
    }
  };

  const toggleSliderHeight = () => {
    setSliderHeight((prevHeight) =>
      prevHeight === "167px" ? "568px" : "167px"
    );

    setIsContainersVisible((prevVisible) => !prevVisible);
  };

  // const handleCategoryToggle = async (category) => {
  //   setActiveCategories((prevActive) => {
  //     if (prevActive.includes(category)) {
  //       return [];
  //     } else {
  //       return [category];
  //     }
  //   });

  //   try {
  //     let apiUrl = "";
  //     let markerIcon = ActivePicker;

  //     switch (category) {
  //       case "restaurant":
  //         apiUrl =
  //           "https://apis.data.go.kr/B551011/KorWithService1/categoryCode1?MobileOS=ETC&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";
  //         markerIcon =
  //           category.restaurant !== "" ? ActivePicker : InactivePicker;

  //         try {
  //           const response = await axios.get(apiUrl);
  //           const data = response.data;
  //           const filteredRestaurantData = filteredByRestaurant(data);
  //           console.log(filteredRestaurantData);
  //         } catch (error) {
  //           console.error("Error fetching data from the API:", error);
  //         }
  //         break;
  //       case "hotel":
  //         apiUrl =
  //           "https://apis.data.go.kr/B551011/KorWithService1/categoryCode1?MobileOS=ETC&MobileApp=asdf&contentTypeId=32&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";
  //         markerIcon = category.hotel !== "" ? ActivePicker : InactivePicker;

  //         try {
  //           const response = await axios.get(apiUrl);
  //           const data = response.data;

  //           // Check if data is an array before applying filter
  //           const filteredHotelData = Array.isArray(data)
  //             ? filteredByHotel(data)
  //             : [];
  //           console.log(filteredHotelData);
  //         } catch (error) {
  //           console.error("Error fetching hotel data from the API:", error);
  //         }
  //         break;

  //       default:
  //         break;
  //     }

  //     if (apiUrl) {
  //       const response = await axios.get(apiUrl);
  //       const data = response.data.response.body.items.item;

  //       const newMarkers = data
  //         .filter((item) => activeCategories.includes(item.category))
  //         .map((item, index) => ({
  //           key: index,
  //           position: new navermaps.LatLng(item.mapy, item.mapx),
  //           title: item.title,
  //           address: item.addr1,
  //           contentid: item.contentid,
  //           contentTypeId: item.contenttypeid,
  //           icon: {
  //             url: markerIcon,
  //           },
  //         }));

  //       setMarkers(newMarkers);
  //     }
  //   } catch (error) {
  //     console.error(`Error fetching ${category} data from the API`, error);
  //   }
  // };

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
  const handleMapClick = () => {
    setSliderVisible(false);
    setIsSliderVisible(false);
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

      const response = await axios.get(dataset);
      const data = response.data;
      const {
        parking,
        audioguide,
        elevator,
        helpdog,
        exit,
        restroom,
        publictransport,
        videoguide,
        wheelchair,
      } = data;

      const services = [];
      const addService = (name, image) => {
        if (name && name !== "") {
          services.push({ name, image });
        }
      };
      addService("ParkingService", parking ? ParkingService : null);
      addService("AudioService", audioguide ? AudioService : null);
      addService("ElevatorService", elevator ? ElevatorService : null);
      addService("GuideDogService", helpdog ? GuideDogService : null);
      addService("ScopeService", exit ? ScopeService : null);
      addService("ToiletService", restroom ? ToiletService : null);
      addService("TransportService", publictransport ? TransportService : null);
      addService("VideoSubService", videoguide ? VideoSubService : null);
      addService("WheelChairService", wheelchair ? WheelChairService : null);

      setServiceData(services);

      // .then((response) => {
      //   console.log(
      //     "무장애 관련 정보 ",
      //     contentid,
      //     "데이터 :",
      //     response.data
      //   );
      //   setIntroData(response.data);
      // })
      // .catch((error) => {
      //   console.error("API 호출 중 오류 발생: ", error);
      // });
      //   axios
      //     .get(ServiceInfo)
      //     .then((response) => {
      //       console.log(
      //         "서비스 소개 데이터 ",
      //         contentid,
      //         "데이터 :",
      //         response.data
      //       );
      //       setIntroData(response.data);
      //     })
      //     .catch((error) => {
      //       console.error("API 호출 중 오류 발생: ", error);
      //     });
    } catch (error) {
      console.error("무장애 여행 정보를 불러오는 중 오류 발생:", error);
    }
  };
  // 현재 위치 받아오기
  const handleCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
            // const positionData = {
      //   key: 3745,
      //   position: new navermaps.LatLng(37.5432527996, 127.0566145649),
      //   title: "성수동 카페거리",
      // };
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );ㄴ
      setCurrentPosition(positionData.position);
      setNewPosition(positionData.position);
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
        const newMarkers = data.map((item, index) => ({
          key: index,
          position: new navermaps.LatLng(item.mapy, item.mapx),
          title: item.title,
          address: item.addr1,
          contentid: item.contentid,
          contentTypeId: item.contenttypeid,
        }));
        setMarkers(newMarkers);
        console.log("읽어온 데이터 : ", newMarkers);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  }, [handleCurrentLocation, navermaps, dataForbstacleApi]);
  const findRoute = () => {
    navigate("/findRoute");
  };
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
        console.error("Status Code:", error.response.status);
        console.error("Response Data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
      alert("검색 중 오류가 발생했습니다.");
    }
  };

  const handleRecommendationClick = () => {
    window.location.href = "/Route";
  };

  // 로딩 화면 시간 3초 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <AppSpash />
      ) : (
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
          // onClick={handleMapClick}
        >
          <SearchContainer visible={isContainersVisible}>
            <SearchInput
              type="text"
              placeholder="어디로 가볼까요?"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <FindRouteButton onClick={findRoute} />
          </SearchContainer>

          <ChipContainer visible={isContainersVisible}>
            <ChipWrapper>
              <Chip onClick={() => handleChipClick("restaurant")}>
                <img
                  src={
                    activeCategories.includes("restaurant")
                      ? RestaurantActive
                      : Restaurant
                  }
                  alt="Restaurant"
                  style={{ width: "77px", height: "33px" }}
                />
              </Chip>
              <Chip onClick={() => handleChipClick("cafe")}>
                <img
                  src={activeCategories.includes("cafe") ? CafeActive : Cafe}
                  alt="Cafe"
                  style={{ width: "77px", height: "33px" }}
                />
              </Chip>
              <Chip onClick={() => handleChipClick("parking")}>
                <img
                  src={
                    activeCategories.includes("parking")
                      ? ParkingActive
                      : Parking
                  }
                  alt="Parking"
                  style={{ width: "77px", height: "33px" }}
                />
              </Chip>
              <Chip onClick={() => handleChipClick("hotel")}>
                <img
                  src={activeCategories.includes("hotel") ? HotelActive : Hotel}
                  alt="Hotel"
                  style={{ width: "77px", height: "33px" }}
                />
              </Chip>
              <Chip onClick={() => handleChipClick("toilet")}>
                <img
                  src={
                    activeCategories.includes("toilet") ? ToiletActive : Toilet
                  }
                  style={{ width: "77px", height: "33px" }}
                  alt="Toilet"
                />
              </Chip>
            </ChipWrapper>
          </ChipContainer>
          <ChannelWindow
            style={{
              bottom: isSliderVisible ? "284px" : "100px",
              height: "45px",
            }}
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
              visibility: isSliderVisible ? "hidden" : "visible",
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
              {markers
                .filter(
                  (marker) =>
                    !contentsType || marker.contentTypeId === contentsType
                )
                .map((marker) => (
                  <Marker
                    key={marker.key}
                    position={marker.position}
                    title={marker.title}
                    icon={{
                      url: ActivePicker,
                      scaledSize: new navermaps.Size(40, 40),
                    }}
                    onClick={() => {
                      console.log("컨텐츠 아이디 :", marker.contentTypeId);
                      handleMarkerClick(marker);
                    }}
                  />
                ))}
            </NaverMap>
          )}
          {sliderVisible && selectedMarkerInfo && (
            <Slider
              sliderPosition={sliderPosition}
              sliderHeight={sliderHeight}
              handleSliderDragStart={handleSliderDragStart}
              handleSliderDragEnd={handleSliderDragEnd}
              handleSliderUpClick={toggleSliderHeight}
            >
              <SliderContent>
                <div>
                  <Header1>{selectedMarkerInfo.title}</Header1>
                  <Body4>{selectedMarkerInfo.address}</Body4>
                  <img
                    style={{
                      marginTop: "12px",
                      width: "171px",
                      height: "21px",
                    }}
                    src={LocationDetail}
                  />
                  <div style={{ marginTop: "24px" }}>
                    <img
                      src={PhoneShare}
                      style={{ width: "351px", height: "44px" }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: "24px",
                      posiitoin: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Divider}
                      style={{
                        position: "absolute",
                        top: 240,
                        zIndex: 0,
                        width: "100%",
                      }}
                      alt="Divider"
                    />
                    <img
                      src={ObstacleInfo}
                      style={{
                        zIndex: 1,
                        width: "84px",
                        height: "36px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* {serviceData &&
                    serviceData.map((service, index) => (
                      <img
                        key={index}
                        style={{
                          marginTop: "24px",
                          width: "60px",
                          height: "60px",
                        }}
                        src={service.image}
                        alt={service.name}
                      />
                    ))} */}
                    <ServiceIconsContainer>
                      <ServiceIcon src={ParkingService} alt="ParkingService" style={{height : '57px', width : "55px"}} />
                      {/* <ServiceIcon src={GuideDogService} alt="HelpDogService" /> */}
                      <ServiceIcon src={ToiletService} alt="ToiletService" style={{height : '57px', width : "55px"}} />
                      <ServiceIcon src={AudioService} alt="AudioService" style={{height : '57px', width : "55px"}} />
                      <ServiceIcon
                        src={TransportService}
                        alt="TransportService"
                        style={{height : '57px', width : "55px"}}
                      />
                    </ServiceIconsContainer>
                  </div>
                  <div
                    style={{
                      posiitoin: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={Divider}
                      style={{
                        position: "absolute",
                        top: 370,
                        zIndex: 0,
                        width: "100%",
                      }}
                      alt="Divider"
                    />
                    <img
                      src={Review}
                      style={{
                        zIndex: 1,
                        width: "96px",
                      }}
                    />
                  </div>
                  <img
                    style={{
                      width: "66px",
                      height: "21px",
                      marginLeft: "283px",
                    }}
                    src={RegisterReview}
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={Review1}
                      style={{
                        marginBottom: "8px",
                        width: "350px",
                        height: "37px",
                      }}
                    />
                    <img
                      src={Review2}
                      style={{
                        marginBottom: "8px",
                        width: "350px",
                        height: "37px",
                      }}
                    />
                    <img
                      src={Review3}
                      style={{
                        marginBottom: "8px",
                        width: "350px",
                        height: "37px",
                      }}
                    />
                    <img
                      src={Review4}
                      style={{ width: "350px", height: "37px" }}
                    />
                  </div>
                </div>
              </SliderContent>
            </Slider>
          )}
        </MapDiv>
      )}
    </ThemeProvider>
  );
};
export default AppMap;

const Slider = ({
  sliderPosition,
  sliderHeight,
  handleSliderDragStart,
  handleSliderDragEnd,
  handleSliderUpClick,
  children,
}) => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: sliderHeight,
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
    <button
      style={{
        position: "absolute",
        top: "8px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      onClick={handleSliderUpClick}
    >
      <img src={SliderUp} alt="SliderUp" />
    </button>
  </div>
);
const dataForbstacleApi =
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=1000&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";

const Body4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body4};
  font-weight: ${(props) => props.theme.fontWeights.Body4};
  line-height: ${(props) => props.theme.LineHeight.Body4};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: 8px;
`;
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: 8px;
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
const ChipContainer = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
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
  display: ${(props) => (props.visible ? "flex" : "none")};
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
const ServiceIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 24px;
`;
const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
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
