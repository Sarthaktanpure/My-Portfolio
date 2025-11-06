import React from "react";
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Sarthak from "../assets/Sarthak.jpg"

// NOTE: Replacing the local image path with a placeholder for runnability.
const PROFILE_IMAGE_URL = "https://placehold.co/800x1200/18181b/ffffff?text=SARTHAK+TANPURE";

// --- Social Links Data ---
const socialLinks = [
  { icon: Github, href: 'https://github.com/Sarthaktanpure', name: 'GitHub', color: 'text-gray-400 hover:text-white', delay: 0.1 },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sarthaktanpure/', name: 'LinkedIn', color: 'text-blue-400 hover:text-blue-500', delay: 0.2 },
  { icon: Instagram, href: 'https://www.instagram.com/sarthak_tanpure_9290', name: 'Instagram', color: 'text-pink-400 hover:text-pink-500', delay: 0.3 },
  { icon: Mail, href: 'mailto:sarthaktanpure255@gmail.com', name: 'Email', color: 'text-yellow-400 hover:text-yellow-500', delay: 0.4 },
];

// --- Pendulum Component ---
const SocialPendulum = () => (
  // Increased container height (h-28/h-32) and increased space-x for a wider swing area
  <div className="relative flex justify-center space-x-12 mb-6 w-full h-28 sm:h-32"> 
    {socialLinks.map((link, index) => {
      const Icon = link.icon;
      return (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          // This motion.a container is the entire swinging arm.
          className="relative flex items-center justify-center h-28 w-10" 
          initial={{ rotate: 0 }}
          animate={{ rotate: [-18, 18, -18] }} // Swing the whole arm (slightly reduced angle for longer thread)
          transition={{
            duration: 4.5, // Swing duration
            delay: link.delay, // Staggered start delay
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
          whileHover={{ scale: 1.15, rotate: 0, boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)' }}
          style={{ transformOrigin: 'top center' }} 
        >
          {/* The fixed pivot point (visual anchor) */}
          <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-gray-700 -translate-x-1/2"></div>
          
          {/* The swinging 'thread' arm - positioned below the fixed pivot */}
          <div className="absolute top-6 left-1/2 w-0.5 h-20 bg-gray-700 -translate-x-1/2 transform-gpu" // Increased thread height from h-16 to h-20 for a longer drop
               style={{ transformOrigin: 'top center' }}>
            
            {/* The Icon/Ball - fixed to the bottom of the rotating line (counter-rotated to stay upright) */}
            <motion.div 
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 p-2 bg-gray-800 rounded-full border border-gray-700`}
                initial={{ rotate: 0 }}
                animate={{ rotate: [18, -18, 18] }} // Counter-rotate
                transition={{
                    duration: 4.5,
                    delay: link.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "reverse",
                }}
            >
                <Icon className={`w-6 h-6 ${link.color} transition-colors duration-300`} />
            </motion.div>
          </div>
        </motion.a>
      );
    })}
  </div>
);


const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-gray-950 text-white min-h-screen border border-b-gray-800 scroll-mt-24 font-inter"
    >
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2">
        <img
          src={Sarthak}
          alt="Profile"
          className="w-full h-full object-cover grayscale opacity-90"
        />
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-16 py-10">
        
        {/* --- Social Icons Pendulum (UPDATED) --- */}
        <SocialPendulum />
        {/* ----------------------------------- */}

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          <span className="text-gray-400 font-medium">About</span>
          <br /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            My Portfolio
          </span>
        </h1>
        <p className="text-gray-400 mt-6 text-base leading-relaxed max-w-xl">
          Hi! I’m **Sarthak Tanpure**, an enthusiastic IT engineering student and a
          passionate software developer who loves turning ideas into impactful
          digital experiences. I enjoy exploring the world of web development,
          AI, and programming, and I’m constantly learning new technologies to
          improve my skills and creativity. I’ve worked with languages like C,
          C++, Java, and Python, and I’m currently focusing on full-stack web
          development using tools like **React, Node.js, and databases**. I also
          have a strong interest in AI/ML and aspire to build intelligent
          solutions that make a real-world difference. When I’m not coding,
          you’ll probably find me exploring new tech trends, working on side
          projects, or brainstorming innovative ideas to solve community
          problems through technology.
        </p>

        {/* Buttons (Styling updated for Tailwind) */}
        <div className="flex items-center space-x-6 mt-10 gap-4">
          <a
            href="#projects" // Link to your projects section
            className="px-6 py-3 font-semibold text-white bg-cyan-600 rounded-lg shadow-lg hover:bg-cyan-700 transition duration-300 transform hover:scale-[1.05]"
          >
            Explore Projects
          </a>
          <a
            href="YOUR_RESUME_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 font-semibold text-cyan-400 border border-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
