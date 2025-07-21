import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <div className="fixed top-1/3 left-0 z-50 space-y-3">
      <a href="https://github.com/" target="_blank" rel="noreferrer"
        className="flex items-center bg-black text-white px-2 py-2 hover:bg-gray-800 transition-all">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
        className="flex items-center bg-blue-700 text-white px-2 py-2 hover:bg-blue-600 transition-all">
        <FaLinkedin />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer"
        className="flex items-center bg-pink-500 text-white px-2 py-2 hover:bg-pink-400 transition-all">
        <FaInstagram />
      </a>
    </div>
  );
}
