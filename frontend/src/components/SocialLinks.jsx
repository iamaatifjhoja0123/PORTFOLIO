import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks = () => {
  const iconVariants = {
    hover: { scale: 1.2, y: -3, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <div className="flex space-x-5">
      <motion.a 
        variants={iconVariants} whileHover="hover"
        href="https://github.com/iamaatifjhoja0123" target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-white"
      >
        <Github size={24} />
      </motion.a>
      
      <motion.a 
        variants={iconVariants} whileHover="hover"
        href="www.linkedin.com/in/mohd-aatif-jhoja" target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500"
      >
        <Linkedin size={24} />
      </motion.a>

      <motion.a 
        variants={iconVariants} whileHover="hover"
        href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-500"
      >
        <Instagram size={24} />
      </motion.a>
    </div>
  );
};

export default SocialLinks;