import React from "react";
import styled from "styled-components";

// 라벨에 따른 아이콘 매핑
const iconMap = {
    "휠체어 이용": require("../../../../Assets/Map/wheelchair_service.png"),
    "장애인 화장실": require("../../../../Assets/Map/toilet_service.png"),
    "주차시설": require("../../../../Assets/Map/parking_service.png"),
    "오디오 가이드": require("../../../../Assets/Map/audioGuide_service.png"),
    "보조견 동반": require("../../../../Assets/Map/guideDog_service.png"),
    "접근로 낮음": require("../../../../Assets/Map/scope_service.png"),
};

const InfoDialog = ({ onClose, icons }) => {
    return (
        <DialogOverlay onClick={onClose}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
                <IconContainer>
                    {icons.map((label) => (
                        <IconWrapper key={label}>
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 중앙에 위치 */
  z-index: 1000;
`;

const DialogContent = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 그림자 크기를 조정하여 더 중앙에 부각 */
  overflow-y: auto;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid #ed685a;
  border-radius: 8px;
    background-color: #fff;

`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 48%; /* 각 아이콘의 너비를 48%로 설정하여 두 줄로 나열 */
  margin-bottom: 8px; /* 아이콘 간의 간격을 줄이기 위해 margin-bottom을 줄임 */

  img {
    width: 48px; /* 아이콘 크기를 조금 더 작게 조정 */
    height: 48px;
    margin-bottom: 4px; /* 아이콘과 텍스트 사이의 간격을 줄임 */
  }

  span {
    font-size: 0.75rem; /* 텍스트 크기를 조금 더 작게 조정 */
    color: #5b5b5b;
  }
`;

