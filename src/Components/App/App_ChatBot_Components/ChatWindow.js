import React, { useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

// ChatWindow를 감싸는 컨테이너
const ChatWindowContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 좌우 아이템 간에 공간을 균등하게 배치 */
  padding: 10px;
  background-color: #fff;
  color: #000;
  border-bottom: 1px solid #ccc;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 0;
  color: #000;
`;

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);

    const sendMessage = (text) => {
        const newMessage = { sender: 'user', text };
        setMessages([...messages, newMessage]);
    };

    return (
        <ChatWindowContainer>
            <Header>
                <BackButton onClick={() => window.history.back()}>
                    <BackIcon src={require('../../../Assets/img/back_icon.png')} alt="뒤로가기" />
                </BackButton>
                <TitleContainer>
                    <Title>무블챗봇</Title>
                </TitleContainer>
            </Header>
            <MessageList messages={messages} />
            <MessageInput onSend={sendMessage} />
        </ChatWindowContainer>
    );
};

export default ChatWindow;
