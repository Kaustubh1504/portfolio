"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Sparkle, User, Send, Menu, X, Briefcase, Award, GraduationCap, Laptop, Heart, FileText, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// This is the core data for your portfolio.
// The LLM will use this to answer questions about you.
// **IMPORTANT**: Replace this with your own information.
const portfolioData = {
  name: "Kaustubh",
  title: "Full-Stack Developer",
  summary: "A passionate and creative Full-Stack Developer with 5 years of experience in building modern web applications. Proficient in React, Next.js, Node.js, and various database technologies. I love solving complex problems and building user-centric products.",
  workExperience: [
    { company: "Tech Innovators Inc.", role: "Senior Software Engineer", years: "2022 - Present", description: "Led a team of 5 to develop and maintain a large-scale e-commerce platform. Implemented a new microservices architecture, improving performance by 30%." },
    { company: "Web Solutions Co.", role: "Software Developer", years: "2019 - 2022", description: "Developed and shipped multiple features for the company's flagship SaaS product. Worked on both front-end (React) and back-end (Node.js) development." }
  ],
  projects: [
    { name: "E-commerce Platform", description: "A full-featured e-commerce site with product management, shopping cart, and payment gateway integration.", technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"] },
    { name: "Task Management App", description: "A collaborative task management application with real-time updates and user authentication.", technologies: ["React", "Express", "Firebase"] }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "Jan 2023" },
    { name: "Google Certified Professional Cloud Developer", issuer: "Google Cloud", date: "May 2022" }
  ],
  education: [
    { degree: "B.Tech in Computer Science", university: "Indian Institute of Technology, Mumbai", years: "2015 - 2019" }
  ],
  hobbies: ["Coding", "Hiking", "Reading science fiction", "Playing guitar"]
};

// This is a utility function to construct the system prompt for the LLM.
const getSystemPrompt = (data) => `
You are a helpful assistant chatbot named Gemini on a personal portfolio website. Your purpose is to answer questions about the portfolio owner, whose name is ${data.name} and who is a ${data.title}. Use only the following information to answer all queries. Do not make up any information. If a question is outside of this scope, politely decline to answer.

My Name: ${data.name}
My Title: ${data.title}
My Summary: ${data.summary}

Work Experience:
${data.workExperience.map(exp => `Company: ${exp.company}, Role: ${exp.role}, Years: ${exp.years}, Description: ${exp.description}`).join('\n')}

Projects:
${data.projects.map(proj => `Project Name: ${proj.name}, Description: ${proj.description}, Technologies: ${proj.technologies.join(', ')}`).join('\n')}

Certifications:
${data.certifications.map(cert => `Certification: ${cert.name}, Issuer: ${cert.issuer}, Date: ${cert.date}`).join('\n')}

Education:
${data.education.map(edu => `Degree: ${edu.degree}, University: ${edu.university}, Years: ${edu.years}`).join('\n')}

Hobbies:
${data.hobbies.join(', ')}
`;

// Define a mapping of user prompts to a specific view.
const predefinedQueries = {
  'work': ['work experience', 'jobs', 'companies', 'previous roles'],
  'projects': ['projects', 'apps i built', 'side projects', 'what have you built'],
  'certifications': ['certifications', 'certifies', 'awards', 'certificates'],
  'education': ['education', 'degree', 'school', 'university'],
  'hobbies': ['hobbies', 'what do you do for fun', 'interests'],
};

