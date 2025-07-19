import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiCodepen } from 'react-icons/fi';
import { FaDev } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Function to handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault();
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/Zephania_Owuor_CV.pdf'; // Path to your CV file in public folder
    link.download = 'Zephania_Owuor_CV.pdf'; // The filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Footer links data
  const footerLinks = [
    {
      title: 'Explore',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Skills', href: '/skills' },
        { name: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        
        { name: 'Resume', href: '#', onClick: handleDownloadCV }, // Modified this line
        { name: 'GitHub Repos', href: 'https://github.com/zeph254?tab=repositories' }
      ]
    },
  ];

  // Social media links
  const socialLinks = [
    { icon: <FiGithub />, name: 'GitHub', href: 'https://github.com/zeph254' },
    { icon: <FiLinkedin />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/zephaniah-ulare-452019347/' },
    { icon: <FiMail />, name: 'Email', href: 'mailto:ularezephaniah@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Zephania Owuor
            </h3>
            <p className="text-gray-400">
              Building digital experiences that matter. Let's create something amazing together.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ y: -3, color: '#60a5fa' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      onClick={link.onClick || undefined} // Add onClick handler if exists
                      whileHover={{ x: 5, color: '#60a5fa' }}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Zephania Owuor. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <motion.a
              href="#"
              whileHover={{ color: '#60a5fa' }}
              className="text-gray-500 hover:text-blue-400 text-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#60a5fa' }}
              className="text-gray-500 hover:text-blue-400 text-sm"
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: '#60a5fa' }}
              className="text-gray-500 hover:text-blue-400 text-sm"
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>

        {/* Back to top button (mobile only) */}
        <motion.div 
          className="md:hidden mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center text-sm text-blue-400 hover:text-emerald-400"
          >
            ↑ Back to top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;