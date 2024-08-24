import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../Style/theme";
import { JejuPackage, TravelPackage } from "./mookData";
import ChipButton from "./ResultComponents/ChipButton";
import PackageItem from "./ResultComponents/PackageItem";
import Dialog from "./ResultComponents/Dialog";

const AnswerComponent = ({ answer, selectedRoutes }) => {
  const [activeButton, setActiveButton] = useState("1");
  const [mainPlace, setMainPlace] = useState("강원도 태백시");
  const [duringTime, setDuringTime] = useState("2시간 30분");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const daysToShow = 2;

  useEffect(() => {
    if (selectedRoutes[0] === 3) {
      if (activeButton === "1") {
        setMainPlace("제주도 제주시");
        setDuringTime("40분");
      } else if (activeButton === "2") {
        setMainPlace("제주 애월동");
        setDuringTime("30분");
      }
    } else {
      if (activeButton === "2") {
        setMainPlace("강원도 원주시");
        setDuringTime("30분");
      } else if (activeButton === "1") {
        setMainPlace("강원도 태백시");
        setDuringTime("2시간 30분");
      }
    }
  }, [activeButton]);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const buttons = [];
  for (let i = 1; i <= daysToShow; i++) {
    buttons.push(
      <ChipButton
        key={i}
        isActive={activeButton === i.toString()}
        onClick={() => setActiveButton(i.toString())}
      >
        {i}일차
      </ChipButton>
    );
  }

  const currentPackage = selectedRoutes[0] === 3 ? JejuPackage : TravelPackage;

  // Calculate total price for the selected day
  const totalPrice = currentPackage
    .filter((item) => item.day.toString() === activeButton)
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <ThemeProvider theme={theme}>
      <Div>
        <FlexDiv bottom={10.68}>{buttons}</FlexDiv>
        <FlexDiv bottom={8}>
          <ImageDiv
            src={require("../../../Assets/Route/vector_chip.png")}
            width={40}
            height={40}
          />
          <Body2>{mainPlace}</Body2>
        </FlexDiv>
        <FlexDiv flex={"flex-start"}>
          {activeButton === "1" ? (
            <ImageDiv
              src={require("../../../Assets/Route/colum_line.png")}
              width={24}
              height={638}
              left={8}
              right={8}
            />
          ) : (
            <ImageDiv
              src={require("../../../Assets/Route/colum_line.png")}
              width={24}
              height={638}
              left={8}
              right={8}
            />
          )}
          <ColumnDiv>
            <FlexDiv>
              <Body1 color={theme.colors.black_70} top={-5}>
                {selectedRoutes[0] === 3 && activeButton === "1" ? "비행기" : "자동차"}
              </Body1>
              <Body1 color={theme.colors.black_30} top={-5}>
                &nbsp;|&nbsp;
                <ColorfulText color="#A5A5A5">{duringTime}</ColorfulText>
              </Body1>
            </FlexDiv>
            <div>
              <PackageDiv>
                {currentPackage
                  .filter((item) => item.day.toString() === activeButton)
                  .map((item) => (
                    <PackageItem
                      key={item.id}
                      item={item}
                      onClick={() => handleClick(item)}
                    />
                  ))}
              </PackageDiv>
            </div>
          </ColumnDiv>
        </FlexDiv>
        {isDialogOpen && (
          <Dialog
            item={selectedItem}
            onClose={handleCloseDialog}
          />
        )}
        <FlexDiv style={{flexDirection:"column"}}>
          <Hr/>
          <TotalPriceText>1일차 예상 여행 비용</TotalPriceText>
          <TotalPrice>₩{totalPrice.toLocaleString()} ~</TotalPrice>
        </FlexDiv>
      </Div>
    </ThemeProvider>
  );
};

export default AnswerComponent;

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 93%;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
  flex-direction: column;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
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

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  line-height: ${(props) => props.theme.LineHeight.Body1};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: ${(props) => props.top}px;
`;

const Body2 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body2};
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  line-height: ${(props) => props.theme.LineHeight.Body2};
  color: ${(props) => props.theme.colors.black_70};
  font-family: "Pretendard";
  margin-bottom: 5px;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const PackageDiv = styled.div`
  margin-top: 38px;
`;

const ColorfulText = styled.span`
  color: ${(props) => props.color || "black"};
`;

const TotalPriceText = styled.div`
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: ${(props) => props.theme.colors.black_70};
  margin-bottom: 6px;
`;

const TotalPrice = styled.div`
  font-size:24px;
  font-weight: ${(props) => props.theme.fontWeights.Body2};
  color: ${(props) => props.theme.colors.Primary_pink100};
  margin-bottom: 10px;
`;

const Hr = styled.hr`
width : 180px;
height : 2px;
  margin-bottom: 10px;
  border : none;
    background-color: #E3E3E3;
  
`;


