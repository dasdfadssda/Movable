import {
  Container as MapDiv,
  NaverMap,
  Marker,
  Polyline,
} from "react-naver-maps";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState, useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import axios from "axios";
import currentLocation from "../../../Assets/img/currentPosition.svg";
import currentSpot from "../../../Assets/Map/currentLocation.png";
import CancelIcon from "../../../Assets/Map/FindRoute/Cancel_Icon.png";
import Oneimage from "../../../Assets/Map/FindRoute/FirstNum.png";
import Twoimage from "../../../Assets/Map/FindRoute/SecondNum.png";
import Thirdimage from "../../../Assets/Map/FindRoute/ThirdNum.png";
import BackIcon from "../../../Assets/Map/FindRoute/BackIcon.png";
import ActivePicker from "../../../Assets/img/_Picker=장애인 가능.png";
import AddButton from "../../../Assets/Map/FindRoute/addIcon.png";
import RemoveButton from "../../../Assets/Map/FindRoute/removeIcon.png";

const AppFindRoute = () => {
  const navermaps = window.naver.maps;
  const [naverMap, setNaverMap] = useState();
  const [currentPosition, setCurrentPosition] = useState(null);
  const [markers, setMarkers] = useState([]);
  const handleZoomChanged = useCallback((zoom) => {
    console.log(`zoom: ${zoom}`);
  }, []);
  const [newPosition, setNewPosition] = useState(null);

  // 검색어 관련 코드
  const [searchValue1, setSearchValue1] = useState("");
  const [searchValueNum1, setSearchValueNum1] = useState(4.33);
  const [searchValueText1, setSearchValueText1] = useState("중");
  const [searchValue1Data, setSearchValue1Data] = useState();
  const [searchValue2, setSearchValue2] = useState();
  const [searchValueNum2, setSearchValueNum2] = useState(3.7);
  const [searchValueText2, setSearchValueText2] = useState("하");
  const [searchValue2Data, setSearchValue2Data] = useState();
  const [searchValue3, setSearchValue3] = useState();
  const [searchValueNum3, setSearchValueNum3] = useState(4.5);
  const [searchValueText3, setSearchValueText3] = useState("상");
  const [searchValue3Data, setSearchValue3Data] = useState();
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isSearchClicked2, setIsSearchClicked2] = useState(false);
  const [isFindRoute, setIsFindRoute] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState();

  const handleSearchChange1 = (event) => {
    setSearchValue1(event.target.value);
  };
  const handleSearchChange2 = (event) => {
    setSearchValue2(event.target.value);
  };

  const handleSearchClick = () => {
    // 지도 화면서에서 검색을 눌렀을 때의 동작
    setIsSearchClicked(true);
  };

  // 최종 길찾기
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    const results = markers.filter((marker) =>
      marker.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResult(results);
    console.log("검색중인건 : ", results);
    setIsFindRoute(true);
  };

  const handleFindRouteClick = () => {};

  // 거리 계산
  const [distance, setDistance] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    if (searchValue2Data) {
      const fetchDistanceAndDuration = async () => {
        try {
          const directionResponse = await axios.post(
            `http://localhost:3001/calculateDistance`, // 서버 URL에 맞게 수정해주세요.
            {
              startLatitude: searchValue1Data.position.y,
              startLongitude: searchValue1Data.position.x,
              endLatitude: searchValue2Data.position.y,
              endLongitude: searchValue2Data.position.x,
            }
          );
          setDistance(directionResponse.data.distance);
          setDuration(directionResponse.data.duration);
        } catch (error) {
          console.error("Error calculating distance and duration:", error);
        }
      };

      fetchDistanceAndDuration();
    }
  }, [searchValue2Data]);

  useEffect(() => {
    if (searchValue3Data) {
      const fetchDistanceAndDuration = async () => {
        try {
          const directionResponse = await axios.post(
            `http://localhost:3001/calculateDistance`, // 서버 URL에 맞게 수정해주세요.
            {
              startLatitude: searchValue2Data.position.y,
              startLongitude: searchValue2Data.position.x,
              endLatitude: searchValue3Data.position.y,
              endLongitude: searchValue3Data.position.x,
            }
          );
          const beforeDistance = distance;
          const beforeDuration = duration;

          setDistance(directionResponse.data.distance + beforeDistance);
          setDuration(directionResponse.data.duration + beforeDuration);
        } catch (error) {
          console.error("Error calculating distance and duration:", error);
        }
      };

      fetchDistanceAndDuration();
    }
  }, [searchValue3Data]);

  // 밀리초를 시간과 분으로 변환하는 함수
  const convertMillisecondsToTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 1) {
      return `${hours}시간 ${minutes}분`;
    } else {
      return `${minutes}분`;
    }
  };

  // km 계산기
  function convertToKm(meters) {
    const km = meters / 1000;
    return km.toFixed(1) + "km";
  }

  const LastList = [
    {
      id: 1,
      place: "한동대학교",
      time: "12.3",
    },
    {
      id: 2,
      place: "서울숲",
      time: "12.3",
    },
    {
      id: 3,
      place: "전주성",
      time: "12.4",
    },
    {
      id: 4,
      place: "포항 해변의 꽃게",
      time: "12.5",
    },
    {
      id: 5,
      place: "한동대학교",
      time: "12.5",
    },
  ];

  const [list, setList] = useState(LastList);

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // 직선 거리계산
  const calcDistanceHaversine = (curObj, destObj) => {
    const currX = curObj["lat"]; // 출발지 위도
    const currY = curObj["lng"]; // 출발지 경도
    const destX = destObj["lat"]; // 목적지 위도
    const destY = destObj["lng"]; // 목적지 경도

    const radius = 6371; // 지구 반지름(km)
    const toRadian = Math.PI / 180;

    const deltaLat = Math.abs(currX - destX) * toRadian;
    const deltaLng = Math.abs(currY - destY) * toRadian;

    const squareSinDeltLat = Math.pow(Math.sin(deltaLat / 2), 2);
    const squareSinDeltLng = Math.pow(Math.sin(deltaLng / 2), 2);

    const squareRoot = Math.sqrt(
      squareSinDeltLat +
        Math.cos(currX * toRadian) *
          Math.cos(destX * toRadian) *
          squareSinDeltLng
    );

    const result = 2 * radius * Math.asin(squareRoot);

    return result;
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
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }
            );

            const address = reverseGeocodeResponse.data.address;
            console.log(
              "읽은 데이터 :",
              reverseGeocodeResponse.data.addressResult
            );
            setSearchValue1(address);
            const positionData = {
              key: -1,
              position: new navermaps.LatLng(
                position.coords.latitude,
                position.coords.longitude
              ),
              title: address,
            };
            setSearchValue1Data(positionData);
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
        const data = response.data.response.body.items.item;
        const newMarkers = data.map((item, index) => ({
          key: index,
          position: new navermaps.LatLng(item.mapy, item.mapx),
          title: item.title,
        }));
        setMarkers(newMarkers);
        console.log("무장애 데이터 :", newMarkers);
      })
      .catch((error) => {
        console.error("Error fetching data from the API", error);
      });
  }, [handleCurrentLocation, navermaps, dataForbstacleApi]);

  // 드레그 관련 코드
  const [flexDivs, setFlexDivs] = useState([
    {
      id: "1",
      searchValue: searchValue2,
      searchValueNum: searchValueNum2,
      searchValueText: searchValueText2,
      searchValueData: searchValue2Data,
    },
    {
      id: "2",
      searchValue: searchValue3,
      searchValueNum: searchValueNum3,
      searchValueText: searchValueText3,
      searchValueData: searchValue3Data,
    },
  ]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(flexDivs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFlexDivs(items);
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
          overflow: "hidden",
        }}
        onInitialized={(map) => setNaverMap(map)}
      >
        <SearchContainer boxShadow={true}>
          {!isSearchClicked ? (
            <>
              {searchValue2Data ? (
                <>
                  {searchValue3Data ? (
                    <>
                      <FlexDiv bottom={8}>
                        <div style={{ width: "100%" }}>
                          <FlexDiv bottom={8}>
                            <ImageDiv
                              src={require("../../../Assets/Map/FindRoute/Frame1.png")}
                              right={10}
                              width={16}
                              height={16}
                            />
                            <SearchInput
                              value={searchValue1}
                              onChange={handleSearchChange1}
                              image={Oneimage}
                            />
                            <CancelButton
                              ButtonImage={CancelIcon}
                              left={12}
                              right={-8}
                            />
                          </FlexDiv>
                          <FlexDiv bottom={8}>
                            <ImageDiv
                              src={require("../../../Assets/Map/FindRoute/Frame1.png")}
                              right={10}
                              width={16}
                              height={16}
                            />
                            <SearchInput
                              value={searchValue2}
                              onChange={handleSearchChange2}
                              placeholder="도착지 입력"
                              image={Twoimage}
                              onClick={handleSearchClick}
                            />
                            <InputButton
                              ButtonImage={RemoveButton}
                              onClick={() => {
                                setIsSearchClicked(true);
                              }}
                            />
                            <div style={{ width: "29px" }}></div>
                          </FlexDiv>
                          <FlexDiv>
                            <ImageDiv
                              src={require("../../../Assets/Map/FindRoute/Frame1.png")}
                              right={10}
                              width={16}
                              height={16}
                            />
                            <SearchInput
                              value={searchValue3}
                              onChange={handleSearchChange2}
                              placeholder="도착지 입력"
                              image={Thirdimage}
                              onClick={handleSearchClick}
                            />
                            <InputButton
                              ButtonImage={AddButton}
                              onClick={() => {
                                setIsSearchClicked(true);
                                setIsSearchClicked2(true);
                              }}
                            />
                            <div style={{ width: "29px" }}></div>
                          </FlexDiv>
                        </div>
                      </FlexDiv>
                      <FlexDiv justify={"center"}>
                        <InfoBox>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/CarIcon.png")}
                            width={24}
                            height={24}
                          />
                          <Body2>소요시간</Body2>
                          <Body3>{convertMillisecondsToTime(duration)}</Body3>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/PinkLine.png")}
                            width={1}
                            height={20}
                          />
                          <Body2>이동거리</Body2>
                          <Body3>{convertToKm(distance)}</Body3>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/PinkLine.png")}
                            width={1}
                            height={20}
                          />
                          <Body2>난이도</Body2>
                          <Body3>하</Body3>
                        </InfoBox>
                      </FlexDiv>
                    </>
                  ) : (
                    <>
                      <FlexDiv bottom={8}>
                        <ImageDiv
                          src={require("../../../Assets/Map/FindRoute/ChangeIcon.png")}
                          right={6}
                          width={24}
                          height={24}
                          left={-6}
                          onClick={() => {
                            const tempValue = searchValue1;
                            const tempData = searchValue1Data;
                            const tempNum1 = searchValueNum1;
                            const tempNum2 = searchValueNum2;
                            const tempText1 = searchValueText1;
                            const tempText2 = searchValueText2;

                            setSearchValue1(searchValue2);
                            setSearchValue1Data(searchValue2Data);
                            setSearchValueNum1(tempNum2);
                            setSearchValueText1(tempText2);

                            setSearchValue2(tempValue);
                            setSearchValue2Data(tempData);
                            setSearchValueNum2(tempNum1);
                            setSearchValueText2(tempText1);
                            setCurrentPosition(searchValue2Data.position);
                          }}
                        />

                        <div style={{ width: "100%" }}>
                          <FlexDiv bottom={8}>
                            <SearchInput
                              value={searchValue1}
                              onChange={handleSearchChange1}
                              image={Oneimage}
                            />
                            <CancelButton
                              ButtonImage={CancelIcon}
                              left={12}
                              right={-8}
                            />
                          </FlexDiv>
                          <FlexDiv>
                            <SearchInput
                              value={searchValue2}
                              onChange={handleSearchChange2}
                              placeholder="도착지 입력"
                              image={Twoimage}
                              onClick={handleSearchClick}
                            />
                            <InputButton
                              ButtonImage={AddButton}
                              onClick={() => {
                                setIsSearchClicked(true);
                                setIsSearchClicked2(true);
                              }}
                            />
                            <div style={{ width: "29px" }}></div>
                          </FlexDiv>
                        </div>
                      </FlexDiv>
                      <FlexDiv justify={"center"}>
                        <InfoBox>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/CarIcon.png")}
                            width={24}
                            height={24}
                          />
                          <Body2>소요시간</Body2>
                          <Body3>{convertMillisecondsToTime(duration)}</Body3>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/PinkLine.png")}
                            width={1}
                            height={20}
                          />
                          <Body2>이동거리</Body2>
                          <Body3>{convertToKm(distance)}</Body3>
                          <ImageDiv
                            src={require("../../../Assets/Map/FindRoute/PinkLine.png")}
                            width={1}
                            height={20}
                          />
                          <Body2>난이도</Body2>
                          <Body3>하</Body3>
                        </InfoBox>
                      </FlexDiv>
                    </>
                  )}
                </>
              ) : (
                <>
                  <FlexDiv bottom={8}>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/Frame1.png")}
                      right={10}
                      width={16}
                      height={16}
                    />
                    <SearchInput
                      value={searchValue1}
                      onChange={handleSearchChange1}
                      image={Oneimage}
                    />
                    <CancelButton
                      ButtonImage={CancelIcon}
                      left={12}
                      right={-8}
                    />
                  </FlexDiv>
                  <FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/Frame1.png")}
                      right={10}
                      width={16}
                      height={16}
                    />
                    <SearchInput
                      value={searchValue2}
                      onChange={handleSearchChange2}
                      placeholder="도착지 입력"
                      image={Twoimage}
                      onClick={handleSearchClick}
                    />
                    <div style={{ width: "29px" }}></div>
                  </FlexDiv>
                </>
              )}
            </>
          ) : (
            <>
              <FlexDiv bottom={16}>
                <CancelButton ButtonImage={BackIcon} />
                <FinRouteInput
                  placeholder="어디로 가볼까요?"
                  onClick={handleFindRouteClick}
                  onChange={handleInputChange}
                />
                <SearchButton>검색</SearchButton>
              </FlexDiv>
              <Hr />
              <FlexDiv>
                <BookMarkIcon
                  src={require("../../../Assets/Map/FindRoute/BookMarkIcon.png")}
                />
                <BookMarkText>저장한 장소</BookMarkText>
              </FlexDiv>
              <ThickHR />
            </>
          )}
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
            left: 6,
            bottom: searchValue2Data ? 200 : 10,
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
            defaultZoom={11}
            onZoomChanged={handleZoomChanged}
          >
            <Marker
              position={currentPosition}
              icon={{
                url: !searchValue2Data ? currentSpot : ActivePicker,
                scaledSize: new navermaps.Size(40, 40),
                anchor: new navermaps.Point(20, 35),
              }}
            />
            {searchValue2Data && (
              <Marker
                key={searchValue2Data.key}
                position={searchValue2Data.position}
                title={searchValue2Data.title}
                icon={{
                  url: ActivePicker,
                  scaledSize: new navermaps.Size(40, 40),
                  anchor: new navermaps.Point(20, 35),
                }}
              />
            )}
            {searchValue3Data && (
              <Marker
                key={searchValue3Data.key}
                position={searchValue3Data.position}
                title={searchValue3Data.title}
                icon={{
                  url: ActivePicker,
                  scaledSize: new navermaps.Size(40, 40),
                  anchor: new navermaps.Point(20, 35),
                }}
              />
            )}
            {searchValue2Data && (
              <Polyline
                path={[searchValue1Data.position, searchValue2Data.position]}
                strokeColor={"#EE7A6A"}
                strokeOpacity={0.6}
                strokeWeight={5}
              />
            )}
            {searchValue3Data && (
              <Polyline
                path={[searchValue2Data.position, searchValue3Data.position]}
                strokeColor={"#EE7A6A"}
                strokeOpacity={0.6}
                strokeWeight={5}
              />
            )}
          </NaverMap>
        )}
        {isSearchClicked &&
          (!isFindRoute ? (
            <SearchContents>
              {list.map((item) => (
                <ListItem key={item.id}>
                  {item.place}
                  <ListDiv justify={"flex-end"} flex={"center"}>
                    {item.time}
                    <CancelButton2
                      onClick={() => handleDelete(item.id)}
                      ButtonImage={CancelIcon}
                      width={16}
                      height={16}
                    />
                  </ListDiv>
                </ListItem>
              ))}
            </SearchContents>
          ) : (
            <SearchContents>
              {!isSearchClicked2 ? (
                <>
                  {result.map((item) => {
                    const currentPosition = {
                      lat: newPosition.lat(),
                      lng: newPosition.lng(),
                    };
                    const itemPosition = {
                      lat: item.position.y,
                      lng: item.position.x,
                    };
                    const distance = calcDistanceHaversine(
                      currentPosition,
                      itemPosition
                    );
                    return (
                      <ListItem2
                        key={item.key}
                        onClick={() => {
                          setIsSearchClicked(false);
                          setIsFindRoute(false);
                          console.log("클릭 : ", item);
                          setSearchValue2(item.title);
                          setSearchValue2Data(item);
                        }}
                      >
                        {item.title}
                        <ListDiv justify={"flex-end"} flex={"center"}>
                          {distance.toFixed(2)}km
                        </ListDiv>
                      </ListItem2>
                    );
                  })}
                </>
              ) : (
                <>
                  {result.map((item) => {
                    const currentPosition = {
                      lat: newPosition.lat(),
                      lng: newPosition.lng(),
                    };
                    const itemPosition = {
                      lat: item.position.y,
                      lng: item.position.x,
                    };
                    const distance = calcDistanceHaversine(
                      currentPosition,
                      itemPosition
                    );
                    return (
                      <ListItem2
                        key={item.key}
                        onClick={() => {
                          setIsSearchClicked(false);
                          setIsFindRoute(false);
                          console.log("클릭 : ", item);
                          setSearchValue3(item.title);
                          setSearchValue3Data(item);
                        }}
                      >
                        {item.title}
                        <ListDiv justify={"flex-end"} flex={"center"}>
                          {distance.toFixed(2)}km
                        </ListDiv>
                      </ListItem2>
                    );
                  })}
                </>
              )}
            </SearchContents>
          ))}
        {searchValue2Data && (
          <>
            {searchValue3Data ? (
              <>
                <FlexDiv>
                  <PlaceContainer>
                    <MakerImg
                      src={require("../../../Assets/Map/FindRoute/FirstMaker.png")}
                    />
                    <Body4>{searchValue1}</Body4>
                    <FlexDiv width={78} flex={"center"}>
                      <ImageDiv
                        src={require("../../../Assets/Map/FindRoute/StartIcon.png")}
                        width={14}
                        height={14}
                        top={-1.5}
                      />
                      <PlaceText>
                        &nbsp;{searchValueNum1}&nbsp;&nbsp;
                        <ColorfulText color="#A5A5A5">
                          난이도&nbsp;&nbsp;
                        </ColorfulText>
                      </PlaceText>
                      <PlaceDiffText>{searchValueText1}</PlaceDiffText>
                    </FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/StartLine.png")}
                      width={119}
                      height={4}
                      top={8}
                      right={-10}
                    />
                  </PlaceContainer>
                  <PlaceContainer left={45}>
                    <MakerImg
                      src={require("../../../Assets/Map/FindRoute/SecondMarker.png")}
                    />
                    <Body4>{searchValue2}</Body4>
                    <FlexDiv width={78} flex={"center"}>
                      <ImageDiv
                        src={require("../../../Assets/Map/FindRoute/StartIcon.png")}
                        width={14}
                        height={14}
                        top={-1.5}
                      />
                      <PlaceText>
                        &nbsp;{searchValueNum2}&nbsp;&nbsp;
                        <ColorfulText color="#A5A5A5">
                          난이도&nbsp;&nbsp;
                        </ColorfulText>
                      </PlaceText>
                      <PlaceDiffText>{searchValueText2}</PlaceDiffText>
                    </FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/LastMaker.png")}
                      width={68}
                      height={4}
                      top={8}
                      left={-56}
                    />
                  </PlaceContainer>
                  <PlaceContainer left={86}>
                    <MakerImg
                      src={require("../../../Assets/Map/FindRoute/ThirdMaker.png")}
                    />
                    <Body4>{searchValue3}</Body4>
                    <FlexDiv width={78} flex={"center"}>
                      <ImageDiv
                        src={require("../../../Assets/Map/FindRoute/StartIcon.png")}
                        width={14}
                        height={14}
                        top={-1.5}
                      />
                      <PlaceText>
                        &nbsp;{searchValueNum3}&nbsp;&nbsp;
                        <ColorfulText color="#A5A5A5">
                          난이도&nbsp;&nbsp;
                        </ColorfulText>
                      </PlaceText>
                      <PlaceDiffText>{searchValueText3}</PlaceDiffText>
                    </FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/LastMaker.png")}
                      width={68}
                      height={4}
                      top={8}
                      left={-56}
                    />
                  </PlaceContainer>
                </FlexDiv>
              </>
            ) : (
              <>
                <FlexDiv>
                  <PlaceContainer>
                    <MakerImg
                      src={require("../../../Assets/Map/FindRoute/FirstMaker.png")}
                    />
                    <Body4>{searchValue1}</Body4>
                    <FlexDiv width={78} flex={"center"}>
                      <ImageDiv
                        src={require("../../../Assets/Map/FindRoute/StartIcon.png")}
                        width={14}
                        height={14}
                        top={-1.5}
                      />
                      <PlaceText>
                        &nbsp;{searchValueNum1}&nbsp;&nbsp;
                        <ColorfulText color="#A5A5A5">
                          난이도&nbsp;&nbsp;
                        </ColorfulText>
                      </PlaceText>
                      <PlaceDiffText>{searchValueText1}</PlaceDiffText>
                    </FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/StartLine.png")}
                      width={119}
                      height={4}
                      top={8}
                      right={-10}
                    />
                  </PlaceContainer>
                  <PlaceContainer left={45}>
                    <MakerImg
                      src={require("../../../Assets/Map/FindRoute/SecondMarker.png")}
                    />
                    <Body4>{searchValue2}</Body4>
                    <FlexDiv width={78} flex={"center"}>
                      <ImageDiv
                        src={require("../../../Assets/Map/FindRoute/StartIcon.png")}
                        width={14}
                        height={14}
                        top={-1.5}
                      />
                      <PlaceText>
                        &nbsp;{searchValueNum2}&nbsp;&nbsp;
                        <ColorfulText color="#A5A5A5">
                          {searchValueText2}&nbsp;&nbsp;
                        </ColorfulText>
                      </PlaceText>
                      <PlaceDiffText>하</PlaceDiffText>
                    </FlexDiv>
                    <ImageDiv
                      src={require("../../../Assets/Map/FindRoute/LastMaker.png")}
                      width={68}
                      height={4}
                      top={8}
                      left={-56}
                    />
                  </PlaceContainer>
                </FlexDiv>
              </>
            )}
          </>
        )}
      </MapDiv>
    </ThemeProvider>
  );
};

