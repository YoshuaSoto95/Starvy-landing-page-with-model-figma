import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CheckIcon: React.FC = () => (
    <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

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

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="px-4 sm:px-6 lg:px-8 container mx-auto">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center bg-purple-900/50 border border-purple-700 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Pricing
        </motion.div>
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Flexible Pricing Plans for Every Need
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-6 text-lg text-gray-300">
          Choose the plan that best fits your requirements and start optimizing your time today!
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex justify-center items-center my-10 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span className={`font-medium ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
        <label htmlFor="pricing-toggle" className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" id="pricing-toggle" className="sr-only peer" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
          <div className="w-14 h-8 bg-purple-900/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-purple-600"></div>
        </label>
        <span className={`font-medium ${isAnnual ? 'text-white' : 'text-gray-400'}`}>Annually</span>
        <span className="bg-green-500/20 text-green-300 text-xs font-bold px-2 py-1 rounded-md">20% OFF</span>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Basic Plan */}
        <motion.div variants={itemVariants} className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 flex flex-col backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-white">Basic</h3>
          <p className="text-gray-400 mt-2 mb-6">Perfect for individuals looking to streamline their scheduling with essential features.</p>
          <div className="text-5xl font-extrabold text-white my-4">Free</div>
          <ul className="space-y-4 text-gray-300 flex-grow">
            <li className="flex items-start"><CheckIcon /> Automated Meeting Scheduling</li>
            <li className="flex items-start"><CheckIcon /> Basic Calendar Sync</li>
            <li className="flex items-start"><CheckIcon /> Daily Schedule Overview</li>
            <li className="flex items-start"><CheckIcon /> Email Reminders</li>
            <li className="flex items-start"><CheckIcon /> Task Management</li>
            <li className="flex items-start"><CheckIcon /> 24/7 Customer Support</li>
          </ul>
          <button className="mt-8 w-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors">Get Started</button>
        </motion.div>

        {/* Pro Plan */}
        <motion.div variants={itemVariants} className="bg-purple-900/30 border-2 border-purple-500 rounded-2xl p-8 flex flex-col backdrop-blur-sm shadow-2xl shadow-purple-500/20 relative transition-transform duration-300 hover:-translate-y-2">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
          <h3 className="text-2xl font-bold text-white">Pro</h3>
          <p className="text-gray-400 mt-2 mb-6">Ideal for small teams needing advanced scheduling and customization options.</p>
          <div className="my-4">
            <span className="text-5xl font-extrabold text-white">${isAnnual ? (9.99 * 12 * 0.8 / 12).toFixed(2) : '9.99'}</span>
            <span className="text-gray-400 text-lg"> /month</span>
          </div>
          <ul className="space-y-4 text-gray-300 flex-grow">
            <li className="flex items-start"><CheckIcon /> All Basic Plan Features</li>
            <li className="flex items-start"><CheckIcon /> Advanced Calendar Integrations</li>
            <li className="flex items-start"><CheckIcon /> Customizable Notifications</li>
            <li className="flex items-start"><CheckIcon /> Priority Support</li>
            <li className="flex items-start"><CheckIcon /> Analytics and Insights</li>
            <li className="flex items-start"><CheckIcon /> Group Scheduling</li>
          </ul>
          <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-purple-500/30 transition-all">Get Started</button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div variants={itemVariants} className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 flex flex-col backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-white">Enterprise</h3>
          <p className="text-gray-400 mt-2 mb-6">Tailored for large organizations requiring enterprise-grade features and integrations.</p>
          <div className="text-5xl font-extrabold text-white my-4">Custom</div>
          <ul className="space-y-4 text-gray-300 flex-grow">
            <li className="flex items-start"><CheckIcon /> All Pro Plan Features</li>
            <li className="flex items-start"><CheckIcon /> Dedicated Account Manager</li>
            <li className="flex items-start"><CheckIcon /> Custom Integrations</li>
            <li className="flex items-start"><CheckIcon /> Advanced Security Features</li>
            <li className="flex items-start"><CheckIcon /> Team Collaboration Tools</li>
            <li className="flex items-start"><CheckIcon /> Onboarding and Training</li>
          </ul>
          <button className="mt-8 w-full bg-white/10 border border-white/20 hover:bg-white/20 text-white font-bold py-3 rounded-lg transition-colors">Contact Sales</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing;