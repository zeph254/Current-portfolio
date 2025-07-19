import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { SiReact, SiFlask, SiPython, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: "Daily Scoop",
      description: "A modern news application aggregating the latest headlines with personalized feeds and search functionality.",
      tags: ["React","Firebase", "NewsAPI", "Tailwind CSS"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_12_amk4va", // Add your image to public folder
      liveUrl: "https://daily-scoop-news-app-9615.vercel.app/",
      codeUrl: "https://github.com/zeph254/Daily-Scoop-News-App", // Add your GitHub link
      icon: <SiReact className="text-blue-400" />
    },
    {
      title: "Number Hunt",
      description: "An interactive number guessing game with multiple difficulty levels and score tracking.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_13_tspvjv",
      liveUrl: "https://numberhunt1.netlify.app/",
      codeUrl: "https://github.com/zeph254/Number-Hunt",
      icon: <SiReact className="text-blue-400" />
    },
    {
      title: "ContactMate",
      description: "A contact management application with CRUD operations, search, and filtering capabilities.",
      tags: ["React", "LocalStorage", "Tailwind"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_14_nnyzib",
      liveUrl: "https://yourcontactmate.netlify.app/",
      codeUrl: "https://github.com/zeph254/ContactMate",
      icon: <SiReact className="text-blue-400" />
    },
    {
      title: "MiniPost",
      description: "A lightweight blog platform where users can create, read, update and delete their posts.",
      tags: ["React", "Tailwind", "LocalStorage"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_15_tmssin",
      liveUrl: "https://minipost.netlify.app/",
      codeUrl: "https://github.com/zeph254/MiniPost",
      icon: <SiFlask className="text-gray-300" />
    },
    {
      title: "EMI Calculator",
      description: "A financial tool to calculate Equated Monthly Installments for loans with amortization details.I used Render to deploy this project so please atleast wait for 10 seconds for the page to load.",
      tags: ["Flask", "HTML", "CSS"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_16_e46svy",
      liveUrl: "https://emi-calculator-1cbp.onrender.com/",
      codeUrl: "https://github.com/zeph254/EMI-calculator",
      icon: <SiPython className="text-blue-600" />
    },
    {
      title: "Unishop",
      description: "A simple e-commerce website showcasing products with a cart and checkout functionality.I have deployed this project on the beggining of 2025 so the by the time you are reading this, the backend request may not work.",
      tags: ["Flask", "React", "Tailwind CSS"],
      image: "https://res.cloudinary.com/du8cxwjt8/image/upload/Screenshot_17_rs9rjt",
      liveUrl: "https://run-sigma.vercel.app/",
      codeUrl: "https://github.com/zeph254/unishop-fullstack",
      icon: <SiPython className="text-blue-600" />
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            My Projects
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one represents different skills and technologies I've mastered.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-400/10 transition-all"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/20 transition-all"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                  
                  {project.codeUrl && (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all"
                    >
                      <FiGithub /> Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/zeph254" // Add your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-all"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;