export default AppFindRoute;

const dataForbstacleApi =
  "https://apis.data.go.kr/B551011/KorWithService1/areaBasedSyncList1?numOfRows=10000&MobileOS=ETC&MobileApp=asdf&_type=json&serviceKey=jY6dYXyUO1l9FcTho0NZvdOzVGZDgBV3%2BiJXkviw%2BB8J1yRS%2BfNP%2FH7gAcUyJ4PbM8JG0Mf3YtXmgKfUg3AqdA%3D%3D";

const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  z-index: 999;
  background-color: white;
  height: auto;
  flex-direction: column;
  ${(props) =>
    props.boxShadow && `box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.15);`}
`;

const SearchContents = styled.div`
  position: absolute;
  margin-top: 108px;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  z-index: 999;
  background-color: white;
  height: 100%;
  flex-direction: column;
`;

const CancelButton2 = styled.button`
  width: ${(props) => props.width || 24}px;
  height: ${(props) => props.height || 24}px;
  background: url(${(props) => props.ButtonImage}) no-repeat center/contain;
  border: none;
  background-size: 24px;
  margin-left: 16px;
  margin-right: 22px;
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
`;

const ListItem2 = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 94%;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 16px;
  padding-bottom: 16px;
  padding-left: 12px;
`;

const ListDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  margin-bottom: ${(props) => props.bottom}px;
  align-items: center;
  align-items: ${(props) => props.flex};
  color: var(--black-50, #a5a5a5);
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const FlexDiv = styled.div`
  display: flex;
  width: ${(props) => props.width || 98}%;
  justify-content: ${(props) => props.justify || "flex-start"};
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
  text-indent: 20px;
  height: 32px;
  background-image: url(${(props) => props.image});
  background-position: left 10px center;
  background-repeat: no-repeat;
  background-size: 16px;
  padding-left: 16px;

  &::placeholder {
    color: var(--black-50, #a5a5a5);
    font-family: "Pretendard";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
  &:focus {
    background-image: none;
    background-position: -10px center;
    text-indent: 0;
    width: calc(90%);
  }
  &:focus:not(:placeholder-shown) {
    color: var(--black-90, #1f1f1f);
    font-family: "Pretendard";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }
`;

const CancelButton = styled.button`
  width: ${(props) => props.width || 24}px;
  height: ${(props) => props.height || 24}px;
  background: url(${(props) => props.ButtonImage}) no-repeat center/contain;
  border: none;
  background-size: 32px;
  margin-right: ${(props) => props.right || 12}px;
  margin-left: ${(props) => props.left || 0}px;
`;

const BookMarkIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 4px;
`;

const BookMarkText = styled.div`
  color: var(--Primary_pink100, #ed685a);
  font-family: "Pretendard";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-left: 8px;
`;

const SearchButton = styled.button`
  width: 49px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.Primary_pink100};
  color: var(--White, #fff);
  font-family: "Pretendard";
  font-style: normal;
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  border: none;
`;

const FinRouteInput = styled.input`
  border: none;
  width: calc(96%);

  &::placeholder {
    color: var(--black-50, #a5a5a5);
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
  }

  &:focus {
    outline: none;

    &::placeholder {
      color: var(--black-90, #1f1f1f);
      font-family: "Pretendard";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
    }
  }
`;

const Hr = styled.hr`
  width: 100%;
  height: 0.8px;
  background-color: #a5a5a5;
  margin-top: 39px;
  position: absolute;
  border: none;
  left: 0;
  right: 0;
`;

const ThickHR = styled.hr`
  width: 100%;
  height: 8px;
  background-color: #e3e3e3;
  margin-top: 90px;
  position: absolute;
  border: none;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const InfoBox = styled.div`
  border-radius: 4px;
  border: 1px solid #ee7a6a;
  background: #fff7f5;
  width: 98%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
  margin-top: 8px;
  margin-bottom: 4px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: ${(props) => props.theme.LineHeight.Body2};
  color: #a5a5a5;
  font-family: "Pretendard";
`;

const Body3 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body3};
  font-weight: ${(props) => props.theme.fontWeights.Body3};
  line-height: ${(props) => props.theme.LineHeight.Body3};
  color: #ee7a6a;
  font-family: "Pretendard";
`;

const Body4 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body4};
  font-weight: ${(props) => props.theme.fontWeights.Body4};
  line-height: ${(props) => props.theme.LineHeight.Body4};
  color: #1f1f1f;
  font-family: "Pretendard";
  margin-top: 12px;
  height: auto;
  height: 64px;
  word-break: keep-all;
  width: 90%;
  margin-left: 24px;
  margin-bottom: 16px;
  /* background-color: red; */
`;

const InputButton = styled.button`
  width: ${(props) => props.width || 20}px;
  height: ${(props) => props.height || 20}px;
  background: url(${(props) => props.ButtonImage}) no-repeat center/contain;
  border: none;
  position: absolute;
  left: 77%;
`;

const PlaceContainer = styled.div`
  width: 136px;
  height: 136px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(238, 122, 106, 0.25);
  position: absolute;
  bottom: 5%;
  left: ${(props) => props.left || 5}%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MakerImg = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -34;
  left: -16px;
  margin-top: -18px;
`;

const PlaceText = styled.div`
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const ColorfulText = styled.span`
  color: ${(props) => props.color || "black"};
`;

const PlaceDiffText = styled.div`
  color: #ee7a6a;
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
`;
