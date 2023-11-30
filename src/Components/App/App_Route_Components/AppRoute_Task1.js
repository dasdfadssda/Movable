import React, { useState } from "react";
import styled from "styled-components";
import BusanImg from "../../../Assets/Route/Busan_Text.png";
import DajeonImg from "../../../Assets/Route/Dajeon_Text.png";
import InCheonImg from "../../../Assets/Route/InCheon_Text.png";
import SeoulImg from "../../../Assets/Route/Seoul_Text.png";
import Jeju from "../../../Assets/Route/Jeju_Text.png";
import Jeounju from "../../../Assets/Route/Jeonju_Text.png";

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  column-gap: 22px;
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
  width: 99px;
  height: 120px;
  background: url(${(props) => props.imgUrl}) no-repeat center center/cover;
  background-size: 64px 45px;
  border-radius: 8px;
  box-shadow: 0px 0px 8px 0px rgba(238, 122, 106, 0.25);
  border-color: transparent;
`;

const RouteTask1 = () => {
  const [selectedBtn, setSelectedBtn] = useState(null);
  const imageUrls = [BusanImg, DajeonImg, InCheonImg, SeoulImg, Jeounju, Jeju];

  return (
    <Div>
      <ButtonGrid>
        {imageUrls.map((url, index) => (
          <ImageBtn
            key={index}
            imgUrl={url}
            onClick={() => setSelectedBtn(index + 1)}
          />
        ))}
      </ButtonGrid>
    </Div>
  );
};

export default RouteTask1;
