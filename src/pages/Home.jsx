import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSmartphone, FiX, FiChevronDown, FiFileText } from 'react-icons/fi';

// Import both document assets cleanly
import cvFile from '../assets/zephania-cv.pdf';
import resumeFile from '../assets/zephania-resume.pdf';

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for the browser's PWA install prompt event
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
      console.log('PWA was installed successfully');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  // Helper trigger to handle file downloads programmatically
  const triggerDownload = (fileUrl, filename) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      
      {/* --- PWA Custom Floating Install Banner --- */}
      <AnimatePresence>
        {showInstallBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 max-w-md bg-gray-800 border border-blue-500/30 p-4 rounded-xl shadow-2xl flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg text-xl flex-shrink-0">
                <FiSmartphone />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-200">View Offline & Install</p>
                <p className="text-xs text-gray-400">Add Zeph's portfolio to your home screen.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleInstallClick}
                className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-md transition-colors shadow-lg shadow-blue-500/20"
              >
                Install
              </button>
              <button
                onClick={() => setShowInstallBanner(false)}
                className="p-1 text-gray-400 hover:text-gray-200 text-lg"
              >
                <FiX />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* --- End of Banner --- */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Zephania Ulare Owuor</span>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-400">
            Software Developer Building Practical Solutions for Education, Agriculture, and Public Services
          </h2>

          <p className="text-gray-400 max-w-2xl">
            I am a software developer passionate about solving real-world problems through
            technology. My work focuses on building systems for education, agriculture,
            e-commerce, and public services using modern technologies such as React,
            Flask, Django, Node.js, and PostgreSQL.

            Currently, I volunteer in the ICT Department at Taita Taveta County Government,
            contributing to software development initiatives while continuously improving
            my skills through practical projects and community impact.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <FiMail className="text-blue-400" />
              <span>ularezephaniah@gmail.com</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <FiMail className="text-blue-400" />
              <span>+254 798 551 128</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 relative">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all font-medium"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* Interactive Document Dropdown Button Container */}
            <div className="relative" ref={dropdownRef}>
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 rounded-lg shadow-lg transition-all font-medium focus:outline-none focus:border-blue-500/50"
                >
                  <FiDownload className="text-emerald-400" /> 
                  <span>Get My Resume</span>
                  <FiChevronDown className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
              </motion.div>

              {/* Dropdown Options Layout */}
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 lg:left-0 right-0 mt-2 w-56 mx-auto lg:mx-0 origin-top-left bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden divide-y divide-gray-700/50"
                  >
                    <button
                      onClick={() => triggerDownload(resumeFile, 'Zephania_Owuor_Resume.pdf')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors text-left"
                    >
                      <FiFileText className="text-blue-400 text-lg flex-shrink-0" />
                      <div>
                        <p className="font-medium">Download Resume</p>
                        <p className="text-xs text-gray-500">Targeted Tech Profile</p>
                      </div>
                    </button>
                    <button
                      onClick={() => triggerDownload(cvFile, 'Zephania_Owuor_CV.pdf')}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors text-left"
                    >
                      <FiFileText className="text-emerald-400 text-lg flex-shrink-0" />
                      <div>
                        <p className="font-medium">Download Full CV</p>
                        <p className="text-xs text-gray-500">Comprehensive Record</p>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <motion.a 
              href="https://github.com/zeph254" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 text-2xl"
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/zephaniah-ulare-452019347/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 text-2xl"
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Right Column - Image & Floating Tech Badges */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full overflow-hidden shadow-2xl shadow-blue-400/20">
              <img 
                src="https://res.cloudinary.com/du8cxwjt8/image/upload/WhatsApp_Image_2025-07-12_at_09.04.30_0e9fdd99_akjnvn"
                alt="Zephania Owuor"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-6 -left-6 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"><span className="text-emerald-400 font-medium">React</span></motion.div>
            <motion.div animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -top-6 -right-6 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"><span className="text-blue-400 font-medium">Node.js</span></motion.div>
            <motion.div animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="absolute -top-8 left-8 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"><span className="text-blue-400 font-medium">Flask</span></motion.div>
            <motion.div animate={{ y: [-5, 10, -5], rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }} className="absolute bottom-8 -right-8 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"><span className="text-emerald-400 font-medium">Tailwind</span></motion.div>
            <motion.div animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute top-12 -left-12 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"><span className="text-blue-400 font-medium">Python</span></motion.div>
            <motion.div animate={{ y: [-10, 5, -10], rotate: [-5, 5, -5] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="absolute -bottom-8 right-8 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"><span className="text-emerald-400 font-medium">JavaScript</span></motion.div>
            <motion.div animate={{ y: [5, -12, 5], rotate: [-4, 4, -4] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="absolute top-28 -right-12 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"><span className="text-blue-400 font-medium">FastAPI</span></motion.div>
            <motion.div animate={{ y: [-15, 5, -15], rotate: [6, -6, 6] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="absolute bottom-24 -left-12 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"><span className="text-emerald-400 font-medium">Django</span></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}