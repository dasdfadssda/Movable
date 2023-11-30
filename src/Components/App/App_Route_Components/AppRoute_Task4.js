import React, { useState } from "react";
import styled from "styled-components";
import Visual from "../../../Assets/Route/문화시설.png";
import Hearing from "../../../Assets/Route/축제공연.png";
import Retardation from "../../../Assets/Route/자연휴향.png";
import Old from "../../../Assets/Route/레저스포츠.png";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 20px;
  column-gap: 0px;
  width: 96%;
  justify-items: center;
`;

const Div = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const ImageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 120px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(238, 122, 106, 0.25);
  border-color: transparent;
  position: relative;
  border: ${(props) =>
    props.selected ? "1px solid var(--Primary_pink50, #F7D7D2)" : "none"};
  background-color: ${(props) =>
    props.selected ? "var(--Primary_pink30, #FFF7F5)" : "white"};
`;

const Img = styled.img`
  width: ${(props) => (props.index === 3 ? "72px" : "48px")};
  height: ${(props) => (props.index === 3 ? "58px" : "58px")};
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const RouteTask4 = ({ onRouteSelect }) => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const imageUrls = [Visual, Hearing, Retardation, Old];

  const handleClick = (index) => {
    setSelectedBtn(index + 1);
    onRouteSelect(index + 1);
  };

  return (
    <Div>
      <ButtonGrid>
        {imageUrls.map((url, index) => (
          <ImageBtn
            key={index}
            onClick={() => handleClick(index)}
            selected={selectedBtn === index + 1}
          >
            <Img src={url} index={index} />
          </ImageBtn>
        ))}
      </ButtonGrid>
    </Div>
  );
};

export default RouteTask4;
