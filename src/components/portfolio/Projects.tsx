import React, { useState } from 'react';

// --- Type Definition for a Project ---
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  livePreviewUrl?: string;
  sourceCodeUrl?: string;
  gradient: string;
  borderColor: string;
}

// --- Project Data with Gradients and Border Colors ---
const projectData: Project[] = [
  {
    id: 1,
    title: 'Robot Sim on Demand',
    description: 'Voice-driven Gazebo robot simulator that spins up a GPU pod on Nosana from one natural-language command and streams the running robot into the browser over noVNC in about 2 minutes. Ships with an MCP server (5 tools) that works from Claude Desktop, Claude Code, or any MCP client.',
    imageUrl: 'https://placehold.co/400x400/4338CA/FFFFFF?text=Robot+Sim&font=sans',
    tags: ['Next.js', 'MCP', 'Gazebo', 'Nosana', 'noVNC', 'Docker', 'TypeScript'],
    livePreviewUrl: 'https://agent-forge-hackthon.vercel.app',
    sourceCodeUrl: 'https://github.com/Kaustubh1504/agent-forge-hackthon',
    gradient: 'linear-gradient(145deg, #4338CA, #111827)',
    borderColor: '#6366F1',
  },
  {
    id: 2,
    title: 'Self-Healing 6G Network',
    description: 'A 4-agent LangGraph loop (Detector, Diagnosis, Planner, Executor) that detects, diagnoses, and recovers from network faults end-to-end. An RDFLib knowledge graph grounds the diagnosis, while a NetworkX digital twin streams real 5G KPI traces through a 6G topology.',
    imageUrl: 'https://placehold.co/400x400/0E7490/FFFFFF?text=6G+Network&font=sans',
    tags: ['Python', 'LangGraph', 'NetworkX', 'RDFLib', 'SPARQL', 'Streamlit', 'Plotly'],
    sourceCodeUrl: 'https://github.com/Kaustubh1504/Self-Healing-6G-Network',
    gradient: 'linear-gradient(145deg, #0E7490, #111827)',
    borderColor: '#06B6D4',
  },
  {
    id: 3,
    title: 'Drones for Smart Agriculture',
    description: 'Won the $25,000 IEEE AESS DSTEI grant as research lead. Built an INT8-quantized TensorFlow model for the Jetson Nano (86% accuracy, ~3x faster inference) and modified YOLO for real-time maize leaf blight detection. 2 IEEE papers published and 1 patent filed.',
    imageUrl: 'https://placehold.co/400x400/047857/FFFFFF?text=AgriDrones&font=sans',
    tags: ['TensorFlow', 'YOLO', 'Jetson Nano', 'Edge ML', 'Computer Vision', 'Quantization'],
    livePreviewUrl: 'https://ieee-aess.org/files/ieeeaess/2023-05/AES_Spring23_DSTEI_Davis.pdf',
    gradient: 'linear-gradient(145deg, #047857, #111827)',
    borderColor: '#059669',
  },
  {
    id: 4,
    title: 'Korra Finance',
    description: 'An AI crypto wallet with 30+ screens built in Expo, backed by Redis and blockchain APIs. Wired in CoinGecko plus an AI assistant for in-app guidance, and shipped onboarding, wallet setup, portfolio tracking, and the main dashboard.',
    imageUrl: 'https://placehold.co/400x400/B45309/FFFFFF?text=Korra&font=sans',
    tags: ['React Native', 'Expo', 'Redis', 'CoinGecko', 'Blockchain APIs', 'Fintech'],
    livePreviewUrl: 'https://www.korra.finance/',
    gradient: 'linear-gradient(145deg, #B45309, #111827)',
    borderColor: '#F59E0B',
  },
  {
    id: 5,
    title: 'Hivemind (Open Source)',
    description: "Contributed to Activeloop's open-source shared-memory system for AI agents, which reached #2 trending on GitHub. It captures session prompts, tool calls, and responses as structured traces in Deeplake, mines repeated patterns, and turns them into reusable skills shared across agents and machines.",
    imageUrl: 'https://placehold.co/400x400/7E22CE/FFFFFF?text=Hivemind&font=sans',
    tags: ['Python', 'Deeplake', 'AI Agents', 'BM25', 'Semantic Retrieval', 'Open Source'],
    sourceCodeUrl: 'https://github.com/activeloopai/hivemind/pull/251',
    gradient: 'linear-gradient(145deg, #7E22CE, #111827)',
    borderColor: '#9333EA',
  },
  // {
  //   id: 6,
  //   title: 'MemTree',
  //   description: 'Git-versioned memory for AI agents, inspired by MemEx. Built on HuggingFace smolagents and GitPython, with a Streamlit dashboard to browse and diff agent memory over time.',
  //   imageUrl: 'https://placehold.co/400x400/BE123C/FFFFFF?text=MemTree&font=sans',
  //   tags: ['Python', 'smolagents', 'GitPython', 'Streamlit', 'AI Memory'],
  //   gradient: 'linear-gradient(145deg, #BE123C, #111827)',
  //   borderColor: '#F43F5E',
  // },
  {
    id: 7,
    title: 'Job-Automate Pipeline',
    description: 'Job application pipeline running on FastAPI on a Raspberry Pi behind a Cloudflare Tunnel, with a Supabase backend and a Next.js dashboard. Handles outreach through Hunter.io and Resend, plus an MCP-based resume scorer.',
    imageUrl: 'https://placehold.co/400x400/1D4ED8/FFFFFF?text=Job+Automate&font=sans',
    tags: ['FastAPI', 'Raspberry Pi', 'Cloudflare Tunnel', 'Supabase', 'Next.js', 'MCP'],
    sourceCodeUrl: 'https://github.com/Kaustubh1504/job-automate',
    gradient: 'linear-gradient(145deg, #1D4ED8, #111827)',
    borderColor: '#2563EB',
  },
];

