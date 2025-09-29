import React, { useState } from 'react';
import ElectricBorder from '../reactbits/ElectricBorder';

// Define the type for a single experience item
interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  description: string[];
  skills: string[];
}

// You can replace this with your own experience data
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: "July 2025 – Present",
    title: "Research Assistant",
    company: "Barabási Lab, Northeastern University",
    location: "Boston, USA",
    logo: "./NU_RGB_seal_R.png",
    description: [
      "Verified LLM annotations with Prodigy to construct a high-quality dataset for biomedical NER.",
      "Fine-tuned SciBERT to improve recognition of BioTool mentions across large-scale document corpora."
    ],
    skills: ["Prodigy", "SciBERT", "Biomedical NER", "LLM", "NLP", "Deep Learning"],
  },
  {
    id: 2,
    date: "July 2024 – August 2025",
    title: "Associate Application Developer",
    company: "Oracle Financial Services Software",
    location: "Mumbai, India",
    logo: "oracle-logo.png",
    description: [
      "Engineered 20+ UI screens using JavaScript, OJET, and an internal UI toolkit, cutting development time by 50%.",
      "Architected a microservices-based product bundling system with Netflix Conductor, SpringBoot, Java, and Oracle DB.",
      "Leveraged Oracle Code Assist to enhance productivity by 15% and improve code quality by 20%.",
      "Reduced API response time by 10% through JMeter and deployed applications using Jenkins and WebLogic.",
      "Processed financial documents for LLM training and presented demos to product managers."
    ],
    skills: ["JavaScript", "OJET", "SpringBoot", "Java", "Oracle DB", "Netflix Conductor", "Microservices", "Jenkins", "JMeter", "WebLogic", "Agile", "Jira"],
  },
  {
    id: 3,
    date: "Dec 2023 – May 2025",
    title: "Software Developer",
    company: "Web3Dao",
    location: "Cape Town, South Africa (Remote)",
    logo: "web3dao.jpeg",
    description: [
      "Launched 2 mobile apps using React Native and Firebase, integrating SteamSDK, 8thWall (AR), Stripe, and RevenueCat.",
      "Developed automation systems including a Selenium bot generating 100+ tweets/day and an LLM-powered news pipeline."
    ],
    skills: ["React Native", "Firebase", "SteamSDK", "8thWall", "AR", "Stripe", "RevenueCat", "Selenium", "LLM"],
  },
  {
    id: 4,
    date: "Jan 2024 – Jun 2024",
    title: "Software Developer Intern",
    company: "Kifayti Health Co-op",
    location: "Bangalore, India",
    logo: "kifayti-health.jpeg",
    description: [
      "Built a full-stack application with React, Node.js & MariaDB, improving response time by 30% via API & query optimization.",
      "Deployed and maintained scalable AWS infrastructure using EC2 and RDS."
    ],
    skills: ["React", "Node.js", "MariaDB", "AWS", "EC2", "RDS", "API Optimization"],
  }
];


const Experience: React.FC = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: number]: boolean }>({ [experienceData[0].id]: false });
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});

  const toggleDescription = (id: number): void => {
    setExpandedDescriptions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSkills = (id: number): void => {
    setExpandedSkills(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="bg-white pt-3">
      <div className="flex-1 max-w-4xl mx-auto w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden sm:block absolute w-0.5 h-full bg-gray-200 left-8 top-2"></div>

          {experienceData.map((job) => (

            <div key={job.id} className="relative mb-6">
              <div className="flex items-start">
                {/* Logo Dot */}
                <div className="hidden sm:flex absolute left-8 -ml-5 mt-1 h-10 w-10 items-center justify-center rounded-full bg-gray-200 ring-4 ring-white z-10">
                  <img src={job.logo} alt={`${job.company} Logo`} className="object-cover rounded-full" />
                </div>


                <div className="sm:pl-20 w-full">
                  {/* Card */}
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 mt-2 sm:mt-0">
                        {job.date}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-3 cursor-pointer" onClick={() => toggleDescription(job.id)}>
                      <p className="text-md font-semibold text-gray-700">
                        {job.company} &middot; <span className="font-normal italic text-gray-500">{job.location}</span>
                      </p>
                      <svg className={`w-5 h-5 text-gray-500 transition-transform transform ${expandedDescriptions[job.id] ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>

                    {expandedDescriptions[job.id] && (
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {job.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-wrap gap-2 items-center">
                      {job.skills.slice(0, 4).map((skill) => (
                        <span key={skill} className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {expandedSkills[job.id] && job.skills.slice(4).map((skill) => (
                        <span key={skill} className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <button onClick={() => toggleSkills(job.id)} className="text-blue-600 text-xs font-semibold hover:underline">
                          {expandedSkills[job.id] ? 'Show Less' : `+${job.skills.length - 4} more`}
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

