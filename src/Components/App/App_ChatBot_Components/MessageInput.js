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
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const recognitionRef = useRef(null);
  const timeoutRef = useRef(null);
  const lastTranscriptRef = useRef("");

  const handleSend = useCallback(() => {
    if (text.trim()) {
      onSend(text);
      setText("");
      lastTranscriptRef.current = "";
    }
  }, [text, onSend]);

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (isListening && recognitionRef.current) {
        recognitionRef.current.stop();
        setError("음성 입력 시간이 초과되었습니다.");
      }
    }, 10000);
  }, [isListening]);

  const handleSpeechEnd = useCallback(() => {
    setIsListening(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (lastTranscriptRef.current.trim()) {
      setText(lastTranscriptRef.current);
      if (onSend) {
        onSend(lastTranscriptRef.current);
      } else {
        console.warn("onSend prop is not defined");
      }
      setText("");
    }
  }, [onSend]);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recog = new SpeechRecognition();
      recog.continuous = false;
      recog.interimResults = true;
      recog.lang = "ko-KR";

      recog.onstart = () => {
        setIsListening(true);
        setError("");
        resetTimeout();
        lastTranscriptRef.current = "";
      };

      recog.onend = handleSpeechEnd;

      recog.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        lastTranscriptRef.current = transcript;
        setText(transcript);
        resetTimeout();
      };

      recog.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setError(`음성 인식 오류: ${event.error}`);
        setIsListening(false);
      };

      recognitionRef.current = recog;
    } else {
      console.warn("이 브라우저는 Speech Recognition을 지원하지 않습니다.");
      setError("이 브라우저는 음성 인식을 지원하지 않습니다.");
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetTimeout, handleSpeechEnd]);

  const toggleListening = useCallback(() => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setText("");
      setError("");
      recognitionRef.current.start();
    }
  }, [isListening]);

  const getIconSrc = () => {
    if (text.trim() && !isListening) {
      return require("../../../Assets/img/send_icon.png");
    } else if (isListening) {
      return require("../../../Assets/img/speak_on.png");
    } else {
      return require("../../../Assets/img/speak_off.png");
    }
  };

  return (
    <InputContainer>
      <TextInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && !isListening && handleSend()}
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
