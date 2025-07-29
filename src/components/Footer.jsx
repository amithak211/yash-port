import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white dark:text-yellow-300 mb-4">About Me</h3>
          <p className="text-white dark:text-yellow-300">
            I'm a passionate web developer with skills in React, Tailwind, and Java. I build fast, responsive, and accessible websites.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white dark:text-yellow-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 dark:text-yellow-300">
            <li><a href="#home" className="hover:text-white dark:text-yellow-300">Home</a></li>
            <li><a href="#about" className="hover:text-white dark:text-yellow-300">About</a></li>
            <li><a href="#projects" className="hover:text-white dark:text-yellow-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-white dark:text-yellow-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-white dark:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold text-white dark:text-yellow-300 mb-4">Contact</h3>
          <ul className="text-gray-400 dark:text-yellow-300 space-y-2">
            <li className="flex items-center gap-2">
              <FaEnvelope /> basavarajkl@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 98765 43210
            </li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:text-yellow-300">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:text-yellow-300">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white dark:text-yellow-300">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 dark:text-yellow-300 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Basavaraj KL. All rights reserved.
      </div>
    </footer>
  );
}
