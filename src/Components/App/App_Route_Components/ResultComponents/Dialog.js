import React, { useState } from "react";
import styled from "styled-components";
import InfoDialog from "./InfoDialog"; // 추가된 InfoDialog 컴포넌트
import CrowdGraph from "./CrowdGraph";

const Dialog = ({ item, onClose }) => {
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

    const handleInfoClick = () => {
        setIsInfoDialogOpen(true);
        console.log(' icons={item.Icons}  : ', item.Icons );
    };

    const handleCloseInfoDialog = () => {
        setIsInfoDialogOpen(false);
    };

    return (
        <DialogOverlay onClick={onClose}>
            <DialogContainer onClick={(e) => e.stopPropagation()}>
                <DialogContent>
                <TravelCategory>{item.Category}</TravelCategory>
                    <Title>{item.Title}</Title>
                    <Image src={item.Image} alt={item.Title} />
                    <Description>{item.Description}</Description>
                    <div style={{width : "100%", display: 'flex', alignItems:'center', justifyContent : 'center'}}>
                    <DetailsContainer>
                        <DetailItem>
                            <DetailLabel>
                                방문 난이도
                                <InfoIcon onClick={handleInfoClick}>?</InfoIcon>
                            </DetailLabel>
                            <DetailValue>중</DetailValue>
                        </DetailItem>
                        <Hr/>
                        <DetailItem>
                            <DetailLabel>평점</DetailLabel>
                            <DetailValue>4.25</DetailValue>
                        </DetailItem>
                        <Hr/>
                        <DetailItem>
                            <DetailLabel>소요 시간</DetailLabel>
                            <DetailValue>20분</DetailValue>
                        </DetailItem>
                    </DetailsContainer>
                    </div>
                    {isInfoDialogOpen && (
                        <InfoDialog 
                            onClose={handleCloseInfoDialog} 
                            icons={item.Icons}  // Icons 배열 전달
                        />
                    )}
                      {item.graph && <CrowdGraph data={item.graph} />}
                    <Button>더 알아보기</Button>
                </DialogContent>
            </DialogContainer>
        </DialogOverlay>
    );
};

export default Dialog;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  border-radius: 16px 16px 0 0;
  padding: 24px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;

const Title = styled.div`
  font-size: 24px;
  color: #ed685a;
  margin-bottom: 6px;
  text-align: center;
    font-weight: 500;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-height: 180px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #5b5b5b;
  line-height: 1.5;
  text-align: start;
  padding-left: 3px;
  margin-top : 12px;
  margin-bottom : 12px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
`;

const DetailItem = styled.div`
  text-align: center;
`;

const DetailLabel = styled.div`
  font-size: 13px;
  color: #A5A5A5;
  position: relative;
`;

const DetailValue = styled.div`
  font-size: 25px;
  color: #ed685a;
  margin-top: 5px;
`;

const InfoIcon = styled.span`
  font-size: 0.75rem;
  color: #ed685a;
  cursor: pointer;
  margin-left: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #ffe3e3;
  color: #ed685a;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
`;

const TravelCategory = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 500;
  line-height: 140%;
  color : #A5A5A5;
margin-bottom: 4px;

`;

const Hr = styled.hr`
height : 54px;
color : #A5A5A5;
border : 0.5px solid #A5A5A5;
background-color : #A5A5A5;
`;
