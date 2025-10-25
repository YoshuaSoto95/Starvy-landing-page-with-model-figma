import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Emma Johnson',
    title: 'Project Manager at Tech Innovators',
    quote: '"The AI Scheduling Assistant has revolutionized the way I manage my time. Meetings are now seamlessly organized without any effort on my part."',
    avatarUrl: 'https://picsum.photos/seed/emma/100/100',
  },
  {
    name: 'Michael Smith',
    title: 'Sales Executive at Global Enterprises',
    quote: '"I love how the AI Scheduling Assistant integrates with my calendar. It saves me so much time and prevents double bookings."',
    avatarUrl: 'https://picsum.photos/seed/michael/100/100',
  },
  {
    name: 'Jane Doe',
    title: 'Marketing Director at Creative Solutions',
    quote: '"As a CEO, time is my most valuable resource. The AI Scheduling Assistant revolutionized my workflow. It\'s like having a personal assistant who works around the clock!"',
    avatarUrl: 'https://picsum.photos/seed/jane/100/100',
  },
   {
    name: 'David Miller',
    title: 'Operations Manager',
    quote: '"This tool is an absolute game-changer. Reduced errors and saved us countless hours of manual work."',
    avatarUrl: 'https://picsum.photos/seed/david/100/100',
  },
  {
    name: 'William Smith',
    title: 'CEO at Business Solutions Group',
    quote: '"As a CEO, time is my most valuable resource. The AI Scheduling Assistant helps me optimize my schedule and focus on what matters most."',
    avatarUrl: 'https://picsum.photos/seed/william/100/100',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials: React.FC = () => {
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
          Testimonials
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          What Our Users are Saying
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Hear from satisfied users of the AI Scheduling Assistant.
        </p>
      </motion.div>

      <motion.div 
        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="bg-purple-900/20 border border-purple-800 rounded-2xl p-8 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500" />
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-purple-300">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              {testimonial.quote}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;