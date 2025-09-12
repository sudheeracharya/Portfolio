import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: "AI-Powered Quiz/Test Platform",
      description: "A groundbreaking AI-based assessment platform that instantly generates topic-specific questions from raw text and documents. This innovative solution goes beyond traditional quiz tools, slashing content creation time for educators and learners by over 80% - a feat even Google Forms couldn't achieve.",
      tech: ["React", "TypeScript", "Node.js", "Express.js", "MySQL", "Mistral API"],
      features: [
        "Instant question generation from documents",
        "AI-powered content analysis",
        "Real-time assessment creation",
        "Advanced analytics dashboard"
      ],
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-purple-500 to-blue-500",
      githubUrl: "https://github.com/sudheeracharya/AI_Powered-Quiz-Test-Platform"
    },
    {
      title: "Anonymous Chat Application",
      description: "Engineered a unique real-time anonymous chat system where complete strangers connect and share messages with zero identity leakage. This tackles the challenge of secure, ephemeral conversations with unmatched simplicity and privacy using Spring Boot and WebSockets.",
      tech: ["Spring Boot", "MySQL", "Lombok", "WebSockets", "Java"],
      features: [
        "Complete anonymity protection",
        "Real-time messaging",
        "Secure ephemeral conversations",
        "Zero data retention"
      ],
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-teal-500 to-green-500",
      githubUrl: "https://github.com/sudheeracharya/Anonymous_ChatApplication"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative solutions that push the boundaries of what's possible
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: -15 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: index % 2 === 0 ? 5 : -5,
                boxShadow: "0 30px 60px rgba(139, 92, 246, 0.3)"
              }}
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.gradient} p-1`}>
                <div className="bg-gray-900 p-6 rounded-t-xl">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div className="flex gap-3">
                      <motion.a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.button 
                        className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    whileHover={{ color: "#A855F7" }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                >
                  {project.description}
                </motion.p>

                {/* Key Features */}
                <div className="mb-6">
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-3"
                    whileHover={{ color: "#A855F7" }}
                  >
                    Key Features
                  </motion.h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.2 + idx * 0.1 }}
                        whileHover={{ x: 10, color: "#A855F7" }}
                      >
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <motion.h4 
                    className="text-lg font-semibold text-white mb-3"
                    whileHover={{ color: "#A855F7" }}
                  >
                    Technologies Used
                  </motion.h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 1.2 + index * 0.2 + idx * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -3,
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          borderColor: "rgba(139, 92, 246, 0.5)"
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;