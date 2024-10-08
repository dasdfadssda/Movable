import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

// 메시지를 감싸는 전체 컨테이너
const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
  align-items: flex-start;
  margin: 10px 0;
`;

// 아이콘과 텍스트를 포함하는 컨테이너
const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;

// 아이콘
const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

// 텍스트
const SenderName = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
  align-self: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
`;

// 메시지와 이름을 감싸는 컨테이너
const MessageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
`;

// 실제 메시지를 감싸는 컨테이너
const MessageBubble = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 100%;
  background-color: ${(props) => (props.$isUser ? "#ED685A" : "#f1f1f1")};
  color: ${(props) => (props.$isUser ? "white" : "black")};
  white-space: pre-wrap;
  word-break: break-word;
`;

const StopTTSButton = styled.button`
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 12px;
  margin-top: 5px;
`;

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(!isUser);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const speechRef = useRef(null);

  const startTTS = useCallback(() => {
    if ("speechSynthesis" in window && !isUser) {
      const speech = new SpeechSynthesisUtterance(message.text);
      speech.lang = "ko-KR";
      speech.rate = 1.4;
      speech.onend = () => setIsSpeaking(false);
      speech.onerror = () => setIsSpeaking(false);
      speechRef.current = speech;

      setIsSpeaking(true);
      window.speechSynthesis.speak(speech);
    }
  }, [message.text, isUser]);

  useEffect(() => {
    if (!isUser) {
      let i = 0;
      startTTS(); // TTS 즉시 시작
      const typingEffect = setInterval(() => {
        if (i < message.text.length) {
          setDisplayText((prev) => prev + message.text.charAt(i - 1));
          i++;
        } else {
          clearInterval(typingEffect);
          setIsTyping(false);
        }
      }, 50);

      return () => {
        clearInterval(typingEffect);
        if (speechRef.current) {
          window.speechSynthesis.cancel();
        }
      };
    } else {
      setDisplayText(message.text);
    }
  }, [message.text, isUser, startTTS]);

  const stopTTS = () => {
    if (speechRef.current) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <MessageContainer $isUser={isUser}>
      {!isUser && (
        <AvatarContainer>
          <Avatar
            src={require("../../../Assets/img/bot_icon.png")}
            alt="avatar"
          />
        </AvatarContainer>
      )}
      <MessageContentContainer $isUser={isUser}>
        {!isUser && <SenderName $isUser={isUser}>무블 AI 도우미</SenderName>}
        <MessageBubble $isUser={isUser}>
          {displayText}
          {isTyping && <span>|</span>}
        </MessageBubble>
        {!isUser && isSpeaking && (
          <StopTTSButton onClick={stopTTS}>TTS 중지</StopTTSButton>
        )}
      </MessageContentContainer>
    </MessageContainer>
  );
};

export default ChatMessage;
