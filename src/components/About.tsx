import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, GraduationCap, MapPin, Languages } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = {
    'Programming Languages': ['Java', 'Python', 'Kotlin'],
    'Frontend Technologies': ['React', 'Next.js', 'Angular', 'JavaScript', 'Tailwind CSS'],
    'Backend & Frameworks': ['Spring Boot', 'Node.js', 'PHP'],
    'Database Technologies': ['MySQL', 'MongoDB', 'Firebase', 'Docker'],
    'Cross-Platform & Mobile': ['React Native', 'Flutter'],
    'Tools & Cloud': ['GitHub', 'AWS']
  };

  return (
    <section id="about" className="py-20 bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Passionate about creating innovative solutions and pushing the boundaries of technology
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-8">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Personal Info</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p><strong>Email:</strong> sudheeracharya28@gmail.com</p>
                <p><strong>Phone:</strong> +91 7892246991</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" />Bengaluru, India</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
              <div className="text-gray-300">
                <p className="font-semibold">Bachelor of Computer Applications (BCA)</p>
                <p>CHRIST (Deemed to be University), Bengaluru</p>
                <p>2023 - 2026 | GPA: 3.72/4.00</p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)"
              }}
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Languages className="w-6 h-6 text-teal-400 mr-3" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">Languages</h3>
              </div>
              <div className="text-gray-300">
                <p>English (Proficient)</p>
                <p>Kannada & Telugu (Verbal)</p>
                <p>French (Learning)</p>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.15)"
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div 
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-medium text-purple-400 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 transform hover:scale-105"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + index * 0.05,
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
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;