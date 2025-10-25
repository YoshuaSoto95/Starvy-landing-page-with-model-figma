import React from 'react';
import { motion } from 'framer-motion';

interface FeaturePillProps {
  icon: React.ReactNode;
  text: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturePill: React.FC<FeaturePillProps> = ({ icon, text }) => (
  <div className="inline-flex items-center justify-center bg-purple-900/50 border border-purple-700 text-purple-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
    {icon}
    {text}
  </div>
);

const FeatureCard: React.FC<{
  pillIcon: React.ReactNode;
  pillText: string;
  title: React.ReactNode;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}> = ({ pillIcon, pillText, title, description, imageUrl, reverse = false }) => (
  <motion.div 
    className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${reverse ? 'md:flex-row-reverse' : ''}`}
    variants={itemVariants}
  >
    <div className="md:w-1/2">
      <FeaturePill icon={pillIcon} text={pillText} />
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">{title}</h2>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
    <div className="md:w-1/2 w-full">
      <div className="bg-black/30 border border-white/10 rounded-xl shadow-2xl shadow-purple-500/10 p-2 backdrop-blur-sm">
        <img src={imageUrl} alt={pillText} className="rounded-lg w-full" />
      </div>
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 container mx-auto">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <FeaturePill 
            icon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L10 16l-4 4-4-4 6.707-6.707a1 1 0 011.414 0L15 13m-3-3l-3 3m5.5-5.5l3 3"></path></svg>}
            text="Features"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Powerful Features to Simplify Your Scheduling
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Discover how our AI-driven tools can transform your productivity and streamline your day.
        </p>
      </motion.div>

      <motion.div 
        className="mt-24 space-y-24 md:space-y-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <FeatureCard
          pillIcon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>}
          pillText="EFFORTLESS SCHEDULING"
          title={<>Automate Meeting Scheduling</>}
          description="Our solution reduces manual effort, minimizes errors, and ensures seamless coordination, allowing you to focus on what truly matters."
          imageUrl="https://picsum.photos/seed/meetings/600/400"
        />

        <FeatureCard
          pillIcon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>}
          pillText="SMART REMINDERS"
          title={<>Get Smart Alerts to Stay on Track</>}
          description="Our system ensures your tasks with intelligent notifications that alert you to important updates and deadlines."
          imageUrl="https://picsum.photos/seed/alerts/600/400"
          reverse
        />

        <FeatureCard
          pillIcon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>}
          pillText="TASK MANAGEMENT"
          title={<>Organize Your Tasks Easily</>}
          description="Keep your tasks in order with minimal effort. Our tools help you quickly organize and prioritize your workload, so you can stay focused and get more done."
          imageUrl="https://picsum.photos/seed/tasks/600/400"
        />

        <FeatureCard
          pillIcon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707-.707M19 19l-1-1m-4-15l-1 1m-1 15l-1-1m-1-15l-1 1"></path></svg>}
          pillText="PERSONALIZED EXPERIENCE"
          title={<>Get Personalized Suggestions</>}
          description="Receive customized suggestions that adapt to your behavior, optimizing your workflow and enhancing your productivity."
          imageUrl="https://picsum.photos/seed/suggestions/600/400"
          reverse
        />

         <FeatureCard
          pillIcon={<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>}
          pillText="SEAMLESS INTEGRATION"
          title={<>Integrate with Popular Apps</>}
          description="Seamlessly connect with your favorite calendars and applications to keep everything in sync and manage your schedule more efficiently."
          imageUrl="https://picsum.photos/seed/integrations/600/400"
        />
      </motion.div>
    </section>
  );
};

export default Features;