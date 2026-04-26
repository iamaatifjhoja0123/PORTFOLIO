import React from 'react';
import { Terminal, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  // Page ke top par scroll karne ke liye function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume download aur open karne ke liye function
  const handleResumeClick = () => {
    // Ek temporary (invisible) link banakar download trigger karna
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mohd_Aatif_Resume.pdf'; // System mein is naam se file download hogi
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <a href="#home" onClick={scrollToTop} className="flex items-center space-x-2 group cursor-pointer">
            <Terminal size={28} className="text-blue-500 group-hover:text-cyan-400 transition-colors" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Mohd Aatif
            </span>
          </a>

          {/* Right Side Navigation */}
          <div className="hidden md:flex items-center font-medium text-gray-300">
            
            {/* Scroll Links (Certifications added here) */}
            <div className="flex space-x-8 mr-6">
              <a href="#home" className="hover:text-white transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
              <a href="#certifications" className="hover:text-white transition-colors duration-300">Certifications</a>
              <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 border-l border-gray-700 pl-6 mr-6">
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/iamaatifjhoja0123" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/mohd-aatif-jhoja" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.instagram.com/aatif4jhoja/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </motion.a>
            </div>
            
            {/* Updated Resume Button */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleResumeClick} // <-- Download trigger hoga
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer"
            >
              Resume
            </motion.a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;