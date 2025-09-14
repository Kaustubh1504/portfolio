import React, { useEffect, useState } from 'react';

interface ChatReplyBubbleProps {
  reply: string;
}

const ChatReplyBubble: React.FC<ChatReplyBubbleProps> = ({ reply }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < reply.length) {
        setDisplayedText((prev) => prev + reply.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 2);

    return () => clearInterval(typingInterval);
  }, [reply]);

  // Function to format text
  const formatText = (text: string) => {
    // 1. Replace **text** with <b>text</b> for bolding
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

    // 2. Replace ::text:: with a styled span for a gray background
    formatted = formatted.replace(
      /::(.*?)::/g,
      '<span class="bg-gray-200 text-gray-800 px-1 rounded-sm">$1</span>'
    );
    
    // 3. Replace newline characters with <br> for new lines
    formatted = formatted.replace(/\n/g, '<br/>');

    return formatted;
  };

  return (
    <div className="bg-white p-4 rounded-lg  max-w-max text-left">
      <p className="text-gray-800 font-medium">
        {isTyping ? (
          displayedText
        ) : (
          <span dangerouslySetInnerHTML={{ __html: formatText(reply) }} />
        )}
      </p>
    </div>
  );
};

export default ChatReplyBubble;