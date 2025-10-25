import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC = () => {
  return (
    <motion.section 
      className="text-center container mx-auto px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-purple-900/50 border border-purple-700 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-8 0a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm4 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"/></svg>
        Your AI Scheduling Assistant
      </motion.div>
      <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
        Simplify Your Scheduling with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">AI-Powered Precision</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
        Effortlessly manage appointments, meetings, and tasks with our intelligent scheduling assistant.
      </motion.p>
      <motion.div variants={itemVariants} className="mt-10">
        <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
          Get Started Free &rarr;
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-12 max-w-6xl mx-auto">
        <div className="bg-black/30 border border-white/10 rounded-xl shadow-2xl shadow-purple-500/10 p-2 backdrop-blur-sm">
          <img src="https://picsum.photos/seed/calendarsched/1200/600" alt="Scheduling Assistant UI" className="rounded-lg w-full" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;