import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFlask, SiTailwindcss, SiJavascript, SiGit, SiDjango, SiFastapi } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { MdDesignServices, MdOutlineChat } from 'react-icons/md';
import { FiUsers, FiCode, FiTarget, FiCheckCircle } from 'react-icons/fi';

const Skills = () => {
  // Technical Skills Data (Updated with Django & FastAPI)
  const techSkills = [
    { name: 'React', icon: <FaReact className="text-blue-400" />, level: 90 },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 90 },
    { name: 'Python', icon: <FaPython className="text-blue-600" />, level: 80 },
    { name: 'FastAPI', icon: <SiFastapi className="text-emerald-500" />, level: 80 },
    { name: 'Flask', icon: <SiFlask className="text-gray-300" />, level: 75 },
    { name: 'Django', icon: <SiDjango className="text-emerald-700" />, level: 70 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 85 },
    { name: 'REST APIs', icon: <TbApi className="text-purple-400" />, level: 85 },
    { name: 'Git/GitHub', icon: <SiGit className="text-orange-500" />, level: 80 }
  ];

  // Soft Skills Data
  const softSkills = [
    { name: 'Problem Solving', icon: <FiCheckCircle className="text-emerald-400" /> },
    { name: 'Teamwork', icon: <FiUsers className="text-blue-400" /> },
    { name: 'Communication', icon: <MdOutlineChat className="text-purple-400" /> },
    { name: 'Attention to Detail', icon: <FiTarget className="text-red-400" /> },
    { name: 'Adaptability', icon: <MdDesignServices className="text-yellow-400" /> }
  ];

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
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
            My Skills
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Here's what I bring to the table - a combination of technical expertise and essential soft skills.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
            <FiCode className="text-blue-400" /> Technical Skills
          </h3>
          
          {/* Adjusted columns to sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 for 10 balanced cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-blue-400/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl flex-shrink-0">{skill.icon}</div>
                    <h4 className="font-medium text-gray-200 truncate">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
                    />
                  </div>
                </div>
                <span className="text-xs text-gray-400 mt-2 block text-right">
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
            <FiUsers className="text-blue-400" /> Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 text-center hover:shadow-lg hover:shadow-blue-400/10 transition-all"
              >
                <div className="text-3xl mb-2 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="font-medium text-gray-200">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* DevOps & Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6 flex items-center gap-2">
            <FiCheckCircle className="text-blue-400" /> DevOps & Tools
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {['PostgreSQL', 'Vite', 'GitHub Actions', 'Vercel', 'Netlify', 'Render', 'Cloudinary', 'JWT', 'OAuth', 'SQLAlchemy'].map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-gray-800 rounded-full border border-gray-700 text-sm text-gray-300 hover:text-blue-400 hover:border-blue-400/30 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;