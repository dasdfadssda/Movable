import React, { useState } from 'react';
import styled from 'styled-components';
import Recommendation from "../../../Assets/Map/recommendedCourse.png";
import ChannelTalk from "../../../Assets/Map/talk.png";
import ChannelInfo from "../../../Assets/Map/TalkInfoWindow.png";
import ChannelBot from "../../../Assets/Map/chatBot_icon.png";

// 컨테이너 스타일링
const Container = styled.div`
  position: fixed;
  bottom: 18px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 아이콘 버튼 스타일링
const IconButton = styled.button`
  background-color: transparent; 
  border: none;
  border-radius: 50%;
  width: 60px; 
  height: 60px;
  display: ${props => (props.visible ? 'flex' : 'none')}; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

// 닫기 버튼 스타일링 (IconButton과 동일한 위치에 대체됨)
const CloseButton = styled.button`
  background-color: white; 
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: ${props => (props.visible ? 'flex' : 'none')}; 
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 60px;
  height: 60px;
  opacity: ${props => (props.loaded ? 1 : 0)};
  transition: opacity 0.3s ease-in;
`;

const OptionsMenu = styled.div`
  position: absolute;
  bottom: 60px;  
  right: 0;
  display: ${props => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-end;
`;

const FloatingActionButton = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <Container>
            <IconButton onClick={toggleMenu} visible={!menuVisible}>
                <IconImage
                    src={require('../../../Assets/img/bot_icon.png')}
                    alt="main icon"
                    loaded={imageLoaded}
                    onLoad={handleImageLoaded}
                />
            </IconButton>
            <CloseButton onClick={toggleMenu} visible={menuVisible}>
                X
            </CloseButton>
            <OptionsMenu visible={menuVisible}>
                <ChannelWindow
                    src={ChannelInfo}
                    alt="Channel Info"
                />
                <ChannelTalkBtn
                    onClick={toggleMenu}
                />
                <ChannelChatBot />

                <RecommendationButton
                    onClick={toggleMenu}
                />
            </OptionsMenu>
        </Container>
    );
};

export default FloatingActionButton;

// 추가적인 스타일 정의
const RecommendationButton = styled.button`
  margin-top: 8px;
  width: 101px;
  height: 36px;
  cursor: pointer;
  background: none;
  background-image: url(${Recommendation});
  background-size: cover;
  border: none;
  padding: 0;
`;
const ChannelTalkBtn = styled.button`
  margin-top: 6px;
  width: 101px;
  height: 36px;
  cursor: pointer;
  background: none;
  background-image: url(${ChannelTalk});
  background-size: cover;
  border: none;
  padding: 0;
`;

const ChannelChatBot = styled.button`
  margin-top: 8px;
  width: 101px;
  height: 36px;
  cursor: pointer;
  background: none;
  background-image: url(${ChannelBot});
  background-size: cover;
  border: none;
  padding: 0;
`;
const ChannelWindow = styled.img`
  width: 143px;
  height: 45px;
`;
