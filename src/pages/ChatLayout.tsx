// components/layouts/ChatLayout.tsx
import React from 'react';
import ChatMessages from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';

const ChatLayout = () => {
  return (
    <div className="h-screen flex flex-col bg-black text-white">
      <div className="flex-1 overflow-y-auto p-4">
        <ChatMessages/>
      </div>
      <div className="fixed bottom-0 w-full max-w-2xl mx-auto left-0 right-0 px-4 pb-4 bg-black">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatLayout;
