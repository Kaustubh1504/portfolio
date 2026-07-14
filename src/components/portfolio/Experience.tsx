import React, { useState } from 'react';
import ElectricBorder from '../reactbits/ElectricBorder';

// Define the type for a single experience item
interface ExperienceItem {
  id: number;
  date: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  logo: string;
  description: string[];
  skills: string[];
}

// You can replace this with your own experience data
const experienceData: ExperienceItem[] = [
  {
    id: 1,
    date: "July 2025 - Present",
    title: "Part-time Research Assistant",
    company: "Network Science Institute, Northeastern University (Barabasi Lab)",
    companyUrl: "https://www.barabasilab.com/",
    location: "Boston, USA",
    logo: "./NU_RGB_seal_R.png",
    description: [
      "Fine-tuned SciBERT for biomedical NER in PyTorch; 90%+ precision on a 1M-document corpus.",
      "Built a GPT-4 evaluation pipeline with fuzzy matching to score extracted entities; precision 89%.",
      "Wrote the Python pipeline that runs GPT-4 over 1M+ documents and joins results.",
      "Built the React app for side-by-side prompt comparison and annotation review.",
      "Verified LLM annotations in Prodigy to build the gold-standard biomedical NER dataset."
    ],
    skills: ["PyTorch", "SciBERT", "Biomedical NER", "GPT-4", "NLP", "Prodigy", "React", "Python", "Slurm"],
  },
  {
    id: 2,
    date: "July 2024 - Aug 2025",
    title: "Software Developer",
    company: "Oracle",
    companyUrl: "https://www.oracle.com/",
    location: "Mumbai, India",
    logo: "oracle-logo.png",
    description: [
      "Built 20+ UI screens in JavaScript and OJET; cut dev time by 50% with a reusable component set the team adopted.",
      "One of the engineers on the product bundling service; wrote the Conductor workflow plus Spring Boot endpoints tying pricing and inventory together, backed by Oracle DB.",
      "Processed financial documents for LLM training pipelines; worked on the Spring Boot microservices that fed them.",
      "Profiled API endpoints in JMeter and cut response time by 10%; deployed through Jenkins to WebLogic.",
      "Shipped features in biweekly sprints; used Oracle Code Assist to boost productivity by 15%.",
      "Validated test cases in Rancher; contributed to regionalization and localization features."
    ],
    skills: ["JavaScript", "OJET", "Java", "Spring Boot", "Oracle DB", "Conductor", "Microservices", "Jenkins", "JMeter", "WebLogic", "Rancher", "Agile"],
  },
  {
    id: 3,
    date: "Dec 2023 - May 2025",
    title: "Software Developer",
    company: "Web3Dao",
    location: "Cape Town, South Africa (Remote)",
    logo: "web3dao.jpeg",
    description: [
      "Shipped 2 mobile apps in React Native with Firebase, integrating SteamSDK, 8thWall AR, Stripe, and RevenueCat.",
      "Built a Selenium bot that posts 100+ tweets a day and an LLM-driven news pipeline."
    ],
    skills: ["React Native", "Firebase", "SteamSDK", "8thWall", "AR", "Stripe", "RevenueCat", "Selenium", "LLM"],
  },
  {
    id: 4,
    date: "Jan 2024 - June 2024",
    title: "Software Developer Intern",
    company: "Kifayti Health",
    location: "Bangalore, India (Remote)",
    logo: "kifayti-health.jpeg",
    description: [
      "Built a full-stack web app on React, Node.js, and MariaDB.",
      "Optimized APIs and the queries behind them; response time improved by 30%.",
      "Set up and maintained the AWS infrastructure on EC2 and RDS."
    ],
    skills: ["React", "Node.js", "MariaDB", "AWS", "EC2", "RDS", "API Optimization"],
  },
  {
    id: 5,
    date: "July 2023 - Sept 2023",
    title: "Research Intern",
    company: "IIT Patna",
    companyUrl: "https://www.iitp.ac.in/",
    location: "Remote",
    logo: "https://placehold.co/80x80/1E3A8A/FFFFFF?text=IITP&font=sans",
    description: [
      "Modified YOLO with custom layer optimizations for better feature extraction.",
      "Raised detection to 86.1% mAP@0.5 (3.1 points over baseline) with multi-scale fusion and Wise IOU.",
      "Quantized the model for faster inference on edge hardware."
    ],
    skills: ["Computer Vision", "YOLO", "Deep Learning", "Model Quantization", "Edge ML"],
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
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="hover:text-blue-600 hover:underline"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )} &middot; <span className="font-normal italic text-gray-500">{job.location}</span>
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

