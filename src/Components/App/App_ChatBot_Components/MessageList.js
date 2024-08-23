import React from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

// MessageList를 감싸는 컨테이너
const MessageListContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MessageList = ({ messages }) => {
    return (
        <MessageListContainer>
            {messages.map((msg, index) => (
                <ChatMessage key={index} message={msg} />
            ))}
        </MessageListContainer>
    );
};

export default MessageList;
