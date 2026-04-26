import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  // Form ka data aur loading state handle ke liye
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Jab user typing karega
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Jab form submit hoga (Backend API call)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://9d71h8kpud.execute-api.ap-south-1.amazonaws.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

      if (response.ok) {
        alert("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' }); // Message jane ke baad form clear 
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please check your connection or ensure the backend server is running.");
    } finally {
      setIsSubmitting(false); // Loading state band 
    }
  };

  //WhatsApp Number aur Pre-filled Message
  const whatsappNumber = "917983446931";
  const whatsappMessage = "Hi Aatif, I saw your portfolio and would like to connect!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-gray-950 text-white py-20 px-4 relative">
      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
          <p className="text-gray-400 text-lg">Have a project in mind or want to hire me? Let's talk.</p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
                <input 
                  type="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
                <textarea 
                  name="message" rows="5" required
                  value={formData.message} onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              
              {/* Submit Button with Loading State */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg flex justify-center items-center gap-2 shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Direct Contact Info & WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
              
              {/* Email Section */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Me At</p>
                  <a href="mailto:m.aatif0123@gmail.com" className="text-lg text-gray-200 hover:text-cyan-400 transition-colors">
                    m.aatif0123@gmail.com
                  </a>
                </div>
              </div>

              {/* WhatsApp Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <MessageCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">WhatsApp Me</p>
                  <p className="text-lg text-gray-200 mb-3">+91 7983446931</p>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-green-600/20"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;