// Custom components for predefined queries
const WorkExperienceView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mx-auto space-y-6 text-left">
    <h2 className="text-3xl font-bold text-blue-400">Work Experience</h2>
    <div className="space-y-8">
      {portfolioData.workExperience.map((job, index) => (
        <div key={index} className="p-6 bg-neutral-800 rounded-lg shadow-xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold text-neutral-100">{job.role} at {job.company}</h3>
            <span className="text-sm font-medium text-neutral-400">{job.years}</span>
          </div>
          <p className="text-neutral-300">{job.description}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const ProjectsView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mx-auto space-y-6 text-left">
    <h2 className="text-3xl font-bold text-blue-400">Projects</h2>
    <div className="space-y-8">
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="p-6 bg-neutral-800 rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">{project.name}</h3>
          <p className="text-neutral-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 text-sm bg-neutral-700 text-neutral-300 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const EducationView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mx-auto space-y-6 text-left">
    <h2 className="text-3xl font-bold text-blue-400">Education</h2>
    <div className="space-y-8">
      {portfolioData.education.map((edu, index) => (
        <div key={index} className="p-6 bg-neutral-800 rounded-lg shadow-xl">
          <h3 className="text-xl font-semibold text-neutral-100 mb-2">{edu.degree}</h3>
          <p className="text-neutral-300">{edu.university} ({edu.years})</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const CertificationsView = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-3xl mx-auto space-y-6 text-left">
    <h2 className="text-3xl font-bold text-blue-400">Certifications</h2>
    <div className="space-y-4">
      {portfolioData.certifications.map((cert, index) => (
        <div key={index} className="p-4 bg-neutral-800 rounded-lg flex items-center shadow-xl">
          <Award size={24} className="text-yellow-500 flex-shrink-0 mr-4" />
          <div>
            <h3 className="font-semibold text-neutral-100">{cert.name}</h3>
            <p className="text-sm text-neutral-400">{cert.issuer} - {cert.date}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const ChatView = ({ chatHistory, isLoading }) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isLoading]);
  
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      <AnimatePresence>
        {chatHistory.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start space-x-4 p-4 rounded-lg ${message.role === 'user' ? 'bg-neutral-800' : 'bg-neutral-800/50'}`}
          >
            <div className="flex-shrink-0 mt-1">
              {message.role === 'user' ? (
                <User size={24} className="text-blue-400" />
              ) : (
                <Sparkle size={24} className="text-blue-500" />
              )}
            </div>
            <div className="flex-1 whitespace-pre-wrap">
              {message.parts.map((part, partIndex) => (
                <p key={partIndex} className="text-neutral-200">
                  {part.text}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 p-4 rounded-lg bg-neutral-800/50"
          >
            <div className="flex-shrink-0 mt-1">
              <Sparkle size={24} className="text-blue-500 animate-pulse" />
            </div>
            <div className="text-neutral-400">Thinking...</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={messagesEndRef} />
    </div>
  );
};

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRecentChat, setSelectedRecentChat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const addMessageToHistory = (role, parts) => {
    setChatHistory(prev => [...prev, { role, parts }]);
  };

  const systemPrompt = getSystemPrompt(portfolioData);

  const handleSendMessage = async (userPrompt) => {
    if (!userPrompt.trim()) return;

    // Check if the prompt matches a predefined query
    const lowerPrompt = userPrompt.toLowerCase();
    let isPredefined = false;
    for (const key in predefinedQueries) {
      if (predefinedQueries[key].some(phrase => lowerPrompt.includes(phrase))) {
        setCurrentView(key);
        isPredefined = true;
        break;
      }
    }

    if (isPredefined) {
      // If a predefined query is found, don't call the API.
      setInput('');
      return;
    }

    // If not a predefined query, fall back to the LLM
    setCurrentView('chat');
    addMessageToHistory("user", [{ text: userPrompt }]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userPrompt,
          systemPrompt,
        }),
      });

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const { responseText } = await response.json();
      addMessageToHistory("model", [{ text: responseText }]);

    } catch (error) {
      console.error("Error generating text with server-side LLM:", error);
      addMessageToHistory("model", [{ text: "An error occurred while generating the response. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRecentChatClick = (item) => {
    setSelectedRecentChat(item);
    setIsSidebarOpen(false);
    let prompt = '';
    switch (item) {
      case 'Work Experience':
        prompt = `Tell me about your work experience.`;
        break;
      case 'Projects':
        prompt = `What projects have you worked on?`;
        break;
      case 'Certifications':
        prompt = `What certifications do you have?`;
        break;
      case 'Education':
        prompt = `Can you tell me about your education?`;
        break;
      case 'Hobbies':
        prompt = `What are your hobbies?`;
        break;
      case 'Resume':
      default:
        prompt = `Can you provide a summary of your professional background?`;
    }
    handleSendMessage(prompt);
  };

  const renderView = () => {
    switch (currentView) {
      case 'work':
        return <WorkExperienceView />;
      case 'projects':
        return <ProjectsView />;
      case 'education':
        return <EducationView />;
      case 'certifications':
        return <CertificationsView />;
      case 'chat':
        return <ChatView chatHistory={chatHistory} isLoading={isLoading} />;
      case 'home':
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-neutral-300">
              Hello, <span className="font-bold text-blue-400">{portfolioData.name}</span>
            </h2>
            <p className="text-lg md:text-xl font-light text-neutral-500 max-w-lg">
              I'm the Gemini-powered bot on this page. Ask me anything about my portfolio!
            </p>
          </motion.div>
        );
    }
  };

  const recentChats = [
    { icon: <Briefcase size={20} />, name: 'Work Experience', action: () => handleRecentChatClick('Work Experience') },
    { icon: <Laptop size={20} />, name: 'Projects', action: () => handleRecentChatClick('Projects') },
    { icon: <FileText size={20} />, name: 'Resume', action: () => handleRecentChatClick('Resume') },
    { icon: <Award size={20} />, name: 'Certifications', action: () => handleRecentChatClick('Certifications') },
    { icon: <GraduationCap size={20} />, name: 'Education', action: () => handleRecentChatClick('Education') },
    { icon: <Heart size={20} />, name: 'Hobbies', action: () => handleRecentChatClick('Hobbies') },
  ];
  
  const sidebarVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="flex h-screen bg-neutral-950 text-white font-inter overflow-hidden">
      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-full hover:bg-neutral-800 transition-colors">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.2 }}
        className="fixed inset-y-0 left-0 z-40 w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col p-4 md:relative md:translate-x-0 md:opacity-100"
      >
        <div className="flex-shrink-0 flex items-center justify-between">
          <div className="flex items-center space-x-2 p-2 cursor-pointer" onClick={() => { setCurrentView('home'); setChatHistory([]); }}>
            <Sparkle className="text-blue-500" />
            <h1 className="text-xl font-bold">Gemini</h1>
          </div>
        </div>

        <div className="mt-6 flex-grow flex flex-col space-y-4">
          <button className="flex items-center space-x-3 p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors" onClick={() => { setCurrentView('home'); setChatHistory([]); }}>
            <Plus size={20} />
            <span>New chat</span>
          </button>
          
          <div>
            <h2 className="text-xs font-semibold uppercase text-neutral-500 mb-2">Recent</h2>
            <ul className="space-y-1">
              {recentChats.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={item.action}
                    className={`w-full flex items-center space-x-3 p-3 rounded-full text-left transition-colors ${selectedRecentChat === item.name ? 'bg-neutral-700' : 'hover:bg-neutral-800'}`}
                  >
                    {item.icon}
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 md:p-8 overflow-y-auto relative">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {renderView()}
        </div>

        {/* Prompt Input Area */}
        <div className="w-full flex-shrink-0 max-w-3xl mx-auto mt-auto py-4">
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }}
            className="flex items-center space-x-2 bg-neutral-800 border border-neutral-700 rounded-3xl p-2 shadow-lg"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={"Enter a prompt here"}
              className="flex-1 bg-transparent border-none focus:ring-0 outline-none text-white placeholder-neutral-500 p-2"
              disabled={isLoading}
            />
            <button
              type="submit"
              className={`p-2 rounded-full transition-colors ${input.trim() && !isLoading ? 'bg-blue-500 hover:bg-blue-600' : 'bg-neutral-700 cursor-not-allowed'}`}
              disabled={!input.trim() || isLoading}
            >
              <Send size={24} className="text-white" />
            </button>
          </form>
          <p className="text-xs text-center text-neutral-600 mt-2">
            This chatbot uses a server-side LLM for complex queries.
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
