import React, { useState } from "react";
import styled from "styled-components";
import BusanImg from "../../../Assets/Route/Busan_Text.png";
import DajeonImg from "../../../Assets/Route/Dajeon_Text.png";
import InCheonImg from "../../../Assets/Route/InCheon_Text.png";
import Gwangwon from "../../../Assets/Route/강원.png";
import Jeju from "../../../Assets/Route/Jeju_Text.png";
import Jeounju from "../../../Assets/Route/Jeonju_Text.png";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
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
  width: 64px;
  height: 45px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const RouteTask1 = ({ onRouteSelect }) => { 
  const [selectedBtn, setSelectedBtn] = useState(null);
  const imageUrls = [BusanImg, Gwangwon, Jeju, InCheonImg, Jeounju, DajeonImg];

  const handleClick = (index) => { 
    setSelectedBtn(index + 1);
    onRouteSelect(index + 1);
  }

  return (
    <Div>
      <ButtonGrid>
        {imageUrls.map((url, index) => (
          <ImageBtn
            key={index}
            onClick={() => handleClick(index)} 
            selected={selectedBtn === index + 1}
          >
            <Img src={url} />
          </ImageBtn>
        ))}
      </ButtonGrid>
    </Div>
  );
};

export default RouteTask1;
