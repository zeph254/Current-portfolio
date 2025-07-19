import { motion } from 'framer-motion';
import profile from '../assets/profile.png'; // Adjust the path as necessary
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import cvFile from '../assets/Zephania_Owuor_CV.pdf'; // Adjust the path to your CV file

export default function Home() {
    const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Zephania_Owuor_CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Zephania Owuor</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-gray-400">
            Full-Stack Developer | Tech Enthusiast | Continuous Learner
          </h2>
          
          <p className="text-gray-400 max-w-2xl">
            I build scalable applications through clean code and innovative solutions. 
            Passionate about creating digital experiences that make an impact.
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
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
            <motion.a
              href="/contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg shadow-lg hover:shadow-blue-400/20 transition-all"
            >
              Contact Me
            </motion.a>
            
        <motion.button
          onClick={handleDownloadCV}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 border border-blue-400 text-blue-400 rounded-lg flex items-center gap-2 hover:bg-blue-400/10 transition-all"
        >
          <FiDownload /> Download CV
        </motion.button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 text-2xl"
            >
              <FiGithub />
            </motion.a>
            <motion.a 
              href="#" 
              target="_blank"
              whileHover={{ y: -5, scale: 1.1 }}
              className="text-gray-400 hover:text-blue-400 text-2xl"
            >
              <FiLinkedin />
            </motion.a>
          </div>
        </motion.div>
        
        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Main Image */}
            <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full overflow-hidden shadow-2xl shadow-blue-400/20">
              <img 
                src="https://res.cloudinary.com/du8cxwjt8/image/upload/WhatsApp_Image_2025-07-12_at_09.04.30_0e9fdd99_akjnvn"
                alt="Zephania Owuor"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements - properly positioned around the image */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-6 -left-6 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"
            >
              <span className="text-emerald-400 font-medium">React</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -top-6 -right-6 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"
            >
              <span className="text-blue-400 font-medium">Node.js</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [5, -5, 5]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="absolute -top-8 left-8 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"
            >
              <span className="text-blue-400 font-medium">Flask</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [-5, 10, -5],
                rotate: [-3, 3, -3]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
              }}
              className="absolute bottom-8 -right-8 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"
            >
              <span className="text-emerald-400 font-medium">Tailwind</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
              className="absolute top-12 -left-12 bg-gray-800 px-4 py-2 rounded-lg border border-blue-400/30 shadow-lg"
            >
              <span className="text-blue-400 font-medium">Python</span>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [-10, 5, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
              className="absolute -bottom-8 right-8 bg-gray-800 px-4 py-2 rounded-lg border border-emerald-400/30 shadow-lg"
            >
              <span className="text-emerald-400 font-medium">JavaScript</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}