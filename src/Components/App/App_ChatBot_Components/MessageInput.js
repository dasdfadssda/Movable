import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 입력창과 전송 버튼을 감싸는 컨테이너
const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
  align-items: center;
  position: relative;  
`;

// 텍스트 입력창
const TextInput = styled.input`
  flex: 1;
  padding: 12px 40px 12px 10px; 
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #F2F2F3;
  font-size: 16px;
  outline: none;
`;

// 전송 버튼
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
`;

const SendIcon = styled.img`
  width: ${(props) => (props.isListening ? '36px' : '32px')}; 
  height: ${(props) => (props.isListening ? '30px' : '26px')}; 
`;


const MessageInput = ({ onSend }) => {
    const [text, setText] = useState('');
    const [isListening, setIsListening] = useState(false); // STT 활성화 상태
    const [recognition, setRecognition] = useState(null);  // SpeechRecognition 객체

    // STT 기능 초기화
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recog = new SpeechRecognition();
            recog.continuous = false;
            recog.interimResults = false;
            recog.lang = 'ko-KR';

            recog.onstart = () => setIsListening(true);
            recog.onend = () => setIsListening(false);
            recog.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setText(transcript); // STT 결과를 텍스트로 설정
            };

            setRecognition(recog);
        } else {
            console.warn("이 브라우저는 Speech Recognition을 지원하지 않습니다.");
        }
    }, []);

    const handleSend = () => {
        if (text.trim()) {
            onSend(text); // 부모 컴포넌트로 메시지를 전달
            setText('');  // 입력 필드 초기화
        }
    };

    const handleSttButtonClick = () => {
        if (isListening) {
            recognition.stop(); // STT 종료
        } else {
            recognition.start(); // STT 시작
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const getIconSrc = () => {
        if (text.trim()) {
            return require('../../../Assets/img/send_icon.png'); // Input에 데이터가 있으면 전송 아이콘
        } else if (isListening) {
            return require('../../../Assets/img/speak_on.png'); // STT 활성화 상태
        } else {
            return require('../../../Assets/img/speak_off.png'); // 기본 상태
        }
    };

    return (
        <InputContainer>
            <TextInput
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyPress={handleKeyPress}  // 엔터 키로 전송 가능
                placeholder="무블 AI 도우미에게 질문해 주세요."
            />
            <SendButton onClick={text.trim() ? handleSend : handleSttButtonClick}>
            <SendIcon src={getIconSrc()} alt="send" isListening={isListening} />
            </SendButton>
        </InputContainer>
    );
};

export default MessageInput;
