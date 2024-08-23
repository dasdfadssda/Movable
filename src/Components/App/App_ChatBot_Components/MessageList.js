import React from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

const MessageListContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
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
