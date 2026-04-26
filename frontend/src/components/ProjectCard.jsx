import React from 'react';
import { Github, ExternalLink, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  
  // Card click karne par redirect logic
  const handleCardClick = () => {
    // Agar live link hai toh woh use karein, warna github link use karein
    const targetUrl = project.liveLink ? project.liveLink : project.githubLink;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
      onClick={handleCardClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      // cursor-pointer se click hone ka feel aayega
      className="cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] flex flex-col h-full relative overflow-hidden group"
    >
      {/* Subtle Background Gradient Blob */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500 -z-10"></div>

      <div className="flex items-center space-x-3 mb-4">
        <Server className="text-blue-400 min-w-fit" size={24} />
        <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
      </div>
      
      <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm">
        {project.description}
      </p>
      
      {/* Stylish Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech, index) => (
          <span 
            key={index} 
            className="bg-gray-900/80 text-cyan-300 text-xs font-medium px-3 py-1.5 rounded-md border border-gray-700/50"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom Modern Links */}
      <div className="flex space-x-6 mt-auto border-t border-gray-700/50 pt-4">
        {project.githubLink && (
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} // Box click aur Link click ko alag rakhne ke liye
            className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
          >
            <Github size={18} className="mr-2 group-hover/link:text-blue-400 transition-colors" />
            Source Code
          </a>
        )}
        
        {project.liveLink && (
          <a 
            href={project.liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()} // Box click aur Link click ko alag rakhne ke liye
            className="flex items-center text-sm font-semibold text-gray-300 hover:text-white transition-colors group/link"
          >
            <ExternalLink size={18} className="mr-2 group-hover/link:text-green-400 transition-colors" />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;