import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail, FiUser, FiCode, FiBriefcase, FiMessageSquare } from 'react-icons/fi';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: 'About', icon: <FiUser />, to: '/about' },
    { name: 'Skills', icon: <FiCode />, to: '/skills' },
    { name: 'Projects', icon: <FiBriefcase />, to: '/projects' },
    { name: 'Contact', icon: <FiMessageSquare />, to: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-blue-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Desktop & Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
          >
            <Link to="/">OWUOR</Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ 
                  scale: 1.05,
                  color: '#60a5fa'
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <Link to={item.to} className="flex items-center gap-1">
                  <span className="hidden sm:inline-block">{item.icon}</span>
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a 
              href="https://github.com/zeph254" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#60a5fa' }}
              className="text-gray-400 hover:text-blue-400"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/zephaniah-ulare-452019347/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: '#60a5fa' }}
              className="text-gray-400 hover:text-blue-400"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:ularezephaniah@gmail.com" 
              whileHover={{ y: -2, color: '#60a5fa' }}
              className="text-gray-400 hover:text-blue-400"
            >
              <FiMail size={20} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-400 hover:text-blue-400 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-900/95 border-t border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate(item.to);
                  }}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="block px-3 py-2 rounded-md text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </motion.div>
              ))}

              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-800">
                <motion.a 
                  href="https://github.com/zeph254" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/zephaniah-ulare-452019347/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a 
                  href="mailto:ularezephaniah@gmail.com" 
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FiMail size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}