import React from "react";
import styled from "styled-components";
import { theme } from "../../../../Style/theme";

const PackageItem = ({ item, onClick }) => {
  return (
    <Item onClick={onClick}>
      <TravelCategory>{item.Category}</TravelCategory>
      <FlexDiv flex={"flex-start"}>
        <ImageDiv
          src={item.Image}
          alt={item.Title}
          width={110}
          height={70}
          left={-5}
        />
        <PackageInfo>
          <FlexDiv flex={"center"} bottom={5}>
            <TravelTitle>{item.Title}</TravelTitle>
            <TravelPosition> &nbsp;{item.position}</TravelPosition>
          </FlexDiv>
          <FlexDiv flex={"flex-start"}>
            <Body1 color={theme.colors.black_50}>난이도&nbsp;</Body1>
            <Body1 color={theme.colors.Primary_pink100}>{item.difficulty}&nbsp;</Body1>
            <ImageDiv
              src={require("../../../../Assets/Route/travelLine.png")}
              width={1.5}
              height={13}
              right={5}
              top={1.2}
            />
            <ImageDiv
              src={require("../../../../Assets/Route/StarIcon.png")}
              width={14}
              height={14}
              right={4}
            />
            <TravelDifficultyNum>{item.difficultynum}</TravelDifficultyNum>
          </FlexDiv>
          <FlexDiv flex={"center"}>
            <TravelTime>
              <span>자동차</span> <span>&nbsp;|&nbsp;</span>
              <span>{item.time}</span>
            </TravelTime>
          </FlexDiv>
          <FlexDiv flex={"center"}>
            <TravelTime>
              <span>예상금액</span> <span>&nbsp;|&nbsp;</span>
              <span>{item.time}</span>
            </TravelTime>
          </FlexDiv>
        </PackageInfo>
      </FlexDiv>
    </Item>
  );
};

export default PackageItem;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #E3E3E3;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
`;

const TravelCategory = styled.div`
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
`;

const TravelTitle = styled.div`
  color: var(--Primary_pink100, #ed685a);
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  line-height: 140%;
  margin-top: 5px;
`;

const TravelPosition = styled.div`
  color: var(--black-50, #a5a5a5);
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  margin-top: 5px;
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

const PackageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  justify-content: flex-start;
  margin-left: 8px;
`;

const TravelDifficultyNum = styled.div`
  color: var(--black-70, #5b5b5b);
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
`;

const TravelTime = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
`;

const Body1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Body1};
  font-weight: ${(props) => props.theme.fontWeights.Body1};
  line-height: ${(props) => props.theme.LineHeight.Body1};
  color: ${(props) => props.color};
  font-family: "Pretendard";
  margin-top: ${(props) => props.top}px;
`;
