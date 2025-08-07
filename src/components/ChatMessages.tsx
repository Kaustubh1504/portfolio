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

interface ChatMessagesProps {
  message: string;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ message }) => {
  const [loading, setLoading] = useState(false);
  const [componentToShow, setComponentToShow] = useState<React.ReactNode>(null);
  const [chatReply, setChatReply] = useState("");

  const componentMap: {
    keywords: string[];
    component: React.ReactNode;
    reply: string;
  }[] = [
    {
      keywords: ["about me", "me", "home"],
      component: <AboutMe />,
      reply: "This is your homepage with an overview of your portfolio.",
    },
    {
      keywords: ["experience", "work history"],
      component: <Experience />,
      reply: "Here's your professional experience and work history.",
    },
    {
      keywords: ["project", "projects"],
      component: <Projects />,
      reply: "Here are some of your highlighted projects.",
    },
    {
      keywords: ["skills", "technologies"],
      component: <Skills />,
      reply: "These are the skills you've listed in your portfolio.",
    },
    {
      keywords: ["research", "publication", "research and publication"],
      component: <ResearchAndPublication />,
      reply: "Here’s a list of your research papers and publications.",
    },
    {
      keywords: ["awards", "achievements", "awards and achievements"],
      component: <AwardsAndAchievements />,
      reply: "Here’s a list of your awards and achievements.",
    },
    {
      keywords: ["education", "academics"],
      component: <Education />,
      reply: "Here’s your educational background.",
    },
    {
      keywords: ["recommendation", "testimonials"],
      component: <Recommendations />,
      reply: "These are testimonials and recommendations you've received.",
    },
    {
      keywords: ["hobbies", "interests"],
      component: <Hobbies />,
      reply: "Here are some of your hobbies and interests.",
    },
    {
      keywords: ["contact", "get in touch"],
      component: <Contact />,
      reply: "Here are your contact details.",
    },
  ];

  useEffect(() => {
    if (message.trim()) {
      setLoading(true);
      setComponentToShow(null);
      setChatReply("");

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
          setChatReply("Sorry, I couldn't understand that. Try asking about home, experience, projects, etc.");
        }

        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="w-full p-4 flex flex-col gap-4 items-center">
      {message && (
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow max-w-xl w-full text-left">
          <p className="text-gray-800 dark:text-gray-100 font-medium">{message}</p>
        </div>
      )}

      {loading && <LoadingBubble />}

      {componentToShow}

      {chatReply && (
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow max-w-xl w-full text-left mt-2">
          <p className="text-blue-900 dark:text-blue-100">{chatReply}</p>
        </div>
      )}
    </div>
  );
};

export default ChatMessages;
