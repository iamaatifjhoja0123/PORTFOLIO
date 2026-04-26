import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-300">
            © {currentYear} Mohd Aatif. All rights reserved.
          </p>
        </div>

        <div className="mt-2 md:mt-0 text-center md:text-right text-sm text-gray-500">
          Designed & Built with <span className="text-blue-500">React</span> & <span className="text-green-500">Node.js</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;