import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';

const PROFILE_IMG = "https://photos.fife.usercontent.google.com/pw/AP1GczPG_Bjn9sXRFK-ZZMIYIHfboYuVsVmlIQzDv2knjQoXWqS-VD8hfIs=w727-h727-s-no-gm?authuser=0";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"
          style={{ transform: "translate(-50%, -50%)" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Profile Image */}
          <motion.div 
            className="mx-auto w-32 h-32 mb-8 relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            {/* Gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ zIndex: 1 }}
            />
            {/* Profile Image */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-900 flex items-center justify-center" style={{ zIndex: 2, width: '88px', height: '88px' }}>
              <img
                src={PROFILE_IMG}
                alt="Sudheer Kumar R"
                className="w-full h-full object-cover rounded-full select-none"
                draggable={false}
                style={{ display: "block" }}
              />
            </div>
          </motion.div>

          {/* Name and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Sudheer Kumar R
            </motion.h1>
            <motion.div 
              className="text-2xl md:text-2.5xl text-gray-300 mb-6 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Full Stack Developer & Android App Developer
            </motion.div>
          </motion.div>

          {/* About blurb */}
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Passionate software developer specializing in AI-driven solutions, full-stack development, 
            and innovative tech implementations. Currently pursuing BCA at CHRIST University with expertise 
            in Spring Boot, React, and Machine Learning.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4 inline ml-2" />
              </motion.div>
            </motion.button>
            
            <motion.a 
              href="https://drive.google.com/file/d/11HG7b6Uy0PAKZmb3yqmPsVsClbTBN82Q/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 1)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-6 opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            {['Java', 'Python', 'Flutter', 'Spring Boot', 'AI/ML', 'React','AWS', 'MongoDB', 'Firebase', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 2.5 + index * 0.1 
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  backgroundColor: "rgba(139, 92, 246, 0.2)"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
