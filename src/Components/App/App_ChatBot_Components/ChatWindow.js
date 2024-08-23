import React, { useState } from 'react';
import styled from 'styled-components';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import BackIcon from '../../../Assets/img/back_icon.png';
import { sendQuestionToServer } from '../../../Api/ChatBotApi';

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
  padding: 10px;
  background-color: white;
  color: #5B5B5B;
  border-bottom: 1px solid #ccc;
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const BackIconImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.h1`
  font-size: 18px;
  color: #5B5B5B;
  margin: 0 auto;
  flex-grow: 1;
  text-align: center;
`;

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);  // messages와 setMessages 상태를 정의
    
    const sendMessage = async (text) => {
        const newMessage = { sender: 'user', text };
        setMessages([...messages, newMessage]);  // 사용자의 메시지를 먼저 추가

        // 챗봇의 응답 메시지를 추가
        const botAnswer = await sendQuestionToServer(text);  // 서버에 질문을 보내고 응답을 기다림
        const botResponse = { sender: 'bot', text: botAnswer };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
    };


    const handleBackClick = () => {
        window.history.back();  // 뒤로가기 기능을 구현
    };

    return (
        <ChatWindowContainer>
            <Header>
                <BackButton onClick={handleBackClick}>
                    <BackIconImage src={BackIcon} alt="뒤로가기" />
                </BackButton>
                <Title>무블챗봇</Title>
            </Header>
            <MessageList messages={messages} />
            <MessageInput onSend={sendMessage} />
        </ChatWindowContainer>
    );
};

export default ChatWindow;
