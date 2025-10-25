import React from 'react';
import { motion } from 'framer-motion';

const Cta: React.FC = () => {
  return (
    <motion.section 
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto max-w-4xl text-center bg-purple-900/20 border border-purple-800 rounded-2xl p-10 md:p-16 backdrop-blur-sm">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
          Ready to Transform Your Scheduling?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
          Join thousands of professionals who have already streamlined their scheduling with our AI Assistant.
        </p>
        <div className="mt-10">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl shadow-purple-500/30 transform hover:scale-105 transition-all duration-300">
            Get Started &rarr;
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;