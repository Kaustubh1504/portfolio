import React, { useEffect, useState } from "react";
import LoadingBubble from "./LoadingBubble";
import AboutMe from "./portfolio/AboutMe";
import Experience from "./portfolio/Experience";
import Skills from "./portfolio/Skills";
import Projects from "./portfolio/Projects";
import Recommendations from "./portfolio/Recommendations";
import ResearchAndPublication from "./portfolio/ResearchAndPublication";
import AwardsAndAchievements from "./portfolio/AwardsAndAchievements";
import Education from "./portfolio/Education";
import Hobbies from "./portfolio/Hobbies";
import Contact from "./portfolio/Contact";
import ChatReplyBubble from "./ChatReplyBubble";

interface ChatMessagesProps {
  message: string;
  formattedMessage?: string; // optional: proper question to show instead of raw keyword
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ message }) => {
  const [loading, setLoading] = useState(false);
  const [componentToShow, setComponentToShow] = useState<React.ReactNode>(null);
  const [chatReply, setChatReply] = useState("");
  const [formattedMessage, setFormattedMessage] = useState("");
  const [showMessage, setShowMessage] = useState(true);

  // ** -> bold
  // :: -> highlight
  // \n -> new Line
  const componentMap: {
    keywords: string[];
    component: React.ReactNode;
    reply: string;
    question: string;
  }[] = [
    {
      keywords: ["about me", "me", "home"],
      component: <AboutMe />,
      question: "Tell me something about yourself",
      reply: "",
    },
    {
      keywords: ["experience", "work history"],
      component: <Experience />,
      question: "Can you show me your work experience?",
      reply: "Here's your professional experience and work history.",
    },
    {
      keywords: ["project", "projects"],
      component: <Projects />,
      question: "What projects have you worked on?",
      reply: "Here are some of your highlighted projects.",
    },
    {
      keywords: ["skills", "technologies"],
      component: <Skills />,
      question: "What skills and technologies do you have?",
      reply: "These are the skills you've listed in your portfolio.",
    },
    {
      keywords: ["research", "publication", "research and publication"],
      component: <ResearchAndPublication />,
      question: "Can you share your research and publications?",
      reply: "Here’s a list of your research papers and publications.",
    },
    {
      keywords: ["awards", "achievements", "awards and achievements"],
      component: <AwardsAndAchievements />,
      question: "What awards and achievements have you received?",
      reply: "Here’s a list of your awards and achievements.",
    },
    {
      keywords: ["education", "academics"],
      component: <Education />,
      question: "What is your educational background?",
      reply: "Here’s your educational background.",
    },
    {
      keywords: ["recommendation", "testimonials"],
      component: <Recommendations />,
      question: "Do you have any recommendations or testimonials?",
      reply: "These are testimonials and recommendations you've received.",
    },
    {
      keywords: ["hobbies", "interests"],
      component: <Hobbies />,
      question: "What are your hobbies or interests?",
      reply: "Here are some of your hobbies and interests.",
    },
    {
      keywords: ["contact", "get in touch"],
      component: <Contact />,
      question: "How can I get in touch with you?",
      reply:
        "Here are your contact details.\n\nEmail: contact@example.com\nPhone: 123-456-7890",
    },
  ];

  useEffect(() => {
    if (message.trim()) {
      setLoading(true);
      setComponentToShow(null);
      setChatReply("");
      // Set formatted message immediately (outside the timer)
      const lower = message.toLowerCase();
      const entry = componentMap.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      if (entry) {
        setFormattedMessage(entry.question);
      } else {
        setFormattedMessage(message); // fallback if no match
      }

      const timer = setTimeout(() => {
        const lower = message.toLowerCase();
        let found = false;

        for (const entry of componentMap) {
          if (entry.keywords.some((kw) => lower.includes(kw))) {
            setComponentToShow(entry.component);
            setChatReply(entry.reply);

            found = true;
            break;
          }
        }

        if (!found) {
          setChatReply(
            "Sorry, I couldn't understand that. Try asking about your background, projects, skills, etc."
          );
        }

        setLoading(false);
        setShowMessage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-1 w-[800px]">
        {/* The LoadingBubble is now a permanent component */}
        {/* User message */}
        {message && (
          <div
            className={`bg-[#e9eef6] px-4 py-2 rounded-lg shadow max-w-max inline-block text-right self-end transition-opacity duration-500 ${
              showMessage ? "opacity-100" : "opacity-100"
            }`}
          >
            <p className="text-gray-800 font-medium">
              {formattedMessage || message}
            </p>
          </div>
        )}

        {/* Portfolio component */}
        {componentToShow && (
          <div className="flex flex-row items-start">
            {/* Loading bubble at the start */}
            <div className="">
              <LoadingBubble />
            </div>

            {/* Main content */}
            <div className="flex flex-col">
              <div>{componentToShow}</div>
              {chatReply?.length > 0 && <ChatReplyBubble reply={chatReply} />}
            </div>
          </div>
        )}

        {/* Assistant reply */}
      </div>
    </div>
  );
};

export default ChatMessages;
