import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const HowItWorks: React.FC = () => {
  return (
    <motion.section 
      className="px-4 sm:px-6 lg:px-8 container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="text-center max-w-3xl mx-auto" variants={containerVariants}>
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-purple-900/50 border border-purple-700 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          How It Works
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Getting Started with Our AI Scheduling Assistant
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300">
          See how easy it is to streamline your scheduling and boost your productivity with just a few simple steps.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 text-center flex flex-col items-center backdrop-blur-sm">
          <div className="w-full h-48 bg-black/30 border border-white/10 rounded-xl mb-6 flex items-center justify-center">
            <img src="https://picsum.photos/seed/account/300/180" alt="Setup Account" className="rounded-lg object-cover"/>
          </div>
          <span className="text-sm font-bold text-purple-400">STEP 1</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-3">Setup Your Account</h3>
          <p className="text-gray-400">Start by providing your basic information such as name, email, and password.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 text-center flex flex-col items-center backdrop-blur-sm">
           <div className="w-full h-48 bg-black/30 border border-white/10 rounded-xl mb-6 flex items-center justify-center">
            <img src="https://picsum.photos/seed/sync/300/180" alt="Sync Calendar" className="rounded-lg object-cover"/>
          </div>
          <span className="text-sm font-bold text-purple-400">STEP 2</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-3">Sync Your Calendar</h3>
          <p className="text-gray-400">Easily sync your calendar to streamline scheduling and stay organized.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 text-center flex flex-col items-center backdrop-blur-sm">
           <div className="w-full h-48 bg-black/30 border border-white/10 rounded-xl mb-6 flex items-center justify-center">
            <img src="https://picsum.photos/seed/prefs/300/180" alt="Set Preferences" className="rounded-lg object-cover"/>
          </div>
          <span className="text-sm font-bold text-purple-400">STEP 3</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-3">Set Your Preferences</h3>
          <p className="text-gray-400">Tailor the AI Scheduling Assistant to your needs by adjusting key preferences.</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;