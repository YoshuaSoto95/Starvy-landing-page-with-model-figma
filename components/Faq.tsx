import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  { question: "What is the AI Scheduling Assistant?", answer: "It's an intelligent tool that automates scheduling meetings, appointments, and tasks by integrating with your calendar, saving you time and effort." },
  { question: "How secure is my data with the AI Scheduling Assistant?", answer: "We prioritize your data security with end-to-end encryption and adhere to strict privacy policies to ensure your information is always protected." },
  { question: "How does the AI Scheduling Assistant work?", answer: "It uses advanced algorithms to understand your preferences and availability, then suggests optimal times for meetings and organizes your schedule automatically." },
  { question: "Can I customize notifications and reminders?", answer: "Yes, you have full control over when and how you receive notifications. You can set up custom reminders for appointments, tasks, and deadlines." },
  { question: "Is the AI Scheduling Assistant compatible with my calendar?", answer: "Our assistant seamlessly integrates with popular calendar applications like Google Calendar, Apple Calendar, and Outlook." },
  { question: "How do I start with AI Scheduling?", answer: "Simply sign up for a free account, connect your calendar, and set your preferences. The assistant will start organizing your schedule immediately." },
  { question: "Can the AI Scheduling Assistant manage tasks as well?", answer: "Absolutely. You can create, prioritize, and manage your tasks within the assistant, which helps you stay on top of your workload." },
  { question: "What are the pricing plans for the AI Scheduling Assistant?", answer: "We offer a range of plans, including a free Basic plan for individuals, a Pro plan for teams, and a custom Enterprise plan for large organizations." },
];

interface AccordionItemProps {
    question: string;
    answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-purple-800/50">
            <motion.button
                className="w-full flex justify-between items-center text-left py-6"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.99 }}
            >
                <span className="text-lg font-semibold text-white">{question}</span>
                <motion.span
                    className="transform"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-300">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    );
}

const Faq: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 container mx-auto">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center bg-purple-900/50 border border-purple-700 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          FAQ
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Find quick answers to common questions about our AI Scheduling Assistant.
        </p>
      </motion.div>

      <motion.div 
        className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.div className="space-y-4" variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 }} }}>
          {faqData.slice(0, 4).map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
        <motion.div className="space-y-4" variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 }} }}>
          {faqData.slice(4).map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;