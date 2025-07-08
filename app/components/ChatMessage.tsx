import React from 'react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-xs rounded-lg px-4 py-2 lg:max-w-md ${
          isUser ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default ChatMessage;