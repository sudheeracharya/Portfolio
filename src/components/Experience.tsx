import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: "Finoco Innovations Private Limited",
      position: "Software Developer",
      duration: "June 2025 - August 2025",
      location: "Remote",
      description: [
        "Developed robust backend services and REST APIs to power AI-driven platforms",
        "Built and deployed agentic AI workflows, enabling autonomous task execution and decision-making",
        "Integrated LLMs and vector databases for intelligent data retrieval in real-time systems",
        "Optimized backend performance, scalability, and security for production-ready AI applications"
      ],
      tech: ["AI/ML", "Backend Development", "REST APIs", "LLMs", "Vector Databases"],
      logoPath: "https://framerusercontent.com/images/m24ZmXiPcI8dAVHhw4PyUytZAo.png", // Replace with actual Finoco logo URL
      logoAlt: "Finoco Innovations Logo"
    },
    {
      company: "The/Nudge Institute (Ministry of Social Justice, India)",
      position: "RAG Model Developer – AI/ML Intern",
      duration: "April 2025 - August 2025",
      location: "Bengaluru, India",
      description: [
        "Building a RAG-based AI chatbot to provide automated citizen support across India",
        "Developed and optimized RAG pipeline: embedding models, vector DBs (QDrant), LLM integration",
        "Focused on multilingual support, OCR integration for Aadhaar-based services, and real-time API deployment",
        "Contributed to creating scalable, personalized solutions for marginalized communities"
      ],
      tech: ["RAG Models", "LLaMA 3", "Gemini", "Claude", "QDrant", "OCR", "Multilingual AI"],
      logoPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vlRMfXYQZjG8etQTijmImSRi7qZ-aFq-WA&s", // Replace with actual Nudge Institute logo URL
      logoAlt: "The/Nudge Institute Logo"
    },
    {
      company: "Freethought Labs (OPC) Pvt Ltd",
      position: "Machine Learning Intern – Indic Language LLM Development",
      duration: "Jan 2025 - March 2025",
      location: "Remote",
      description: [
        "Developed an Indic Language LLM model specialized in Kannada for NLU, translation, and text generation",
        "Built a Kannada translator app by integrating the model to enable seamless language conversion",
        "Gained hands-on experience in machine learning, NLP, and model deployment",
        "Optimized translation accuracy through dataset fine-tuning and model performance enhancement"
      ],
      tech: ["NLP", "LLM Development", "Kannada", "Translation", "Model Deployment", "Fine-tuning"],
      logoPath: "https://t3.ftcdn.net/jpg/07/41/08/12/360_F_741081278_od0d703OcZoSRQ8J9NSBbYw6NtQAOVt4.jpg", // Replace with actual Freethought Labs logo URL
      logoAlt: "Freethought Labs Logo"
    },
    {
      company: "KaHa Technologies Pvt Ltd (Cove IoT)",
      position: "Spring Boot Developer Intern",
      duration: "May 2024 - June 2024",
      location: "Bengaluru, India",
      description: [
        "Worked on real-time in-house project focused on enhancing industry communication and collaboration",
        "Managed backend server systems for boAt to ensure seamless device connectivity and performance",
        "Developed and integrated REST APIs using Java Spring Boot; contributed to frontend using AngularJS",
        "Gained hands-on experience in full-stack development and API integration"
      ],
      tech: ["Spring Boot", "Java", "AngularJS", "REST APIs", "IoT", "Backend Systems"],
      logoPath: "https://media.licdn.com/dms/image/v2/C4E0BAQGDnhw3ttLPEg/company-logo_200_200/company-logo_200_200/0/1630655985074/kaha_pte_ltd_logo?e=2147483647&v=beta&t=ajoa_x71HXoZtNyd8aPKm-hbkoq6x-cBws19HHI1utI", // Replace with actual KaHa Technologies logo URL
      logoAlt: "KaHa Technologies Logo"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/30" ref={ref}>
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
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My journey through innovative companies and impactful projects
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 rounded-full"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                {/* Timeline Logo Box */}
                <motion.div 
                  className="absolute top-1/2 z-10"
                  style={{ left: 'calc(50% - 60px)', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="w-32 h-20 bg-white rounded-xl border-4 border-gray-900 shadow-xl overflow-hidden">
                    <img 
                      src={exp.logoPath} 
                      alt={exp.logoAlt}
                      className="w-full h-full object-contain scale-150 p-1"
                      onError={(e) => {
                        // Fallback to company initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg"
                      style={{ display: 'none' }}
                    >
                      {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                </motion.div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <motion.div 
                    className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: index % 2 === 0 ? 5 : -5,
                      boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-white mb-2"
                          whileHover={{ color: "#A855F7" }}
                        >
                          {exp.position}
                        </motion.h3>
                        <motion.h4 
                          className="text-lg text-purple-400 font-semibold mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {exp.company}
                        </motion.h4>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Briefcase className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-300 mb-6">
                      {exp.description.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: 1.2 + index * 0.2 + idx * 0.1 }}
                          whileHover={{ x: 10, color: "#A855F7" }}
                        >
                          <span className="text-purple-400 mr-2 mt-2">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="bg-gray-900/70 text-teal-300 px-3 py-1 rounded-full text-xs border border-teal-500/30 hover:bg-teal-500/10 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 1.4 + index * 0.2 + idx * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            y: -3,
                            backgroundColor: "rgba(20, 184, 166, 0.2)"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;