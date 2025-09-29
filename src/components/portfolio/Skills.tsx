import React, { JSX, useState } from 'react';

// --- Type Definition ---
interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  color: string; 
  skills: Skill[];
}

// --- SVG Icons ---
const CodeBracketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" /></svg>;
const BrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.5 21.75l-.398-1.178a3.375 3.375 0 00-2.3-2.3L12.75 18l1.178-.398a3.375 3.375 0 002.3-2.3L16.5 14.25l.398 1.178a3.375 3.375 0 002.3 2.3l1.178.398-1.178.398a3.375 3.375 0 00-2.3 2.3z" /></svg>;
const WrenchScrewdriverIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>;
const SkillIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

// --- Skill Data Extracted from Resume ---
const skillData: SkillCategory[] = [
  {
    title: "Software Development",
    icon: <CodeBracketIcon />,
    color: 'blue',
    skills: [
      { name: "JavaScript", icon: <SkillIcon /> }, { name: "TypeScript", icon: <SkillIcon /> },
      { name: "Java", icon: <SkillIcon /> }, { name: "Python", icon: <SkillIcon /> },
      { name: "React", icon: <SkillIcon /> }, { name: "Node.js", icon: <SkillIcon /> },
      { name: "Spring Boot", icon: <SkillIcon /> }, { name: "React Native", icon: <SkillIcon /> },
      { name: "OJET", icon: <SkillIcon /> }, { name: "Expo", icon: <SkillIcon /> },
      { name: "Express.js", icon: <SkillIcon /> }, { name: "Microservices", icon: <SkillIcon /> },
      { name: "REST APIs", icon: <SkillIcon /> }, { name: "HTML/CSS", icon: <SkillIcon /> },
      { name: "Tailwind CSS", icon: <SkillIcon /> },
    ],
  },
  {
    title: "AI & Data",
    icon: <BrainIcon />,
    color: 'purple',
    skills: [
        { name: "LLM", icon: <SkillIcon /> }, { name: "NLP", icon: <SkillIcon /> },
        { name: "Deep Learning", icon: <SkillIcon /> }, { name: "TensorFlow", icon: <SkillIcon /> },
        { name: "Oracle DB", icon: <SkillIcon /> }, { name: "MariaDB", icon: <SkillIcon /> },
        { name: "MySQL", icon: <SkillIcon /> }, { name: "Redis", icon: <SkillIcon /> },
        { name: "Firebase", icon: <SkillIcon /> }, { name: "SQL", icon: <SkillIcon /> },
        { name: "SciBERT", icon: <SkillIcon /> }, { name: "Prodigy", icon: <SkillIcon /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <WrenchScrewdriverIcon />,
    color: 'amber',
    skills: [
      { name: "AWS (EC2, RDS)", icon: <SkillIcon /> }, { name: "Git", icon: <SkillIcon /> },
      { name: "Jenkins", icon: <SkillIcon /> }, { name: "CI/CD", icon: <SkillIcon /> },
      { name: "Rancher", icon: <SkillIcon /> }, { name: "JMeter", icon: <SkillIcon /> },
      { name: "Agile", icon: <SkillIcon /> }, { name: "Jira", icon: <SkillIcon /> },
      { name: "Selenium", icon: <SkillIcon /> }, { name: "Stripe", icon: <SkillIcon /> },
      { name: "WebLogic", icon: <SkillIcon /> }, { name: "RevenueCat", icon: <SkillIcon /> },
      { name: "AR (8thWall)", icon: <SkillIcon /> }, { name: "NVIDIA Jetson", icon: <SkillIcon /> },
    ],
  },
];

const colorVariants: { [key: string]: { border: string, bg: string, text: string, skillBg: string } } = {
    blue: { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-600', skillBg: 'bg-blue-50' },
    purple: { border: 'border-purple-500', bg: 'bg-purple-100', text: 'text-purple-600', skillBg: 'bg-purple-50' },
    amber: { border: 'border-amber-500', bg: 'bg-amber-100', text: 'text-amber-600', skillBg: 'bg-amber-50' },
};

const Skills = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const initialSkillCount = 8;

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="skills" className=" p-1 pt-3">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-4">
          {skillData.map((category) => {
            const colors = colorVariants[category.color] || colorVariants.blue;
            const isExpanded = expandedSections[category.title];
            const skillsToShow = isExpanded ? category.skills : category.skills.slice(0, initialSkillCount);

            return (
              <div key={category.title} className={`bg-white rounded-xl border-l-4 ${colors.border} p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row md:items-start`}>
                {/* Left Side: Header */}
                <div className="flex-shrink-0 md:w-1/3 lg:w-1/4 md:pr-6 flex items-center gap-4 mb-4 md:mb-0">
                  <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg ${colors.bg} ${colors.text}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-md font-bold text-gray-800">{category.title}</h3>
                </div>
                
                {/* Right Side: Skills */}
                <div className="flex-grow md:pl-6 md:border-l border-gray-200">
                    <div className="flex flex-wrap gap-2">
                        {skillsToShow.map((skill) => (
                            <div key={skill.name} className={`inline-flex items-center gap-2 ${colors.skillBg} ${colors.text} text-sm font-medium px-3 py-1.5 rounded-full`}>
                            <span className="w-5 h-5">{skill.icon}</span>
                            {skill.name}
                            </div>
                        ))}
                    </div>
                    {category.skills.length > initialSkillCount && (
                    <div className="mt-4">
                        <button
                        onClick={() => toggleSection(category.title)}
                        className="text-sm font-semibold text-gray-600 hover:text-gray-900"
                        >
                        {isExpanded ? 'Show Less' : `Show ${category.skills.length - initialSkillCount} More`}
                        </button>
                    </div>
                    )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

