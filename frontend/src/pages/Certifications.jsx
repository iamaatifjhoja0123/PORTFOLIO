import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 relative">
      <div className="max-w-5xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Licenses & <span className="text-yellow-500">Certifications</span></h2>
          <p className="text-gray-400 text-lg">Validating expertise with industry-recognized credentials.</p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-2xl border border-gray-800 backdrop-blur-sm overflow-hidden shadow-xl"
        >
          {/* Top Header of the Card */}
          <div className="p-6 md:p-8 border-b border-gray-800 flex items-center gap-4 bg-gray-900/80">
            <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
              <Award className="text-yellow-500" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-100">AWS Certified Solutions Architect - Associate</h3>
              <p className="text-gray-400 font-medium mt-1">Amazon Web Services (AWS)</p>
            </div>
          </div>

          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-10 items-start">
            
            {/* Left Side: PDF Viewer Box */}
            <div className="w-full flex flex-col">
              <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border-2 border-gray-700 bg-gray-800 relative group">
                {/* PDF embed karne ka code */}
                <iframe 
                  src="/aws-certificate.pdf" 
                  title="AWS Certificate"
                  className="w-full h-full object-cover"
                >
                  <p>Your browser does not support PDFs. <a href="/aws-certificate.pdf" className="text-blue-400">Download the PDF</a>.</p>
                </iframe>
              </div>
            </div>

            {/* Right Side: Credential Details */}
            <div className="space-y-8">
              <h4 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Credential Details</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Validation Number</p>
                    <p className="text-base text-gray-200 font-mono tracking-wide mt-1">25e5ed46fb04484db85bd684fddbd644</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="text-blue-400 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Validity Period</p>
                    <p className="text-base text-gray-200 mt-1">Issue Date: Jan 26, 2026</p>
                    <p className="text-base text-gray-200">Expiration Date: Jan 26, 2029</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ExternalLink className="text-green-400 mt-1" size={24} />
                  <div>
                    <p className="text-sm text-gray-500">Verification URL</p>
                    <a 
                      href="https://aws.amazon.com/verification" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base text-cyan-400 hover:text-cyan-300 hover:underline mt-1 inline-block transition-colors"
                    >
                      Verify on AWS Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Certifications;