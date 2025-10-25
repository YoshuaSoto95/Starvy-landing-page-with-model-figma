import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'Logoipsum 1', width: 140, height: 40 },
    { name: 'Logoipsum 2', width: 150, height: 40 },
    { name: 'Logoipsum 3', width: 130, height: 40 },
    { name: 'Logoipsum 4', width: 160, height: 40 },
    { name: 'Logoipsum 5', width: 120, height: 40 },
    { name: 'Logoipsum 6', width: 145, height: 40 },
]

const PartnerLogo: React.FC<{ width: number; height: number; index: number }> = ({ width, height, index }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 hover:text-white transition-colors duration-300">
        <rect width={width} height={height} fill="currentColor" fillOpacity="0.2"/>
        <text x={width/2} y={height/2} fontFamily="Arial, sans-serif" fontSize="14" fill="currentColor" textAnchor="middle" dominantBaseline="middle">Logoipsum</text>
    </svg>
)

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

const Partners: React.FC = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-16 lg:gap-x-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants}>
              <PartnerLogo width={partner.width} height={partner.height} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;