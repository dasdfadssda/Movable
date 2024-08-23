import React, { useState, useCallback } from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import BackIcon from "../../../Assets/img/back_icon.png";
import { sendQuestionToServer } from "../../../Api/ChatBotApi";

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
  color: #5b5b5b;
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
  color: #5b5b5b;
  margin: 0 auto;
  flex-grow: 1;
  text-align: center;
`;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback(async (text) => {
    // 사용자 메시지 추가
    const userMessage = { sender: "user", text };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      // 서버에 요청 보내기
      const botAnswer = await sendQuestionToServer(text);

      // 봇 메시지 추가
      const botMessage = { sender: "bot", text: botAnswer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error getting bot response:", error);
      // 에러 메시지 추가
      const errorMessage = {
        sender: "bot",
        text: "죄송합니다. 응답을 받아오는 데 문제가 발생했습니다.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  }, []);

  const handleBackClick = () => {
    window.history.back();
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
