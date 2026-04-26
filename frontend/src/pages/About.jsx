import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, GitMerge, ShieldCheck, Code } from 'lucide-react';

const About = () => {
  //  skill categories 
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="text-blue-400" size={28} />,
      skills: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker"]
    },
    {
      title: "CI/CD & GitOps",
      icon: <GitMerge className="text-purple-400" size={28} />,
      skills: ["GitHub Actions", "ArgoCD", "Helm", "GitOps Workflow"]
    },
    {
      title: "Observability & Security",
      icon: <ShieldCheck className="text-green-400" size={28} />,
      skills: ["Prometheus", "Grafana", "Trivy", "DevSecOps", "Nginx"]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="text-pink-400" size={28} />,
      skills: ["Node.js", "React.js", "MongoDB", "Tailwind CSS", "Redis"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-blue-500">Me</span></h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Side: Professional Bio */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              Hello! I'm <span className="text-gray-200 font-bold">Mohd Aatif Jhoja</span>, a dedicated Cloud & DevOps Engineer with a proven track record of building and deploying real-time, production-grade applications.
            </p>
            <p>
              My core expertise lies in architecting highly available multi-cloud infrastructures using <strong>AWS</strong> and <strong>Azure</strong>, and managing them efficiently as code with <strong>Terraform</strong>. I specialize in breaking down complex operational challenges and building scalable automated solutions.
            </p>
            <p>
              From setting up zero-downtime CI/CD pipelines with <strong>GitHub Actions</strong> to implementing strict <strong>GitOps</strong> practices, I ensure that software delivery is fast, secure, and reliable. I don't just write code; I build the robust engines that run it, bridging the gap between development and seamless operations.
            </p>
          </motion.div>

          {/* Right Side: Skill Boxes */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-gray-200">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-950 text-cyan-300 font-medium px-2 py-1.5 rounded-md border border-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;