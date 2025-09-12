import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, FileText, Globe, Twitter, Instagram, Phone } from 'lucide-react';

const Links: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sudheeracharya",
      icon: <Github className="w-6 h-6" />,
      description: "Check out my code repositories and open source contributions",
      color: "bg-gray-800 hover:bg-gray-700",
      textColor: "text-gray-300"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sudheeracharya/",
      icon: <Linkedin className="w-6 h-6" />,
      description: "Connect with me professionally",
      color: "bg-blue-600 hover:bg-blue-700",
      textColor: "text-white"
    },
    {
      name: "Email",
      url: "mailto:sudheeracharya28@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      description: "Reach out for opportunities and collaborations",
      color: "bg-red-600 hover:bg-red-700",
      textColor: "text-white"
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/11HG7b6Uy0PAKZmb3yqmPsVsClbTBN82Q/view?usp=drive_link",
      icon: <FileText className="w-6 h-6" />,
      description: "Download my detailed resume",
      color: "bg-green-600 hover:bg-green-700",
      textColor: "text-white"
    },
    {
      name: "Portfolio",
      url: "#",
      icon: <Globe className="w-6 h-6" />,
      description: "Explore my complete portfolio website",
      color: "bg-purple-600 hover:bg-purple-700",
      textColor: "text-white"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sudheer",
      icon: <Twitter className="w-6 h-6" />,
      description: "Follow me for tech insights and updates",
      color: "bg-sky-500 hover:bg-sky-600",
      textColor: "text-white"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sudheerchaurasiya_/",
      icon: <Instagram className="w-6 h-6" />,
      description: "Behind the scenes and personal updates",
      color: "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      textColor: "text-white"
    },
    {
      name: "Phone",
      url: "tel:+917892246991",
      icon: <Phone className="w-6 h-6" />,
      description: "Call me directly for urgent matters",
      color: "bg-teal-600 hover:bg-teal-700",
      textColor: "text-white"
    }
  ];

  return (
    <section id="links" className="py-20 bg-gray-900/50" ref={ref}>
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
            Connect With Me
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's connect across different platforms and build something amazing together
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.2)"
              }}
            >
              <div className={`${link.color} ${link.textColor} p-6 rounded-2xl border border-gray-700/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {link.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-lg font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.h3>
                  </div>
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ rotate: 45, scale: 1.1 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.div>
                </div>
                
                <motion.p 
                  className="text-sm opacity-80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                >
                  {link.description}
                </motion.p>

                {/* Hover Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Quick Contact Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 max-w-2xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
            }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ color: "#A855F7" }}
            >
              Quick Contact Info
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <motion.div 
                className="flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, color: "#A855F7" }}
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <span>sudheeracharya28@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
              >
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+91 7892246991</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Links;