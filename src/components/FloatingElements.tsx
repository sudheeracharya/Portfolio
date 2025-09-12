import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 180, 360],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-teal-500/20 to-green-500/20 rotate-45 blur-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
        variants={pulseVariants}
        animate="animate"
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rotate-12 blur-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
};

export default FloatingElements;