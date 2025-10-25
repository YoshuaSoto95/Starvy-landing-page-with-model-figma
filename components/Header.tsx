import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const StarvyLogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 7L12 12" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7L12 12" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 4.5L7 9.5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <motion.span 
      className="text-xl font-bold shiny-text"
      animate={{ backgroundPosition: ["0% 50%", "150% 50%", "0% 50%"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      Starvy
    </motion.span>
  </div>
);

const Path: React.FC<any> = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle: React.FC<{ toggle: () => void }> = ({ toggle }) => (
  <button onClick={toggle} className="relative z-50 w-8 h-8 focus:outline-none">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        variants={{
          closed: { d: "M 2 4.5 L 22 4.5" },
          open: { d: "M 4 20 L 20 4" }
        }}
      />
      <Path
        d="M 2 12 L 22 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 19.5 L 22 19.5" },
          open: { d: "M 4 4 L 20 20" }
        }}
      />
    </svg>
  </button>
);

const navLinks = [
  { name: 'Features', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Testimonials', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'FAQ', href: '#' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const mobileMenuVariants = {
    open: {
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 40 }
    },
    closed: {
      x: '100%',
      transition: { type: 'spring', stiffness: 300, damping: 40 }
    }
  };

  const navListVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const navItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-[#0F0B19]/80 backdrop-blur-md shadow-lg' : 'py-6'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        <nav className="flex justify-between items-center">
          <StarvyLogo />
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
            ))}
          </div>
          <motion.button 
            className="hidden lg:block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-purple-500/20"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(124, 58, 237, 0.4)",
                "0 0 0 10px rgba(124, 58, 237, 0)",
                "0 0 0 0 rgba(124, 58, 237, 0.4)"
              ]
            }}
            style={{ transitionProperty: 'box-shadow' }}
            // @ts-ignore
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Get Started Free
          </motion.button>
          <div className="lg:hidden">
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-[#0F0B19]/90 backdrop-blur-lg flex flex-col items-center justify-center"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.ul 
              className="flex flex-col items-center gap-8 text-2xl"
              variants={navListVariants}
            >
              {navLinks.map(link => (
                <motion.li key={link.name} variants={navItemVariants}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>{link.name}</a>
                </motion.li>
              ))}
              <motion.li variants={navItemVariants} className="mt-8">
                <motion.button 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/20"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Get Started Free
                </motion.button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;