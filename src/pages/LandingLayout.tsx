// components/layouts/LandingLayout.tsx
import ChatInput from '@/components/ChatInput';
import WelcomeScreen from '@/components/WelcomeScreen';
import React from 'react';


const LandingLayout = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex items-center justify-center">
        <WelcomeScreen onStart={onStart}/>
      <div className="w-full max-w-2xl px-4">
        <ChatInput onSend={onStart} />
      </div>
    </div>
  );
};

export default LandingLayout;
