import React, { useState, useEffect, useRef, useCallback } from "react";
import styled, { keyframes } from "styled-components";

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
  align-items: center;
  position: relative;
`;

const TextInput = styled.input`
  flex: 1;
  padding: 12px 40px 12px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f2f2f3;
  font-size: 16px;
  outline: none;
`;

const SendButton = styled.button`
  position: absolute;
  right: 20px;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: none;
`;

const SendIcon = styled.img`
  width: ${(props) => (props.$isListening ? "36px" : "32px")};
  height: ${(props) => (props.$isListening ? "30px" : "26px")};
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 0, 0, 0);
  }
`;

const ListeningIndicator = styled.div`
  position: absolute;
  right: 70px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  animation: ${pulse} 1.5s infinite;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 10px;
`;

const MessageInput = ({ onSend }) => {
  // 상태 관리
  const [text, setText] = useState(""); // 입력된 텍스트를 관리
  const [isListening, setIsListening] = useState(false); // 음성 인식 상태를 관리
  const [error, setError] = useState(""); // 오류 메시지를 관리

  // useRef를 사용하여 음성 인식 객체와 타임아웃을 관리
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);

  // 메시지 전송 함수
  const handleSend = useCallback(() => {
    if (text.trim()) {
      onSend(text);
      setText("");
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
      }
    }
  }, [text, onSend, isListening]);

  // 타임아웃 리셋 함수 (음성 인식 중 일정 시간 동안 입력이 없으면 종료)
  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
        setError("음성 입력 시간이 초과되었습니다.");
      }
      // TODO: 타임아웃 왜 안 쳐먹음?
    }, 10000); // 10초 타임아웃
  }, [isListening]);

  // 음성 인식 초기화 및 이벤트 핸들러 설정
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = true;
      recog.lang = "ko-KR";

      // 음성 인식 시작 시 호출
      recog.onstart = () => {
        setIsListening(true);
        setError("");
        resetTimeout();
      };

      // 음성 인식 종료 시 호출
      recog.onend = () => {
        setIsListening(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };

      // 음성 인식 결과 처리
      recog.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setText(transcript);
        resetTimeout();
      };

      // 음성 인식 오류 처리
      recog.onerror = (event) => {
        setError(`음성 인식 오류: ${event.error}`);
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      };

      recognitionRef.current = recog;
    } else {
      console.warn("이 브라우저는 Speech Recognition을 지원하지 않습니다.");
      setError("이 브라우저는 음성 인식을 지원하지 않습니다.");
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetTimeout]);

  // 음성 인식 종료 시 자동 전송
  useEffect(() => {
    if (isListening === false && text.trim()) {
      handleSend();
    }
  }, [isListening, text, handleSend]);

  // 음성 인식 토글 함수
  const toggleListening = useCallback(() => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setText("");
      setError("");
      recognitionRef.current.start();
    }
  }, [isListening]);

  // 엔터 키 입력 시 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // 버튼 아이콘 결정 함수
  const getIconSrc = () => {
    if (text.trim() && !isListening) {
      return require("../../../Assets/img/send_icon.png");
    } else if (isListening) {
      return require("../../../Assets/img/speak_on.png");
    } else {
      return require("../../../Assets/img/speak_off.png");
    }
  };

  // UI 렌더링
  return (
    <InputContainer>
      <TextInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="무블 AI 도우미에게 질문해 주세요."
      />
      {isListening && <ListeningIndicator />}
      <SendButton
        onClick={text.trim() && !isListening ? handleSend : toggleListening}
      >
        <SendIcon src={getIconSrc()} alt="send" $isListening={isListening} />
      </SendButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default MessageInput;
