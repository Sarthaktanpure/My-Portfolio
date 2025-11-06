import React, { useState } from 'react';
import { Code, Database, Server, Zap, GitBranch, ArrowRight, X, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Data ---
const skillsData = [
  {
    icon: Code,
    title: 'Frontend Development',
    technologies: 'React, Next.js, TypeScript, Tailwind CSS, Redux, Svelte',
    color: 'text-cyan-400',
    hoverRing: 'ring-cyan-500',
    iconBg: 'bg-cyan-900/50'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    technologies: 'Node.js, Express, Python, Django, Flask, GraphQL, REST',
    color: 'text-green-400',
    hoverRing: 'ring-green-500',
    iconBg: 'bg-green-900/50'
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    technologies: 'AWS, Azure, Docker, Kubernetes, CI/CD, Terraform, Serverless',
    color: 'text-orange-400',
    hoverRing: 'ring-orange-500',
    iconBg: 'bg-orange-900/50'
  },
  {
    icon: Zap,
    title: 'Tools & Ecosystem',
    technologies: 'Git, VS Code, Webpack, Vite, Zod, Jest, Storybook, Figma',
    color: 'text-purple-400',
    hoverRing: 'ring-purple-500',
    iconBg: 'bg-purple-900/50'
  },
];

const projectsData = [
  {
    id: 1,
    title: 'Collaborative Paste App',
    description: 'A secure, ephemeral text sharing service featuring end-to-end encryption, automatic link expiration, and syntax highlighting for code snippets. Focus on low-latency data handling.',
    technologies: ['React','Tailwindcss'],
    image: 'https://placehold.co/800x450/1e293b/a5f3fc?text=PASTE+APP',
    status: 'completed',
    github: 'https://github.com/Sarthaktanpure/Paste-App',
    live: 'https://content-store.netlify.app/'
  },
  {
    id: 2,
    title: 'TypeScript Todo List',
    description: 'A robust full-stack task management application built with a focus on strict typing and state immutability. Includes drag-and-drop sorting and persistent storage.',
    technologies: ['React', 'Tailwind'],
    image: 'https://placehold.co/800x450/1e293b/d9f99d?text=TS+TODO+LIST',
    status: 'completed',
    github: 'https://github.com/Sarthaktanpure/To-Do-App',
    live: ''
  },
  {
    id: 3,
    title: 'AI-Powered Code Reviewer',
    description: 'An internal tool leveraging LLMs to analyze pull requests, identify security vulnerabilities, and suggest stylistic improvements based on project-specific guidelines.',
    technologies: ['Python', 'GPT-4 API', 'AST Analysis', 'Azure'],
    image: 'https://placehold.co/800x450/1e293b/fbcfe8?text=AI+REVIEWER',
    status: 'wip' // Work in Progress
  },
  {
    id: 4,
    title: 'Decentralized Voting DApp',
    description: 'A verifiable and transparent voting platform built on the Ethereum blockchain, ensuring identity management and immutable record keeping using smart contracts.',
    technologies: ['Solidity', 'Web3.js', 'IPFS', 'MetaMask'],
    image: 'https://placehold.co/800x450/1e293b/fed7aa?text=VOTING+DAPP',
    status: 'wip' // Work in Progress
  },
  {
    id: 5,
    title: 'Real-time Stock Dashboard',
    description: 'A high-performance data visualization tool displaying live stock market data. Optimized for minimal latency using WebSockets and efficient rendering with D3.js.',
    technologies: ['GoLang', 'WebSockets', 'D3.js', 'PostgreSQL'],
    image: 'https://placehold.co/800x450/1e293b/93c5fd?text=STOCK+DASHBOARD',
    status: 'wip' // Work in Progress
  },
  {
    id: 6,
    title: 'WebAR Filter Builder',
    description: 'A proof-of-concept application enabling users to create and preview simple augmented reality filters directly in the browser using WebXR capabilities.',
    technologies: ['Three.js', 'WebXR', 'React Fiber', 'WASM'],
    image: 'https://placehold.co/800x450/1e293b/fef08a?text=WEBAR+BUILDER',
    status: 'wip' // Work in Progress
  },
];


// --- Components ---

const SkillCard = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      className={`
        flex flex-col items-center p-6 sm:p-8 space-y-4
        bg-gray-900 border border-gray-700/50 rounded-xl shadow-lg
        transition-all duration-300 ease-in-out transform
        hover:scale-[1.02] hover:shadow-cyan-500/30
        hover:ring-2 ${skill.hoverRing} cursor-pointer
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon/Logo area with circle background */}
      <div className={`p-3 rounded-full ${skill.iconBg}`}>
        <Icon className={`${skill.color} w-8 h-8 sm:w-10 sm:h-10`} />
      </div>

      {/* Skill Category Title */}
      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-4">
        {skill.title}
      </h3>

      {/* Technologies List */}
      <p className="text-sm sm:text-base text-gray-400 font-medium text-center">
        {skill.technologies}
      </p>
    </motion.div>
  );
};

const ProjectModal = ({ onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-gray-900 p-8 rounded-xl shadow-2xl max-w-sm w-full border border-cyan-500/50"
      initial={{ scale: 0.8, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.8, y: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-cyan-400 flex items-center">
          <Loader className="w-6 h-6 mr-2 animate-spin" />
          Work in Progress
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <p className="text-gray-300 mb-6">
        This exciting project is currently under active development. Check back soon for the live demo and full source code!
      </p>
      <button
        onClick={onClose}
        className="w-full py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
      >
        Got it!
      </button>
    </motion.div>
  </motion.div>
);

const ProjectCard = ({ project, onClick }) => {
  const cardVariant = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={project.id}
      className={`
        relative border border-gray-800 bg-gray-900 text-white rounded-2xl w-full max-w-sm 
        p-4 shadow-xl overflow-hidden cursor-pointer
        hover:shadow-cyan-500/30 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 
      `}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onClick={project.status === 'wip' ? onClick : undefined} // Only open modal for WIP
    >
      {/* Gradient glow border animation */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      <div className="relative z-10">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="h-48 w-full object-cover rounded-xl mb-4 border border-gray-800"
        />

        <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold text-white">
                {project.title}
            </h2>
            {project.status === 'wip' && (
              <span className="text-xs font-medium text-purple-400 bg-purple-900/50 px-2 py-1 rounded-full">
                WIP
              </span>
            )}
        </div>

        <p className="text-gray-400 text-sm mb-4 h-16 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs font-medium text-cyan-400 bg-cyan-900/30 px-2 py-0.5 rounded-full">
                    {tech}
                </span>
            ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg 
              border transition-colors duration-300
              ${project.status === 'completed' 
                ? 'border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white'
                : 'border-gray-700 text-gray-500 pointer-events-none'
              }
            `}
          >
            <GitBranch className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg 
              border transition-colors duration-300
              ${project.status === 'completed' 
                ? 'bg-cyan-600 text-white hover:bg-cyan-700 border-cyan-600'
                : 'bg-gray-700 text-gray-500 pointer-events-none'
              }
            `}
          >
            <span>View Live</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};


const Projects = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 p-6 sm:p-12 font-inter">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. Skills Section --- */}
        <div className="text-center pt-8 mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Core Technical Skills
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            A comprehensive overview of the technologies and domains I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {skillsData.map((skill, index) => (
            <SkillCard key={`skill-${index}`} skill={skill} />
          ))}
        </div>
        
        {/* --- 2. Projects Section --- */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Showcase Projects
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            Highlighting a mix of completed personal projects and ambitious works in progress.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={`project-${project.id}`}
              project={project}
              onClick={() => setShowModal(true)}
            />
          ))}
        </div>
      </div>
      
      {/* --- Modal for WIP Projects --- */}
      <AnimatePresence>
        {showModal && <ProjectModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

    </div>
  );
};

export default Projects;
