import React, { useState } from "react";
import styled from "styled-components";
import InfoDialog from "./InfoDialog"; // 추가된 InfoDialog 컴포넌트

const Dialog = ({ item, onClose }) => {
    const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);

    const handleInfoClick = () => {
        setIsInfoDialogOpen(true);
    };

    const handleCloseInfoDialog = () => {
        setIsInfoDialogOpen(false);
    };

    return (
        <DialogOverlay onClick={onClose}>
            <DialogContainer onClick={(e) => e.stopPropagation()}>
                <DialogContent>
                    <Title>{item.Title}</Title>
                    <Image src={item.Image} alt={item.Title} />
                    <Description>{item.Description}</Description>

                    <DetailsContainer>
                        <DetailItem>
                            <DetailLabel>
                                방문 난이도
                                <InfoIcon onClick={handleInfoClick}>?</InfoIcon>
                            </DetailLabel>
                            <DetailValue>중</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailLabel>평점</DetailLabel>
                            <DetailValue>4.25</DetailValue>
                        </DetailItem>
                        <DetailItem>
                            <DetailLabel>소요 시간</DetailLabel>
                            <DetailValue>20분</DetailValue>
                        </DetailItem>
                    </DetailsContainer>

                    {isInfoDialogOpen && (
                        <InfoDialog 
                            onClose={handleCloseInfoDialog} 
                            icons={item.Icons}  // Icons 배열 전달
                        />
                    )}

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
  padding: 16px;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #ed685a;
  margin-bottom: 16px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
  max-height: 200px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #5b5b5b;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 16px;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

const DetailItem = styled.div`
  text-align: center;
`;

const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: #5b5b5b;
  position: relative;
`;

const DetailValue = styled.div`
  font-size: 1.25rem;
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
  margin-top: auto;
`;
