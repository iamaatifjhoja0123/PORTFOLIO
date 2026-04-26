import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Home = () => {
  return (
    // min-h-[90vh] use kiya hai taaki yeh screen par center mein rahe
    <div className="min-h-[90vh] flex items-center justify-center text-white px-4 relative overflow-hidden">
      
      {/* Background Glow Effect (Dark theme ko premium banane ke liye) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Terminal Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
              <Terminal size={48} className="text-cyan-400" />
            </div>
          </div>
          
          {/* Glowing Name Text */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mohd Aatif</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
            Cloud Computing & DevOps Engineer
          </h2>
          
          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            "As an AWS Certified Solutions Architect, I engineer fault-tolerant cloud infrastructures and orchestrate zero-downtime CI/CD pipelines. From provisioning Infrastructure as Code (IaC) to deploying resilient Kubernetes clusters, I transform complex architectural bottlenecks into secure, automated, and scalable solutions."
          </p>
          
          {/* Scrollable Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Direct Projects Section par scroll karega */}
            <a href="#projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
              >
                View My Work <ArrowRight size={20} />
              </motion.button>
            </a>
            
            {/* Direct About Section par scroll karega */}
            <a href="#about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 transition-all"
              >
                More About Me
              </motion.button>
            </a>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;