const Projects = () => {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});
  const [expandedDesc, setExpandedDesc] = useState<{ [key: number]: boolean }>({});

  const toggleSkills = (id: number) => {
    setExpandedSkills(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleDesc = (id: number) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <section 
      id="projects" 
      className="pt-3"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {projectData.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleCardMove}
              className="group relative rounded-[14px] p-4 border-2 border-transparent hover:border-[var(--card-border)] transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                background: project.gradient,
                '--card-border': project.borderColor,
                '--spotlight-color': 'rgba(255, 255, 255, 0.15)'
              } as React.CSSProperties}
            >
              {/* Spotlight Effect */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 60%)',
                }}
              />
              
              <div className="relative z-20 flex flex-col gap-2 h-full">
                {/* Top Row: Logo, Title, Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {(project.livePreviewUrl || project.sourceCodeUrl) ? (
                      <a href={project.livePreviewUrl || project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md flex-shrink-0">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-10 h-10 object-cover object-center"
                        />
                      </a>
                    ) : (
                      <div className="block overflow-hidden rounded-md flex-shrink-0">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-10 h-10 object-cover object-center"
                        />
                      </div>
                    )}
                    <h3 className="text-base font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    {project.sourceCodeUrl && (
                      <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" title="Source Code" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      </a>
                    )}
                    {project.livePreviewUrl && (
                      <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer" title="Live Preview" className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className={`text-gray-300 text-xs ${expandedDesc[project.id] ? '' : 'line-clamp-2'}`}>
                    {project.description}
                  </p>
                  <button onClick={() => toggleDesc(project.id)} className="text-gray-400 text-xs font-bold hover:text-white hover:underline">
                    {expandedDesc[project.id] ? 'Show less' : 'Read more'}
                  </button>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 items-center mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-white/10 text-gray-200 text-xs font-semibold px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {expandedSkills[project.id] && project.tags.slice(3).map((tag) => (
                    <span key={tag} className="inline-block bg-white/10 text-gray-200 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <button onClick={() => toggleSkills(project.id)} className="text-gray-300 text-xs font-bold hover:text-white hover:underline">
                      {expandedSkills[project.id] ? 'Show Less' : `+${project.tags.length - 3} more`}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

