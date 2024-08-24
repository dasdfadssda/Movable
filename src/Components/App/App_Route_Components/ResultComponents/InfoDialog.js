import React from "react";
import styled from "styled-components";

// 라벨에 따른 아이콘 매핑
const iconMap = {
    "휠체어 이용": require("../../../../Assets/Map/wheelchair_service.png"),
    "장애인 화장실": require("../../../../Assets/Map/toilet_service.png"),
    "주차시설": require("../../../../Assets/Map/videoSub_service.png"),
    "오디오 가이드": require("../../../../Assets/Map/audioGuide_service.png"),
    "보조견 동반": require("../../../../Assets/Map/guideDog_service.png"),
    "접근로 낮음": require("../../../../Assets/Map/scope_service.png"),
};

const InfoDialog = ({ onClose, icons = [] }) => {
    const iconCount = icons.length;

    return (
        <DialogOverlay onClick={onClose}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <IconContainer iconCount={iconCount}>
                    {icons.map((label, index) => (
                        <IconWrapper key={label} iconCount={iconCount} isLast={index === icons.length - 1}>
                            <img src={iconMap[label]} alt={label} />
                        </IconWrapper>
                    ))}
                </IconContainer>
            </DialogContent>
        </DialogOverlay>
    );
};

export default InfoDialog;

const DialogOverlay = styled.div`
  position: fixed;
  top: 3%;
  left: 19%;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 중앙에 위치 */
  z-index: 1000;
`;

const DialogContent = styled.div`
  width: 100%;
  max-width: 280px;
  border-radius: 16px;
  padding: 24px;
  overflow-y: auto;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ iconCount }) => (iconCount <= 4 ? "space-between" : "flex-start")};
  padding: 12px;
  border: 1px solid #ed685a;
  border-radius: 8px;
  background-color: #fff;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${({ iconCount, isLast }) =>
    iconCount === 5 && isLast ? "100%" : iconCount <= 4 ? "23%" : "19%"};
  margin-bottom: ${({ iconCount, isLast }) => (iconCount === 5 && isLast ? "8px" : "0px")};
  justify-content: ${({ iconCount, isLast }) => (iconCount === 5 && isLast ? "center" : "initial")};

  img {
    width: 48px;
    height: 48px;
  }

  span {
    font-size: 0.75rem;
    color: #5b5b5b;
  }
`;
