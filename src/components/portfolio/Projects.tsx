import React, { useState } from 'react';

// --- Type Definition for a Project ---
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  livePreviewUrl: string;
  sourceCodeUrl: string;
  gradient: string;
  borderColor: string;
}

// --- Project Data with Gradients and Border Colors ---
const projectData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern UI, product management, and a secure Stripe checkout process.',
    imageUrl: 'https://placehold.co/400x400/313D4F/FFFFFF?text=E-commerce&font=sans',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux'],
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
    gradient: 'linear-gradient(145deg, #313D4F, #111827)',
    borderColor: '#4A5568',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality to organize workflows and boost productivity.',
    imageUrl: 'https://placehold.co/400x400/1D4ED8/FFFFFF?text=Task+App&font=sans',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase', 'React Query'],
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
    gradient: 'linear-gradient(145deg, #1D4ED8, #111827)',
    borderColor: '#2563EB',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built to showcase my skills and projects, featuring a clean design and smooth animations.',
    imageUrl: 'https://placehold.co/400x400/047857/FFFFFF?text=Portfolio&font=sans',
    tags: ['React', 'Framer Motion', 'Vite', 'Tailwind'],
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
    gradient: 'linear-gradient(145deg, #047857, #111827)',
    borderColor: '#059669',
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A sleek weather dashboard that provides real-time weather data for any location using the OpenWeatherMap API.',
    imageUrl: 'https://placehold.co/400x400/9333EA/FFFFFF?text=Weather+App&font=sans',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    livePreviewUrl: '#',
    sourceCodeUrl: '#',
    gradient: 'linear-gradient(145deg, #7E22CE, #111827)',
    borderColor: '#9333EA',
  },
];

const Projects = () => {
  const [expandedSkills, setExpandedSkills] = useState<{ [key: number]: boolean }>({});

  const toggleSkills = (id: number) => {
    setExpandedSkills(prev => ({ ...prev, [id]: !prev[id] }));
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projectData.map((project) => (
            <div
              key={project.id}
              onMouseMove={handleCardMove}
              className="group relative rounded-[18px] p-6 border-2 border-transparent hover:border-[var(--card-border)] transition-all duration-300 cursor-pointer overflow-hidden"
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
              
              <div className="relative z-20 flex flex-col gap-4 h-full">
                {/* Top Row: Logo, Title, Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md flex-shrink-0">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-16 h-16 object-cover object-center"
                      />
                    </a>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" title="Source Code" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                    <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer" title="Live Preview" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm">{project.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 items-center mt-auto">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-white/10 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {expandedSkills[project.id] && project.tags.slice(3).map((tag) => (
                    <span key={tag} className="inline-block bg-white/10 text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
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

