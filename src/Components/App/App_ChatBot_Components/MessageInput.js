import React, { useState } from 'react';
import styled from 'styled-components';

// 입력창과 전송 버튼을 감싸는 컨테이너
const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
  position: relative;
`;

// 텍스트 입력창
const TextInput = styled.input`
  flex: 1;
  padding: 10px 40px 10px 10px;  /* 오른쪽 패딩을 추가하여 버튼이 겹치지 않도록 함 */
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #F2F2F3;
`;

// 전송 버튼 (아이콘)
const SendButton = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SendIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const MessageInput = ({ onSend }) => {
    const [text, setText] = useState('');

    const handleSend = () => {
        if (text.trim()) {
            onSend(text);
            setText('');
        }
    };

    return (
        <InputContainer>
            <TextInput
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="무블 AI 도우미에게 질문해 주세요."
            />
            <SendButton onClick={handleSend}>
                <SendIcon src={require('../../../Assets/img/speak_off.png')} alt="send" />
            </SendButton>
        </InputContainer>
    );
};

export default MessageInput;
